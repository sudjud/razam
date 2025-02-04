<template>
  <main class="services-main">
    <div class="photos">
      <img class="first" src="@/assets/images/services/1.jpg" alt="" />
      <img class="second" src="@/assets/images/services/2.jpg" alt="" />
    </div>
    <div class="content">
      <div class="content-wrapper">
        <p class="design">Дизайн, стиль <br />и комфорт вместе</p>
        <h1>
          Создайте<br />
          уникальный<br />
          <span>/</span> интерьер
        </h1>
        <p class="desc">
          Мы — команда экспертов в области дизайна и ремонта, работающая на
          Лазурном Берегу, включая Ниццу, Канны и Антиб. Наша миссия — создавать
          стильные, функциональные и уникальные пространства, которые отражают
          индивидуальность наших клиентов. Мы предлагаем полный спектр услуг: от
          разработки концепции и создания дизайн-проекта до ремонта под ключ.
          Каждый проект разрабатывается с учётом ваших предпочтений,
          потребностей и особенностей объекта.
        </p>
        <p class="read-more">Читать больше</p>
      </div>
      <div class="razam">
        <img
          class="arrow"
          src="@/assets/images/services/arrow-down.svg"
          alt=""
        />
        <img class="logo" src="@/assets/logo.png" alt="" />
        <p>Создаём проекты для вашего дома</p>
      </div>
    </div>
  </main>
  <section class="services">
    <HomeGallery />
  </section>
  <section class="process">
    <div class="container">
      <h2>Наш процесс работы</h2>
      <div class="process-grid">
        <div class="process-item">
          <div class="process-item-count">01</div>
          <div class="process-item-title">Консультация и обсуждение</div>
          <p>
            Мы начинаем с изучения ваших идей и пожеланий. На встрече мы
            обсуждаем детали проекта, стиль, бюджет и сроки, чтобы понять ваши
            ожидания.
          </p>
        </div>
        <div class="process-item">
          <div class="process-item-count">02</div>
          <div class="process-item-title">Разработка концепции</div>
          <p>
            Создаём эскизы и визуализации, которые отражают уникальность вашего
            будущего пространства. Всё согласовывается, чтобы результат точно
            соответствовал вашим запросам.
          </p>
        </div>
        <div class="process-item">
          <div class="process-item-count">03</div>
          <div class="process-item-title">Подготовка проекта</div>
          <p>
            Готовим полный пакет документации: чертежи, планировки, подбор
            материалов и мебели. Всё, что нужно для реализации.
          </p>
        </div>
        <div class="process-item process-item-moved">
          <div class="process-item-count">04</div>
          <div class="process-item-title">Реализация проекта</div>
          <p>
            Наши специалисты берут на себя контроль всех этапов: от закупки
            материалов до выполнения работ. Мы следим за качеством и соблюдаем
            сроки.
          </p>
        </div>
        <div class="process-item process-item-moved-mob">
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
  <section class="offer">
    <h2>
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
</template>

<script setup>
import HomeGallery from "@/components/Swipers/HomeGallery.vue";
</script>

<style lang="sass" scoped>
.services-main
  +regpad
  padding-top: 15rem
  display: grid
  gap: 1.5rem
  grid-template-columns: 6.5fr 5.5fr
  grid-auto-rows: auto
  @media (max-width: 576px)
    grid-template-columns: 4fr 8fr
  .photos
    display: grid
    grid-template-columns: 4.1fr 2.5fr
    @media (max-width: 576px)
      grid-template-columns: 1fr
    gap: 1.5rem
    img
      width: 100%
    .second
      transform: translateY(550px)
      @media (max-width: 1400px)
        transform: translateY(350px)
      @media (max-width: 1200px)
        transform: translateY(300px)
      @media (max-width: 992px)
        transform: translateY(250px)
      @media (max-width: 768px)
        font-size: 4rem
      @media (max-width: 576px)
        display: none
  .content
    .content-wrapper
      .design
      h1
        color: $font-black
        text-align: right
        @media (max-width: 992px)
          font-size: 7rem
        @media (max-width: 768px)
          font-size: 4rem
        span
          color: $bgc-second
      .desc
        color: $font-grey
      .read-more
        cursor: pointer
        color: $font-black
        margin: 0
        display: inline
    .razam
      display: flex
      flex-direction: column
      align-items: flex-end
      .arrow
        width: 3rem
        margin-bottom: 2rem
      .logo
        width: 10rem
      p
        margin: 0

// ------------------ - servives - -------------------

.services
  margin-top: 15rem

// ----------------- process -------------------------

.process
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

// ------------------------------------------------

.offer
  position: relative
  max-width: calc(100% - 200px)
  margin: 0 auto
  background-color: $bgc-second
  padding: 6.75rem 14.9rem 5.1rem 14.9rem
  margin-top: 15rem
  margin-bottom: 15rem
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
</style>
