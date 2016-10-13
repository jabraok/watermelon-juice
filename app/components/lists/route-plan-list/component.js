import Ember from "ember";
import computed from "ember-computed-decorators";

export default Ember.Component.extend({
  @computed("model.@each.{hasRouteVisits}")
  hasRouteVisitsModel(routePlans) {
    return routePlans.filter(rp => rp.get("hasRouteVisits"));
  }
});
