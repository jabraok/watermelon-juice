import Ember from 'ember';
import LocalForageInitializer from 'watermelon-juice/initializers/local-forage';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | local forage', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  LocalForageInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
