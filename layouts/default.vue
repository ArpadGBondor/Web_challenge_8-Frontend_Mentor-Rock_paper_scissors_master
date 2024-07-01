<template>
  <div
    class="bg-dark-blue flex flex-col justify-center items-center h-screen w-screen text-white static font-[BarlowSemiCondensed-SemiBold]"
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

<style></style>
