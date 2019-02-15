import Controller from '@ember/controller';
import { notEmpty } from '@ember/object/computed';
import { computed } from 'ember-decorators/object';

export default Controller.extend({
  hasTempSignature: notEmpty("tempSignature"),

  @computed("model.fulfillments.@each.fulfilled")
  canSubmit(fulfillments) {
    return fulfillments.every(f => f.get("fulfilled"));
  }
});
