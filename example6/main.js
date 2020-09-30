window.Event = new Vue();

// Example of creating your own class instead.
// You would need to use a compiler.

/*
window.Event = new class {
  constructor() {
    this.vue = new Vue();
  }
  fire(event, data=null) {
    this.vue.$emit(event, data);
  }
  listen(event, callback) {
    this.vue.$on(event, callback);
  }
}

*/


Vue.component('coupon', {
  template: `
  <input
    placeholder="Enter your coupon code"
    @blur="onCouponApplied"
    name='couponcode'
    id='couponcode'
    v-model="couponCode"
  />`,
  data() {
    return {
      couponCode: ''
    }
  },
  methods: {
    onCouponApplied() {
      //alert("Coupon component applied the coupon");
      // console.log(this.couponCode);
      Event.$emit('applied', {code: this.couponCode});
      /*
      this.$on('applied', function() {

      })
      */
    }
  }

});


new Vue ({
  el: "#root",
  data: {
    couponApplied : false
  },
  created() {
    Event.$on('applied', (code) => {
      alert(`Coupon applied: ${code.code}`)
    });
  }
});
