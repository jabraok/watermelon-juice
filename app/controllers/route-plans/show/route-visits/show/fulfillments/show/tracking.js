import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    markAllCompleted() {
      const fulfillment = this.get('model');
      fulfillment.get('stock.stockLevels')
        .forEach(sl => sl.set('trackingState', 'tracked'));

      fulfillment.get('stock').setProperties({takenAt:moment().toDate(), dayOfWeek:moment().days()});

      this.transitionToRoute('route-plans.show.route-visits.show.fulfillments.show');
    }
  }
});
