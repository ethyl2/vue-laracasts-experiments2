Vue.component('task', {
  template: '<li><slot></slot></li>'
});

Vue.component('task-list', {
  template: '<ol><task v-for="task in tasks">{{ task.description }}</task></ol>',
  data() {
    return {
      tasks: [
        { description: 'Go shopping', completed: false },
        { description: 'Drink water', completed: true },
        { description: 'Clear out inbox', completed: false }
      ]
    }
  }

});

Vue.component('custom-header', {
  template: `<header>
      <h1 v-text="title"></h1>
      <h2 v-text="subtitle"></h2>
    <header>`,
  data() {
    return {
      title: 'Tasks',
      subtitle: 'What are we doing today?'
    }
  }
})

new Vue({
  el: '#root'
});
