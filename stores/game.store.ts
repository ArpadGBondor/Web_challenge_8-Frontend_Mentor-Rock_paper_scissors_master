import { defineStore } from 'pinia';

interface State {
  score: number;
}

export const useGameStore = defineStore('game', {
  state: (): State => ({
    score: 0,
  }),
  actions: {
    increment() {
      this.score++;
    },
  },
});
