<template>
  <div class="product-availability">
    <v-tabs v-model="tab" hide-slider>
      <v-tab
        :ripple="false"
        v-for="item in tabs"
        :key="item.value"
        @change="activeTabComponent = item.component"
      >
        <AppIcon
          :symbol="item.icon"
          className="product-availability__tab-icon"
        />
        <span class="product-availability__tab-title">{{ item.title }}</span>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in tabs" :key="item.value">
        <div v-if="item.icon === 'icon_pin'">
          <div class="product-availability__map">
            <div class="product-availability__contacts">
              <nuxt-link to="/contacts" class="product-availability__address"
                >г. Москва, ул. Большая, 7/10</nuxt-link
              >
              <div class="product-availability__quatity">
                {{ product.availability }}
              </div>
              <div class="product-availability__details">
                <span class="product-availability__label font-upper"
                  >Метро</span
                >
                <span class="product-availability__text">Тест</span>
              </div>
              <div class="product-availability__details">
                <span class="product-availability__label font-upper"
                  >Режим работы</span
                >
                <span class="product-availability__text">8-12</span>
              </div>
              <div class="product-availability__details">
                <span class="product-availability__label font-upper"
                  >Телефон</span
                >
                <a :href="`tel:+71111111111`" class="font-small"
                  >+7 (111) 111-11-11</a
                >
              </div>
              <div class="product-availability__details">
                <span class="product-availability__label font-small"
                  >e-mail</span
                >
                <a
                  :href="`mailto:test@test.ru`"
                  class="font-small product-availability__email"
                >
                  test@test.ru
                </a>
              </div>
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

        <div v-if="item.icon === 'icon_list'">
          <SectionCard>
            <div class="product-availability__card">
              <div class="product-availability__list">
                <nuxt-link
                  to="/contacts"
                  class="product-availability__list-address"
                  >г. Москва, ул. Большая, 7/10
                </nuxt-link>
                <span class="font-small">
                  <span>Телефон:</span>
                  <a
                    :href="`tel:+71111111111`"
                    class="
                      product-availability__text
                      product-availability__text--link
                    "
                    >+7 (111) 111-11-11</a
                  >
                </span>
                <span class="font-small">Режим работы: 8-12</span>
                <span class="font-small">
                  <span>E-mail:</span>
                  <a
                    :href="`mailto:test@test.ru`"
                    class="product-availability__list-email"
                  >
                    test@test.ru
                  </a>
                </span>
              </div>
              <AppAvailabilityBlock :availability="product.availability" />
            </div>
          </SectionCard>
        </div>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import SectionCard from "../SectionCard";
import AppIcon from "~/components/ui/AppIcon";
import AppAvailabilityBlock from "~/components/ui/AppAvailabilityBlock";

export default {
  name: "ProductAvailability",
  components: {
    SectionCard,
    AppIcon,
    AppAvailabilityBlock,
  },
  props: {
    product: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  data() {
    return {
      tab: "",
      tabs: [
        { title: "Списком", icon: "icon_list" },
        { title: "На карте", icon: "icon_pin" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.product-availability {
  .v-slide-group__content {
    justify-content: flex-end !important;
  }
  .v-tab {
    border: 0;
    background-color: transparent;
    padding: 0 0 0 24px;
    font-size: 0.867em;
    line-height: 1.692em;
    text-transform: none;
    letter-spacing: initial;

    &:hover,
    &:focus {
      &::before {
        content: none;
      }
    }
    &--active {
      opacity: 0.5;
    }
  }
}
.product-availability__map {
  display: flex;
  border-bottom: $border;
  @include adapt-mobile {
    flex-direction: column;
  }
}
.product-availability__contacts-wrapper {
  display: flex;
  @include adapt-mobile {
    flex-direction: column;
  }
}
.product-availability__contacts {
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
.product-availability__address {
  font-size: 1.2em;
  line-height: 1.454em;
  color: $text-black-3;
  margin-bottom: 26px;
  &:hover {
    color: #356edc;
  }
}
.product-availability__details {
  margin-bottom: 29px;
}
.product-availability__label {
  display: block;
  margin-bottom: 3px;
  color: $text-black-6;
}
.product-availability__text {
  color: $text-black-3;
}
.map__frame {
  background-color: #ececec;
  @include adapt-mobile {
    width: 100%;
  }
}
.product-availability__list {
  display: flex;
  flex-direction: column;
}
.product-availability__list-email {
  color: $text-link-hover;
}
.product-availability__card {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.product-availability__tab-icon {
  margin-right: 4px;
}
</style>
