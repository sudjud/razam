<template>
  <section class="card">
    <div class="wrapper-image">
      <img :src="previewImg" alt="" />
    </div>
    <p class="category">{{ category }}</p>
    <h4 @click="router.push(`/news/${slug}`)" class="name">{{ name }}</h4>
    <div class="details">
      <p class="by">by {{ by }}</p>
      <p class="date">{{ date }}</p>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from "vue";
import router from "@/router";

defineProps({
  previewImg: String,
  category: String,
  name: String,
  by: String,
  date: String,
  slug: String,
});
</script>

<style lang="sass" scoped>
.card
  display: flex
  flex-direction: column
  border-top: 1px solid $font-grey
  padding-top: 2rem
  & > *
    padding: 0 1rem
  .wrapper-image
    padding: 0
    img
      width: 100%
  .category
    font-size: 1rem
    color: $font-grey
    border-bottom: 1px solid $bgc-second
  .name
    font-size: 2rem
    color: $font-black
    cursor: pointer
    font-weight: 600
    &:hover
      text-decoration: underline
  .details
    display: flex
    flex-direction: row
    justify-content: space-between
    p
      font-size: 1.25rem
      color: $font-grey
</style>
