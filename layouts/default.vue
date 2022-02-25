<template>
  <v-app>
    <div class="app-layout">
      <TheHeader :short="true" />
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
