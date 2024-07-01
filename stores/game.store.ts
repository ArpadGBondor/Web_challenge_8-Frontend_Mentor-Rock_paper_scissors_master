import { defineStore } from 'pinia';

interface State {
  score: number;
  showRules: boolean;
}

export const useGameStore = defineStore('game', {
  state: (): State => ({
    score: 0,
    showRules: false,
  }),
  actions: {
    increment() {
      this.score++;
    },
    setShowRules(_showRules: boolean) {
      this.showRules = _showRules;
    },
  },
});
