import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";
import { currency } from 'watermelon-juice/helpers/currency';

moduleForComponent("rows/bill-of-lading-row", "Integration | Component | rows/bill of lading row", {
  integration: true
});

test("it shows information when present", function(assert) {
  const name = "item name",
        quantity = 20,
        unitPrice = 10,
        total = quantity * unitPrice;

  this.set("name", name);
  this.set("quantity", quantity);
  this.set("unitPrice", unitPrice);
  this.set("total", total);
  this.render(hbs`{{rows/bill-of-lading-row
                    name=name
                    quantity=quantity
                    unitPrice=unitPrice
                    total=total}}`);

  assert.equal($(".name").text(), name);
  assert.equal($(".unitPrice").text(), currency([unitPrice]));
  assert.equal($(".quantity").text(), quantity);
  assert.equal($(".total").text(), currency([total]));
});
