<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <router-link to="/">
          <img src="@/assets/logo.png" alt="Razam" />
        </router-link>
      </div>

      <nav class="nav-menu">
        <ul>
          <li>
            <router-link to="/" :class="{ active: isActive('/') }">{{
              $t("menu.home")
            }}</router-link>
          </li>
          <span class="divider">/</span>
          <li>
            <router-link to="/about" :class="{ active: isActive('/about') }">{{
              $t("menu.about")
            }}</router-link>
          </li>
          <span class="divider">/</span>
          <li>
            <router-link
              to="/services"
              :class="{ active: isActive('/services') }"
              >{{ $t("menu.services") }}</router-link
            >
          </li>
          <span class="divider">/</span>
          <li>
            <router-link
              to="/portfolio"
              :class="{ active: isActive('/portfolio') }"
              >{{ $t("menu.portfolio") }}</router-link
            >
          </li>
          <span class="divider">/</span>
          <li>
            <router-link to="/news" :class="{ active: isActive('/news') }">{{
              $t("menu.news")
            }}</router-link>
          </li>
          <span class="divider">/</span>
          <li>
            <router-link
              to="/contact"
              :class="{ active: isActive('/contact') }"
              >{{ $t("menu.contact") }}</router-link
            >
          </li>
          <li>
            <LangSwitchComponent />
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import LangSwitchComponent from "@/components/Tools/LangSwitchComponent.vue";

export default defineComponent({
  name: "HeaderComponent",
  components: {
    LangSwitchComponent,
  },
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
  position: fixed
  width: 100%
  display: flex
  align-items: center
  background-color: transparent
  z-index: 100

  .container
    display: flex
    justify-content: space-between
    align-items: center
    width: 100%
    padding: 0 100px
    box-sizing: border-box

  .logo
    img
      height: 100px
      padding: 10px 0
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
          color: $font-grey
          transition: color 0.3s ease

          &:hover
            color: $font-black

          &.active
            color: $font-black
      .divider
        font-size: 16px
        color: $font-grey
        margin: 0 12px

@media (max-width: 1200px)
  .header
    .container
      padding: 0 70px 0 70px
      .nav-menu ul
        gap: 10px
        .divider
          margin: 0 10px
        li
          a
            font-size: 16px

@media (max-width: 992px)
  .header
    .container
      padding: 0 30px
    .logo
      img
        height: 80px
        padding: 10px 0
      .nav-menu ul
        gap: 5px
        .divider
          margin: 0 10px
        li
          a
            font-size: 14px
</style>
