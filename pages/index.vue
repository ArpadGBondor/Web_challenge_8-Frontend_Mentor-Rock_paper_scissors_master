<template>
  <div
    class="absolute w-full h-play-area top-[14rem] left-0 flex justify-center items-center"
  >
    <div class="relative left-center top-center w-0 h-0 overflow-visible">
      <img
        class="min-w-[18rem] min-h-[14rem] left-[-9rem] top-[-7rem] absolute transition-[all] duration-1000"
        :class="{ 'opacity-0': stage !== StageType.PlayerChoice }"
        :src="TriangleImage"
        alt="TriangleImage"
      />
    </div>
    <div class="relative left-center top-center w-0 h-0 overflow-visible">
      <Disk
        :type="
          computer === ChoiceType.Rock
            ? 'rock'
            : computer === ChoiceType.Paper
            ? 'paper'
            : 'scissors'
        "
        size="lg"
        :invisible="computer === ChoiceType.None"
        class="left-[11rem] top-0"
      />
    </div>
    <div
      v-if="stage === StageType.PlayerChoice || player === ChoiceType.Paper"
      class="relative left-center top-center w-0 h-0 overflow-visible"
    >
      <Disk
        type="paper"
        :size="stage === StageType.PlayerChoice ? 'md' : 'lg'"
        class="transition-top-left duration-1000"
        :class="[
          {
            'left-[-9rem] top-[-7rem] cursor-pointer':
              stage === StageType.PlayerChoice,
          },
          { 'left-[-11rem] top-0': stage !== StageType.PlayerChoice },
        ]"
        @click="onPaperChoice"
      />
    </div>
    <div
      v-if="stage === StageType.PlayerChoice || player === ChoiceType.Scissors"
      class="relative left-center top-center w-0 h-0 overflow-visible"
    >
      <Disk
        type="scissors"
        :size="stage === StageType.PlayerChoice ? 'md' : 'lg'"
        class="transition-top-left duration-1000"
        :class="[
          {
            'left-[9rem] top-[-7rem] cursor-pointer':
              stage === StageType.PlayerChoice,
          },
          {
            'left-[-11rem] top-0': stage !== StageType.PlayerChoice,
          },
        ]"
        @click="onScissorsChoice"
      />
    </div>
    <div
      v-if="stage === StageType.PlayerChoice || player === ChoiceType.Rock"
      class="relative left-center top-center w-0 h-0 overflow-visible"
    >
      <Disk
        type="rock"
        :size="stage === StageType.PlayerChoice ? 'md' : 'lg'"
        class="transition-top-left duration-1000"
        :class="[
          {
            'left-0 top-[7rem] cursor-pointer':
              stage === StageType.PlayerChoice,
          },
          { 'left-[-11rem] top-0': stage !== StageType.PlayerChoice },
        ]"
        @click="onRockChoice"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Disk } from '#components';
import { storeToRefs } from 'pinia';
import { useNotifyStore, NotificationType } from '../stores/notify.store';
import { useGameStore, ChoiceType, StageType } from '../stores/game.store';
import TriangleImage from '../assets/images/bg-triangle.svg';

const notifyStore = useNotifyStore();
const gameStore = useGameStore();
const { score, stage, player, computer, outcome } = storeToRefs(gameStore);

definePageMeta({
  layout: 'default',
});

let message = '';

const onSubmit = (event: any) => {
  event.preventDefault();

  notifyStore.notify(message, NotificationType.Error);
};
const onNewGame = () => gameStore.startNewGame();
const onPaperChoice = () => gameStore.playerMove(ChoiceType.Paper);
const onRockChoice = () => gameStore.playerMove(ChoiceType.Rock);
const onScissorsChoice = () => gameStore.playerMove(ChoiceType.Scissors);
</script>
