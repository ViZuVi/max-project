<template>
  <div class="footer-social">
    <a
      href=""
      target="_blank"
      class="footer-social__link"
      v-for="(icon, i) in icons"
      :key="i"
    >
      <AppIcon :symbol="icon" className="footer-social__icon" />
    </a>
  </div>
</template>

<script>
import AppIcon from "~/components/ui/AppIcon";

export default {
  name: "FooterSocial",
  components: {
    AppIcon,
  },
  data() {
    return {
      icons: ["icon_vk"],
    };
  },
};
</script>

<style lang="scss" scoped>
.footer-social {
  margin: 0 auto 42px;
  display: flex;
  justify-content: center;
  position: relative;
  max-width: $max-width;
  z-index: 1;
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 41%;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.08);
    @include adapt-mobile {
      width: 20%;
    }
  }
  &::after {
    left: 0;
  }
  &::before {
    right: 0;
  }
}
.footer-social__link {
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 43px;
  height: 43px;
  border-radius: 3px;
  opacity: 0.5;
  color: #ffffff;
  &:not(:last-child) {
    margin-right: 8px;
  }
  &:hover {
    border: none;
    opacity: 1;
    background-color: #365cde;
  }
}
.footer-social__icon {
  line-height: 0;
  color: inherit;
  svg {
    width: 20px;
    height: 20px;
  }
}
</style>