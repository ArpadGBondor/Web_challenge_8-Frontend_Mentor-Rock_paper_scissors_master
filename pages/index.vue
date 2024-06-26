<template>
  <section
    class="bg-dark-blue flex flex-col justify-center items-center h-screen w-screen text-white static"
  >
    <h1 class="text-4xl text-bold">Test</h1>
    <form class="m-8" @submit="onSubmit">
      <input
        class="text-dark-blue p-2 text-xl"
        type="text"
        name="message"
        id="message"
        v-model="message"
      />
    </form>
    <NotificationsNotification />
  </section>
</template>

<script setup lang="ts">
import { NotificationsNotification } from '#components';
import { useNotifyStore, NotificationType } from '../stores/notify.store';

const notifyStore = useNotifyStore();

let message = '';

const onSubmit = (event: any) => {
  event.preventDefault();

  notifyStore.notify(message, NotificationType.Info);
};
</script>
