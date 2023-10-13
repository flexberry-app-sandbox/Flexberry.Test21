import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  id: DS.attr('number'),
  здание: DS.belongsTo('i-i-s-test2-здание', { inverse: null, async: false })
});

export let ValidationRules = {
  id: {
    descriptionKey: 'models.i-i-s-test2-room.validations.id.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  здание: {
    descriptionKey: 'models.i-i-s-test2-room.validations.здание.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};
