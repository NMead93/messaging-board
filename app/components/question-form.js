import Ember from 'ember';

export default Ember.Component.extend({
    isFormShowing: false,
    actions: {
        formShow: function() {
            this.set('isFormShowing', true);
        },
        formHide: function() {
            this.set('isFormShowing', false);
        },
        saveQuestion() {
            var params = {
                title: this.get('title'),
                body: this.get('body'),
                author: this.get('author'),
                date: today()
            }
            this.set('isFormShowing', false);
            this.sendAction('saveQuestion', params)
        }
    }
});

function today() {
  var today = new Date();
  var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return monthNames[today.getMonth()] + " " + today.getDate() + ", " + today.getFullYear();
}
