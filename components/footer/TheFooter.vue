<template>
<div>footer</div>
  <!-- <footer class="footer">
    <ViewedBefore v-if="viewed.length && !short" :cards="viewed" />
    <div class="footer__inner">
      <FooterMenu />
      <FooterSocial />
      <FooterCopy />
    </div>
  </footer> -->
</template>

<script>
import ViewedBefore from "./ViewedBefore";
import FooterMenu from "./FooterMenu";
import FooterSocial from "./FooterSocial";
import FooterCopy from "./FooterCopy";

export default {
  name: "TheFooter",
  components: {
    ViewedBefore,
    FooterMenu,
    FooterSocial,
    FooterCopy,
  },
  props: {
    short: {
      type: Boolean,
      required: false,
      default: () => false,
    },
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

<style lang="scss" scoped>
.footer__inner {
  color: #555555;
  background-color: #333333;
  padding: 59px 0 64px;
}
</style>