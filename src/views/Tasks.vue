<template>
  <div class="grid grid-cols-2 align-bottom px-6">
    <div class="max-w-3xl lg:mx-0 mb-6">
        <h2 class="font-bold tracking-tight text-gray-900 text-4xl">My Tasks</h2>
        <p class="text-lg leading-8 text-gray-600">Here is a list of your tasks to complete today.</p>
    </div>
    <div class="flex self-end justify-end">
        <Button/>
    </div>
    <div class="border-b border-gray-200 pb-6">
        <h3 class="max-w-2xl font-semibold tracking-tight text-gray-900 text-2xl">Sat, January 22nd, 2023 (today)</h3>
    </div>
  </div>
  <div class="grid grid-cols-2 mt-6">
    <TaskList/>
    <CalendarMonth/>
  </div>
</template>
<script setup lang="ts">
import Button from '@/components/Button.vue'
import CalendarMonth from '@/components/CalendarMonth.vue'
import TaskList from '@/components/TaskList.vue';
</script>