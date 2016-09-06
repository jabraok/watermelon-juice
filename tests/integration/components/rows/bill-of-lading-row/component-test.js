import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";
import {
  make,
  manualSetup
} from "ember-data-factory-guy";
import { currency } from 'watermelon-juice/helpers/currency';

moduleForComponent("rows/bill-of-lading-row", "Integration | Component | rows/bill of lading row", {
  integration: true,

  beforeEach: function () {
   manualSetup(this.container);
 }
});

test("it shows order item information when present", function(assert) {
  const orderItem = make("order-item");

  this.set("orderItem", orderItem);
  this.render(hbs`{{rows/bill-of-lading-row
                    model=orderItem}}`);

  assert.equal($(".name").text(), orderItem.get("name"));
  assert.equal($(".unitPrice").text(), currency([orderItem.get("unitPrice")]));
  assert.equal($(".quantity").text(), orderItem.get("quantity"));
  assert.equal($(".total").text(), currency([orderItem.get("total")]));
});
