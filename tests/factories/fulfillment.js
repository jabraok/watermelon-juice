import FactoryGuy from "ember-data-factory-guy";

FactoryGuy.define("fulfillment", {
  default: {
    order: FactoryGuy.belongsTo("order")
  },

  traits: {
    withRouteVisit: {
      routeVisit: FactoryGuy.belongsTo("route-visit")
    }
  }
});
