<template>
  <div class="question-block">
    <div
      class="question-item"
      v-for="(item, index) in questions"
      :key="index"
      @click="toggleAnswer(index)"
      :class="{ open: item.open }"
    >
      <div class="question-number-wrapper">
        <div class="number">0{{ index }}</div>
        <div class="question">
          <h4>{{ item.question }}</h4>
        </div>
        <div class="filler"></div>
        <div class="arrow-circle" :class="{ open: item.open }">
          <svg
            data-name="1-Arrow Up"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="25"
            height="25"
          >
            <path
              d="m26.71 10.29-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.41V32h2V3.41l8.29 8.29z"
            />
          </svg>
        </div>
      </div>
      <transition
        name="expand"
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave"
      >
        <div class="answer-wrapper" v-show="item.open" ref="answer">
          <p class="answer">
            {{ item.answer }}
          </p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { reactive, nextTick } from "vue";

const questions = reactive([
  {
    question: "Как долго длится разработка дизайн-проекта?",
    answer:
      "Разработка дизайн-проекта обычно занимает от 2 до 4 недель, в зависимости от сложности и масштаба объекта. Мы стремимся оптимизировать процесс, чтобы учесть все ваши пожелания и создать качественный результат в разумные сроки. Важно, чтобы на каждом этапе вы были уверены в том, что проект движется в правильном направлении.",
    open: false,
  },
  {
    question: "Какие материалы используются для ремонта?",
    answer:
      "Мы используем только проверенные и качественные материалы, которые подбираются индивидуально под проект. Наши решения экологичны, долговечны и соответствуют современным стандартам безопасности.",
    open: false,
  },
  {
    question: "Можно ли заказать только дизайн без ремонта?",
    answer:
      "Да, вы можете заказать только разработку дизайн-проекта. Мы предоставим всю необходимую документацию и рекомендации для его реализации вашими силами или другими подрядчиками.",
    open: false,
  },
  {
    question: "Сколько стоит проект под ключ?",
    answer:
      "Стоимость проекта зависит от площади, сложности работ и используемых материалов. Мы предлагаем прозрачное ценообразование и индивидуальный расчёт для каждого клиента.",
    open: false,
  },
  {
    question: "Как вы контролируете качество на всех этапах?",
    answer:
      "Мы контролируем процесс на каждом этапе: от подбора материалов до сдачи объекта. Регулярные проверки и чёткая координация работ гарантируют высокий уровень результата.",
    open: false,
  },
]);

const toggleAnswer = async (index) => {
  questions[index].open = !questions[index].open;
  await nextTick();
};

const beforeEnter = (el) => {
  el.style.height = "0";
  el.style.opacity = "0";
};

const enter = (el) => {
  const height = el.scrollHeight;
  el.style.transition = "height 0.3s ease, opacity 0.3s ease";
  el.style.height = `${height}px`;
  el.style.opacity = "1";
  el.addEventListener(
    "transitionend",
    () => {
      el.style.height = "auto";
    },
    { once: true }
  );
};

const leave = (el) => {
  el.style.height = `${el.scrollHeight}px`;
  el.style.opacity = "1";
  void el.offsetHeight; // Trigger reflow
  el.style.transition = "height 0.3s ease, opacity 0.3s ease";
  el.style.height = "0";
  el.style.opacity = "0";
};
</script>

<style lang="sass" scoped>
.question-block
  cursor: pointer
  .question-item
    border-top: 1px solid $font-grey
    padding: 2rem 0 2rem 0
    &.open
      border-top: 3px solid $font-black
    .question-number-wrapper
      display: flex
      flex-direction: row
      align-items: flex-start
      .number
        font-size: 1rem
        color: $font-grey
        margin-right: 3.3rem
        @media (max-width: 576px)
          margin-right: 1.3rem
      .filler
        flex-grow: 1
      h4
        color: $font-black
        font-size: 2rem
        @media (max-width: 1200px)
          font-size: 1.7rem
        @media (max-width: 768px)
          font-size: 1.6rem
        @media (max-width: 576px)
          font-size: 1.5rem
      &:hover
        color: $font-black

    .arrow-circle
      display: flex
      justify-content: center
      align-items: center
      align-self: start
      margin-left: 0 auto
      width: 3.75rem
      height: 3.75rem
      border: 1px solid $font-grey
      border-radius: 50%
      transition: transform 0.3s ease
      transform: rotate(45deg)
      @media (max-width: 768px)
        width: 3rem
        height: 3rem
      &.open
        transform: rotate(-90deg)
      svg
        @media (max-width: 768px)
          width: 15px
          height: 15px

    .answer-wrapper
      overflow: hidden
      height: auto
      opacity: 1

    p
      color: $font-grey
</style>
