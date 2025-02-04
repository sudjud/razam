<template>
  <main class="main">
    <h1 class="bounceInUp">
      <div class="first">
        Наши <br />
        проекты<span class="slash">/</span>
      </div>
      <div class="second">
        <br />
        ваше <br />
        вдохновение
      </div>
    </h1>
    <div class="desc">
      <p>Работаем с 2010</p>
      <h4>Архитектура</h4>
      <h4>Интерьеры</h4>
      <h4>Ремонт под ключ</h4>
    </div>
  </main>
  <section class="image">
    <img src="@/assets/images/portfolio/1.jpg" alt="" />
  </section>
  <section class="portfolio">
    <h2>Портфолио</h2>
    <TabsPortfolioComponent />
  </section>
</template>

<script setup>
import TabsPortfolioComponent from "@/components/Blocks/TabsPortfolioComponent.vue";
</script>

<style lang="sass" scoped>
.main
  +regpad
  display: grid
  grid-template-columns: 8fr 2fr
  padding-top: 12rem
  h1
    color: $font-black
    display: grid
    grid-template-columns: 4fr 6fr
    @media (max-width: 1400px)
      font-size: 5.7rem
    @media (max-width: 992px)
      font-size: 5rem
    @media (max-width: 768px)
      font-size: 4.5rem
    @media (max-width: 576px)
      grid-template-columns: 1fr
    .slash
      color: $bgc-second
      margin-left: 1rem
    .second
      display: inline
    br
      @media (max-width: 576px)
        display: none
  .desc
    display: flex
    flex-direction: column
    text-align: right
    padding-top: 1rem
    p
      color: $font-grey
      margin: 0
      text-align: right
      @media (max-width: 576px)
        margin-bottom: 4px
    h4
      color: $font-black
      text-align: right
      @media (max-width: 576px)
        font-size: 1.5rem

// ---------------------image-------------------

.image
  margin-top: 4rem
  img
    width: 100%

// -------------------- portfolio -------------------

.portfolio
  margin-top: 10rem
  +regpad
  h2
    color: $font-black
    text-align: right
    margin-bottom: 5rem
</style>
