<template>
  <section class="home">
    <div class="container">
      <div class="social-links">
        <SocialMedias />
      </div>
      <div class="content">
        <h1 class="wow animate__animated animate__fadeInLeft">
          Дизайн и&nbsp;ремонт на&nbsp;Лазурном Берегу
        </h1>
      </div>
    </div>
  </section>
  <section class="expert-design">
    <div class="container">
      <div class="image-wrapper">
        <img
          class="wow animate__animated animate__fadeInLeft"
          src="@/assets/images/home/2.jpg"
          alt="Interior"
        />
      </div>
      <div class="text-content wow animate__animated animate__fadeInRight">
        <h3>
          {{ $t("home.desc") }}
        </h3>
        <p>
          {{ $t("home.fullDesc1") }}
        </p>
        <p>
          {{ $t("home.fullDesc2") }}
        </p>
        <span class="read-more">Читать больше</span>
      </div>
    </div>
  </section>
  <section class="values">
    <div class="container">
      <div class="main">
        <div class="title-block">
          <h2 class="wow animate__animated animate__fadeInLeft">
            Наши<br />ценности
          </h2>
          <div class="arrow-down wow animate__animated animate__fadeInDown">
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
      <div class="statistics-row wow animate__animated animate__fadeInLeft">
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
      <div class="statistics-row wow animate__animated animate__fadeInRight">
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
    <HomeGallery />
  </section>
  <section class="projects">
    <div class="projects-container">
      <h3 class="wow animate__animated animate__fadeInLeft">Наши проекты</h3>
      <ProjectsSwiperComponent />
    </div>
  </section>
  <section class="reviews">
    <h2 class="wow animate__animated animate__fadeInRight">
      Отзывы наших<br />
      клиентов
    </h2>
    <div class="divider"></div>
    <ReviewsSliderComponent />
  </section>
  <section class="offer">
    <h2 class="wow animate__animated animate__fadeIn">
      Готовы создать<span class="arrow"
        ><img src="@/assets/images/home/offer-arrow.svg" alt="" /></span
      ><br />
      <div class="decor">
        ваш идеальный<br />
        проект ?
      </div>
    </h2>
    <p>
      Свяжитесь с нами или оставьте заявку, и мы воплотим ваши идеи в
      реальность.
    </p>
  </section>
  <section class="process">
    <div class="container">
      <h2 class="wow animate__animated animate__fadeInLeft">
        Наш процесс работы
      </h2>
      <div class="process-grid">
        <div class="process-item wow animate__animated animate__fadeInRight">
          <div class="process-item-count">01</div>
          <div class="process-item-title">Консультация и обсуждение</div>
          <p>
            Мы начинаем с изучения ваших идей и пожеланий. На встрече мы
            обсуждаем детали проекта, стиль, бюджет и сроки, чтобы понять ваши
            ожидания.
          </p>
        </div>
        <div
          class="process-item wow animate__animated animate__fadeInRight"
          data-wow-delay="0.1s"
        >
          <div class="process-item-count">02</div>
          <div class="process-item-title">Разработка концепции</div>
          <p>
            Создаём эскизы и визуализации, которые отражают уникальность вашего
            будущего пространства. Всё согласовывается, чтобы результат точно
            соответствовал вашим запросам.
          </p>
        </div>
        <div
          class="process-item wow animate__animated animate__fadeInRight"
          data-wow-delay="0.2s"
        >
          <div class="process-item-count">03</div>
          <div class="process-item-title">Подготовка проекта</div>
          <p>
            Готовим полный пакет документации: чертежи, планировки, подбор
            материалов и мебели. Всё, что нужно для реализации.
          </p>
        </div>
        <div
          class="process-item process-item-moved wow animate__animated animate__fadeInRight"
          data-wow-delay="0.3s"
        >
          <div class="process-item-count">04</div>
          <div class="process-item-title">Реализация проекта</div>
          <p>
            Наши специалисты берут на себя контроль всех этапов: от закупки
            материалов до выполнения работ. Мы следим за качеством и соблюдаем
            сроки.
          </p>
        </div>
        <div
          class="process-item process-item-moved-mob wow animate__animated animate__fadeInRight"
          data-wow-delay="0.4s"
        >
          <div class="process-item-count">05</div>
          <div class="process-item-title">Завершение и сдача объекта</div>
          <p>
            Мы проверяем каждый элемент, чтобы всё соответствовало проекту. Вы
            получаете готовое пространство, полностью готовое к жизни или
            работе.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="faq">
    <h2 class="wow animate__animated animate__fadeInLeft">FAQ</h2>
    <FaqComponent />
  </section>
  <section class="news">
    <h2 class="wow animate__animated animate__fadeInDown">Последние новости</h2>
    <NewsSwiperComponent />
  </section>
</template>

