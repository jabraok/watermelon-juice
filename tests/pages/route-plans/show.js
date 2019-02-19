import PO from 'ember-cli-page-object';

const { visitable, collection, clickable } = PO;
export default PO.create({
  visit: visitable('/route-plans/:route_plan_id'),

  routeVisits: collection('.debug_rows_route-visit-list-row', {
    click: clickable()
  })
});
