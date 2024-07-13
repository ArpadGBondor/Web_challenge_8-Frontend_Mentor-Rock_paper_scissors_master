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
          :alt="`${type} image`"
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
import Spock from '~/assets/images/icon-spock.svg';

const props = defineProps({
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['md', 'lg'].includes(value),
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
      return Spock;
  }
});
const getSizeMeasures1 = computed(() => {
  switch (props.size) {
    case 'md':
      return 'w-[8.5rem] h-[9rem] md:w-[12.5rem] md:h-[13rem]';
    case 'lg':
      return 'w-[8.5rem] h-[9rem] md:w-[12.5rem] md:h-[13rem] lg:w-[18.5rem] lg:h-[19rem]';
    default:
      return '';
  }
});
const getPositions2 = computed(() => {
  switch (props.size) {
    case 'md':
      return 'left-[-4.25rem] top-[-4.25rem] md:left-[-6.25rem] md:top-[-6.25rem]';
    case 'lg':
      return 'left-[-4.25rem] top-[-4.25rem] md:left-[-6.25rem] md:top-[-6.25rem] lg:left-[-9.25rem] lg:top-[-9.25rem]';
    default:
      return '';
  }
});
const getSizeMeasures2 = computed(() => {
  switch (props.size) {
    case 'md':
      return 'w-[8.5rem] h-[8.5rem] md:w-[12.5rem] md:h-[12.5rem]';
    case 'lg':
      return 'w-[8.5rem] h-[8.5rem] md:w-[12.5rem] md:h-[12.5rem] lg:w-[18.5rem] lg:h-[18.5rem]';
    default:
      return '';
  }
});
const getSizeMeasures3 = computed(() => {
  switch (props.size) {
    case 'md':
      return 'w-[6.5rem] h-[6.5rem] top-[1rem] left-[1rem] shadow-disk-inner-sm md:w-[9.5rem] md:h-[9.5rem] md:top-[1.5rem] md:left-[1.5rem] md:shadow-disk-inner-md';
    case 'lg':
      return 'w-[6.5rem] h-[6.5rem] top-[1rem] left-[1rem] shadow-disk-inner-sm md:w-[9.5rem] md:h-[9.5rem] md:top-[1.5rem] md:left-[1.5rem] md:shadow-disk-inner-md lg:w-[14.5rem] lg:h-[14.5rem] lg:top-[2rem] lg:left-[2rem] lg:shadow-disk-inner-lg';
    default:
      return '';
  }
});
const getImageSize = computed(() => {
  switch (props.size) {
    case 'md':
      return 'w-[2.75rem] md:w-[4.5rem]';
    case 'lg':
      return 'w-[2.75rem] md:w-[4.5rem] lg:w-[6.25rem]';
    default:
      return '';
  }
});
</script>

