import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";
import {
  make,
  manualSetup
} from "ember-data-factory-guy";
import { currency } from 'watermelon-juice/helpers/currency';

moduleForComponent("rows/credit-note-row", "Integration | Component | rows/credit note row", {
  integration: true,

  beforeEach: function () {
   manualSetup(this.container);
 }
});

test("it shows credit note item information when present", function(assert) {
  const creditNoteItem = make("credit-note-item");

  this.set("creditNoteItem", creditNoteItem);
  this.render(hbs`{{rows/credit-note-row
                    model=creditNoteItem}}`);

  assert.equal($(".name").text(), creditNoteItem.get("name"));
  assert.equal($(".unitPrice").text(), currency([creditNoteItem.get("unitPrice")]));
  assert.equal($(".quantity").text(), creditNoteItem.get("quantity"));
  assert.equal($(".total").text(), currency([creditNoteItem.get("total")]));
});
