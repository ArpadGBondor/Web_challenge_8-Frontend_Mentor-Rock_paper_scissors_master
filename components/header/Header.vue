<template>
  <header
    class="absolute top-[1.9rem] lg:top-[3rem] self-center w-[19.75rem] md:w-[30rem] lg:w-[44rem] border-[3px] border-border-gray rounded-md lg:rounded-2xl p-2 flex flex-row justify-between items-stretch uppercase"
  >
    <h2
      class="font-semibold leading-[0.8] mx-4 lg:mx-6 mt-[0.9rem] mb-[0.8rem] lg:mb-[1.2rem] text-[1.25rem] lg:text-[2.5rem]"
    >
      Rock<br />Paper<br />Scissors
    </h2>
    <div
      class="bg-white text-dark-blue mx-[0.15rem] lg:mx-[1rem] my-[0.1rem] lg:my-[0.5rem] p-1 lg:p-2 w-[5rem] lg:w-[9.25rem] rounded-md flex flex-col items-center justify-center"
    >
      <div
        class="text-score-text text-[0.65rem] lg:text-[1.1rem] leading-[1.2] tracking-widest mt-[0.25rem]"
      >
        Score
      </div>
      <div
        class="text-dark-text text-[2.5rem] lg:text-[4rem] leading-none font-[BarlowSemiCondensed-Bold]"
      >
        {{ `${score}` }}
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useGameStore } from '~/stores/game.store';
const gameStore = useGameStore();
const { score } = storeToRefs(gameStore);
</script>