<style>
/**
* I've experienced an error, where adding shadows using (md: lg:) media 
* queries didn't work in Tailwind, so I ended up adding shadows with custom CSS.
* It's a shame, because I was aiming not to use any custom CSS in this project.
*/
.shadow-none-md {
  box-shadow: 0 0.4rem rgba(0, 0, 0, 0.3), 0 0.4rem rgba(0, 0, 0, 0.5);
  @media (min-width: 768px) {
    box-shadow: 0 0.65rem rgba(0, 0, 0, 0.3), 0 0.65rem rgba(0, 0, 0, 0.5);
  }
}
.shadow-none-lg {
  box-shadow: 0 0.4rem rgba(0, 0, 0, 0.3), 0 0.4rem rgba(0, 0, 0, 0.5);
  @media (min-width: 768px) {
    box-shadow: 0 0.65rem rgba(0, 0, 0, 0.3), 0 0.65rem rgba(0, 0, 0, 0.5);
  }
  @media (min-width: 1024px) {
    box-shadow: 0 0.8rem rgba(0, 0, 0, 0.3), 0 0.8rem rgba(0, 0, 0, 0.5);
  }
}
.shadow-rock-md {
  box-shadow: 0 0.4rem rgba(0, 0, 0, 0.3), 0 0.4rem hsl(349, 71%, 52%);
  @media (min-width: 768px) {
    box-shadow: 0 0.65rem rgba(0, 0, 0, 0.3), 0 0.65rem hsl(349, 71%, 52%);
  }
}
.shadow-rock-lg {
  box-shadow: 0 0.4rem rgba(0, 0, 0, 0.3), 0 0.4rem hsl(349, 71%, 52%);
  @media (min-width: 768px) {
    box-shadow: 0 0.65rem rgba(0, 0, 0, 0.3), 0 0.65rem hsl(349, 71%, 52%);
  }
  @media (min-width: 1024px) {
    box-shadow: 0 0.8rem rgba(0, 0, 0, 0.3), 0 0.8rem hsl(349, 71%, 52%);
  }
}
.shadow-rock-lg-winner {
  box-shadow: 0 0.4rem rgba(0, 0, 0, 0.3), 0 0.4rem hsl(349, 71%, 52%),
    0 0.2rem 0rem 4.6rem rgba(255, 255, 255, 0.03),
    0 0.2rem 0rem 2.9rem rgba(255, 255, 255, 0.03),
    0 0.2rem 0rem 1.1rem rgba(255, 255, 255, 0.03);
  @media (min-width: 768px) {
    box-shadow: 0 0.65rem rgba(0, 0, 0, 0.3), 0 0.65rem hsl(349, 71%, 52%),
      0 0 0rem 9rem rgba(255, 255, 255, 0.03),
      0 0 0rem 5rem rgba(255, 255, 255, 0.03),
      0 0 0rem 2rem rgba(255, 255, 255, 0.03);
  }
  @media (min-width: 1024px) {
    box-shadow: 0 0.8rem rgba(0, 0, 0, 0.3), 0 0.8rem hsl(349, 71%, 52%),
      0 0 0rem 13rem rgba(255, 255, 255, 0.03),
      0 0 0rem 8rem rgba(255, 255, 255, 0.03),
      0 0 0rem 4rem rgba(255, 255, 255, 0.03);
  }
}
.shadow-paper-md {
  box-shadow: 0 0.4rem rgba(0, 0, 0, 0.3), 0 0.4rem hsl(230, 89%, 62%);
  @media (min-width: 768px) {
    box-shadow: 0 0.65rem rgba(0, 0, 0, 0.3), 0 0.65rem hsl(230, 89%, 62%);
  }
}
.shadow-paper-lg {
  box-shadow: 0 0.4rem rgba(0, 0, 0, 0.3), 0 0.4rem hsl(230, 89%, 62%);
  @media (min-width: 768px) {
    box-shadow: 0 0.65rem rgba(0, 0, 0, 0.3), 0 0.65rem hsl(230, 89%, 62%);
  }
  @media (min-width: 1024px) {
    box-shadow: 0 0.8rem rgba(0, 0, 0, 0.3), 0 0.8rem hsl(230, 89%, 62%);
  }
}
.shadow-paper-lg-winner {
  box-shadow: 0 0.4rem rgba(0, 0, 0, 0.3), 0 0.4rem hsl(230, 89%, 62%),
    0 0.2rem 0rem 4.6rem rgba(255, 255, 255, 0.03),
    0 0.2rem 0rem 2.9rem rgba(255, 255, 255, 0.03),
    0 0.2rem 0rem 1.1rem rgba(255, 255, 255, 0.03);
  @media (min-width: 768px) {
    box-shadow: 0 0.65rem rgba(0, 0, 0, 0.3), 0 0.65rem hsl(230, 89%, 62%),
      0 0 0rem 9rem rgba(255, 255, 255, 0.03),
      0 0 0rem 5rem rgba(255, 255, 255, 0.03),
      0 0 0rem 2rem rgba(255, 255, 255, 0.03);
  }
  @media (min-width: 1024px) {
    box-shadow: 0 0.8rem rgba(0, 0, 0, 0.3), 0 0.8rem hsl(230, 89%, 62%),
      0 0 0rem 13rem rgba(255, 255, 255, 0.03),
      0 0 0rem 8rem rgba(255, 255, 255, 0.03),
      0 0 0rem 4rem rgba(255, 255, 255, 0.03);
  }
}
.shadow-scissors-md {
  box-shadow: 0 0.4rem rgba(0, 0, 0, 0.3), 0 0.4rem hsl(39, 89%, 49%);
  @media (min-width: 768px) {
    box-shadow: 0 0.65rem rgba(0, 0, 0, 0.3), 0 0.65rem hsl(39, 89%, 49%);
  }
}
.shadow-scissors-lg {
  box-shadow: 0 0.4rem rgba(0, 0, 0, 0.3), 0 0.4rem hsl(39, 89%, 49%);
  @media (min-width: 768px) {
    box-shadow: 0 0.65rem rgba(0, 0, 0, 0.3), 0 0.65rem hsl(39, 89%, 49%);
  }
  @media (min-width: 1024px) {
    box-shadow: 0 0.8rem rgba(0, 0, 0, 0.3), 0 0.8rem hsl(39, 89%, 49%);
  }
}
.shadow-scissors-lg-winner {
  box-shadow: 0 0.4rem rgba(0, 0, 0, 0.3), 0 0.4rem hsl(39, 89%, 49%),
    0 0.2rem 0rem 4.6rem rgba(255, 255, 255, 0.03),
    0 0.2rem 0rem 2.9rem rgba(255, 255, 255, 0.03),
    0 0.2rem 0rem 1.1rem rgba(255, 255, 255, 0.03);
  @media (min-width: 768px) {
    box-shadow: 0 0.65rem rgba(0, 0, 0, 0.3), 0 0.65rem hsl(39, 89%, 49%),
      0 0 0rem 9rem rgba(255, 255, 255, 0.03),
      0 0 0rem 5rem rgba(255, 255, 255, 0.03),
      0 0 0rem 2rem rgba(255, 255, 255, 0.03);
  }
  @media (min-width: 1024px) {
    box-shadow: 0 0.8rem rgba(0, 0, 0, 0.3), 0 0.8rem hsl(39, 89%, 49%),
      0 0 0rem 13rem rgba(255, 255, 255, 0.03),
      0 0 0rem 8rem rgba(255, 255, 255, 0.03),
      0 0 0rem 4rem rgba(255, 255, 255, 0.03);
  }
}
</style>
