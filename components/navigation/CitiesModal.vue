<template>
  <div class="cities-modal">
    <div class="cities-modal__header">
      <h2>Выберите город</h2>
      <button class="cities-modal__close-btn" @click="$emit('close-modal')">
        <AppIcon
          symbol="icon_close_large"
          className="cities-modal__close-icon"
        />
      </button>
    </div>
    <div class="cities-modal__input-wrapper">
      <v-autocomplete
        :items="['Челябинск', 'Москва']"
        :value="value"
        :height="48"
        hide-no-data
        :append-icon="null"
        placeholder="Введите название города"
        item-color="#365edc"
      >
        <template #append>
          <AppIcon symbol="icon_search" className="cities-modal__close-icon" />
        </template>
      </v-autocomplete>
      <div class="cities-modal__city-examples">
        <span>Например:</span>
        <button class="cities-modal__city-example" @click="$router.push('#')">Челябинск</button>
        <button class="cities-modal__city-example" @click="$router.push('#')">Москва</button>
      </div>
    </div>
    <div class="cities-modal__city-info-wrapper">
      <div class="cities-modal__city-info">
        <div class="cities-modal__region">
          <span class="cities-modal__region-type">Округ</span>
          <span class="cities-modal__region-name active">Центр</span>
          <span class="cities-modal__city">Урал</span>
        </div>
        <div class="cities-modal__region">
          <span class="cities-modal__region-type">Регион</span>
          <span class="cities-modal__region-name active"
            >Московская область</span
          >
        </div>
        <div class="cities-modal__region">
          <span class="cities-modal__region-type">Город</span>
          <span class="cities-modal__region-name active">Москва</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppIcon from "~/components/ui/AppIcon";

export default {
  name: "CitiesModal",
  components: {
    AppIcon,
  },
  data() {
    return {
      value: ""
    }
  }
};
</script>

<style lang="scss">
.cities-modal {
  border-radius: 3px;
  background-color: #ffffff;
  position: relative;

  .v-input__slot {
    border-radius: 3px;
    font-size: 1em;
    line-height: 40px;
    padding: 0 17px;
    border: $border;
    background-color: #f8f8f8;

    &::before,
    &::after {
      content: none !important;
    }
  }
  .v-input--is-focused {
    .v-input__slot {
      background-color: #ffffff !important;
    }
    .cities-modal__close-icon {
      color: $text-black-3;
    }
  }

  .v-input__append-inner {
    margin-top: 8px;
  }

  .v-autocomplete {
    margin: 0;
    padding: 0;
  }
}
.cities-modal__header {
  padding: 55px 75px 0 60px;
}
.cities-modal__input-wrapper {
  padding: 35px 60px;
}
.cities-modal__close-btn {
  position: absolute;
  top: 5px;
  right: 4px;
  padding: 16px;
  color: #b8b8b8;

  &:hover {
    color: $text-link-hover;
  }
}
.cities-modal__close-icon {
  color: inherit;
  cursor: pointer;
  opacity: 0.5;
}
.cities-modal__city-examples {
  font-size: 13px;
  color: $text-black-5;
}
.cities-modal__city-example {
  color: $text-link-hover;
  text-decoration: underline dotted;
  display: inline-block;
  padding: 5px 0 5px 8px;
  &:hover {
    color: $text-black-3;
  }
}
.cities-modal__city-info-wrapper {
  padding: 3px 60px 60px;
}
.cities-modal__city-info {
  display: flex;
  border-radius: 3px;
  overflow: hidden;
}
.cities-modal__region {
  flex-grow: 1;
  border: $border;
  display: flex;
  flex-direction: column;
  padding: 16px 4px 16px 14px;
  &:nth-child(2) {
    border-right: 0;
    border-left: 0;
  }

  .active {
    font-weight: bold;
  }
}
.cities-modal__region-type {
  font-size: 11px;
  padding: 0 0 5px 10px;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 0.8px;
}
.cities-modal__region-name,
.cities-modal__city {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
  padding: 5px 10px 2px 10px;
}
</style>
