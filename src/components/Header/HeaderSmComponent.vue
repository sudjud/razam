<template>
  <header class="header">
    <div class="container">
      <!-- Логотип -->
      <div class="logo">
        <router-link to="/">
          <img src="@/assets/logo.png" alt="Razam" />
        </router-link>
      </div>

      <!-- Кнопка гамбургера -->
      <button
        @click="toggleMenu"
        :class="{ open: isOpen }"
        class="hamburger"
        :aria-expanded="isOpen"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <!-- Навигационное меню -->
      <nav class="nav-menu" :class="{ open: isOpen }">
        <ul>
          <li>
            <router-link
              to="/"
              :class="{ active: isActive('/') }"
              @click="closeMenu"
              >{{ $t("menu.home") }}</router-link
            >
          </li>
          <li>
            <router-link
              to="/about"
              :class="{ active: isActive('/about') }"
              @click="closeMenu"
              >{{ $t("menu.about") }}</router-link
            >
          </li>
          <li>
            <router-link
              to="/services"
              :class="{ active: isActive('/services') }"
              @click="closeMenu"
              >{{ $t("menu.services") }}</router-link
            >
          </li>
          <li>
            <router-link
              to="/portfolio"
              :class="{ active: isActive('/portfolio') }"
              @click="closeMenu"
              >{{ $t("menu.portfolio") }}</router-link
            >
          </li>
          <li>
            <router-link
              to="/news"
              :class="{ active: isActive('/news') }"
              @click="closeMenu"
              >{{ $t("menu.news") }}</router-link
            >
          </li>
          <li>
            <router-link
              to="/contact"
              :class="{ active: isActive('/contact') }"
              @click="closeMenu"
              >{{ $t("menu.contact") }}</router-link
            >
          </li>
          <li>
            <LangSwitchComponent />
          </li>
          <li>
            <div class="social-links">
              <SocialMedias />
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import LangSwitchComponent from "../LangSwitchComponent.vue";
import SocialMedias from "../SocialMedias.vue";

// Определение активного маршрута
const route = useRoute();
const isActive = (path: string): boolean => route.path === path;

// Состояние меню
const isOpen = ref<boolean>(false);
const toggleMenu = (): void => {
  isOpen.value = !isOpen.value;
};
const closeMenu = (): void => {
  isOpen.value = false;
};
</script>

<style scoped lang="sass">
.header
  position: fixed
  width: 100%
  display: flex
  justify-content: space-between
  align-items: center
  padding: 10px 20px 5px 20px
  z-index: 100
  .container
    display: flex
    justify-content: space-between
    align-items: center
    width: 100%
    padding: 0

/* Логотип */
.logo img
  height: 50px
  a
    height: 0

/* Кнопка гамбургера */
.hamburger
  display: flex
  flex-direction: column
  gap: 5px
  cursor: pointer
  border: none
  background: none

  span
    width: 25px
    height: 3px
    background-color: #333
    transition: transform 0.3s ease

  &.open span:nth-child(1)
    transform: rotate(45deg) translate(5.65px, 5.65px)

  &.open span:nth-child(2)
    opacity: 0

  &.open span:nth-child(3)
    transform: rotate(-45deg) translate(5.65px, -5.65px)

/* Навигационное меню */
.nav-menu
  position: absolute
  top: 60px
  right: 0
  background-color: red
  width: 100%
  height: calc(100vh - 60px)
  display: none
  flex-direction: column
  align-items: center
  justify-content: center
  gap: 20px
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1)

  &.open
    display: flex

  ul
    list-style: none
    padding: 0
    margin: 0
    text-align: center

    li
      margin: 10px 0
      font-size: 18px

      a
        text-decoration: none
        color: #333
        font-weight: 500
        transition: color 0.3s ease

        &.active
          color: #007bff

.social-links
  position: absolute
  right: 5%
  bottom: 55%
</style>
