<template>
  <section
    class="absolute top-[3rem] self-center w-[44rem] border-[3px] border-border-gray rounded-2xl p-2 flex flex-row justify-between items-stretch uppercase"
  >
    <h2
      class="font-semibold leading-[0.8] mx-6 mt-[0.9rem] mb-[1.2rem] text-[2.5rem]"
    >
      Rock<br />Paper<br />Scissors
    </h2>
    <div
      class="bg-white text-dark-blue mx-[1rem] my-[0.5rem] p-2 w-[9.25rem] rounded-md flex flex-col items-center justify-center"
    >
      <div class="text-score-text text-[1.1rem] leading-[1.2] tracking-widest">
        Score
      </div>
      <div
        class="text-dark-text text-[4rem] leading-none font-[BarlowSemiCondensed-Bold]"
      >
        {{ `${score}` }}
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useGameStore } from '../../stores/game.store';
const gameStore = useGameStore();
const { score } = storeToRefs(gameStore);
</script>
