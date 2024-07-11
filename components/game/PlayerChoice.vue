<template>
  <div
    v-if="stage === StageType.PlayerChoice || player === winnerChoice"
    class="relative left-center top-center w-0 h-0 overflow-visible"
  >
    <Disk
      :type="props.type"
      :size="stage === StageType.PlayerChoice ? 'md' : 'lg'"
      class="transition-top-left-opacity duration-1000"
      :invisible="stage === StageType.NewGame"
      :class="[
        diskPositionStage1,
        {
          'left-[-11rem] top-[4rem]':
            stage !== StageType.PlayerChoice &&
            stage !== StageType.Over &&
            stage !== StageType.NewGame,
        },
        {
          'left-[-21rem] top-[4rem]':
            stage === StageType.Over || stage === StageType.NewGame,
        },
        {
          'opacity-100': stage !== StageType.NewGame,
        },
        {
          'opacity-0': stage === StageType.NewGame,
        },
      ]"
      :winner-highlight="outcome === OutcomeType.Won && player === winnerChoice"
      @click="onClick"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue';

import { Disk } from '#components';
import { storeToRefs } from 'pinia';
import {
  useGameStore,
  ChoiceType,
  StageType,
  OutcomeType,
} from '~/stores/game.store';

const gameStore = useGameStore();
const { stage, player, outcome } = storeToRefs(gameStore);

const props = defineProps({
  type: {
    type: String,
    default: 'paper',
    validator: (value) => ['rock', 'paper', 'scissors'].includes(value),
  },
});

const onPaperChoice = () => gameStore.playerMove(ChoiceType.Paper);
const onRockChoice = () => gameStore.playerMove(ChoiceType.Rock);
const onScissorsChoice = () => gameStore.playerMove(ChoiceType.Scissors);

const onClick = () => {
  switch (props.type) {
    case 'rock':
      return onRockChoice();
    case 'paper':
      return onPaperChoice();
    case 'scissors':
      return onScissorsChoice();
    default:
      return;
  }
};

const diskPositionStage1 = computed(() => {
  if (stage.value !== StageType.PlayerChoice) return '';
  switch (props.type) {
    case 'rock':
      return 'left-0 top-[5rem] md:top-[5.75rem] lg:top-[6.5rem] cursor-pointer';
    case 'paper':
      return 'left-[-6rem] top-[-5rem] md:left-[-7.5rem] md:top-[-6rem] lg:left-[-9rem] lg:top-[-7rem] cursor-pointer';
    case 'scissors':
      return 'left-[6rem] top-[-5rem] md:left-[7.5rem] md:top-[-6rem] lg:left-[9rem] lg:top-[-7rem] cursor-pointer';
    default:
      return '';
  }
});

const winnerChoice = computed(() => {
  switch (props.type) {
    case 'rock':
      return ChoiceType.Rock;
    case 'paper':
      return ChoiceType.Paper;
    case 'scissors':
      return ChoiceType.Scissors;
    default:
      return ChoiceType.None;
  }
});
</script>
