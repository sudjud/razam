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
      <ValuesArrowsComponent />
    </div>
  </section>
  <section class="statistics">
    <div class="container">
      <div class="statistics-row">
        <div class="stat-item">
          <h2>83+</h2>
          <p>Реализованных проектов</p>
        </div>
        <div class="stat-item">
          <h2>95%</h2>
          <p>Клиентов рекомендуют нас</p>
        </div>
        <div class="stat-item">
          <h2></h2>
          <p></p>
        </div>
      </div>
      <div class="divider"></div>
      <div class="statistics-row">
        <div class="stat-item">
          <h2>12,500</h2>
          <p>Кв м² спроектированных интерьеров</p>
        </div>
        <div class="stat-item">
          <h2>1 цель</h2>
          <p>Создать идеальное пространство</p>
        </div>
        <div class="stat-item">
          <h2>100%</h2>
          <p>Соблюдение сроков</p>
        </div>
      </div>
    </div>
    <div class="circle-r">
      <span>R</span>
    </div>
  </section>
  <section class="services">
    <!-- <div class="slides">
      <div class="slides-count"></div>
      <div class="slides-item"></div>
    </div>
    <div class="media">
      <h1>Наши услуги</h1>
    </div> -->
    <HomeGallery />
  </section>
  <section class="projects">
    <div class="projects-container">
      <h3>Наши проекты</h3>
      <ProjectsSwiperComponent />
    </div>
  </section>
  <section class="reviews">
    <h2>
      Отзывы наших<br />
      клиентов
    </h2>
    <ReviewsSliderComponent />
  </section>
</template>

<script setup>
import HomeGallery from "@/components/Swipers/HomeGallery.vue";
import SocialMedias from "@/components/Tools/SocialMedias.vue";
import ProjectsSwiperComponent from "@/components/Swipers/ProjectsSwiperComponent.vue";
import ValuesArrowsComponent from "@/components/Tools/ValuesArrowsComponent.vue";
import ReviewsSliderComponent from "@/components/Swipers/ReviewsSliderComponent.vue";
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
        color: #636363
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
        transform: translateX(40px)
        h2
          color: #202020
      img
        max-width: 100%
        @media (max-width: 576px)
          display: none
  .arrow-down span
      font-size: 5rem
      color: #FFF
      padding-left: 16px

//---------------------------------------------------

.statistics
  +center-x-y
  flex-direction: column
  text-align: center
  position: relative
  padding: 22rem 0
  .container
    flex-direction: column
    justify-content: center
    padding-left: 0
  .statistics-row
    display: flex
    justify-content: space-between
    align-items: flex-start
    margin-bottom: 2rem
    padding-left: 100px
    @media (max-width: 992px)
      flex-direction: column
      align-items: center
      gap: 1rem
      margin-bottom: 0
  .stat-item
    display: flex
    flex-direction: column
    align-items: left
    flex: 1
    @media (max-width: 992px)
      align-items: center
    h2
      color: #202020
    p
      margin-top: 0.5rem
      margin-bottom: 0
  .divider
    width: 99vw
    height: 1px
    background-color: #e0e0e0
    margin: 2rem 0

.circle-r
  position: absolute
  right: 0
  top: 50%
  transform: translateX(-50px) translateY(-50%)
  display: flex
  justify-content: center
  align-items: center
  width: 11.8rem
  height: 11.8rem
  background-color: #e8e3df
  border-radius: 50%
  font-size: 1.5rem
  font-weight: 500
  color: #202020
  @media (max-width: 992px)
    transform: translateX(-30px) translateY(-90%)
  span
    display: inline-block
    font-size: 4.25rem
    color: #fff
    font-weight: 500
//------------------------------------------------

.projects
  &-container
    flex-direction: column
  h3
    padding-left: 100px
    padding-bottom: 70px
    color: #202020
    @media (max-width: 992px)
      padding-left: 50px
      padding-bottom: 20px

// -----------------------------------------------

.reviews
  h2
    padding-top: 21rem
    color: black
    text-align: right
    padding-right: 80px

// -------- Medias ------------
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
    .container .text-content
      padding: 0 40px
      z-index: 10
      h3, p
        color: white
        text-shadow: 0px 0px 10px black
      .read-more
        color: white

@media (max-width: 768px)
  .home .container .social-links
    display: none
  .values .container
      padding: 0 0 0 20px

@media (max-width: 576px)
  .expert-design .container
      padding: 0 10px
</style>
