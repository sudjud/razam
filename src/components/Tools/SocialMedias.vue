<template>
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
</template>

<style scoped lang="sass">
.fa-youtube
  margin-top: 0.8px

.social-links
  display: flex
  flex-direction: column
  gap: 25px

  a
    display: flex
    justify-content: center
    align-items: center
    width: 30px
    height: 30px
    background-color: $font-white
    border: 2px solid $font-white
    border-radius: 50%
    color: transparent
    text-decoration: none
    font-size: 18px
    transition: all 0.3s ease

    i
      color: #93867D
      transition: color 0.3s ease

    &:hover
      background-color: transparent
      border-color: #007bff

      i
        color: #007bff
</style>
