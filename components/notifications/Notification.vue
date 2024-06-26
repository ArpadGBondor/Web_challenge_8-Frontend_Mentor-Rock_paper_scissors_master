<template>
  <div class="absolute left-2 bottom-2">
    <div
      v-for="notification in notifications"
      :key="notification.notifyTime"
      :class="notification.type"
      class="p-1 m-2"
    >
      <div>
        <button
          @click.prevent="notifyStore.removeNotification(notification)"
          type="button"
          class="text-gray-400 hover:text-gray-900 rounded-lg focus:border focus:border-gray-300 hover:bg-gray-100 inline-flex justify-center items-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          aria-label="Close"
        >
          <span class="sr-only">Close</span>
          <svg
            aria-hidden="true"
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <span class="leading-none my-auto text-lg px-1"
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
</script>
