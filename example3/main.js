Vue.component('message', {
  template: `
    <article class="message is-primary" v-show="isVisible">
        <div class="message-header">
          <p v-text="title"></p>
          <button @click="hideMessage" class="delete" aria-label="delete"></button>
        </div>
        <div class="message-body">
        {{  body }}
        </div>
      </article>
  `,
  data() {
    return {
      isVisible: true,
      title: 'Hello World',
      body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis
          placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
          <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et
          sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem
          eget, facilisis sodales sem.`
    }
  },
  methods: {
    hideMessage() {
      this.isVisible = false;
    }
  }
});

Vue.component('message-with-props', {
  props: ['title', 'body'],
  template: `
    <article class="message is-success" v-show="isVisible">
        <div class="message-header">
          <p v-text="title"></p>
          <button @click="isVisible = false" class="delete" aria-label="delete"></button>
        </div>
        <div class="message-body">
        {{  body }}
        </div>
      </article>
`,
  data() {
    return {
      isVisible: true
    }
  },
});

Vue.component('modal', {
  template: `
  <div class="modal is-active">
        <div @click="$emit('close')" class="modal-background"></div>
        <div class="modal-content">
          <div class="box">
            <p><slot></slot></p>
          </div>
        </div>
        <button @click="$emit('close')" class="modal-close is-large" aria-label="close"></button>
      </div>
  `
});

new Vue({
  el: '#root',
  data: {
    showModal: false
  }
});
