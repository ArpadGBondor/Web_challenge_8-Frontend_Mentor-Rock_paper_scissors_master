<template>
  <div>
    <h1 class="text-4xl text-bold">Test</h1>
    <form class="m-8 w-100" @submit="onSubmit">
      <div class="flex justify-between items-center w-full">
        <label class="m-4" for="message">Send Notification</label>
        <input
          class="text-score-text p-2 text-xl m-4 p-2"
          type="text"
          name="message"
          id="message"
          v-model="message"
        />
      </div>
      <div class="flex justify-between items-center w-full">
        <label class="m-4" for="increment">Add Score</label>
        <input
          type="button"
          name="increment"
          value="Increment"
          @click="onIncrement"
          class="bg-white text-score-text m-4 p-2"
        />
      </div>
    </form>
  </div>
  <div class="m-2 p-2 border-[1px] border-white">
    <Paper />
  </div>
</template>

<script setup lang="ts">
import { Paper } from '#components';
import { useNotifyStore, NotificationType } from '../stores/notify.store';
import { useGameStore } from '../stores/game.store';

definePageMeta({
  layout: 'default',
});

const notifyStore = useNotifyStore();
const gameStore = useGameStore();

let message = '';

const onSubmit = (event: any) => {
  event.preventDefault();

  notifyStore.notify(message, NotificationType.Error);
};
const onIncrement = () => {
  gameStore.increment();
};
</script>
