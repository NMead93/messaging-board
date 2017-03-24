import DS from 'ember-data';

export default DS.Model.extend({
    author: DS.attr(),
    job: DS.attr(),
    company: DS.attr()
    body: DS.attr(),
    date: DS.attr(),
    question: DS.belongsTo('answer', {async: true})
});
