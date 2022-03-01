<template>
  <footer class="footer">
    <div class="footer__inner">
      <FooterMenu />
      <FooterSocial />
      <FooterCopy />
    </div>
  </footer>
</template>

<script>
import FooterMenu from "./FooterMenu";
import FooterSocial from "./FooterSocial";
import FooterCopy from "./FooterCopy";

export default {
  name: "TheFooter",
  components: {
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
};
</script>

<style lang="scss" scoped>
.footer {
  @include adapt-mobile {
    padding-bottom: 68px;
  }
}
.footer__inner {
  color: $text-black-5;
  background-color: $text-black-3;
  padding: 59px 0 64px;
  @include adapt-mobile {
    padding-top: 0;
  }
}
</style>