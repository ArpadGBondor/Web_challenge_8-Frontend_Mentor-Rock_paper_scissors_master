<template>
  <div
    class="bg-dark-blue flex flex-col justify-center items-center h-screen w-screen text-white static font-[BarlowSemiCondensed-SemiBold]"
  >
    <Header />
    <NuxtPage />
    <Notifications />
  </div>
</template>

<script>
import { Header, Notifications } from '#components';
</script>

<style></style>
