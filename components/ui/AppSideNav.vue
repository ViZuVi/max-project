<template>
  <div class="app-side-nav">
    <button
      class="app-side-nav__toggle-btn"
      v-if="section"
      @click="showSubMenu = !showSubMenu"
    >
      <span class="app-side-nav__title-wrapper">
        <AppIcon
          v-if="section.icon"
          :symbol="section.icon"
          className="app-side-nav__section-icon"
        />
        <span class="app-side-nav__title">{{ section.title }}</span>
      </span>
      <AppIcon
        symbol="icon_footer_arrow"
        :className="
          showSubMenu
            ? 'app-side-nav__arrow-icon app-side-nav__arrow-icon--active'
            : 'app-side-nav__arrow-icon'
        "
      />
    </button>
    <div class="app-side-nav__list" v-show="showSubMenu || !section">
      <nuxt-link
        class="app-side-nav__link"
        v-for="item in items"
        :key="item.title"
        :to="item.link"
      >
        <span>{{ item.title }}</span>
        <AppIcon
          v-if="item.subSections"
          symbol="icon_dropdown"
          className="app-side-nav__arrow-right-icon"
        />
        <div v-if="item.subSections" class="app-side-nav__subsections">
          <div
            class="app-side-nav__subsection-wrapper"
            v-for="subItem in item.subSections"
            :key="subItem.id"
          >
            <nuxt-link class="app-side-nav__subsection-img-link" to="">
              <AppIcon
                :symbol="subItem.icon"
                className="app-side-nav__subsection-icon"
              />
            </nuxt-link>
            <nuxt-link class="app-side-nav__subsection-link" to="">
              {{ subItem.title }}
            </nuxt-link>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import AppIcon from "~/components/ui/AppIcon";

export default {
  name: "AppSideNav",
  components: {
    AppIcon,
  },
  props: {
    items: {
      type: Array,
      required: true,
      default: () => [],
    },
    section: {
      type: Object,
      required: false,
      default: () => {},
    },
  },
  data() {
    return {
      showSubMenu: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.app-side-nav {
  width: 244px;
  margin-bottom: 26px;
  display: flex;
  flex-direction: column;
}
.app-side-nav__list {
  display: flex;
  flex-direction: column;
  border: $border;
  .app-side-nav__link {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 15px 17px 15px;
    border-radius: 2px;
    font-size: 13px;
    color: $text-black-3;
    &:not(:last-child) {
      border-bottom: $border;
    }
    &:first-child {
      font-weight: bold;
    }
    &:hover {
      color: $text-black-3;
      .app-side-nav__subsections {
        display: flex;
      }
    }
  }
}
.app-side-nav__title-wrapper {
  display: flex;
  align-items: center;
}
.app-side-nav__section-icon {
  margin-right: 7px;
}
.app-side-nav__arrow-icon {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  transform: rotate(180deg);
  transition: transform 0.2s ease;
  &--active {
    transform: none;
  }
}
.app-side-nav__toggle-btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 0.733em;
  line-height: 1.3em;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  padding: 23px 0;
  border-bottom: $border;
  color: $text-black-3;

  &:hover {
    .app-side-nav__arrow-icon {
      background-color: $text-link-hover;
      color: #ffffff;
    }
  }
}
.app-side-nav__arrow-right-icon {
  width: 15px;
  height: 14px;
  transform: rotate(-90deg);
  display: flex;
  align-items: center;
  justify-content: center;
}
.app-side-nav__subsections {
  position: absolute;
  display: none;
  left: 243px;
  background-color: #ffffff;
  top: 0;
  width: 1104px;
  padding: 20px 0;
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 10%);
  z-index: 2;
}
.app-side-nav__subsection-wrapper {
  padding: 5px 30px 35px 24px;
  width: 33%;
  display: flex;
  align-items: flex-start;
}
.app-side-nav__subsection-img-link {
  margin-right: 20px;
}
</style>