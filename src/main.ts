import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { createI18n } from "vue-i18n";
import "@fortawesome/fontawesome-free/css/all.css";

import en from "@/locales/en.json";
import ru from "@/locales/ru.json";
import fr from "@/locales/fr.json";

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: localStorage.getItem("language") || "ru",
  fallbackLocale: "ru",
  messages: { en, ru, fr },
});

// Создание Vue-приложения
createApp(App).use(store).use(router).use(i18n).mount("#app");
