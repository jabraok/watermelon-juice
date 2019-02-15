import Component from '@ember/component';
import { computed } from 'ember-decorators/object';

export default Component.extend({
  @computed("model.@each.{itemPosition}")
  sortedStockLevels(stockLevels) {
    return stockLevels.sortBy("itemPosition");
  }
});
