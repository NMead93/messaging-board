import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        saveComment() {
            var params = {
                author: this.get('author'),
                body: this.get('body'),
                company: this.get('company'),
                job: this.get('job'),
                date: today(),
                question: this.get('question')
            }
            this.sendAction('saveComment', params);
        }
    }
});

function today() {
  var today = new Date();
  var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return monthNames[today.getMonth()] + " " + today.getDate() + ", " + today.getFullYear();
}
