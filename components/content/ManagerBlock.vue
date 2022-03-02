<template>
  <div class="manager-block">
    <div class="manager-block__main">
      <nuxt-link :to="`/staff/manager`">
        <img
          class="manager-block__img"
          src="https://img.freepik.com/free-vector/neon-lights-background-theme_52683-44625.jpg?size=626&ext=jpg"
          alt=""
        />
      </nuxt-link>
      <div class="manager-block__info">
        <span class="manager-block__text-title font-upper"> Ваш менеджер </span>
        <nuxt-link class="manager-block__name-link" :to="`/staff/manager`">
          <span class="manager-block__name">Евгений Коротковских</span>
        </nuxt-link>
        <span class="manager-block__phone font-small">+7 (000) 000-00-00</span>
      </div>
    </div>
    <AppButton
      label="Задать вопрос"
      className="manager-block__btn"
    />
  </div>
</template>

<script>
import AppButton from "~/components/ui/AppButton";

export default {
  name: "ManagerBlock",
  components: {
    AppButton,
  },
};
</script>

<style lang="scss" scoped>
.manager-block {
  text-align: center;
  transition: transform ease 0.2s, box-shadow ease 0.2s;
  border: $border;
  border-radius: 2px;
  margin-bottom: 32px;

  &:hover {
    box-shadow: 0 10px 20px 0 rgb(0 0 0 / 10%);
    transform: translateY(-1px);

    .manager-block__btn {
      background-color: $text-link-hover;
      color: #ffffff;
    }
  }
}
.manager-block__main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 15px 0;
}
.manager-block__img {
  border-radius: 50%;
  width: 120px;
  height: 120px;
  margin-bottom: 18px;
}
.manager-block__text-title {
  color: $text-black-9;
  margin-bottom: 5px;
}
.manager-block__info {
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: $border;
}
.manager-block__phone {
  color: $text-black-6;
}
.manager-block__btn {
  width: 100%;
  border: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  padding: 16px 26px 16px;
  color: inherit;
}
</style>