<template>
  <section class="map">
    <div class="map__wrapper">
      <AppSectionTitle
        title="Адреса магазинов"
        allName="Перейти в раздел"
        allLink="/contacts"
      />
      <div class="map__contacts-wrapper">
        <div class="map__contacts">
          <nuxt-link to="/contacts" class="map__address">{{
            contacts.address
          }}</nuxt-link>
          <!-- TODO: rename -->
          <div class="contacts__details">
            <span class="contacts__label">Метро</span>
            <span class="contacts__text">{{ contacts.sub }}</span>
          </div>
          <div class="contacts__details">
            <span class="contacts__label">Режим работы</span>
            <span class="contacts__text">{{ contacts.schedule }}</span>
          </div>
          <div class="contacts__details">
            <span class="contacts__label">Телефон</span>
            <a
              :href="`tel:${contacts.phone}`"
              class="contacts__text contacts__text--link"
              >{{ contacts.phone }}</a
            >
          </div>
          <div class="contacts__details">
            <span class="contacts__label">e-mail</span>
            <a
              :href="`mailto:${contacts.email}`"
              class="contacts__text contacts__text--link"
              >{{ contacts.email }}</a
            >
          </div>
          <AppButton label="Написать сообщение" className="app-button--transparent map__contact-btn" />
        </div>
        <iframe
          class="map__frame"
          src=""
          width="1037"
          height="500"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script>
import AppSectionTitle from "~/components/ui/AppSectionTitle";
import AppButton from "~/components/ui/AppButton";

export default {
  name: "Map",
  components: {
    AppSectionTitle,
    AppButton,
  },
  data() {
    return {
      // TODO: use mask for phone
      contacts: {
        address: "г. Москва, ул. Большая, 7/10",
        sub: "Охотный ряд",
        schedule: "Пн - Пт: 9.00 - 18.00 Сб - Вс: выходные",
        phone: "+7 000 000-00-00",
        email: "info@site.ru",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.map {
  border-bottom: 1px solid #ececec;
}
.map__wrapper {
  @include section-size;
}
.map__contacts-wrapper {
  display: flex;
}
.map__contacts {
  width: 312px;
  height: 500px;
  border: 1px solid #ececec;
  box-shadow: 12px 0 12px -12px rgb(0 0 0 / 20%);
  padding: 29px 34px;
  display: flex;
  flex-direction: column;
}
.map__address {
  font-size: 1.2em;
  line-height: 1.454em;
  color: #333333;
  margin-bottom: 26px;
  &:hover {
    color: #356edc;
  }
}
.contacts__details {
  margin-bottom: 29px;
}
.contacts__label {
  display: block;
  font-size: 0.667em;
  line-height: 1.3em;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  margin-bottom: 3px;
  color: #666666;
}
.contacts__text {
  color: #333333;
  &--link:hover {
    color: #356edc;
  }
}
.map__list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 32px;
  margin-bottom: 32px;
}
.map__frame {
  background-color: #ececec;
}
.map__contact-btn {
  margin-left: 0;
}
</style>
