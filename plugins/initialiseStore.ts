import { defineNuxtPlugin } from '#app';
import { useGameStore } from '~/stores/game.store';

export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.client)
    nuxtApp.hook('app:created', () => {
      const gameStore = useGameStore();
      gameStore.initialiseStore();
    });
});
