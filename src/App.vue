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
import FooterComponent from "@/components/Footer/FooterComponent.vue";

const getInitialHeaderComponent = () => {
  return window.innerWidth <= 768 ? HeaderSmComponent : HeaderComponent;
};

const currentHeaderComponent = ref(getInitialHeaderComponent());
const updateHeaderComponent = () => {
  currentHeaderComponent.value =
    window.innerWidth <= 768 ? HeaderSmComponent : HeaderComponent;
};

const route = useRoute();
const isLoading = ref(true);
const showPage = ref(false);
let wowInstance = null;

onMounted(async () => {
  window.addEventListener("resize", updateHeaderComponent);

  await preloadImages(); // Ожидаем загрузки всех изображений
  await nextTick(); // Ждём, пока Vue отрендерит DOM

  requestAnimationFrame(() => {
    isLoading.value = false; // Прелоадер исчезает только после полной загрузки
    showPage.value = true;
  });

  setTimeout(() => {
    wowInstance = new WOW({ live: false });
    wowInstance.init();
  }, 700);
});

watch(route, async () => {
  isLoading.value = true;
  showPage.value = false;
  await nextTick();

  setTimeout(async () => {
    await preloadImages();
    await nextTick();

    requestAnimationFrame(() => {
      isLoading.value = false;
      showPage.value = true;
    });

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

// Функция для загрузки всех изображений на странице
const preloadImages = () => {
  const images = document.querySelectorAll("img");
  const promises = Array.from(images).map(
    (img) =>
      new Promise((resolve) => {
        if (img.complete) {
          resolve();
        } else {
          img.onload = () => resolve();
          img.onerror = () => resolve();
        }
      })
  );
  return Promise.all(promises);
};
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
  transition: opacity 0.5s ease-in-out

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
