import { defineStore } from 'pinia';

export enum ChoiceType {
  None = 'none',
  Rock = 'rock',
  Paper = 'paper',
  Scissors = 'scissors',
}

export enum OutcomeType {
  None = 'none',
  Won = 'won',
  Lost = 'lost',
  Draw = 'draw',
}

export enum StageType {
  PlayerChoice = '1',
  ComputerChoice = '2',
  Results = '3',
  Over = '4',
}

interface State {
  score: number;
  showRules: boolean;
  stage: StageType;
  player: ChoiceType;
  computer: ChoiceType;
  outcome: OutcomeType;
}

const loadScore = (): number => {
  try {
    const jsonString = localStorage.getItem('score');
    if (jsonString) {
      return JSON.parse(jsonString) as number;
    }
    return 0;
  } catch (error) {
    console.error('Error reading from local storage', error);
    return 0;
  }
};

const saveScore = (score: number) => {
  try {
    const jsonString = JSON.stringify(score);
    localStorage.setItem('score', jsonString);
  } catch (error) {
    console.error('Error saving to local storage', error);
  }
};

export const useGameStore = defineStore('game', {
  state: (): State => ({
    score: 0,
    showRules: false,
    stage: StageType.PlayerChoice,
    player: ChoiceType.None,
    computer: ChoiceType.None,
    outcome: OutcomeType.None,
  }),
  actions: {
    initialiseStore() {
      this.score = loadScore();
    },
    setShowRules(_showRules: boolean) {
      this.showRules = _showRules;
    },
    startNewGame() {
      if (this.stage !== StageType.Over) return;
      this.stage = StageType.PlayerChoice;
      this.player = ChoiceType.None;
      this.computer = ChoiceType.None;
      this.outcome = OutcomeType.None;
    },
    playerMove(move: ChoiceType) {
      if (this.stage !== StageType.PlayerChoice) return;
      this.player = move;
      this.stage = StageType.ComputerChoice;

      const computerMove = () => {
        const choices = [
          ChoiceType.Rock,
          ChoiceType.Paper,
          ChoiceType.Scissors,
        ];
        const randomIndex = Math.floor(Math.random() * choices.length);
        this.computer = choices[randomIndex];
        this.stage = StageType.Results;

        const showOutcome = () => {
          if (
            (this.player === ChoiceType.Rock &&
              this.computer === ChoiceType.Paper) ||
            (this.player === ChoiceType.Paper &&
              this.computer === ChoiceType.Scissors) ||
            (this.player === ChoiceType.Scissors &&
              this.computer === ChoiceType.Rock)
          ) {
            this.outcome = OutcomeType.Lost;
            this.score--;
          } else if (
            (this.player === ChoiceType.Rock &&
              this.computer === ChoiceType.Scissors) ||
            (this.player === ChoiceType.Paper &&
              this.computer === ChoiceType.Rock) ||
            (this.player === ChoiceType.Scissors &&
              this.computer === ChoiceType.Paper)
          ) {
            this.outcome = OutcomeType.Won;
            this.score++;
          } else if (
            (this.player === ChoiceType.Rock &&
              this.computer === ChoiceType.Rock) ||
            (this.player === ChoiceType.Paper &&
              this.computer === ChoiceType.Paper) ||
            (this.player === ChoiceType.Scissors &&
              this.computer === ChoiceType.Scissors)
          ) {
            this.outcome = OutcomeType.Draw;
          }
          this.stage = StageType.Over;
          saveScore(this.score);
        };

        setTimeout(showOutcome, 2000);
      };
      setTimeout(computerMove, 2000);
    },
  },
});
