import { gt, alias } from '@ember/object/computed';
import Model from "ember-data/model";
import attr from "ember-data/attr";
import { belongsTo } from "ember-data/relationships";
import { computed } from 'ember-decorators/object';
import { round } from 'watermelon-juice/utils/math';

export default Model.extend({
  quantity:     attr("number", {defaultValue: 0}),
  unitPrice:    attr("number", {defaultValue: 0}),
  description:  attr("string"),

  creditNote:   belongsTo("credit-note"),
  item:         belongsTo("item"),

  hasCredit:    gt("total", 0),
  name:         alias("item.name"),

  @computed("unitPrice")
  roundedUnitPrice(unitPrice) {
    return round(unitPrice);
  },

  @computed("quantity", "roundedUnitPrice")
  total(quantity, roundedUnitPrice) {
    return quantity * roundedUnitPrice;
  }
});
