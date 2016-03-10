import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({ // cont is used for read only variable, so that it is not reassigned accidentally. 
  location: config.locationType
});

Router.map(function() {
  this.route('scientists');
  this.route('programmers');
  this.route('about');
  this.route('contact');
});

export default Router;
