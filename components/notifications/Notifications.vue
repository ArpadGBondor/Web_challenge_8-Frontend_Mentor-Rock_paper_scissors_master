<template>
  <div class="absolute left-2 bottom-2">
    <div
      v-for="notification in notifications"
      :key="notification.notifyTime"
      :class="notificationStyle[notification.type]"
      class="p-1 m-2"
    >
      <div>
        <span class="leading-none my-auto text-lg"
          >&nbsp;{{ notification.message }}</span
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useNotifyStore } from '../../stores/notify.store';
const notifyStore = useNotifyStore();
const { notifications } = storeToRefs(notifyStore);

const notificationStyle = {
  info: 'bg-blue-100 border-l-4 border-blue-500 text-blue-700',
  success: 'bg-green-100 border-l-4 border-green-500 text-green-700',
  warning: 'bg-orange-100 border-l-4 border-orange-500 text-orange-700',
  error: 'bg-red-100 border-l-4 border-red-500 text-red-700',
};
</script>
