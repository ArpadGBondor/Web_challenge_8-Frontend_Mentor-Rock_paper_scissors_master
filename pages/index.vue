<template>
  <div class="mt-[16rem] overflow-scroll w-full">
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
  </div>
</template>

<script setup lang="ts">
import { Disk } from '#components';
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
