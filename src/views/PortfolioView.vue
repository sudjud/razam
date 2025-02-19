<template>
  <main class="main">
    <h1>
      <div class="first">
        <span class="wow reveal-bb">Наши <br />проекты</span
        ><span class="slash">/</span>
      </div>
      <div class="second">
        <br />
        <span class="wow reveal-bb">ваше <br />вдохновение</span>
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
    <h2><span class="wow reveal-bb">Портфолио</span></h2>
    <TabsPortfolioComponent />
  </section>
  <section class="process">
    <h2>
      <span class="wow reveal-bb">Наш процесс работы</span>
    </h2>
    <div class="process-columns">
      <div class="process-column">
        <div class="numbers-item wow animate__animated animate__fadeInLeft">
          <div class="number">
            01
            <span class="number-arrow"
              ><img src="@/assets/images/portfolio/process-arrow.svg" alt=""
            /></span>
          </div>
          <h4>Консультация и обсуждение</h4>
          <p>
            Мы начинаем с изучения ваших идей и пожеланий. На встрече мы
            обсуждаем детали проекта, стиль, бюджет и сроки, чтобы понять ваши
            ожидания.
          </p>
        </div>
      </div>
      <div class="process-column">
        <div
          class="numbers-item wow animate__animated animate__fadeInLeft"
          data-wow-delay="0.2s"
        >
          <div class="number">
            02
            <span class="number-arrow"
              ><img src="@/assets/images/portfolio/process-arrow.svg" alt=""
            /></span>
          </div>
          <h4>Разработка концепции</h4>
          <p>
            Создаём эскизы и визуализации, которые отражают уникальность вашего
            будущего пространства. Всё согласовывается, чтобы результат точно
            соответствовал вашим запросам.
          </p>
        </div>
        <div
          class="numbers-item wow animate__animated animate__fadeInLeft"
          data-wow-delay="0.4s"
        >
          <div class="number">
            04
            <span class="number-arrow"
              ><img src="@/assets/images/portfolio/process-arrow.svg" alt=""
            /></span>
          </div>
          <h4>Реализация проекта</h4>
          <p>
            Наши специалисты берут на себя контроль всех этапов: от закупки
            материалов до выполнения работ. Мы следим за качеством и соблюдаем
            сроки.
          </p>
        </div>
      </div>
      <div class="process-column">
        <div
          class="numbers-item wow animate__animated animate__fadeInLeft"
          data-wow-delay="0.3s"
        >
          <div class="number">
            03
            <span class="number-arrow"
              ><img src="@/assets/images/portfolio/process-arrow.svg" alt=""
            /></span>
          </div>
          <h4>Подготовка проекта</h4>
          <p>
            Готовим полный пакет документации: чертежи, планировки, подбор
            материалов и мебели. Всё, что нужно для реализации.
          </p>
        </div>
        <div
          class="numbers-item wow animate__animated animate__fadeInLeft"
          data-wow-delay="0.5s"
        >
          <div class="number">
            05
            <span class="number-arrow"
              ><img src="@/assets/images/portfolio/process-arrow.svg" alt=""
            /></span>
          </div>
          <h4>Завершение и сдача объекта</h4>
          <p>
            Мы проверяем каждый элемент, чтобы всё соответствовало проекту. Вы
            получаете готовое пространство, полностью готовое к жизни или
            работе.
          </p>
        </div>
      </div>
    </div>
    <div class="process-columns-mobile">
      <div class="numbers-item wow animate__animated animate__fadeInLeft">
        <div class="number">
          01
          <span class="number-arrow"
            ><img src="@/assets/images/portfolio/process-arrow.svg" alt=""
          /></span>
        </div>
        <h4>Консультация и обсуждение</h4>
        <p>
          Мы начинаем с изучения ваших идей и пожеланий. На встрече мы обсуждаем
          детали проекта, стиль, бюджет и сроки, чтобы понять ваши ожидания.
        </p>
      </div>
      <div
        class="numbers-item wow animate__animated animate__fadeInLeft"
        data-wow-delay="0.2s"
      >
        <div class="number">
          02
          <span class="number-arrow"
            ><img src="@/assets/images/portfolio/process-arrow.svg" alt=""
          /></span>
        </div>
        <h4>Разработка концепции</h4>
        <p>
          Создаём эскизы и визуализации, которые отражают уникальность вашего
          будущего пространства. Всё согласовывается, чтобы результат точно
          соответствовал вашим запросам.
        </p>
      </div>
      <div class="numbers-item wow animate__animated animate__fadeInLeft">
        <div class="number">
          03
          <span class="number-arrow"
            ><img src="@/assets/images/portfolio/process-arrow.svg" alt=""
          /></span>
        </div>
        <h4>Подготовка проекта</h4>
        <p>
          Готовим полный пакет документации: чертежи, планировки, подбор
          материалов и мебели. Всё, что нужно для реализации.
        </p>
      </div>
      <div
        class="numbers-item wow animate__animated animate__fadeInLeft"
        data-wow-delay="0.2s"
      >
        <div class="number">
          04
          <span class="number-arrow"
            ><img src="@/assets/images/portfolio/process-arrow.svg" alt=""
          /></span>
        </div>
        <h4>Реализация проекта</h4>
        <p>
          Наши специалисты берут на себя контроль всех этапов: от закупки
          материалов до выполнения работ. Мы следим за качеством и соблюдаем
          сроки.
        </p>
      </div>
      <div class="numbers-item wow animate__animated animate__fadeInLeft">
        <div class="number">
          05
          <span class="number-arrow"
            ><img src="@/assets/images/portfolio/process-arrow.svg" alt=""
          /></span>
        </div>
        <h4>Завершение и сдача объекта</h4>
        <p>
          Мы проверяем каждый элемент, чтобы всё соответствовало проекту. Вы
          получаете готовое пространство, полностью готовое к жизни или работе.
        </p>
      </div>
    </div>
  </section>
  <section class="offer">
    <h2>
      Готовы создать<span class="arrow"
        ><img
          class="wow animate__animated animate__fadeInBottomLeft"
          src="@/assets/images/home/offer-arrow.svg"
          alt="" /></span
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
  @media (max-width: 576px)
    margin-top: $mob-col-gap
  h2
    color: $font-black
    text-align: right
    margin-bottom: 5rem

