<template>
  <section class="company">
    <div class="company__about-wrapper">
      <div class="company__about">
        <router-link to="/company" class="company__section-name"
          >О компании</router-link
        >
        <h3 class="company__title">Интернет-магазин в Москве</h3>
        <p class="company__text">
          Аспро: Максимум — магазин полезных вещей для себя, дома, офиса и дачи.
          Здесь вы найдете товары под свои предпочтения: от аудиотехники и
          одежды до строительных материалов и велосипедов. Работаем с
          проверенными производителями с 2005 года. Доставляем товары точно в
          срок.
        </p>
        <AppButton
          label="Подробности"
          className="transparant company__details-btn"
          @click="$router.push('/company')"
        />
      </div>
    </div>
    <div
      class="company__video-wrapper"
      :style="{ backgroundImage: `url(${videoImg})` }"
    >
      <!-- <video  autoplay controls loop muted>
        <source :src="require('~/assets/media/media-1.mp4')">
      </video> -->
    </div>
  </section>
</template>

<script>
import AppButton from "~/components/ui/AppButton";

export default {
  name: "Company",
  components: {
    AppButton,
  },
  data() {
    return {
      videoImg: require("~/assets/img/video-preview.jpg"),
    };
  },
};
</script>

<style lang="scss" scoped>
.company {
  display: flex;
  // min-height: 59.7%;
.company__details-btn {
  margin-left: 0;
  background-color: #365edc;
  color: #ffffff;
}
}
.company__about-wrapper,
.company__video-wrapper {
  flex-basis: 50%;
  padding-right: 16px;
}
.company__about {
  max-width: 687px;
  margin-left: auto;
  padding: 32px 30px;
  display: flex;
  flex-direction: column;
}
.company__video-wrapper {
  min-width: 50%;
  // padding-top: 59.7%;
}
.company__section-name {
  font-size: 0.667em;
  line-height: 1.3em;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: #999999;
  margin-bottom: 20px;

  &:hover {
    color: #365edc;
  }
}
.company__title {
  margin-bottom: 32px;
  font-weight: normal;
  // TODO: common for h3
  font-size: 1.6em;
  line-height: 1.126em;
}
.company__text {
  margin-bottom: 1.666rem;
  color: #555555;
}
</style>