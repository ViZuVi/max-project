<template>
  <div class="page-left">
    <slot name="navigation"></slot>
    <nuxt-link :to="'/link'">
      <img
        class="page-left__banner"
        src="https://img.freepik.com/free-vector/neon-lights-background-theme_52683-44625.jpg?size=626&ext=jpg"
        alt=""
      />
    </nuxt-link>
    <SubscribeBlock />
    <ActionsBlock />
    <ManagerBlock />
  </div>
</template>

<script>
import SubscribeBlock from "~/components/content/SubscribeBlock";
import ActionsBlock from "~/components/content/ActionsBlock";
import ManagerBlock from "~/components/content/ManagerBlock";

export default {
  name: "PageLeft",
  components: {
    SubscribeBlock,
    ActionsBlock,
    ManagerBlock,
  },
};
</script>

<style lang="scss" scoped>
.page-left {
  width: 244px;
  @media (max-width: $tablet-width) {
    display: none;
  }
}
.page-left__banner {
  margin-bottom: 32px;
}
</style>
