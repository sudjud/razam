<template>
  <section class="values">
    <div class="container">
      <div class="main">
        <div class="title-block">
          <h2>Наши ценности</h2>
          <div class="arrow-down">
            <span>↓</span>
          </div>
        </div>
        <div class="image-wrapper">
          <img src="@/assets/images/home/3.jpg" alt="Интерьер" />
        </div>
      </div>
      <div class="values-list">
        <div class="value-item">
          <span class="circle">↗</span>
          <p>Открытость и честность</p>
        </div>
        <div class="value-item">
          <span class="circle">↗</span>
          <p>Точность в сроках</p>
        </div>
        <div class="value-item">
          <span class="circle">↗</span>
          <p>Практичность и удобство</p>
        </div>
        <div class="value-item">
          <span class="circle">↗</span>
          <p>Индивидуальные решения</p>
        </div>
        <div class="value-item">
          <span class="circle"
            ><img src="@/assets/images/home/diag-arrow.png" alt="arrow"
          /></span>
          <p>Современные технологии</p>
        </div>
        <div class="value-item">
          <span class="circle">↗</span>
          <p>Ответственность за результат</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped>
.values
  background-color: #e8e3df
  .container
    flex-direction: column
    padding-right: 0
    .main
      display: flex
      .title-block
        position: absolute
        z-index: 10
        top: 0
      .image-wrapper
        width: 100%
        img
          width: 100%

  .arrow-down
    margin-bottom: 50px // Расстояние от стрелки до изображения
    span
      font-size: 50px
      text-align: center
      display: block

  .image-wrapper
    width: 100%
    max-width: 800px
    margin-bottom: 181px

    img
      width: 100%
      height: auto
      display: block

  .values-list
    display: grid
    grid-template-columns: repeat(3, 1fr)
    gap: 50px
    width: 100%
    max-width: 1200px

    .value-item
      display: flex
      flex-direction: column
      align-items: center
      text-align: center

      .circle
        display: flex
        justify-content: center
        align-items: center
        width: 50px
        height: 50px
        border: 1px solid #000
        border-radius: 50%
        font-size: 38px
        font-weight: 100
        font-weight: bold
        margin-bottom: 15px

      p
        font-size: 18px
        font-weight: 400
        line-height: 1.5

// Адаптивность
// @media (max-width: 992px)
//   .values-list
//     grid-template-columns: repeat(2, 1fr)
//     gap: 30px

//   h2
//     font-size: 80px

// @media (max-width: 768px)
//   .values-list
//     grid-template-columns: 1fr
//     gap: 20px

//   h2
//     font-size: 60px

// @media (max-width: 480px)
//   .arrow-down span
//     font-size: 40px

//   .value-item
//     flex-direction: column
//     align-items: center
</style>
