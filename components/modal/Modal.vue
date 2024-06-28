<!-- components/Modal.vue -->
<template>
  <div
    v-if="isVisible"
    class="fixed top-0 left-0 w-full h-full bg-modal flex justify-center items-center z-[1000]"
    @click.self="closeModal"
  >
    <div class="bg-white p-4 rounded-md min-h-20 min-w-20 relative">
      <button
        class="absolute top-[1.9rem] right-[1.6rem] cursor-pointer"
        @click="closeModal"
      >
        <img class="w-4 h-4" :src="iconClose" alt="Close Icon" />
      </button>
      <div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';
import iconClose from '../../assets/images/icon-close.svg';

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
