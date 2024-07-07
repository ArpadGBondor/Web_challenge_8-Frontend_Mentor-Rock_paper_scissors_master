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
        class="relative w-0 h-0 flex justify-center items-center transition-top-left-opacity duration-1000"
        :class="[
          {
            'left-[-100vw] top-[-10rem]': player === ChoiceType.None,
          },
          {
            'left-[-11rem] top-[-10rem]':
              player !== ChoiceType.None &&
              (stage === StageType.PlayerChoice ||
                stage === StageType.ComputerChoice ||
                stage === StageType.Results),
          },
          {
            'left-[-21rem] top-[-10rem]':
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
          class="text-white text-2xl text-nowrap tracking-widest uppercase absolute text-center"
        >
          You picked
        </p>
      </div>
    </div>
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
            'left-[11rem] top-[4rem]':
              stage !== StageType.Over && stage !== StageType.NewGame,
          },
          {
            'left-[19rem] top-[4rem]':
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
    <div
      v-if="stage === StageType.PlayerChoice || player === ChoiceType.Paper"
      class="relative left-center top-center w-0 h-0 overflow-visible"
    >
      <Disk
        type="paper"
        :size="stage === StageType.PlayerChoice ? 'md' : 'lg'"
        class="transition-top-left-opacity duration-1000"
        :invisible="stage === StageType.NewGame"
        :class="[
          {
            'left-[-9rem] top-[-7rem] cursor-pointer':
              stage === StageType.PlayerChoice,
          },
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
        :winner-highlight="
          outcome === OutcomeType.Won && player === ChoiceType.Paper
        "
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
        class="transition-top-left-opacity duration-1000"
        :invisible="stage === StageType.NewGame"
        :class="[
          {
            'left-[9rem] top-[-7rem] cursor-pointer':
              stage === StageType.PlayerChoice,
          },
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
        :winner-highlight="
          outcome === OutcomeType.Won && player === ChoiceType.Scissors
        "
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
        class="transition-top-left-opacity duration-1000"
        :invisible="stage === StageType.NewGame"
        :class="[
          {
            'left-0 top-[7rem] cursor-pointer':
              stage === StageType.PlayerChoice,
          },
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
        :winner-highlight="
          outcome === OutcomeType.Won && player === ChoiceType.Rock
        "
        @click="onRockChoice"
      />
    </div>
    <Outcome />
  </div>
</template>

<script setup lang="ts">
import { Disk, Outcome } from '#components';
import { storeToRefs } from 'pinia';
import { useNotifyStore, NotificationType } from '../stores/notify.store';
import {
  useGameStore,
  ChoiceType,
  StageType,
  OutcomeType,
} from '../stores/game.store';
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
const onPaperChoice = () => gameStore.playerMove(ChoiceType.Paper);
const onRockChoice = () => gameStore.playerMove(ChoiceType.Rock);
const onScissorsChoice = () => gameStore.playerMove(ChoiceType.Scissors);
</script>
