import Component from '@ember/component';
import { filterBy, gt } from '@ember/object/computed';
import { computed } from 'ember-decorators/object';
import moment from "moment";

export default Component.extend({
  classNames:         ["col", "stretch", "card-1"],
  classNameBindings:  ["shouldDisplay::hidden"],

  validCreditNoteItems: filterBy("model.creditNoteItems", "hasCredit", true),
  shouldDisplay:        gt("total", 0),

  @computed("model.date")
  date(date) {
    return moment(date, "YYYY-MM-DD").format("MM/DD/YYYY");
  },

  @computed("validCreditNoteItems.@each.{total}")
  total(creditNoteItems = []) {
    return creditNoteItems.reduce((acc, cur) => acc + cur.get("total"), 0);
  }

});
