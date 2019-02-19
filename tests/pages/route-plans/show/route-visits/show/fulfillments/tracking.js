import PO from 'ember-cli-page-object';

const {
  visitable,
  fillable,
  clickable,
  collection
} = PO;

export default PO.create({
  visit: visitable('/route-plans/:route_plan_id/route-visits/:route_visit_id/fulfillments/:fulfillment_id/tracking'),

  markTracked: clickable(".markTracked"),

  stockLevels: collection('.debug_ui_item-tracker', {
    setStarting: fillable(".startingInput"),
    setReturns: fillable(".returnsInput")
  })
});
