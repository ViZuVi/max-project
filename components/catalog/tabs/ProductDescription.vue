<template>
  <div class="product-description">
    <div>{{ product.description }}</div>
    <div class="product-description__docs">
      <div class="product-description__title font-large">Документы</div>
      <SectionCard>
        <div
          class="product-description__doc"
          v-for="doc in product.documents"
          :key="doc.id"
        >
          <AppIcon symbol="icon_pdf" className="product-description__doc-icon" />
          <span class="product-description__doc-wrapper">
            <nuxt-link :to="doc.link" class="product-description__doc-title">{{
              doc.title
            }}</nuxt-link>
            <span class="product-description__doc-size font-small">{{ doc.size }}</span>
          </span>
        </div>
      </SectionCard>
    </div>
  </div>
</template>

<script>
import SectionCard from "../SectionCard";
import AppIcon from "~/components/ui/AppIcon";

export default {
  name: "ProductDescription",
  components: {
    SectionCard,
    AppIcon,
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
.product-description__docs {
  margin: 3.133rem 0 3.133rem;
}
.product-description__title {
  padding-bottom: 1.933rem;
}
.product-description__doc {
  display: flex;
}
.product-description__doc-icon {
  margin-right: 20px;
}
.product-description__doc-wrapper {
  display: flex;
  flex-direction: column;
}
.product-description__doc-size {
  color: $text-black-9;
}
</style>