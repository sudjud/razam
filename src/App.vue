<template>
  <div id="app">
    <component :is="currentHeaderComponent" />

    <!-- Прелоадер -->
    <div v-if="isLoading" class="preloader">
      <div class="spinner"></div>
    </div>

    <!-- Контент страницы (скрываем при загрузке) -->
    <router-view v-if="!isLoading && showPage" />

    <FooterComponent />
  </div>
</template>

<script setup>
import { ref, onMounted, watch, nextTick } from "vue";
import { useRoute } from "vue-router";
import WOW from "wow.js";

import HeaderComponent from "@/components/Header/HeaderComponent.vue";
import HeaderSmComponent from "@/components/Header/HeaderSmComponent.vue";
import FooterComponent from "./components/Footer/FooterComponent.vue";

const getInitialHeaderComponent = () => {
  return window.innerWidth <= 768 ? HeaderSmComponent : HeaderComponent;
};

const currentHeaderComponent = ref(getInitialHeaderComponent());

const updateHeaderComponent = () => {
  currentHeaderComponent.value =
    window.innerWidth <= 768 ? HeaderSmComponent : HeaderComponent;
};

const route = useRoute();
const isLoading = ref(false); // Флаг для прелоадера
const showPage = ref(true);
let wowInstance = null;

onMounted(() => {
  window.addEventListener("resize", updateHeaderComponent);

  setTimeout(() => {
    wowInstance = new WOW({ live: false });
    wowInstance.init();
  }, 700);
});

watch(route, async () => {
  isLoading.value = true;
  showPage.value = false;
  await nextTick();

  setTimeout(() => {
    isLoading.value = false;
    showPage.value = true;

    setTimeout(() => {
      if (wowInstance) {
        wowInstance.init();
        window.scrollTo({ top: 1, behavior: "instant" });
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "instant" });
        }, 50);
      }
    }, 100);
  }, 800);
});
</script>

<style lang="sass">
/* Прелоадер */
.preloader
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  background: rgba(255, 255, 255, 0.9)
  display: flex
  align-items: center
  justify-content: center
  z-index: 9999

/* Спиннер */
.spinner
  width: 50px
  height: 50px
  border: 5px solid #ccc
  border-top-color: #333
  border-radius: 50%
  animation: spin 0.8s linear infinite

@keyframes spin
  from
    transform: rotate(0deg)
  to
    transform: rotate(360deg)
</style>
