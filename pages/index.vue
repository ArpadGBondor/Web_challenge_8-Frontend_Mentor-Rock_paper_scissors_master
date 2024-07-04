<template>
  <div class="mt-[16rem] mb-[6rem] overflow-scroll w-full">
    <div>
      <h1 class="text-4xl text-bold">Test</h1>
      <form class="m-8 max-w-2xl" @submit="onSubmit">
        <div class="flex justify-between items-center w-full">
          <label class="m-4" for="message">Send Notification</label>
          <input
            class="text-score-text text-xl m-4 p-2"
            type="text"
            name="message"
            id="message"
            v-model="message"
          />
        </div>
      </form>
    </div>
    <div class="m-2 p-2 border-[1px] border-white flex flex-row gap-4">
      <Disk size="sm" type="rock" />
      <Disk size="sm" type="paper" />
      <Disk size="sm" type="scissors" />
    </div>
    <div class="m-2 p-2 border-[1px] border-white flex flex-row gap-4">
      <Disk size="md" type="rock" />
      <Disk size="md" type="paper" />
      <Disk size="md" type="scissors" />
    </div>
    <div class="m-2 p-2 border-[1px] border-white flex flex-row gap-4">
      <Disk size="lg" type="rock" />
      <Disk size="lg" type="paper" />
      <Disk size="lg" type="scissors" />
    </div>
    <div class="text-2xl text-center">
      <h2>Game Store</h2>
      <p>score: {{ score }}</p>
      <p>stage: {{ stage }}</p>
      <p>player choice: {{ player }}</p>
      <p>computer choice: {{ computer }}</p>
      <p>game outcome: {{ outcome }}</p>
    </div>
    <div>
      <h2>Actions:</h2>
      <div class="flex justify-between items-center w-full">
        <label class="m-4" for="newGame"
          >Start New Game (only in stage 4)</label
        >
        <input
          type="button"
          name="newGame"
          value="Start New Game"
          @click="onNewGame"
          class="bg-white text-score-text m-4 p-2"
        />
      </div>
      <div class="flex justify-between items-center w-full">
        <label class="m-4" for="chooseRock"
          >Choose Rock (only in stage 1)</label
        >
        <input
          type="button"
          name="chooseRock"
          value="Choose Rock"
          @click="onRockChoice"
          class="bg-white text-score-text m-4 p-2"
        />
      </div>
      <div class="flex justify-between items-center w-full">
        <label class="m-4" for="choosePaper"
          >Choose Paper (only in stage 1)</label
        >
        <input
          type="button"
          name="choosePaper"
          value="Choose Paper"
          @click="onPaperChoice"
          class="bg-white text-score-text m-4 p-2"
        />
      </div>
      <div class="flex justify-between items-center w-full">
        <label class="m-4" for="chooseScissors"
          >Choose Scissors (only in stage 1)</label
        >
        <input
          type="button"
          name="chooseScissors"
          value="Choose Scissors"
          @click="onScissorsChoice"
          class="bg-white text-score-text m-4 p-2"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Disk } from '#components';
import { storeToRefs } from 'pinia';
import { useNotifyStore, NotificationType } from '../stores/notify.store';
import { useGameStore, ChoiceType } from '../stores/game.store';

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
const onIncrement = () => gameStore.incrementScore();
const onDecrement = () => gameStore.decrementScore();
const onNewGame = () => gameStore.startNewGame();
const onPaperChoice = () => gameStore.playerMove(ChoiceType.Paper);
const onRockChoice = () => gameStore.playerMove(ChoiceType.Rock);
const onScissorsChoice = () => gameStore.playerMove(ChoiceType.Scissors);
</script>
