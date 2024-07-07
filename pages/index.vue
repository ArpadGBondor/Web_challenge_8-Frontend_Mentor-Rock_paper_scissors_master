<template>
  <div
    class="absolute w-full h-play-area top-[14rem] left-0 flex justify-center items-center"
  >
    <GameChoiceBackground />
    <GameLabelYouPicked />
    <GameLabelTheHousePicked />
    <GameTheHousePlaceholder />
    <GameTheHouseChoice />
    <GamePlayerChoice type="paper" />
    <GamePlayerChoice type="scissors" />
    <GamePlayerChoice type="rock" />
    <GameOutcome />
  </div>
</template>

<script setup lang="ts">
import {
  GameOutcome,
  GameChoiceBackground,
  GameLabelYouPicked,
  GameLabelTheHousePicked,
  GameTheHousePlaceholder,
  GameTheHouseChoice,
  GamePlayerChoice,
} from '#components';

definePageMeta({
  layout: 'default',
});
</script>
