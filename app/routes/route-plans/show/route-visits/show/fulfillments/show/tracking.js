import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from "ember-simple-auth/mixins/authenticated-route-mixin";

export default Route.extend(AuthenticatedRouteMixin, {
  actions: {
    didTransition() {
      this.navigator.requestReverse('route-plans.show.route-visits.show.fulfillments.show');
    }
  }
});
