Vue.component('tabs', {
  template: `
  <div>
    <div class="tabs">
      <ul>
        <li :class="{'is-active': tab.isActive }" v-for="tab in tabs" @click="selectTab(tab)">
          <a :href="tab.href">{{ tab.name }}</a>
        </li>
      </ul>
    </div>
    <div class="tabs-details">
      <slot></slot>
    </div>
  </div>
  `,
  data() {
    return {
      tabs: []
    }
  },
  mounted() {
    console.log(this.$children);
  },
  created() {
    this.tabs = this.$children;
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = (tab.name === selectedTab.name);
      });
    }
  }
});

Vue.component('tab', {
  template: `
    <div v-show="isActive"><slot></slot></div>
  `,
  props: {
    name: { required: true },
    selected: { default: false }
  },
  data() {
    return {
      isActive: false
    }
  },
  computed : {
    href() {
      return '#' + this.name.toLowerCase().replace(/ /g, '-');
    }
  },
  mounted() {
    this.isActive = this.selected
  }
});

new Vue({
  el: '#root',
});
