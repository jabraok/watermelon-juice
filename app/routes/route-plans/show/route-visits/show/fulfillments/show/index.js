import { isPresent, isNone } from '@ember/utils';
import Route from '@ember/routing/route';
import { get } from '@ember/object';
import { run } from '@ember/runloop';
import AuthenticatedRouteMixin from "ember-simple-auth/mixins/authenticated-route-mixin";

export default Route.extend(AuthenticatedRouteMixin, {
  async model() {
    const fulfillment = this.modelFor('route-plans.show.route-visits.show.fulfillments.show');
    await this.syncDependencies(fulfillment);

    return fulfillment;
  },

  async syncDependencies(fulfillment) {
    const creditNote = await get(fulfillment, 'creditNote');
    const creditNoteItems = await get(fulfillment, "creditNote.creditNoteItems");
    const stockLevels = await get(fulfillment, "stock.stockLevels");
    const location = await get(fulfillment, "location");

    if(isPresent(stockLevels) && isPresent(creditNote)){
        return Promise.all(stockLevels.map(async sl => {
          const item = await sl.get("item"),
                quantity = sl.get("returns"),
                unitPrice = await location.creditRateForItem(item),
                match = creditNoteItems.find(cni => cni.belongsTo("item").id() === item.get("id"));
          if(isNone(match)) {
            return await run(() => this.store.createRecord('credit-note-item', { creditNote, item, quantity, unitPrice}));
          } else {
            return await run(() => match.setProperties({quantity, unitPrice}));
          }
        }));
    }
  },

  actions: {
    didTransition() {
      const model = this.modelFor("route-plans.show.route-visits.show.fulfillments.show");
      if(model.get("routeVisit.hasMultipleFulfillments")) {
        this.navigator.requestReverse("route-plans.show.route-visits.show");
      } else {
        this.navigator.requestReverse("route-plans.show.index");
      }
    }
  }
});