// --------------------- process --------------------

.process
  +regpad
  display: flex
  flex-direction: column
  margin-top: 15rem
  @media (max-width: 576px)
    margin-top: $mob-col-gap
  h2
    color: $font-black
    margin-bottom: 5rem
  .process-columns
    display: grid
    grid-template-columns: 4fr 4fr 4fr
    column-gap: 7rem
    @media (max-width: 1400px)
      column-gap: 2rem
    @media (max-width: 768px)
      display: none
    .process-column
      display: flex
      flex-direction: column
      gap: 9rem
      .numbers-item
        .number
          font-size: 4rem
          color: $bgc-second
          margin-bottom: 2rem
        h4
          color: $font-black
          font-weight: 600
        p
          color: $font-grey
          padding-right: 6.3rem
          @media (max-width: 1400px)
            padding-right: 3rem
        .number-arrow
          img
            width: 5rem
      &:nth-child(1)
      &:nth-child(2)
        padding-top: 10rem
        @media (max-width: 1400px)
          gap: 7rem
      &:nth-child(3)
        padding-top: 20rem
        gap: 10.5rem
        @media (max-width: 1400px)
          gap: 8.5rem

.process-columns-mobile
  display: none
  grid-template-columns: 1fr 1fr 1fr
  gap: 2rem
  @media (max-width: 768px)
    display: grid
  @media (max-width: 576px)
    grid-template-columns: 1fr 1fr
  .numbers-item
    .number
      font-size: 4rem
      color: $bgc-second
      margin-bottom: 2rem
    h4
      color: $font-black
      font-weight: 600
    p
      color: $font-grey
    .number-arrow
      img
        width: 5rem

// --------------------- offer -------------------

.offer
  position: relative
  max-width: calc(100% - 200px)
  margin: 0 auto
  background-color: $bgc-second
  padding: 6.75rem 14.9rem 5.1rem 14.9rem
  margin-top: 15rem
  margin-bottom: -10rem
  @media (max-width: 992px)
    max-width: calc(100% - 100px)
    padding: 6.75rem 5rem 5.1rem 5rem
  @media (max-width: 768px)
    max-width: calc(100% - 100px)
  @media (max-width: 576px)
    max-width: calc(100% - 40px)
    margin-top: $mob-col-gap
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
