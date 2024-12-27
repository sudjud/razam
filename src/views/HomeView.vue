<template>
  <section class="home">
    <div class="container">
      <div class="social-links">
        <SocialMedias />
      </div>
      <div class="content">
        <h1>Дизайн и&nbsp;ремонт на&nbsp;Лазурном Берегу</h1>
      </div>
    </div>
  </section>
  <section class="expert-design">
    <div class="container">
      <div class="image-wrapper">
        <img src="@/assets/images/home/2.jpg" alt="Interior" />
      </div>
      <div class="text-content">
        <h3>{{ $t("home.desc") }}</h3>
        <p>{{ $t("home.fullDesc1") }}</p>
        <p>{{ $t("home.fullDesc2") }}</p>
        <span class="read-more">Читать больше</span>
      </div>
    </div>
  </section>
  <section class="values">
    <div class="container">
      <div class="main">
        <div class="title-block">
          <h2>Наши<br />ценности</h2>
          <div class="arrow-down">
            <span>↓</span>
          </div>
        </div>
        <div class="image-wrapper">
          <img src="@/assets/images/home/3.jpg" alt="Интерьер" />
        </div>
      </div>
      <ValuesArrows />
    </div>
  </section>
</template>

<script setup>
import SocialMedias from "@/components/SocialMedias.vue";
import ValuesArrows from "@/components/ValuesArrows.vue";
</script>

<style lang="sass" scoped>
.home
  position: relative
  height: 100vh
  background: url('/src/assets/images/home/main.jpg') no-repeat center
  background-size: cover
  display: flex
  align-items: center
  justify-content: center
  .container
    position: relative
    flex-direction: column
    text-align: center
    padding-bottom: 100px
    .content
      display: flex
      justify-content: center
      h1
        max-width: 1200px
  .social-links
    position: absolute
    right: 5%
    bottom: 55%

//--------------------------------
.expert-design
  height: 150vh
  display: flex
  justify-content: center
  align-items: center
  .image-wrapper-mob
    display: none
  .container
    align-items: center
    justify-content: space-between
    .image-wrapper
      flex: 1
      margin-right: 50px
      border-radius: 10px
      img
        width: 100%
        height: auto
        border-radius: 10px

.text-content
  flex: 1
  max-width: 705px
  h3
    margin-bottom: 5vw
  p
    color: #636363
  .read-more
    position: relative
    color: #202020
    font-weight: 400
    font-size: 1.25rem
    transition: color 0.3s ease
    margin-top: auto

    &:hover
      color: #0056b3
      cursor: pointer

// -------------------------------------

.values
  background-color: #e8e3df
  padding-bottom: 181px
  .container
    flex-direction: column
    padding-right: 0
    .main
      display: flex
      .image-wrapper
        margin-left: auto
      .title-block
        padding-top: 9%
        transform: translateX(30px)
      img
        max-width: 100%
  .arrow-down
    span
      font-size: 83px
      color: #FFF
      padding-left: 16px

@media (max-width: 992px)
  .expert-design
    background: url("@/assets/images/home/2darken.jpg") no-repeat center center
    .image-wrapper-mob
      display: block
      position: absolute
      margin: 0 auto
      width: 70%
      border-radius: 0
      img
        border-radius: 0
  .image-wrapper
    display: none
  .text-content
    padding: 0 40px
    z-index: 10
    h3, p
      color: white
      text-shadow: 0px 0px 10px black
    .read-more
      color: white

@media (max-width: 768px)
  .home
    .container
      padding: 0 50px
    .social-links
      display: none
  .values
    .container
      padding: 0 20px

@media (max-width: 576px)
  .expert-design
    .container
      padding: 0 10px
</style>
