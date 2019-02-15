import Component from '@ember/component';
import { set } from '@ember/object';
import { computed } from 'ember-decorators/object';

export default Component.extend({
  classNames: ["row", "stretch", "center"],

  @computed("quantity", "unitPrice")
  total(quantity, unitPrice) {
    return quantity * unitPrice;
  },

  @computed('index')
  formattedIndex(index) {
    return S(index + 1).padLeft(2, "0").s;
  },

  actions: {
    cleanNumericField(key, e) {
      const parsed = parseFloat(e.target.value);
      const cleaned = _.isNaN(parsed) ? 0 : parsed;
      set(this, key, cleaned);
    }
  }
});
