<template>
  <!-- The House Picked -->
  <div class="relative left-center top-center w-0 h-0 overflow-visible">
    <Disk
      :type="
        computer === ChoiceType.Rock
          ? 'rock'
          : computer === ChoiceType.Paper
          ? 'paper'
          : computer === ChoiceType.Scissors
          ? 'scissors'
          : 'none'
      "
      size="lg"
      :invisible="computer === ChoiceType.None || stage === StageType.NewGame"
      class="transition-top-left-opacity duration-1000"
      :class="[
        {
          'left-[6rem] top-[-5rem] md:left-[8rem] md:top-[-7rem] lg:left-[11rem] lg:top-[4rem]':
            stage !== StageType.Over && stage !== StageType.NewGame,
        },
        {
          'left-[6rem] top-[-5rem] md:left-[8rem] md:top-[-7rem] lg:left-[19rem] lg:top-[4rem]':
            stage === StageType.Over || stage === StageType.NewGame,
        },
        {
          'opacity-100': stage !== StageType.NewGame,
        },
        {
          'opacity-0': stage === StageType.NewGame,
        },
      ]"
      :winner-highlight="outcome === OutcomeType.Lost"
    />
  </div>
</template>

<script setup>
import { Disk } from '#components';
import { storeToRefs } from 'pinia';
import {
  useGameStore,
  ChoiceType,
  StageType,
  OutcomeType,
} from '~/stores/game.store';

const gameStore = useGameStore();
const { stage, computer, outcome } = storeToRefs(gameStore);
</script>
