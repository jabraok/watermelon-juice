import PO from 'ember-cli-page-object';

const {
  visitable,
  text
} = PO;

export default PO.create({
  visit: visitable('/route-plans/:route_plan_id/route-visits/:route_visit_id/fulfillments/:fulfillment_id/review'),
  invoiceTotal: text(".debug_forms_bill-of-lading debug_rows_total-row. .value"),
  creditTotal: text(".debug_forms_credit-memo .debug_rows_total-row .value")
});
