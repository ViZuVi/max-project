import Vue from 'vue';

Vue.directive("filter", {
  bind(el, binding) {
    const inputHandler = function (e) {
      const ch = String.fromCharCode(e.which);
      const re = new RegExp(binding.value);

      if ([37, 39, 8, 0].indexOf(e.which) === -1) {
        if (!ch.match(re)) {
          e.preventDefault();
        }
      }
    };
    el.addEventListener("keypress", inputHandler);
  },
});
