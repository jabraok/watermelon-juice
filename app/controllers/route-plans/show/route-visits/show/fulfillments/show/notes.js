import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    goBack() {
      this.transitionToRoute('route-plans.show.route-visits.show.fulfillments.show');
    }
  }
});
