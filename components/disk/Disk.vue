<template>
  <div class="relative w-0 h-0 rounded-full flex justify-center items-center">
    <div
      class="absolute rounded-full transition-top-left-width-height-opacity-shadow duration-1000 opacity-0"
      :class="[
        getPositions2,
        getTypeColours,
        getSizeMeasures2,
        `shadow-${type}-${size}${winnerHighlight ? '-winner' : ''}`,
        { 'opacity-100': !invisible },
      ]"
    >
      <div
        class="bg-white absolute rounded-full flex justify-center items-center transition-all duration-1000 opacity-0"
        :class="[{ 'opacity-100': !invisible }, getSizeMeasures3]"
      >
        <img
          :src="getTypeImage"
          alt="Paper image"
          class="transition-all duration-1000"
          :class="getImageSize"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

import Rock from '~/assets/images/icon-rock.svg';
import Paper from '~/assets/images/icon-paper.svg';
import Scissors from '~/assets/images/icon-scissors.svg';

const props = defineProps({
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value),
  },
  type: {
    type: String,
    default: 'none',
    validator: (value) => ['rock', 'paper', 'scissors', 'none'].includes(value),
  },
  invisible: {
    type: Boolean,
    default: false,
  },
  winnerHighlight: {
    type: Boolean,
    default: false,
  },
});

// Computed property to determine background type
const getTypeColours = computed(() => {
  switch (props.type) {
    case 'rock':
      return 'bg-rock';
    case 'paper':
      return 'bg-paper';
    case 'scissors':
      return 'bg-scissors';
    default:
      return '';
  }
});
const getTypeImage = computed(() => {
  switch (props.type) {
    case 'rock':
      return Rock;
    case 'paper':
      return Paper;
    case 'scissors':
      return Scissors;
    default:
      return '';
  }
});
const getSizeMeasures1 = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'w-[8.5rem] h-[9rem]';
    case 'md':
      return 'w-[12.5rem] h-[13rem]';
    case 'lg':
      return 'w-[18.5rem] h-[19rem]';
    default:
      return '';
  }
});
const getPositions2 = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'left-[-4.25rem] top-[-4.25rem]';
    case 'md':
      return 'left-[-6.25rem] top-[-6.25rem]';
    case 'lg':
      return 'left-[-9.25rem] top-[-9.25rem]';
    default:
      return '';
  }
});
const getSizeMeasures2 = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'w-[8.5rem] h-[8.5rem]';
    case 'md':
      return 'w-[12.5rem] h-[12.5rem]';
    case 'lg':
      return 'w-[18.5rem] h-[18.5rem]';
    default:
      return '';
  }
});
const getSizeMeasures3 = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'w-[6.5rem] h-[6.5rem] top-[1rem] left-[1rem] shadow-disk-inner-sm';
    case 'md':
      return 'w-[9.5rem] h-[9.5rem] top-[1.5rem] left-[1.5rem] shadow-disk-inner-md';
    case 'lg':
      return 'w-[14.5rem] h-[14.5rem] top-[2rem] left-[2rem] shadow-disk-inner-lg';
    default:
      return '';
  }
});
const getImageSize = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'w-[2.75rem]';
    case 'md':
      return 'w-[4.5rem]';
    case 'lg':
      return 'w-[6.25rem]';
    default:
      return '';
  }
});
</script>

<style></style>
