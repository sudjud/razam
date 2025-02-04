<template>
  <div class="lang-switch">
    <button
      v-for="lang in availableLanguages"
      :key="lang"
      @click.stop="changeLang(lang)"
      :class="{ active: locale === lang }"
    >
      {{ lang.toUpperCase() }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

// Доступные языки
const availableLanguages = ["en", "ru", "fr"];

// Используем i18n
const { locale } = useI18n();

// Изменение языка
const changeLang = (lang: string) => {
  locale.value = lang;
  localStorage.setItem("language", lang); // Сохраняем язык в localStorage
};
</script>

<style scoped>
.lang-switch {
  display: flex;
  gap: 10px;
}

.lang-switch button {
  padding: 5px 10px;
  cursor: pointer;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  transition: background-color 0.3s ease;
}

.lang-switch button:hover {
  background-color: #e0e0e0;
}

.lang-switch button.active {
  background-color: #007bff;
  color: #fff;
  border-color: #0056b3;
}
</style>
