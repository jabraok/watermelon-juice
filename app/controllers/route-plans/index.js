import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ['date'],
  date: null,

  actions: {
    selectRoutePlan(routePlan) {
      this.transitionToRoute("route-plans.show", routePlan.get("id"));
    }
  }
});
