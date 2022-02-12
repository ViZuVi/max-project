<template>
  <div class="app-layout">
    <TheHeader/>
    <Nuxt />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/navigation/TheHeader";
import TheFooter from "@/components/navigation/TheFooter";

export default {
  name: "default",
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style lang="scss">
</style>