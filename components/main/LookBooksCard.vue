<template>
  <div class="lookbook-card">
    <div class="lookbook-card__wrapper">
      <div class="lookbook-card__item">
        <nuxt-link class="lookbook-card__link" :to="`/lookbooks/${card.id}`">
          <img class="lookbook-card__img" :src="card.img" :alt="card.title" />
        </nuxt-link>
        <div class="lookbook-card__info">
          <span class="lookbook-card__person"
            >{{ card.person }} &ndash; {{ card.type }}</span
          >
          <nuxt-link
            :to="`/lookbooks/${card.id}`"
            class="lookbook-card__title"
            >{{ card.title }}</nuxt-link
          >
          <button
            class="lookbook-card__info-toggle font-small"
            @click="infoVisible = !infoVisible"
          >
            {{ !infoVisible ? "Посмотреть описание" : "Скрыть описание" }}
          </button>
          <p class="lookbook-card__description" v-show="infoVisible">{{ card.description }}</p>
          <div class="lookbook-card__props-list" v-show="infoVisible">
            <div
              class="lookbook-card__props-item"
              v-for="prop in card.props"
              :key="prop.id"
            >
              <span class="lookbook-card__props-type"
                >{{ prop.type }} &ndash;
              </span>
              <span class="lookbook-card__props-value">{{ prop.value }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="lookbook-card__items-goods">
        <div
          class="lookbook-card__items-block"
          v-for="item in card.items"
          :key="item.id"
        >
          <nuxt-link
            class="lookbook-card__items-img-link"
            :to="`/catalog/${item.id}`"
          >
            <img
              class="lookbook-card__items-img"
              :src="item.src"
              :alt="item.title"
            />
          </nuxt-link>
          <div class="lookbook-card__items-info">
            <nuxt-link
              class="lookbook-card__items-info-title"
              :to="`/catalog/${item.id}`"
              >{{ item.title }}</nuxt-link
            >
            <span class="lookbook-card__items-info-price">{{
              item.price
            }}</span>
          </div>
        </div>
      </div>
    </div>
    <nuxt-link class="lookbook-card__details" :to="`lookbooks/${card.id}`">
      <span>Подробнее об образе</span>
      <AppIcon
        symbol="icon_next_arrow"
        className="lookbook-card__details-icon"
      />
    </nuxt-link>
  </div>
</template>

<script>
import AppIcon from "~/components/ui/AppIcon";

export default {
  name: "LookBooksCard",
  components: {
    AppIcon,
  },
  props: {
    card: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  data() {
    return {
      infoVisible: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.lookbook-card {
  display: flex;
  flex-direction: column;
}
.lookbook-card__item {
  display: flex;
  padding: 3.266rem;
  flex-basis: 75%;
  @include adapt-mobile {
    flex-direction: column;
    width: 100%;
    padding: 2rem;
  }
}
.lookbook-card__wrapper {
  display: flex;
  border: 1px solid #ececec;
  @include adapt-mobile {
    flex-direction: column;
  }
}
.lookbook-card__link {
  flex-basis: 50%;
  @include adapt-mobile {
    margin-bottom: 2rem;
  }
}
.lookbook-card__img {
  display: block;
  margin: 0 auto;
}
.lookbook-card__info {
  flex-basis: 50%;
  padding: 0 3.266rem;
  @include adapt-mobile {
    width: 100%;
    padding: 0;
  }
}
.lookbook-card__items-goods {
  flex-basis: 25%;
  border-left: 1px solid #ececec;
}
.lookbook-card__person {
  display: block;
  font-size: 0.667em;
  line-height: 1.3em;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  // TODO: upper info to mixins/vars
  margin-bottom: 0.666rem;
  color: #999;
}
.lookbook-card__title {
  display: block;
  font-size: 1.3333em;
  line-height: 1.4em;
  margin-bottom: 1.733rem;
  color: #333333;
  &:hover {
    color: #356edc;
  }
}
.lookbook-card__description {
  margin-bottom: 1.066rem;
}
.lookbook-card__props-item {
  font-size: 0.867em;
  line-height: 1.692em;
  margin-bottom: 0.333rem;
}
.lookbook-card__props-type {
  color: #999999;
}
.lookbook-card__items-block {
  padding: 13px 19px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ececec;
  &:hover {
    .lookbook-card__items-img {
      opacity: 0.7;
    }
    .lookbook-card__items-info-title {
      color: #356edc;
    }
  }
  @include adapt-mobile {
    border-bottom: 0;
    border-top: 1px solid #ececec;
  }
}
.lookbook-card__items-img-link {
  display: block;
  flex-shrink: 0;
}
.lookbook-card__items-img {
  // TODO: add hover :before; mixin/class hover shine?
  display: block;
  width: 80px;
  height: 80px;
  transition: opacity 0.3s;
}
.lookbook-card__items-info {
  display: flex;
  flex-direction: column;
  padding-left: 9px;
}
.lookbook-card__items-info-title {
  font-size: 0.867em;
  line-height: 1.385em;
  color: #333333;
  // TODO: hover for nuxt-link to common?
  &:hover {
    color: #356edc;
  }
}
.lookbook-card__items-info-price {
  font-weight: bold;
  font-size: 0.933em;
}
.lookbook-card__details {
  border: 1px solid #ececec;
  border-top: 0;
  padding: 16px 26px;
  text-align: center;
  background-color: #fafafa;
  font-size: 0.7333em;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  // TODO: vars
  color: #333333;
  transition: background-color 0.3s ease;
  &:hover {
    color: #ffffff;
    border-color: #356edc;
    background-color: #356edc;
  }
}
.lookbook-card__details-icon {
  margin-left: 15px;
}
.lookbook-card__info-toggle {
  display: none;
  border-bottom: 1px dotted;
  margin-bottom: 24px;
  @include adapt-mobile {
    display: block;
  }
}
</style>
