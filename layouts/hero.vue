<template>
  <v-app>
    <div class="app-layout">
      <TheHeader />
      <Nuxt />
      <TheFooter />
    </div>
  </v-app>
</template>

<script>
import TheHeader from "@/components/navigation/TheHeader";
import TheFooter from "@/components/footer/TheFooter";

export default {
  name: "default",
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style lang="scss">
#__layout {
  // TODO: check styles for ayout in docs
  .v-application {
    font-family: "Montserrat", "Arial", sans-serif;
  }
}
.app-layout {
  position: relative;
}
</style>