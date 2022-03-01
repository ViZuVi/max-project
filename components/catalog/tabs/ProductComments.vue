<template>
  <div class="product-comments">
    <div class="product-comments__header">
      <div class="product-comments__title font-large">Отзывы</div>
      <div class="product-comments__rating-wrapper">
        <AppRating
          class="product-comments__rating"
          :showRatingValue="!!product.rating"
          :rating="product.rating"
        />
        <span class="product-comments__rating-empty" v-if="!product.rating">Нет оценок</span>
      </div>
      <AppButton label="Оставить отзыв" class="product-comments__btn" />
    </div>
    <SectionCard>
      <div v-if="product.comments.length" class="product-comments__item">
        <p v-for="comment in product.comments" :key="comment.id">
          {{ comment.text }}
        </p>
      </div>
      <div v-else>
        <span
          >Помогите другим пользователям с выбором - будьте первым, кто
          поделится своим мнением об этом товаре</span
        >
      </div>
    </SectionCard>
  </div>
</template>

<script>
import AppRating from "~/components/ui/AppRating";
import AppButton from "~/components/ui/AppButton";
import SectionCard from "../SectionCard";

export default {
  name: "ProductComments",
  components: {
    AppRating,
    AppButton,
    SectionCard,
  },
  props: {
    product: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.product-comments__header {
  display: flex;
  align-items: center;
  padding-bottom: 16px;
}
.product-comments__title {
  margin-right: auto;
}
.product-comments__rating-wrapper {
  display: flex;
  align-items: center;
  margin-right: 40px;
}
.product-comments__rating-empty {
  font-size: 13px;
  font-weight: bold;
}
.product-comments__rating {
  margin-right: 14px;
}
.product-comments__btn {
  margin: 0;
  padding: 10px 14px 8px;
  background-color: $text-link-hover;
  color: #ffffff;
}
</style>
