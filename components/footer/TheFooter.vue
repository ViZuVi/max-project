<template>
  <ViewedBefore v-if="viewed.length" :cards="viewed" />
</template>

<script>
import ViewedBefore from "./ViewedBefore";

export default {
  name: "TheFooter",
  components: {
    ViewedBefore,
  },
  data() {
    return {
      viewed: [
        {
          id: 1,
          name: "Бомбер XL",
          // TODO: format price
          price: "8 280",
          img: require("~/assets/img/viewed-1.jpg"),
        },
        {
          id: 2,
          name: "Бомбер XL",
          price: "8 280",
          img: require("~/assets/img/viewed-1.jpg"),
        },
        {
          id: 3,
          name: "Бомбер XL",
          price: "8 280",
          img: require("~/assets/img/viewed-1.jpg"),
        },
      ],
    };
  },
};
</script>