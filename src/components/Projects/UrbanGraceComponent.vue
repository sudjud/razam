<template>
  <section class="lounge">
    <h5>U / G</h5>
    <h2><span class="wow reveal-bb">Гостиная комната</span></h2>
    <div class="content-wrapper">
      <div class="text-wrapper">
        <h2>
          <span>сочетание уюта, стиля и современности</span>
        </h2>
        <p>
          Диван в центре гостиной привлекает внимание своим минималистичным
          дизайном и мягкими линиями. Использование натуральных тканей и
          приглушённых оттенков создаёт атмосферу комфорта. Его модульная
          конструкция позволяет легко адаптироваться под любые потребности.
        </p>
      </div>
      <div class="lounge-image">
        <img
          src="@/assets/images/projects/urban-grace/lounge.jpg"
          alt="urban-grace"
        />
      </div>
    </div>
  </section>
  <section class="bedroom">
    <h4>Urban grace</h4>
    <div class="content-wrapper">
      <div class="text-wrapper">
        <h2>Спальня, где <span>начинается гармония дня</span></h2>
        <p>
          Спальня выполнена в спокойных зелёных и нейтральных тонах, создавая
          атмосферу уюта и релаксации. Детали, такие как мягкое изголовье
          кровати и акцентная скамья, добавляют комнате глубину и изысканность.
          Утренний свет мягко проникает сквозь плотные шторы, создавая
          гармоничное начало дня.
        </p>
      </div>
      <div class="image">
        <img src="@/assets/images/projects/urban-grace/bedroom.jpg" alt="" />
      </div>
    </div>
  </section>
  <section class="lights">
    <div class="content-wrapper">
      <div class="images">
        <img src="@/assets/images/projects/urban-grace/lights1.jpg" alt="" />
        <img src="@/assets/images/projects/urban-grace/lights2.jpg" alt="" />
      </div>
      <div class="text-wrapper">
        <h2>Свет,<br /><span>который задает настроение</span></h2>
        <p>
          Интерьер освещён разнообразными источниками света, которые
          подчёркивают его детали. Настенные светильники с мягким свечением
          добавляют уюта, а подвесные лампы создают акценты на ключевых зонах.
          Современные световые линии идеально вписываются в общий
          минималистичный стиль.
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped>
p
  color: $font-grey
  font-size: 1.25rem
  margin: 0

h2
  color: $font-black
  span
    text-decoration: underline
  @media (max-width: 1400px)
    font-size: 5rem
  @media (max-width: 576px)
    font-size: 4rem

.content-wrapper
  display: grid
  grid-template-columns: 7fr 5fr
  gap: 1rem
  @media (max-width: 1200px)
    grid-template-columns: 6fr 6fr
  @media (max-width: 768px)
    display: flex
    flex-direction: column

.lounge
  h5
    color: $font-grey
    font-size: 2.5rem
    display: inline
    margin-right: 8rem
    @media (max-width: 992px)
      margin-right: 4rem
    @media (max-width: 576px)
      margin-right: 2rem
  h2
    display: inline
  .content-wrapper
    .text-wrapper
      display: flex
      flex-direction: column
      justify-content: space-between
      h2
        @media (max-width: 576px)
          font-size: 3rem
      p
        padding-right: 15rem
        margin: 0
        @media (max-width: 1200px)
          padding-right: 10rem
        @media (max-width: 768px)
          margin-top: 2rem
          padding-right: 0
  .lounge-image
    margin-top: 2rem
    img
      max-width: 100%

// --------------------- bedroom --------------------

.bedroom
  margin-top: 15rem
  @media (max-width: 576px)
    margin-top: $mob-col-gap
  h4
    color: $font-grey
    font-size: 2rem
    text-align: right
  .content-wrapper
    .text-wrapper
      margin-top: 2rem
      display: flex
      flex-direction: column-reverse
      justify-content: start
      @media (max-width: 768px)
        flex-direction: column
      p
        padding-right: 20rem
        margin: 0
        margin-bottom: 1rem
        @media (max-width: 1200px)
          padding-right: 10rem
        @media (max-width: 768px)
          margin-top: 2rem
          padding-right: 0
  .image
    margin-top: 2rem
    img
      width: 100%

// -------------------- lights ---------------------

.lights
  @media (max-width: 1200px)
    margin-top: 5rem
  @media (max-width: 768px)
    margin-top: 15rem
  @media (max-width: 576px)
    margin-top: $mob-col-gap
  .content-wrapper
    grid-template-columns: 6fr 6fr
    @media (max-width: 768px)
      display: flex
      flex-direction: column-reverse
    .images
      display: flex
      flex-direction: column
      width: 50%
      margin: 0 auto
      gap: 1rem
      @media (max-width: 1200px)
        width: 60%
      @media (max-width: 768px)
        width: 100%
        margin-top: 3rem
    .text-wrapper
      margin-top: auto
      h2
        margin-bottom: 13rem
        @media (max-width: 1200px)
          margin-bottom: 7rem
        @media (max-width: 768px)
          margin-bottom: 2rem
</style>
