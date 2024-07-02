<template>
  <div class="relative" :class="getSizeMeasures1">
    <div
      class="absolute top-0 left-0 rounded-full"
      :class="[getTypeColours, getSizeMeasures2, `shadow-${type}-${size}`]"
    >
      <div
        class="bg-white absolute rounded-full flex justify-center items-center"
        :class="getSizeMeasures3"
      >
        <img :src="getTypeImage" alt="Paper image" :class="getImageSize" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

import Rock from '../../assets/images/icon-rock.svg';
import Paper from '../../assets/images/icon-paper.svg';
import Scissors from '../../assets/images/icon-scissors.svg';

const props = defineProps({
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value),
  },
  type: {
    type: String,
    default: 'paper',
    validator: (value) => ['rock', 'paper', 'scissors'].includes(value),
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
      return 'w-[6rem]';
    default:
      return '';
  }
});
</script>

<style>
.bg-rock {
  background: linear-gradient(hsl(349, 70%, 56%), hsl(349, 71%, 52%));
}
.bg-paper {
  background: linear-gradient(hsl(230, 89%, 65%), hsl(230, 89%, 62%));
}
.bg-scissors {
  background: linear-gradient(hsl(40, 84%, 53%), hsl(39, 89%, 49%));
}
</style>
