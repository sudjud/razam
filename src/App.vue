<template>
  <div id="app">
    <component :is="currentHeaderComponent" />
    <router-view />
    <FooterComponent />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
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

onMounted(() => {
  window.addEventListener("resize", updateHeaderComponent);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateHeaderComponent);
});
</script>

<style lang="sass">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
</style>
