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
          <div class="map__contacts-details">
            <span class="map__contacts-label font-upper">Метро</span>
            <span class="map__contacts-text">{{ contacts.sub }}</span>
          </div>
          <div class="map__contacts-details">
            <span class="map__contacts-label font-upper">Режим работы</span>
            <span class="map__contacts-text">{{ contacts.schedule }}</span>
          </div>
          <div class="map__contacts-details">
            <span class="map__contacts-label font-upper">Телефон</span>
            <a
              :href="`tel:${contacts.phone}`"
              class="map__contacts-text map__contacts-text--link"
              >{{ contacts.phone }}</a
            >
          </div>
          <div class="map__contacts-details">
            <span class="map__contacts-label font-upper">e-mail</span>
            <a
              :href="`mailto:${contacts.email}`"
              class="map__contacts-text map__contacts-text--link"
              >{{ contacts.email }}</a
            >
          </div>
          <AppButton
            label="Написать сообщение"
            className="map__contact-btn"
          />
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
      // TODO: static - change
      contacts: {
        address: "г. Москва, ул. Большая, 7/10",
        sub: "Охотный ряд",
        schedule: "Пн - Пт: 9.00 - 18.00 Сб - Вс: выходные",
        phone: "+70000000000",
        email: "info@site.ru",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.map {
  border-bottom: $border;
}
.map__wrapper {
  @include section-size;
}
.map__contacts-wrapper {
  display: flex;
  @include adapt-mobile {
    flex-direction: column;
  }
}
.map__contacts {
  width: 312px;
  height: 500px;
  border: $border;
  box-shadow: 12px 0 12px -12px rgb(0 0 0 / 20%);
  padding: 29px 34px;
  display: flex;
  flex-direction: column;

  @include adapt-mobile {
    width: 100%;
    box-shadow: unset;
  }
}
.map__address {
  font-size: 1.2em;
  line-height: 1.454em;
  color: $text-black-3;
  margin-bottom: 26px;
  &:hover {
    color: #356edc;
  }
}
.map__contacts-details {
  margin-bottom: 29px;
}
.map__contacts-label {
  display: block;
  margin-bottom: 3px;
  color: $text-black-6;
}
.map__contacts-text {
  color: $text-black-3;
  &--link:hover {
    color: #356edc;
  }
}
.map__frame {
  background-color: #ececec;
  @include adapt-mobile {
    width: 100%;
  }
}
.map__contact-btn {
  margin-left: 0;
}
</style>
