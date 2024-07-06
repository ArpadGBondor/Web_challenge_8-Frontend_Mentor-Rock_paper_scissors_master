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
      <div
        class="relative w-0 h-0 flex justify-center items-center transition-top-left duration-1000"
        :class="[
          {
            'left-[-100rem] top-[-10rem]': stage === StageType.PlayerChoice,
          },
          {
            'left-[-11rem] top-[-10rem]': stage !== StageType.PlayerChoice,
          },
        ]"
      >
        <p
          class="text-white text-2xl text-nowrap tracking-widest uppercase absolute text-center"
        >
          You picked
        </p>
      </div>
    </div>
    <div class="relative left-center top-center w-0 h-0 overflow-visible">
      <div
        class="relative w-0 h-0 flex justify-center items-center transition-top-left duration-1000"
        :class="[
          {
            'left-[100rem] top-[-10rem]': stage === StageType.PlayerChoice,
          },
          {
            'left-[11rem] top-[-10rem]': stage !== StageType.PlayerChoice,
          },
        ]"
      >
        <p
          class="text-white text-2xl text-nowrap tracking-widest uppercase absolute text-center"
        >
          The house picked
        </p>
      </div>
    </div>
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
          class="absolute bg-black w-[14.5rem] h-[14.5rem] rounded-full"
        ></div>
      </div>
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
        class="left-[11rem] top-[4rem]"
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
          { 'left-[-11rem] top-[4rem]': stage !== StageType.PlayerChoice },
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
            'left-[-11rem] top-[4rem]': stage !== StageType.PlayerChoice,
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
          { 'left-[-11rem] top-[4rem]': stage !== StageType.PlayerChoice },
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
