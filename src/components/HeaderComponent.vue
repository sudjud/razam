<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <router-link to="/">
          <img src="../assets/logo.png" alt="Razam" />
        </router-link>
      </div>

      <nav class="nav-menu">
        <ul>
          <li>
            <router-link to="/" :class="{ active: isActive('/') }"
              >Главная</router-link
            >
          </li>
          <span class="divider">/</span>
          <li>
            <router-link to="/about" :class="{ active: isActive('/about') }"
              >О нас</router-link
            >
          </li>
          <span class="divider">/</span>
          <li>
            <router-link
              to="/services"
              :class="{ active: isActive('/services') }"
              >Услуги</router-link
            >
          </li>
          <span class="divider">/</span>
          <li>
            <router-link
              to="/portfolio"
              :class="{ active: isActive('/portfolio') }"
              >Портфолио</router-link
            >
          </li>
          <span class="divider">/</span>
          <li>
            <router-link to="/news" :class="{ active: isActive('/news') }"
              >Новости</router-link
            >
          </li>
          <span class="divider">/</span>
          <li>
            <router-link to="/contact" :class="{ active: isActive('/contact') }"
              >Контакты</router-link
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "HeaderComponent",
  setup() {
    const route = useRoute();

    // Метод для определения активной ссылки
    const isActive = (path: string): boolean => route.path === path;

    return { isActive };
  },
});
</script>

<style lang="sass" scoped>
.header
  position: relative
  width: 100%
  display: flex
  align-items: center
  background-color: transparent

  .container
    display: flex
    justify-content: space-between
    align-items: center
    width: 100%
    padding: 0 100px
    box-sizing: border-box

  .logo
    img
      height: 120px
      display: block

  .nav-menu
    ul
      display: flex
      font-family: $font-header
      font-weight: 600
      gap: 20px
      list-style: none
      margin: 0
      padding: 0

      li
        a
          text-decoration: none
          font-size: 16px
          color: #636363
          transition: color 0.3s ease

          &:hover
            color: #202020

          &.active
            color: #202020
      .divider
        font-size: 16px
        color: #ccc
        margin: 0 12px
</style>
