import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

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

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('RoomE', 'i-i-s-test2-room', {
    id: attr('Id', { index: 0 }),
    здание: belongsTo('i-i-s-test2-здание', 'Здание', {
      адрес: attr('Адрес', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'адрес' })
  });

  modelClass.defineProjection('RoomL', 'i-i-s-test2-room', {
    id: attr('Id', { index: 0 }),
    здание: belongsTo('i-i-s-test2-здание', 'Адрес', {
      адрес: attr('Адрес', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
