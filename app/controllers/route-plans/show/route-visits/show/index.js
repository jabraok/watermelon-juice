import Ember from "ember";
import { computed } from 'ember-decorators/object';

const {
  notEmpty
} = Ember.computed;

export default Ember.Controller.extend({
  hasTempSignature: notEmpty("tempSignature"),

  @computed("model.fulfillments.@each.fulfilled")
  canSubmit(fulfillments) {
    return fulfillments.every(f => f.get("fulfilled"));
  }
});
