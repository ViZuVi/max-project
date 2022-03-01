<template>
  <v-app>
    <div class="app-layout">
      <TheHeader :short="true" />
      <Nuxt />
      <TheFooter :short="true" />
      <BottomNavPanel v-show="$device.isMobileOrTablet" />
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
};
</script>
