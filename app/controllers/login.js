import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

export default Controller.extend({
  session: service('session'),

  actions: {
    authenticate(user, pass) {
      return this.get('session')
        .authenticate('authenticator:devise', user, pass);
    }
  }
});
