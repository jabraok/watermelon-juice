import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    showRouteVisit(routeVisit) {
      if(routeVisit.get('hasMultipleFulfillments')) {
        this.transitionToRoute('route-plans.show.route-visits.show', routeVisit.get('id'));
      } else {
        this.transitionToRoute('route-plans.show.route-visits.show.fulfillments.show', routeVisit.get('id'), routeVisit.get('defaultFulfillment.id'));
      }
    }
  }
});
