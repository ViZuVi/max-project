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
  name: "hero",
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>
