<template>
  <div class="slider">
    <div class="container">
      <div class="slider-buttons">
        <button class="nav-button left" @click="prevSlide">
          <span class="arrow">←</span>
        </button>
        <button class="nav-button right" @click="nextSlide">
          <span class="arrow">→</span>
        </button>
      </div>
      <div class="slider-container">
        <swiper
          ref="swiper"
          :breakpoints="breakpoints"
          :loop="true"
          @swiper="bindSwiperInstance"
        >
          <swiper-slide v-for="(slide, index) in slides" :key="index">
            <div class="slide-content">
              <img :src="slide.image" :alt="slide.title" />
              <h3>{{ slide.title }}</h3>
              <p>{{ slide.description }}</p>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Swiper as SwiperInstance } from "swiper/types";
import SwiperCore from "swiper";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";
import slide1 from "@/assets/images/home/projects/1.jpg";
import slide2 from "@/assets/images/home/projects/2.jpg";

SwiperCore.use([Navigation]);

export default defineComponent({
  name: "ProjectsSlider",
  components: { Swiper, SwiperSlide },
  setup() {
    const slides = ref([
      {
        title: "Chambre d'enfant",
        description:
          "Элегантный частный дом, где минимализм сочетается с уютом. Просторные комнаты и панорамные окна создают комфорт на Лазурном Берегу.",
        image: slide1,
      },
      {
        title: "ELEMENTAL HARMONY",
        description:
          "Роскошные апартаменты с видом на море. Интерьер продуман до мелочей, объединяя эстетику и функциональность.",
        image: slide2,
      },
      {
        title: "MODERN VISTA",
        description:
          "Современный дизайн для бренда. Светлый интерьер с акцентом на удобство и стиль, идеально для деловой среды.",
        image: slide1,
      },
      {
        title: "URBAN LIVING",
        description:
          "Элегантный частный дом, где минимализм сочетается с уютом. Просторные комнаты и панорамные окна создают комфорт на Лазурном Берегу.",
        image: slide2,
      },
    ]);
    const currentPage = ref(1);
    const totalPages = slides.value.length;
    const swiper = ref<SwiperInstance | null>(null);

    // Привязка экземпляра Swiper
    const bindSwiperInstance = (instance: SwiperInstance) => {
      swiper.value = instance;
    };

    // Навигация
    const nextSlide = () => {
      swiper.value?.slideNext();
    };
    const prevSlide = () => {
      swiper.value?.slidePrev();
    };

    const breakpoints = ref({
      300: {
        slidesPerView: 1.5,
        spaceBetween: 0,
      },
      1920: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
    });

    return {
      slides,
      currentPage,
      totalPages,
      nextSlide,
      prevSlide,
      bindSwiperInstance,
      breakpoints,
    };
  },
});
</script>

<style lang="sass" scoped>

.slider
  .container
    justify-content: space-between
    padding-right: 0
    @media (max-width: 768px)
      padding-left: 0px
      display: block
    @media (max-width: 992px)
      padding-left: 50px
  h2
    font-size: 36px
    font-weight: bold
    margin-bottom: 20px
    color: black
  h3
    color: black

  .slider-container
    width: 90%
    position: relative
    display: flex
    align-items: center
    justify-content: center
    padding-left: 80px
    @media (max-width: 768px)
      padding-left: 30px
      width: 100%
    @media (max-width: 992px)
      padding-left: 0

  .slider-buttons
    align-self: flex-end
    padding-bottom: 100px
    @media (max-width: 768px)
      display: none

  .nav-button
    background: rgba(255, 255, 255, 0)
    border: 1px solid black
    cursor: pointer
    padding: 10px
    border-radius: 50%
    z-index: 10
    display: inline-block
    font-size: 1rem

    &:hover
      background: rgba(0, 0, 0, 0.8)
      color: white
      transition: 0.3s

    &.right
      margin-left: 10px

/* Слайды */
.swiper-slide
  display: flex
  flex-direction: column
  align-items: center
  border-radius: 8px
  text-align: left
  padding: 16px

.slide-content
  img
    width: 100%
    border-radius: 8px

  h3
    font-size: 2rem
    margin: 12px 0 8px

  p
    color: $font-grey

/* Пагинация */
.pagination
  margin-top: 20px
  font-size: 14px
  color: $font-black
</style>
