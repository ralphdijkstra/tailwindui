<template>
    <div class="grid grid-cols-12">
    <div class="col-start-3 col-end-9 shadow-xl rounded-md text-center py-10 px-5">
          <div class="flex items-center text-gray-900 pb-3 border-b border-gray-200">
            <button type="button" class="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500">
              <span class="sr-only">Previous month</span>
              <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
            </button>
            <div class="flex-auto text-lg font-semibold">Saturday 22 Jan, 2023</div>
            <button type="button" class="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500">
              <span class="sr-only">Next month</span>
              <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <div class="text-purple-600 font-bold text-sm grid grid-cols-3 mt-3 mb-6">
            <div>Last week</div>
            <div>Last month</div>
            <div>Last year</div>
          </div>
          <div class="grid grid-cols-7 text-sm leading-6">
            <div>Mo</div>
            <div>Tu</div>
            <div>We</div>
            <div>Th</div>
            <div>Fr</div>
            <div>Sat</div>
            <div>Su</div>
          </div>
          <div class="isolate mt-2 grid grid-cols-7 gap-px text-sm">
            <button v-for="(day, dayIdx) in days" :key="day.date" type="button" :class="['py-1.5 focus:z-10 group', day.isCurrentMonth ? 'text-gray-800' : 'text-gray-400', (day.isSelected || day.isToday) && 'font-semibold', day.isSelected && 'text-white', !day.isSelected && day.isCurrentMonth && !day.isToday && 'text-gray-900', !day.isSelected && !day.isCurrentMonth && !day.isToday && 'text-gray-400', day.isToday && !day.isSelected && 'text-purple-600']">
              <time :datetime="day.date" :class="['mx-auto flex h-9 w-9 items-center justify-center rounded-full group-hover:bg-gray-50', day.isSelected && day.isToday && 'bg-purple-600', day.isSelected && !day.isToday && 'bg-purple-600']">{{ day.date.split('-').pop().replace(/^0/, '') }}</time>
            </button>
          </div>
        </div>
    </div>
  </template>
  
  <script setup lang=ts>
  import {
    ChevronLeftIcon,
    ChevronRightIcon,
  } from '@heroicons/vue/20/solid'

  const days = [
    { date: '2021-12-27' },
    { date: '2021-12-28' },
    { date: '2021-12-29' },
    { date: '2021-12-30' },
    { date: '2021-12-31' },
    { date: '2022-01-01', isCurrentMonth: true },
    { date: '2022-01-02', isCurrentMonth: true },
    { date: '2022-01-03', isCurrentMonth: true },
    { date: '2022-01-04', isCurrentMonth: true },
    { date: '2022-01-05', isCurrentMonth: true },
    { date: '2022-01-06', isCurrentMonth: true },
    { date: '2022-01-07', isCurrentMonth: true },
    { date: '2022-01-08', isCurrentMonth: true },
    { date: '2022-01-09', isCurrentMonth: true },
    { date: '2022-01-10', isCurrentMonth: true },
    { date: '2022-01-11', isCurrentMonth: true },
    { date: '2022-01-12', isCurrentMonth: true, isToday: true },
    { date: '2022-01-13', isCurrentMonth: true },
    { date: '2022-01-14', isCurrentMonth: true },
    { date: '2022-01-15', isCurrentMonth: true },
    { date: '2022-01-16', isCurrentMonth: true },
    { date: '2022-01-17', isCurrentMonth: true },
    { date: '2022-01-18', isCurrentMonth: true },
    { date: '2022-01-19', isCurrentMonth: true },
    { date: '2022-01-20', isCurrentMonth: true },
    { date: '2022-01-21', isCurrentMonth: true },
    { date: '2022-01-22', isCurrentMonth: true, isSelected: true },
    { date: '2022-01-23', isCurrentMonth: true },
    { date: '2022-01-24', isCurrentMonth: true },
    { date: '2022-01-25', isCurrentMonth: true },
    { date: '2022-01-26', isCurrentMonth: true },
    { date: '2022-01-27', isCurrentMonth: true },
    { date: '2022-01-28', isCurrentMonth: true },
    { date: '2022-01-29', isCurrentMonth: true },
    { date: '2022-01-30', isCurrentMonth: true },
    { date: '2022-01-31', isCurrentMonth: true },
    { date: '2022-02-01' },
    { date: '2022-02-02' },
    { date: '2022-02-03' },
    { date: '2022-02-04' },
    { date: '2022-02-05' },
    { date: '2022-02-06' },
  ]
  </script>