<script setup>
import HomeGallery from "@/components/Swipers/HomeGallery.vue";
import SocialMedias from "@/components/Tools/SocialMedias.vue";
import ProjectsSwiperComponent from "@/components/Swipers/ProjectsSwiperComponent.vue";
import ValuesArrowsComponent from "@/components/Tools/ValuesArrowsComponent.vue";
import ReviewsSliderComponent from "@/components/Swipers/ReviewsSliderComponent.vue";
import FaqComponent from "@/components/Tools/FaqComponent.vue";
import NewsSwiperComponent from "@/components/Swipers/NewsSwiperComponent.vue";
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
        color: $font-grey
      p
        color: $font-grey
      .read-more
        position: relative
        color: $font-black
        font-weight: 400
        font-size: 1.25rem
        transition: color 0.3s ease
        margin-top: auto
        &:hover
          color: #0056b3
          cursor: pointer

// -------------------------------------

.values
  background-color: $bgc-second
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
          color: $font-black
      img
        max-width: 100%
        @media (max-width: 576px)
          display: none
  .arrow-down span
      font-size: 5rem
      color: $font-white
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
      color: $font-black
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
  background-color: $bgc-second
  border-radius: 50%
  font-size: 1.5rem
  font-weight: 500
  color: $font-black
  @media (max-width: 992px)
    transform: translateX(-30px) translateY(-90%)
  span
    display: inline-block
    font-size: 4.25rem
    color: $font-white
    font-weight: 500
//------------------------------------------------

.projects
  &-container
    flex-direction: column
  h3
    padding-left: 100px
    padding-bottom: 70px
    color: $font-black
    @media (max-width: 992px)
      padding-left: 50px
      padding-bottom: 20px

// -----------------------------------------------

.reviews
  margin-bottom: 22rem
  h2
    padding-top: 21rem
    color: black
    text-align: right
    padding-right: 5rem
    @media (max-width: 576px)
      font-size: 5rem
  .divider
    width: calc( 100% - 12.5rem )
    height: 1px
    background-color: $font-grey
    margin: 8.75rem 6.25rem 4.5rem 6.25rem

// -------------------------------------

.offer
  position: relative
  max-width: calc(100% - 200px)
  margin: 0 auto
  background-color: $bgc-second
  padding: 6.75rem 14.9rem 5.1rem 14.9rem
  @media (max-width: 992px)
    max-width: calc(100% - 100px)
    padding: 6.75rem 5rem 5.1rem 5rem
  @media (max-width: 768px)
    max-width: calc(100% - 100px)
  @media (max-width: 576px)
    max-width: calc(100% - 40px)
  h2
    color: $font-black
    line-height: 7.5rem
    @media (max-width: 1500px)
      font-size: 5rem
      line-height: 6rem
    .decor
      margin-left: 12rem
      @media (max-width: 992px)
        margin-left: 0
    .arrow
      margin-left: 40px
      margin-top: 20px
      @media (max-width: 992px)
        display: none
  p
    position: absolute
    bottom: 1rem
    left: 60rem
    text-align: right
    font-size: 1.25rem
    color: $font-grey
    max-width: 17.25rem
    @media (max-width: 1500px)
      left: 50rem
    @media (max-width: 992px)
      display: none

// -------------------------------------------

.process
  margin-top: 22rem
  .container
    flex-direction: column
    @media (max-width: 992px)
      padding: 0 50px
    @media (max-width: 576px)
      padding: 0 30px

  h2
    color: black
    width: 100%
    margin-bottom: 4.5rem

  .process-grid
    display: grid
    grid-template-columns: repeat(3, 1fr)
    grid-template-rows: repeat(2, 1fr)
    align-items: start

  .process-item
    display: flex
    flex-direction: column
    align-items: flex-start
    text-align: left
    &-moved
      grid-column: 2
    &-count
      font-size: 4rem
      color: $bgc-second
      font-weight: 500
      width: 100%
      border: 1px solid $font-grey
      border-bottom: none
      border-right: none
      padding: 1.875rem 0 1rem 3.125rem
    &-title
      font-size: 2rem
      font-weight: 600
      color: $font-black
      padding-left: 3.125rem
      padding-right: 1rem
    p
      font-size: 1.25rem
      color: $font-grey
      padding-left: 3.125rem
      padding-right: 1rem
  @media (max-width: 1500px)
    .process-item
      &-count
        padding: 1rem 0 0.2rem 1.5rem
      &-title
        padding-left: 1.5rem
        padding-right: 0.2rem
      p
        padding-left: 1.5rem
        padding-right: 0.2rem
  @media (max-width: 992px)
    .process-grid
      grid-template-columns: repeat(2, 1fr)
      grid-template-rows: repeat(3, 1fr)
    .process-item-moved-mob
      grid-column: 2
  @media (max-width: 576px)
    .process-grid
      display: flex
      flex-direction: column

// -------------------------------------------

.faq
  display: grid
  grid-template-columns: 1fr 3fr
  margin: 22rem 0
  padding: 0 4rem 0 6rem
  @media (max-width: 992px)
    grid-template-columns: 1fr
    padding: 0 50px
  @media (max-width: 576px)
    grid-template-columns: 1fr
    padding: 0 30px

  h2
    color: $font-black
    font-weight: 500
    @media (max-width: 992px)
      margin-bottom: 4rem

// ---------------------------------------

.news
  margin-bottom: 22rem
  h2
    text-align: center
    color: $font-black
    margin-bottom: 5rem

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
