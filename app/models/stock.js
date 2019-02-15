import { isPresent, isNone } from '@ember/utils';
import Model from "ember-data/model";
import attr from "ember-data/attr";
import { belongsTo, hasMany } from "ember-data/relationships";
import { computed } from 'ember-decorators/object';

export default Model.extend({
  takenAt:      attr("date"),
  dayOfWeek:    attr("number"),

  location:     belongsTo("location"),
  fulfillment:  belongsTo("fulfillment"),
  stockLevels:  hasMany("stock-level"),

  @computed("stockLevels.@each.{tracked}")
  tracked(records) {
    return records.every(r => r.get("tracked"));
  },

  @computed("stockLevels.@each.{itemPosition}")
  sortedStockLevels(stockLevels) {
    return stockLevels.sortBy("itemPosition");
  },

  @computed("sortedStockLevels.@each.{itemId}", "location.itemDesires")
  desiredItemStockLevels(stockLevels, itemDesires = []) {
    return stockLevels
      .filter(sl => {
        const match = itemDesires.find(itemDesire => itemDesire.get("item.id") === sl.get("item.id"));
        return isPresent(match);
      });
  },

  @computed("sortedStockLevels.@each.{itemId}", "desiredItemStockLevels")
  extraItemStockLevels(stockLevels, desiredItemStockLevels = []) {
    return stockLevels
      .filter(sl => {
        const match = desiredItemStockLevels.find(desiredItemStockLevel => desiredItemStockLevel.get("item.id") === sl.get("item.id"));
        return isNone(match);
      });
  }

});
