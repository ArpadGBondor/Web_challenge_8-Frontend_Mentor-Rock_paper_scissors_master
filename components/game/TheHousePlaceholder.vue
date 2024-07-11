<template>
  <!-- Stage 2 - House picked - shadow -->
  <div class="relative left-center top-center w-0 h-0 overflow-visible">
    <div
      class="relative w-0 h-0 flex justify-center items-center transition-opacity duration-1000 left-[11rem] top-[4rem] overflow-visible"
      :class="[
        {
          'opacity-15': stage === StageType.ComputerChoice,
        },
        {
          'opacity-0': stage !== StageType.ComputerChoice,
        },
      ]"
    >
      <div
        class="absolute bg-black w-[6.5rem] h-[6.5rem] md:w-[9.5rem] md:h-[9.5rem] lg:w-[14.5rem] lg:h-[14.5rem] rounded-full"
      ></div>
    </div>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia';
import { useGameStore, StageType } from '~/stores/game.store';

const gameStore = useGameStore();
const { stage } = storeToRefs(gameStore);
</script>
