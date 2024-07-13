<template>
  <div class="relative left-center top-center w-0 h-0 overflow-visible">
    <div
      class="relative w-0 h-0 flex justify-center items-center transition-top-left duration-1000"
      :class="[
        {
          'left-[0] top-[100vh]': stage !== StageType.Over,
        },
        {
          'left-[0] top-[10rem] lg:top-[3rem]': stage === StageType.Over,
        },
      ]"
    >
      <div>
        <p
          class="font-semibold text-white text-[3.5rem] uppercase text-center"
          v-html="getOutcomeText"
        />
        <button
          class="bg-white text-dark-text hover:text-red-500 text block uppercase w-full text-center p-3 mt-2 rounded-lg text-[1rem] tracking-widest cursor-pointer"
          @click="onNewGame"
        >
          Play&nbsp;again
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useGameStore, StageType, OutcomeType } from '~/stores/game.store';

const gameStore = useGameStore();
const { outcome, stage } = storeToRefs(gameStore);

const getOutcomeText = computed(() => {
  switch (outcome.value) {
    case OutcomeType.Won:
      return 'You&nbsp;win';
    case OutcomeType.Lost:
      return 'You&nbsp;lose';
    case OutcomeType.Draw:
      return 'Draw';
    default:
      return '';
  }
});
const onNewGame = () => gameStore.startNewGame();
</script>

<style></style>
