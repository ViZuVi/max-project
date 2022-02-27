<template>
  <v-app>
    <div class="app-layout">
      <TheHeader :short="true" :isMobile="isMobile" />
      <Nuxt />
      <TheFooter :short="true" />
      <BottomNavPanel v-show="isMobile" />
    </div>
  </v-app>
</template>

<script>
import TheHeader from "@/components/navigation/TheHeader";
import BottomNavPanel from "@/components/navigation/BottomNavPanel";
import TheFooter from "@/components/footer/TheFooter";

export default {
  name: "default",
  components: {
    TheHeader,
    TheFooter,
    BottomNavPanel,
  },
  computed: {
    isMobile() {
      return process.client ? window.innerWidth <= 375 : false;
    },
  },
};
</script>
