import DS from 'ember-data';
import config from 'watermelon-juice/config/environment';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import { inject as service } from '@ember/service';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  host: config.apiHost,
  session: service(),
  // defaults
  // identificationAttributeName: 'email'
  // tokenAttributeName: 'token'
  authorize(xhr) {
    let { email, token } = this.get('session.data.authenticated');
    let authData = `Token token="${token}", email="${email}"`;
    xhr.setRequestHeader('Authorization', authData);
  }
});
