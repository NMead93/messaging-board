import Ember from 'ember';

export default Ember.Component.extend({
    isFormShowing: false,
    actions: {
        formShow: function() {
            this.set('isFormShowing', true);
        },
        formHide: function() {
            this.set('isFormShowing', false);
        }
    }
});
