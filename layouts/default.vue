<template>
  <main
    class="bg-game flex flex-col justify-center items-center h-screen w-screen text-white absolute top-0 left-0 font-[BarlowSemiCondensed-SemiBold] overflow-hidden"
  >
    <Header />
    <NuxtPage />
    <Notifications />
    <RulesButton />
    <Footer />
    <Modal :show="showRules" @update:show="gameStore.setShowRules($event)" />
  </main>
</template>

<script setup>
import { Header, Notifications, Modal, RulesButton, Footer } from '#components';
import { storeToRefs } from 'pinia';
import { useGameStore } from '~/stores/game.store';
const gameStore = useGameStore();
const { showRules } = storeToRefs(gameStore);
</script>

<style></style>
