<template>
  <div class="relative left-center top-center w-0 h-0 overflow-visible">
    <div
      class="relative w-0 h-0 flex justify-center items-center transition-top-left-opacity duration-1000"
      :class="[
        {
          'left-[100vw] top-[-10rem]': player === ChoiceType.None,
        },
        {
          'left-[11rem] top-[-10rem]':
            player !== ChoiceType.None &&
            (stage === StageType.PlayerChoice ||
              stage === StageType.ComputerChoice ||
              stage === StageType.Results),
        },
        {
          'left-[19rem] top-[-10rem]':
            stage === StageType.Over ||
            (stage === StageType.NewGame && player !== ChoiceType.None),
        },
        {
          'opacity-100': stage !== StageType.NewGame,
        },
        {
          'opacity-0': stage === StageType.NewGame,
        },
      ]"
    >
      <p
        class="text-white text-2xl tracking-widest uppercase absolute text-center"
      >
        The&nbsp;house&nbsp;picked
      </p>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useGameStore, ChoiceType, StageType } from '~/stores/game.store';

const gameStore = useGameStore();
const { stage, player } = storeToRefs(gameStore);
</script>
