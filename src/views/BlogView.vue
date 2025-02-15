<template>
  <main>
    <p>Главная / Блог</p>
    <h1>
      <span class="wow reveal-bb">Блог</span>
    </h1>
  </main>
</template>

<style lang="sass" scoped>
main
  +regpad
  padding-top: 10rem
  p
    margin-bottom: 1rem
  h1
    margin-bottom: 4rem
    @media (max-width: 992px)
      font-size: 6rem
    @media (max-width: 576px)
      font-size: 4rem
</style>
