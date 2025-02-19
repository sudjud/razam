<template>
  <div class="switcher">
    <div class="current">
      <img :src="currentFlagSrc" @click="isOpen = !isOpen" alt="" />
    </div>
    <div class="dropdown" :class="{ open: isOpen }">
      <div v-for="(item, idx) of restFlagsSrc" :key="idx" class="image-wrapper">
        <img :src="item" alt="" @click="changeLang(item)" />
      </div>
    </div>
  </div>
</template>

<script setup>
import ru from "@/assets/images/flags/ru.svg";
import fr from "@/assets/images/flags/fr.svg";
import en from "@/assets/images/flags/gb.svg";
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";

const isOpen = ref(false);

// Используем i18n
const { locale } = useI18n();

// Изменение языка
const changeLang = (lang) => {
  // locale.value = lang;
  // localStorage.setItem("language", lang);
  if (lang[5] === "f") {
    locale.value = "fr";
    localStorage.setItem("language", "fr");
  } else if (lang[5] === "g") {
    locale.value = "en";
    localStorage.setItem("language", "en");
  } else {
    locale.value = "ru";
    localStorage.setItem("language", "ru");
  }
  isOpen.value = false;
};

const currentFlagSrc = computed(() => {
  if (locale.value === "fr") {
    return fr;
  } else if (locale.value === "en") {
    return en;
  } else {
    return ru;
  }
});

const restFlagsSrc = computed(() => {
  if (locale.value === "fr") {
    return [ru, en];
  } else if (locale.value === "en") {
    return [ru, fr];
  } else {
    return [en, fr];
  }
});
</script>

<style lang="sass" scoped>
.switcher
  position: relative
  left: 40px
  top: -2px
  @media (max-width: 768px)
    left: 0
    top: 0
    width: 90px
  *
    user-select: none
  .current
    display: flex
    flex-direction: row
    align-items: center
    justify-content: center
    img
      width: 25px
      margin-right: 10px
      border-radius: 5px
      @media (max-width: 768px)
        margin-right: 0
    .arrow
      align-self: flex-end
      cursor: pointer
  .dropdown
    margin-top: 5px
    position: absolute
    overflow: hidden
    display: flex
    max-height: 0
    left: -10px
    border-radius: 15px
    flex-direction: column
    justify-content: center
    align-items: center
    gap: 10px
    background-color: $font-grey
    transition-duration: 0.3s
    @media (max-width: 768px)
      width: 45px
      margin-top: 5px
      left: 23px
    .image-wrapper
      display: flex
      align-items: center
      width: 25px
      border-radius: 5px
      img
        max-width: 100%
        border-radius: 5px
    &.open
      max-height: 100px
      padding: 10px
      transition-duration: 0.3s
</style>
