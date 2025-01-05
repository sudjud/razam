<template>
  <div class="values-list">
    <div class="values-list-top">
      <div class="value-item">
        <span class="circle"
          ><img src="@/assets/images/home/diag-arrow.png" alt="arrow"
        /></span>
        <p>Открытость и<br />честность</p>
      </div>
      <div class="value-item">
        <span class="circle"
          ><img src="@/assets/images/home/diag-arrow.png" alt="arrow"
        /></span>
        <p>Точность в<br />сроках</p>
      </div>
      <div class="value-item">
        <span class="circle"
          ><img src="@/assets/images/home/diag-arrow.png" alt="arrow"
        /></span>
        <p>Современные<br />технологии</p>
      </div>
    </div>
    <div class="values-list-bottom">
      <div class="value-item">
        <span class="circle"
          ><img src="@/assets/images/home/diag-arrow.png" alt="arrow"
        /></span>
        <p>Практичность и<br />удобство</p>
      </div>
      <div class="value-item">
        <span class="circle"
          ><img src="@/assets/images/home/diag-arrow.png" alt="arrow"
        /></span>
        <p>Индивидуальные<br />решения</p>
      </div>

      <div class="value-item">
        <span class="circle"
          ><img src="@/assets/images/home/diag-arrow.png" alt="arrow"
        /></span>
        <p>Ответственность<br />за результат</p>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.values-list
  display: flex
  flex-direction: column
  padding-right: 100px
  margin-top: 181px
  &-top
    display: flex
    flex-direction: row
    justify-content: space-between
    margin-right: 18%
  &-bottom
    display: flex
    flex-direction: row
    justify-content: space-between
    margin-left: 18%
  .value-item
    min-width: 162px
    .circle
      display: flex
      justify-content: center
      align-items: center
      width: 60px
      height: 60px
      border: 1px solid #636363
      border-radius: 50%
      font-size: 38px
      font-weight: 100
      color: #636363
      p
        font-size: 32px
        font-weight: 400
        color: #202020

@media (max-width: 1400px)
  .values-list
    margin-top: 90px
    .value-item .circle
        width: 50px
        height: 50px
        img
          width: 15px
        p

@media (max-width: 1200px)
  .values-list
    margin-top: 50px

@media (max-width: 768px)
  .values-list
    padding-right: 20px
    .value-item
      min-width: 113px
    &-top
      margin-right: 10%
    &-bottom
      margin-left: 10%

@media (max-width: 576px)
  .values-list
    &-top
      margin-right: 5%
    &-bottom
      margin-left: 5%
      margin-top: 10px
    .value-item
      min-width: 97px
      .circle
        width: 30px
        height: 30px
        img
          width: 10px
      p
        font-size: 12px
</style>
