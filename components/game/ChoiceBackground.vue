<template>
  <div class="relative left-center top-center w-0 h-0 overflow-visible">
    <img
      class="min-w-[18rem] min-h-[14rem] left-[-9rem] top-[-7rem] absolute transition-[all] duration-1000"
      :class="{ 'opacity-0': stage !== StageType.PlayerChoice }"
      :src="TriangleImage"
      alt="TriangleImage"
    />
  </div>
</template>

<script setup>
import TriangleImage from '~/assets/images/bg-triangle.svg';
import { storeToRefs } from 'pinia';
import { useGameStore, StageType } from '~/stores/game.store';

const gameStore = useGameStore();
const { stage } = storeToRefs(gameStore);
</script>

<style></style>
