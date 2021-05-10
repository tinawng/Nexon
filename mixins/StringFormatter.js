export default {
  methods: {
    formatPrice: function (price) {

      var [full, partial] = price.toFixed(2).toString().split('.');

      full = full.split("").reverse().join("");
      full = full.match(/.{1,3}/g).join(',');
      full = full.split("").reverse().join("");


      return `$${full}.${partial}`;
    }
  }
}