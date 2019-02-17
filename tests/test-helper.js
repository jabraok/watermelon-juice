import Application from '../app';
import config from 'watermelon-juice/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

QUnit.config.testTimeout = 6000;

setApplication(Application.create(config.APP));

start();
