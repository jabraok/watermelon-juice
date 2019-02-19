import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Route.extend(ApplicationRouteMixin, {
  authenticationRoute: 'login',
  routeAfterAuthentication: 'route-plans',
  routeIfAlreadyAuthenticated: 'route-plans',

  remoteSync: service('remote-sync'),

  activate() {
    this.get('remoteSync').start();
  }

});
