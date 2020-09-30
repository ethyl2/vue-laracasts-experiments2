Vue.component('coupon', {
  template: `
  <input
    placeholder="Enter your coupon code"
    @blur="onCouponApplied"
  />`,
  methods: {
    onCouponApplied() {
      //alert("Coupon component applied the coupon");
      this.$emit('applied');
    }
  }

});


new Vue ({
  el: "#root",
  data: {
    couponApplied : false
  },
  methods: {
    onCouponApplied() {
      this.couponApplied = true;
      //alert("Coupon was applied");
    }
  }
});
