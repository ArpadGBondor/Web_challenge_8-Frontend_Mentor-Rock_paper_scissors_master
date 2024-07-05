// plugins/initializeStore.ts
import { defineNuxtPlugin } from '#app';
import { useGameStore } from '~/stores/game.store';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:created', () => {
    const gameStore = useGameStore();
    gameStore.initialiseStore();
  });
});
