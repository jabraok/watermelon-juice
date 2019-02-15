import Controller from '@ember/controller';
import { computed } from 'ember-decorators/object';

export default Controller.extend({
  @computed("model.stock.stockLevels.@each.{tracked}")
  trackingCompleted(stockLevels) {
    return stockLevels.every(sl => sl.get("tracked"));
  }
});
