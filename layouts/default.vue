<template>
  <div
    class="bg-game flex flex-col justify-center items-center h-screen w-screen text-white static font-[BarlowSemiCondensed-SemiBold]"
  >
    <Header />
    <NuxtPage />
    <Notifications />
    <RulesButton />
    <Modal :show="showRules" @update:show="gameStore.setShowRules($event)">
      <Rules />
    </Modal>
  </div>
</template>

<script setup>
import { Header, Notifications, Modal, Rules, RulesButton } from '#components';
import { storeToRefs } from 'pinia';
import { useGameStore } from '../stores/game.store';
const gameStore = useGameStore();
const { showRules } = storeToRefs(gameStore);
</script>

<style>
.bg-game {
  background: radial-gradient(
    circle at 50% 0%,
    hsl(214, 47%, 23%),
    hsl(237, 49%, 15%)
  );
}
</style>
