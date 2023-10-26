import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISTest2RoomLForm from './forms/i-i-s-test2-room-l';
import IISTest2ЗданиеLForm from './forms/i-i-s-test2-здание-l';
import IISTest2RoomEForm from './forms/i-i-s-test2-room-e';
import IISTest2ЗданиеEForm from './forms/i-i-s-test2-здание-e';
import IISTest2RoomModel from './models/i-i-s-test2-room';
import IISTest2ЗданиеModel from './models/i-i-s-test2-здание';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-test2-room': IISTest2RoomModel,
    'i-i-s-test2-здание': IISTest2ЗданиеModel
  },

  'application-name': 'Test2',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Test2',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Test2',
          title: 'Test2'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        test2: {
          caption: 'Test2',
          title: 'Test2',
          'i-i-s-test2-здание-l': {
            caption: 'Здание',
            title: ''
          },
          'i-i-s-test2-room-l': {
            caption: 'Room',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-test2-room-l': IISTest2RoomLForm,
    'i-i-s-test2-здание-l': IISTest2ЗданиеLForm,
    'i-i-s-test2-room-e': IISTest2RoomEForm,
    'i-i-s-test2-здание-e': IISTest2ЗданиеEForm
  },

});

export default translations;
