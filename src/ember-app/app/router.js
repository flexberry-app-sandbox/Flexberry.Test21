import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-test2-room-l');
  this.route('i-i-s-test2-room-e',
  { path: 'i-i-s-test2-room-e/:id' });
  this.route('i-i-s-test2-room-e.new',
  { path: 'i-i-s-test2-room-e/new' });
  this.route('i-i-s-test2-здание-l');
  this.route('i-i-s-test2-здание-e',
  { path: 'i-i-s-test2-здание-e/:id' });
  this.route('i-i-s-test2-здание-e.new',
  { path: 'i-i-s-test2-здание-e/new' });
});

export default Router;
