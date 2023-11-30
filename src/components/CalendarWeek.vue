<template>
    <div class="text-center w-full">
          <div class="flex items-center text-gray-900 pb-3">
            <button type="button" class="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500">
              <span class="sr-only">Previous week</span>
              <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
            </button>
            <div class="flex-auto text-lg font-semibold">Saturday 22 Jan, 2023</div>
            <button type="button" class="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500">
              <span class="sr-only">Next week</span>
              <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <div class="grid grid-cols-7 text-lg">
            <div>M</div>
            <div>T</div>
            <div>W</div>
            <div>T</div>
            <div>F</div>
            <div>S</div>
            <div>S</div>
          </div>
          <div class="isolate mt-2 grid grid-cols-7 gap-px text-lg">
            <button v-for="day in days" :key="day.date" type="button" :class="['py-1.5 focus:z-10 group', !day.isSelected ? 'text-gray-800' : 'text-white']">
              <time :datetime="day.date" :class="['mx-auto flex h-9 w-9 items-center justify-center rounded-full', day.isSelected ? 'bg-purple-600' : 'group-hover:bg-gray-50']">{{ day.date.split('-').pop()?.replace(/^0/, '') }}</time>
            </button>
          </div>
        </div>
  </template>
  
  <script setup lang=ts>
  import {
    ChevronLeftIcon,
    ChevronRightIcon,
  } from '@heroicons/vue/20/solid'

  const days = [
    { date: '2022-01-17' },
    { date: '2022-01-18' },
    { date: '2022-01-19' },
    { date: '2022-01-20' },
    { date: '2022-01-21' },
    { date: '2022-01-22', isSelected: true },
    { date: '2022-01-23' },
  ]
  </script>