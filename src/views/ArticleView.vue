<template>
  <main class="article">
    <div class="left">
      <p>Главная / Блог / {{ article.name }}</p>
      <h4>{{ article.category }}</h4>
      <div class="search">
        <input type="text" class="search" placeholder="Поиск" />
        <div class="loupe">
          <img src="@/assets/images/blog/loupe.svg" alt="" />
        </div>
      </div>
    </div>
    <div class="right">
      <h1>
        <span class="reveal-bb">{{ article.name }}</span>
        <div class="divider"></div>
        <div class="details">
          <p>By {{ article.by }}</p>
          <p>{{ article.date }}</p>
        </div>
      </h1>
    </div>
  </main>
  <article>
    <aside>
      <div class="categories">
        <h4>Категории</h4>
        <ul>
          <li>Дизайн интерьера</li>
          <li>Архитектура</li>
          <li>Строительство</li>
          <li>Ремонт</li>
          <li>Ландшафтный дизайн</li>
        </ul>
      </div>
      <div class="last-articles">
        <h4>Последние записи</h4>
        <div></div>
      </div>
      <div class="popular-tags">
        <h4>Популярные теги</h4>
        <div></div>
      </div>
    </aside>
    <section class="content">
      <component :is="currentArticleComponent" />
      <div class="article-tags">
        <div></div>
      </div>
      <!-- <div class="share-buttons">
        <link rel="stylesheet" href="#" />
        <link rel="stylesheet" href="#" />
        <link rel="stylesheet" href="#" />
        <link rel="stylesheet" href="#" />
      </div> -->
    </section>
  </article>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { blog } from "@/data/blog.js";
import LightsArticleComponent from "@/components/Blog/LightsArticleComponent.vue";

const route = useRoute();
const article = ref(blog.find((p) => p.slug === route.params.slug));

const articleComponents = {
  lights: LightsArticleComponent,
};

const currentArticleComponent = computed(
  () => articleComponents[article.value.slug] || null
);
</script>

<style lang="sass">
main.article
  +regpad
  padding-top: 10rem
  display: grid
  grid-template-columns: 4fr 8fr
  .left
    display: flex
    flex-direction: column
    p
      font-size: 1rem
    h4
      color: $font-black
    div.search
      display: flex
      margin-top: auto
      input.search
        background-color: transparent
        border: 1px solid $font-grey
        border-right: none
        color: $font-grey
        font-size: 1rem
        padding: 10px 25px
        border-radius: 50px 0 0 50px
        &:focus
          outline: none
      div.loupe
        display: flex
        align-items: center
        justify-content: center
        background-color: transparent
        border: 1px solid $font-grey
        border-left: none
        padding-right: 25px
        border-radius: 0 50px 50px 0
  .right
    .divider
      width: 100%
      height: 1px
      background-color: $font-grey
      margin-top: 4rem
      margin-bottom: 1rem
    .details
      display: flex
      max-width: 300px
      justify-content: space-between
      p
        margin: 0

article
  +regpad
  display: grid
  grid-template-columns: 4fr 8fr
  margin-top: 70px
  h4
    color: $font-black
    margin-bottom: 2.5rem
    margin-top: 4rem
  aside
    display: flex
    flex-direction: column
    padding-right: 7.5rem
    .categories
      ul
        list-style: none
        padding-left: 0
        li
          font-size: 1.25rem
          color: $font-grey
          padding: 1rem 0
          border-top: 1px solid $font-grey
    .last-articles
      ul
        list-style: none
        padding-left: 0
        li
          padding: 1rem 0
          border-bottom: 1px solid $font-grey
          p
            font-size: 1rem
            margin: 0
            color: $font-grey
          h5
            color: $font-black
            font-size: 1.5rem
          .details
            display: flex
            justify-content: space-between
            p
              font-size: 0.8rem
              color: $font-grey
  .popular-tags
    ul
      display: flex
      flex-direction: row
      list-style: none
      padding-left: 0
      li
        color: $font-grey
        font-size: 1rem
        padding: 5px 15px
        border: 1px solid $font-grey
        border-radius: 5px
</style>
