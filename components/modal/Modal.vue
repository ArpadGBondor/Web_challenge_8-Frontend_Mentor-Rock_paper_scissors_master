<!-- components/Modal.vue -->
<template>
  <div
    v-if="isVisible"
    class="fixed top-0 left-0 w-full h-full bg-modal flex flex-col justify-center items-center z-[1000]"
    @click.self="closeModal"
  >
    <div
      class="bg-white p-4 md:rounded-lg min-h-full min-w-full md:min-h-20 md:min-w-20 flex md:block relative"
    >
      <div class="w-full h-full flex flex-col justify-evenly items-center">
        <h2
          class="mt-[0.5rem] md:mt-0 md:absolute md:top-[1.5rem] md:left-[2rem] text-gray-700 text-[2rem] font-[BarlowSemiCondensed-Bold] uppercase"
        >
          Rules
        </h2>
        <SvgRules
          class="mt-[2.5rem] mb-0 md:mx-[2rem] md:mt-[6rem] md:mb-[1rem]"
        />
        <button
          class="mt-[5rem] md:mt-0 md:absolute md:top-[2.3rem] md:right-[2rem] cursor-pointer"
          @click="closeModal"
        >
          <img class="w-5 h-5" :src="iconClose" alt="Close Icon" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { SvgRules } from '#components';
import iconClose from '~/assets/images/icon-close.svg';

const props = defineProps({
  show: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(['update:show']);
const isVisible = ref(props.show);

watch(
  () => props.show,
  (newVal) => {
    isVisible.value = newVal;
  }
);

const closeModal = () => {
  emit('update:show', false);
};
</script>
