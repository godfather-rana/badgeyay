import DS from 'ember-data';
import ENV from '../config/environment';

const { JSONAPIAdapter } = DS;
const { APP } = ENV;

export default JSONAPIAdapter.extend({
  host        : APP.resetFunction,
  pathForType : () => {
    return '';
  }
});
