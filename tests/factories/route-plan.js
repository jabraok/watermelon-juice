import FactoryGuy from 'ember-data-factory-guy';
import {
  make,
  makeList
} from 'ember-data-factory-guy';

import {
  buildPriceTier
} from "watermelon-juice/tests/factories/price-tier";

import {
  buildOrderFromPriceTier
} from "watermelon-juice/tests/factories/order";

FactoryGuy.define("route-plan", {
  default: {
    date: moment().add(1, "days").format("YYYY-MM-DD"),
    routeVisits: FactoryGuy.hasMany("route-visit")
  }
});

const buildRoutePlanWithSalesOrder = ({ routeVisitCount = 1 } = {}) => {
  const items = makeList("item", 10, "product"),
        priceTier = buildPriceTier(items),
        company = make("company", {priceTier}),
        address = make("address"),
        location = make("location", {company, address}),
        routePlan = make("route-plan"),
        routeVisits = makeList("route-visit", routeVisitCount, {routePlan}),
        order = buildOrderFromPriceTier(location),
        creditNote = make("credit-note", {location});

  items.forEach(item => make("item-desire", {item, location, enabled:true}));
  routeVisits.forEach(routeVisit => make("fulfillment", {order, creditNote, routeVisit}));

  return routePlan;
}

export {
  buildRoutePlanWithSalesOrder
}
