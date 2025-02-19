<template>
  <div class="testimonials">
    <swiper
      ref="swiper"
      :loop="true"
      :autoplay="{ delay: 3000, disableOnInteraction: true }"
      class="testimonials-slider"
      @swiper="bindSwiperInstance"
    >
      <swiper-slide v-for="(testimonial, index) in testimonials" :key="index">
        <!-- Фото -->
        <div class="testimonials-photo">
          <img :src="testimonial.photo" :alt="testimonial.name" />
        </div>
        <!-- Отзыв -->
        <div class="testimonials-content">
          <h5>{{ testimonial.title }}</h5>
          <p>{{ testimonial.text }}</p>
          <div class="testimonial-author">{{ testimonial.name }}</div>
        </div>
      </swiper-slide>
    </swiper>
    <div class="slider-buttons">
      <button class="nav-button left" @click="prevSlide">
        <span class="arrow">←</span>
      </button>
      <button class="nav-button right" @click="nextSlide">
        <span class="arrow">→</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Swiper as SwiperInstance } from "swiper/types";
import SwiperCore from "swiper";
import "swiper/swiper-bundle.css";
import { Navigation, Autoplay, EffectCube } from "swiper/modules";
import user1 from "@/assets/images/home/Julien.jpg";
import user2 from "@/assets/images/home/Julien.jpg";

SwiperCore.use([Navigation, Autoplay, EffectCube]);

export default defineComponent({
  name: "ReviewsSlider",
  components: { Swiper, SwiperSlide },
  setup() {
    const testimonials = [
      {
        photo: user1,
        title: "Безупречный стиль и внимание к каждому нюансу",
        text: "От первого обсуждения до завершения проекта команда проявляла профессионализм и чуткость к нашим пожеланиям...",
        name: "Жюльен, Ницца",
      },
      {
        photo: user2,
        title: "Действительно качественный подход",
        text: "От первого обсуждения до завершения проекта команда проявляла профессионализм и чуткость к нашим пожеланиям. Нам понравилось, как они воплотили идеи, делая нашу квартиру не только стильной, но и невероятно удобной для жизни. Их внимание к каждой детали и умение добавить уникальные элементы сделали наш интерьер по-настоящему особенным. Искренне рекомендую для тех, кто ищет качественный и креативный подход.",
        name: "Анна, Канны",
      },
    ];
    const swiper = ref<SwiperInstance | null>(null);
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
    return {
      testimonials,
      bindSwiperInstance,
      nextSlide,
      prevSlide,
    };
  },
});
</script>

<style lang="sass">
.testimonials
  width: 100%
  display: flex
  padding: 0 6.25rem
  justify-content: center
  align-items: center
  @media (max-width: 576px)
    padding: 0 20px
  &-slider
    width: 100%
    .swiper-slide
      display: grid
      grid-template-columns: 0.25fr 1.5fr 1fr
      grid-gap: 2rem
      align-items: center
      border-radius: 10px
      @media (max-width: 992px)
        grid-template-columns: 0.25fr 2fr 0.2fr
  &-photo
    display: flex
    justify-content: center
    align-items: flex-start
    justify-content: flex-start
    margin-bottom: auto
    img
      width: 6.25rem
      height: 6.25rem
      border-radius: 12px
      object-fit: cover
      @media (max-width: 768px)
        width: 70px
        height: 70px
  &-content
    h5
      color: $font-black
    p
      color: $font-grey
      font-size: 1.25rem
    .testimonial-author
      font-size: 1.25rem
      color: $font-black
      font-weight: 500
      margin-top: 3.625rem

.slider-buttons
  display: flex
  flex-direction: row
  align-self: flex-end
  padding-bottom: 20px
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

  &:active
    background: rgba(0, 0, 0, 0.8)
    color: white
    transition: 0.3s

  &.right
    margin-left: 10px
</style>
