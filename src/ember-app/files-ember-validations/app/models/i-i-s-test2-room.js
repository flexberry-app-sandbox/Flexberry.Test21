import {
  defineNamespace,
  Model as RoomMixin
} from '../mixins/regenerated/models/i-i-s-test2-room';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(RoomMixin, {
});

defineNamespace(Model);

export default Model;
