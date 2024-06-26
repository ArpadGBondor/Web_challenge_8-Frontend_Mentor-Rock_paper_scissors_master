<template>
  <section
    class="absolute top-10 left-wide-middle w-wide border-[3px] border-border-gray rounded-2xl p-2 flex flex-row justify-between items-stretch uppercase"
  >
    <h2 class="font-semibold leading-[0.8] mx-4 my-3 text-3xl">
      Rock<br />Paper<br />Scissors
    </h2>
    <div
      class="bg-white text-dark-blue mx-2 my-1 p-2 w-[7.5rem] rounded-md flex flex-col items-center justify-center"
    >
      <div class="text-blue-700 text-sm tracking-widest">Score</div>
      <div
        class="text-gray-600 text-[3rem] leading-none font-[BarlowSemiCondensed-Bold]"
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
