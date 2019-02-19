import Controller from '@ember/controller';

export default Controller.extend({
  isEditingSignature: false,
  actions: {
    onSignature(signature, name, signedAt) {
      const fulfillment = this.get('model');
      fulfillment.get('pod').setProperties({signature, name, signedAt});
      fulfillment.set('deliveryState', 'pending');
      fulfillment.set('routeVisit.routeVisitState', 'pending');
    },

    goBack() {
      this.transitionToRoute('route-plans.show.route-visits.show.fulfillments.show');
    }
  }
});
