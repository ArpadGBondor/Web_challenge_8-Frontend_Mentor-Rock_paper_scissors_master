<template>
  <button
    class="absolute bottom-[2rem] right-[2rem] border-[2px] border-border-gray focus:border-gray-400 hover:border-white rounded-lg px-[2.15rem] py-[0.55rem] text-[1.05rem] leading-[1.2] tracking-widest uppercase outline-none"
    @click="toggleRules()"
  >
    Rules
  </button>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useGameStore } from '../stores/game.store';
const gameStore = useGameStore();
const { showRules } = storeToRefs(gameStore);

const toggleRules = () => {
  gameStore.setShowRules(!showRules.value);
};
</script>
