<template>
  <main>
    <p>Главная / Контакты</p>
    <h1>
      <span class="wow reveal-bb">Свяжитесь с нами</span
      ><span><img src="@/assets/images/contact-us/arrow.svg" alt="" /></span>
    </h1>
    <div class="image-wrapper">
      <img src="@/assets/images/contact-us/main.jpg" alt="" />
    </div>
  </main>
  <section class="form">
    <p>
      Мы всегда готовы обсудить ваш проект и ответить на любые вопросы.
      Независимо от того, хотите ли вы обновить интерьер, разработать дизайн с
      нуля или узнать больше о наших услугах, свяжитесь с нами удобным для вас
      способом.
    </p>
    <form @submit.prevent="submitForm">
      <h2><span class="wow reveal-bb">Оставьте заявку</span></h2>
      <label> Ваше имя<span>*</span> </label>
      <input type="text" v-model="form.name" required />

      <label> Email<span>*</span> </label>
      <input type="email" v-model="form.email" required />

      <label> Номер телефона<span>*</span> </label>
      <input type="tel" v-model="form.phone" required />

      <label> Сообщение<span>*</span> </label>
      <input v-model="form.message" required />

      <button type="submit">
        Отправить<span
          ><img src="@/assets/images/contact-us/submit-arrow.svg" alt=""
        /></span>
      </button>
    </form>
  </section>
  <section class="info">
    <div class="image-wrapper">
      <img src="@/assets/images/contact-us/2.jpg" alt="" />
    </div>
    <div class="content">
      <h2>
        <span class="wow reveal-bb">Контактная</span>
        <span><img src="@/assets/images/contact-us/arrow.svg" alt="" /></span>
        <span class="wow reveal-bb">информация</span>
      </h2>
      <div class="info-wrapper">
        <div class="field">
          <p>Email</p>
          <h4>contact@razam.fr</h4>
        </div>
        <div class="field">
          <p>Телефон</p>
          <h4>+33 7 88 77 88 66</h4>
        </div>
        <div class="field">
          <p>Место расположения</p>
          <h4>305 Av. Georges Pompidou, 06220<br />Vallauris, Франция</h4>
        </div>
        <div class="social-links">
          <a
            href="#"
            aria-label="Facebook"
            target="_blank"
            class="wow animate__animated animate__backInDown"
          >
            <i class="fab fa-facebook-f"></i>
          </a>
          <a
            href="#"
            aria-label="YouTube"
            target="_blank"
            class="wow animate__animated animate__backInDown"
            data-wow-delay="0.1s"
          >
            <i class="fab fa-youtube"></i>
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            target="_blank"
            class="wow animate__animated animate__backInDown"
            data-wow-delay="0.2s"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a
            href="#"
            aria-label="X"
            target="_blank"
            class="wow animate__animated animate__backInDown"
            data-wow-delay="0.3s"
          >
            <i class="fa-brands fa-x-twitter"></i>
          </a>
          <a
            href="#"
            aria-label="Instagram"
            target="_blank"
            class="wow animate__animated animate__backInDown"
            data-wow-delay="0.4s"
          >
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const submitForm = () => {
  console.log("Форма отправлена", form.value);
};
</script>

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
    span
      img
        width: 0.5em
        margin-left: 2rem
  div img
    max-width: 100%

section.form
  +regpad
  display: grid
  grid-template-columns: 4.5fr 1.5fr 6fr
  margin-top: 4rem
  form
    grid-column: 3
    h2
      @media (max-width: 1800px)
        font-size: 5rem
      @media (max-width: 992px)
        font-size: 4rem
      @media (max-width: 650px)
        font-size: 3.5rem
      @media (max-width: 500px)
        font-size: 2.5rem
    button img
      margin-left: 5px

section.info
  +regpad
  margin-top: 20rem
  margin-bottom: 20rem
  display: grid
  grid-template-columns: 6fr 1fr 5fr
  @media (max-width: 768px)
    grid-template-columns: 5fr 0.5fr 6.5fr
  @media (max-width: 576px)
    margin-top: $mob-col-gap
    margin-bottom: $mob-col-gap
  .image-wrapper img
    max-width: 100%
  .content
    display: flex
    flex-direction: column
    justify-content: space-between
    grid-column: 3
    h2
      font-size: 6rem
      @media (max-width: 1600px)
        font-size: 5rem
      @media (max-width: 992px)
        font-size: 4rem
      img
        margin-left: 0.2em
        width: 0.6em
    .info-wrapper
      .field
        border-bottom: 1px solid $font-grey
        padding-bottom: 19px
        margin-top: 10px

.fa-youtube
  margin-top: 0.8px

.social-links
  display: flex
  flex-direction: row
  gap: 25px
  margin-top: 2.5rem

  a
    display: flex
    justify-content: center
    align-items: center
    width: 20px
    height: 20px
    background-color: $font-grey
    border: 2px solid $font-grey
    border-radius: 50%
    color: transparent
    text-decoration: none
    font-size: 10px
    transition: all 0.3s ease

    i
      color: white
      transition: color 0.3s ease

    &:hover
      background-color: transparent
      border-color: #007bff

      i
        color: #007bff

form
  display: flex
  flex-direction: column
  max-width: 850px
  label
    display: flex
    font-size: 1rem
    margin-top: 3rem
    font-family: 'Inter', sans-serif
    @media (max-width: 1200px)
      margin-top: 2rem
    span
      color: red
  input, textarea
    padding: 10px
    border: none
    border-bottom: 1px solid $font-grey
    background-color: $bgc-main
    font-size: 1.5rem
    @media (max-width: 1200px)
      padding: 5px
    &:focus
      outline: none
  button
    margin-top: 3rem
    font-size: 1rem
    color: $font-black
    font-weight: 500
    max-width: 13rem
    padding: 1rem 0
    border-radius: 30px
    border: 1px solid $font-grey
    &:hover
      background: $bgc-second
    img
      width: 1em
</style>
