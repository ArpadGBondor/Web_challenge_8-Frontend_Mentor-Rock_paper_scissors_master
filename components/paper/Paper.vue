<template>
  <div class="relative w-[8.5rem] h-[9rem]">
    <div
      class="w-[8.5rem] h-[8.5rem] shadow-paper bg-paper absolute top-0 left-0 rounded-full"
    >
      <div
        class="w-[6.5rem] h-[6.5rem] shadow-paper-inner bg-white absolute top-[1rem] left-[1rem] rounded-full flex justify-center items-center"
      >
        <img :src="Paper" alt="Paper image" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Paper from '../../assets/images/icon-paper.svg';
</script>

<style>
.bg-paper {
  background: linear-gradient(hsl(230, 89%, 65%), hsl(230, 89%, 62%));
}
</style>
