import Ember from 'ember';

export default Ember.Component.extend({
    updateShowing: false,
    actions: {
        showUpdate() {
            this.set('updateShowing', true);
        },
        hideUpdate() {
            this.set('updateShowing', false);
        },
        updateQuestion(question) {
            var params = {
                title: this.get('title'),
                author: this.get('author'),
                date: this.get('date'),
                body: this.get('body')
            }
            this.set('updateShowing', false);
            this.sendAction('updateQuestion', question, params);
        }
    }
});
