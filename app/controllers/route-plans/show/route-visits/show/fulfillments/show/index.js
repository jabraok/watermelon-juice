import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { run } from '@ember/runloop';
import { inject as service } from '@ember/service';

export default Controller.extend({
  remoteSync: service(),

  trackingCompleted: computed("model.stock.stockLevels.@each.{tracked}", function() {
    const stockLevels = this.get("model.stock.stockLevels");
    return stockLevels.every(sl => sl.get("tracked"));
  }),

  actions: {
    track() {
      this.transitionToRoute("route-plans.show.route-visits.show.fulfillments.show.tracking");
    },

    review() {
      this.transitionToRoute("route-plans.show.route-visits.show.fulfillments.show.review");
    },

    notes() {
      this.transitionToRoute("route-plans.show.route-visits.show.fulfillments.show.notes");
    },

    async submit(fulfillment) {
      const routeVisit = await fulfillment.get("routeVisit");

      fulfillment.set("deliveryState", "fulfilled");

      if(routeVisit.get("hasMultipleFulfillments")) {
        this.transitionToRoute("route-plans.show.route-visits.show");
      } else {
        routeVisit.set("routeVisitState", "fulfilled");
        routeVisit.set("completedAt", moment().toDate());

        run(() => {
          this.get("remoteSync").enqueue(routeVisit);
        });

        this.transitionToRoute("route-plans.show");
      }
    }
  }
});
