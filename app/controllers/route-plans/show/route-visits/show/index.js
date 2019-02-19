import Controller from '@ember/controller';
import { notEmpty } from '@ember/object/computed';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  remoteSync: service(),

  hasTempSignature: notEmpty("tempSignature"),

  canSubmit: computed("model.fulfillments.@each.fulfilled", function() {
    const fulfillments = this.get("model.fulfillments");
    return fulfillments.every(f => f.get("fulfilled"));
  }),

  actions: {
    showFulfillment(fulfillment) {
      this.transitionToRoute('route-plans.show.route-visits.show.fulfillments.show', fulfillment.get('id'));
    },

    async submitRouteVisit(routeVisit) {
      routeVisit.set("routeVisitState", "fulfilled");
      routeVisit.set("completedAt", moment().toDate());

      await this.get("remoteSync").enqueue(routeVisit);

      this.transitionToRoute('route-plans.show');
    }
  }
});
