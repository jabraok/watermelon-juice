import Ember from "ember";
import Model from "ember-data/model";
import attr from "ember-data/attr";
import { hasMany } from "ember-data/relationships";
import { computed } from 'ember-decorators/object';

const {
  lt,
  gt
} = Ember.computed;

export default Model.extend({
  date:               attr("string"),
  publishedState:     attr("string"),
  startTime:          attr("number"),
  endTime:            attr("number"),
  dropOffCount:       attr("number", {defaultValue: 0}),
  pickUpCount:        attr("number", {defaultValue: 0}),

  routeVisits:        hasMany("route-visit"),

  hasPickups:         gt("pickUpCount", 0),
  hasDeliveries:      gt("dropOffCount", 0),
  isComplete:         lt("pendingRouteVisits.length", 1),

  @computed("date")
  formattedDate(date) {
    return moment(date, "YYYY-MM-DD").format("dddd, MMM Do - YYYY");
  },

  @computed("routeVisits.@each.{position}")
  sortedRouteVisits(routeVisits) {
    return routeVisits.sortBy("position");
  },

  @computed("routeVisits.@each.{fulfilled}")
  pendingRouteVisits(routeVisits) {
    return routeVisits.filter(rv => rv.get("pending"));
  }
});
