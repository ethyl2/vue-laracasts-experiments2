Vue.component('coupon-box', {
  template: `
    <div>
    <h3>{{ message }}</h3>
    <label for="coupon-input">Coupon:</label>
    <input type="text" :value="coupon" name="coupon-input" id="coupon-input" @input="updateCode($event.target.value)" ref="input"/>
    </div>
  `,
  data() {
    return {
      invalidCouponCodes : ['ALLFREE', '100PERCENTOFF', 'LOTTERYWINNER'],
      validCouponCodes : ['NOTAX' , 'MOMSDAY', 'DADSDAY', 'TACOTUESDAY'],
      coupon: '',
      message: 'Please enter a valid coupon code.'
    }
  },
  methods: {
    updateCode(newCode) {
      // sanitation, validation, etc... then
      if (this.invalidCouponCodes.includes(newCode)) {
        this.message = `The coupon ${newCode} is no longer valid. Sorry!`
        this.$refs.input.value = newCode = '';
      } else if (this.validCouponCodes.includes(newCode)) {
        this.message = `The coupon ${newCode} has been applied! Congratulations!`;
        this.$refs.input.value = newCode = '';
      }
      this.$emit('input', newCode);
    }
  }
});

new Vue({
  el: '#root',
  data: {
    coupon: 'FREEBIE'
  }
})
