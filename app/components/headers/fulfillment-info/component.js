import Ember from 'ember';
import { computed } from 'ember-decorators/object';

export default Ember.Component.extend({
  classNames: ["row", "space-between"],

  @computed("model.routeVisit.address.full")
  directionsLink(fullAddress) {
    return `http://maps.apple.com/?daddr=${fullAddress}`
  }
});
