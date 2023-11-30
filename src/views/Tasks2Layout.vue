<template>
  <div class="hidden xl:block">
  <div class="grid grid-cols-2 align-bottom">
    <div class="max-w-3xl lg:mx-0 mb-6">
        <h2 class="font-bold tracking-tight text-gray-900 text-4xl">My Tasks</h2>
        <p class="text-lg leading-8 text-gray-600">Here is a list of your tasks to complete today.</p>
    </div>
    <div class="flex self-start justify-end">
        <Button/>
    </div>
    <div class="border-b border-gray-200 pb-6">
        <h3 class="max-w-2xl font-semibold tracking-tight text-gray-900 text-2xl">Sat, January 22nd, 2023 (today)</h3>
    </div>
  </div>
  <div class="grid grid-cols-3 gap-6 mt-6">
    <TaskList class="col-span-2" @on-save="onSave"/>
    <CalendarMonth/>
    <div class="col-span-2">
      <h6 class="text-xl font-bold">Recent Activity</h6>
      <Disclosure v-for="activity in activities" v-slot="{ open }">
        <DisclosureButton
        class="flex w-full items-center font-semibold p-4 text-lg"
        >
          <component :is="activity.icon" :class="activity.iconColor" class="w-6 h-6 mr-4" aria-hidden="true" />
          <span>{{ activity.label }}</span>
          <span v-if="activity.count > 0" class="ml-2">({{ activity.count }})</span>
          <ChevronDownIcon
            :class="open ? 'rotate-180 transform' : ''"
            class="h-6 w-6 ml-auto"
          />
        </DisclosureButton>
        <DisclosurePanel>
        </DisclosurePanel>
      </Disclosure>
    </div>
    <div class="border w-full rounded-md">
      <div class="p-3 border-b">
        <h6 class="text-lg font-bold">Today's Completed Tasks</h6>
        <p>You have completed 2/7 tasks.</p>
        </div>
        <div class="grid grid-cols-2 gap-x-3 items-center p-3">
          <DoughnutProgress
            class="m-2 max-w-fit"
            :progress="progress"
          />
          <p class="italic">{{ message[progress] }}</p>
      </div>
    </div>
  </div>
  <!-- Global notification live region, render this permanently at the end of the document -->
  <div aria-live="assertive" class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6 z-50">
    <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
      <!-- Notification panel, dynamically insert this into the live region when it needs to be displayed -->
      <transition enter-active-class="transform ease-out duration-300 transition" enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2" enter-to-class="translate-y-0 opacity-100 sm:translate-x-0" leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <div v-if="show" class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div class="p-4">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <CheckCircleIcon class="h-6 w-6 text-green-400" aria-hidden="true" />
              </div>
              <div class="ml-3 w-0 flex-1 pt-0.5">
                <p class="text-sm text-gray-800">Succesfully <span class="font-bold">completed</span> NAME Task.</p>
                <div class="mt-3 flex space-x-7">
                  <button type="button" class="rounded-md bg-white text-sm font-medium text-gray-700 hover:text-gray-500">Dismiss</button>
                  <button type="button" @click="show = false" class="rounded-md bg-white text-sm font-medium text-indigo-600 hover:text-indigo-500">View Task</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
  </div>
  <div class="xl:hidden">
  <div class="flex align-bottom">
    <div class="max-w-3xl lg:mx-0">
        <h2 class="font-bold tracking-tight text-gray-900 text-2xl xl:text-4xl">My Tasks</h2>
        <p class="text-md xl:text-lg text-gray-600">Here is a list of your tasks to complete today.</p>
    </div>
    <div class="flex self-start justify-end">
      <button type="button" class="flex items-center gap-x-2 rounded-full bg-violet-500 p-3 text-md font-semibold text-white shadow-sm hover:bg-violet-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600">
          <PlusIcon class="w-6 h-6"/>
      </button>
    </div>
  </div>
  <div class="mt-3 flex flex-col justify-center items-center gap-3">
    <CalendarWeek class="w-full"/>
    <TaskList class="w-full" @on-save="onSave"/>
    <div class="w-full">
      <h6 class="text-xl font-bold">Recent Activity</h6>
      <Disclosure v-for="activity in activities" v-slot="{ open }">
        <DisclosureButton
        class="flex w-full items-center font-semibold p-4 text-lg"
        >
          <component :is="activity.icon" :class="activity.iconColor" class="w-6 h-6 mr-4" aria-hidden="true" />
          <span>{{ activity.label }}</span>
          <span v-if="activity.count > 0" class="ml-2">({{ activity.count }})</span>
          <ChevronDownIcon
            :class="open ? 'rotate-180 transform' : ''"
            class="h-6 w-6 ml-auto"
          />
        </DisclosureButton>
        <DisclosurePanel>
        </DisclosurePanel>
      </Disclosure>
    </div>
    <div class="border rounded-md w-full md:w-2/3">
      <div class="p-3 border-b">
        <h6 class="text-lg font-bold">Today's Completed Tasks</h6>
        <p>You have completed 2/7 tasks.</p>
        </div>
        <div class="grid grid-cols-2 gap-x-3 items-center p-3">
          <DoughnutProgress
            class="m-2 max-w-fit"
            :progress="progress"
          />
          <p class="italic">{{ message[progress] }}</p>
      </div>
    </div>
  </div>
  <!-- Global notification live region, render this permanently at the end of the document -->
  <div aria-live="assertive" class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6 z-50">
    <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
      <!-- Notification panel, dynamically insert this into the live region when it needs to be displayed -->
      <transition enter-active-class="transform ease-out duration-300 transition" enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2" enter-to-class="translate-y-0 opacity-100 sm:translate-x-0" leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <div v-if="show" class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div class="p-4">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <CheckCircleIcon class="h-6 w-6 text-green-400" aria-hidden="true" />
              </div>
              <div class="ml-3 w-0 flex-1 pt-0.5">
                <p class="text-sm text-gray-800">Succesfully <span class="font-bold">completed</span> NAME Task.</p>
                <div class="mt-3 flex space-x-7">
                  <button type="button" class="rounded-md bg-white text-sm font-medium text-gray-700 hover:text-gray-500">Dismiss</button>
                  <button type="button" @click="show = false" class="rounded-md bg-white text-sm font-medium text-indigo-600 hover:text-indigo-500">View Task</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
  </div>
</template>
<script setup lang="ts">
import Button from '@/components/Button.vue'
import CalendarMonth from '@/components/CalendarMonth.vue'
import TaskList from '@/components/TaskList.vue';
import DoughnutProgress from '@/components/DoughnutProgress.vue';
import { CheckCircleIcon, ChevronDownIcon, InformationCircleIcon, PencilIcon, PlusIcon, TrashIcon } from '@heroicons/vue/24/outline';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { ref, computed } from 'vue'
import CalendarWeek from '@/components/CalendarWeek.vue';

const show = ref<boolean>(false)
const progress = ref<number>(0)

const onSave = () => {
  show.value = true;
  const activity = activities.value.find(x => x.label == 'Completed Tasks');
  if (activity) {
    activity.count++;
  }
  progress.value = progress.value + 20;

  console.log(activities.value)
  setTimeout(() => {
  show.value = false;
  }, 3000);
}

const message = computed<{ [key: number]: string }>(() => {
  return {
  0: "Let's get to it",
  20: 'Great start! Keep going :)',
  40: 'Keep up the good work! :)',
  60: 'You are halfway there',
  80: 'Almost done! You are crushing it',
  100: 'All done! Great job! 🎉',
};
});

interface Activity {
    label: string,
    icon: any,
    iconColor: string,
    count: number,
}

const activities = ref<Activity[]>([
  {
    label: 'Missed Tasks',
    icon: InformationCircleIcon,
    iconColor: 'text-orange-500',
    count: 0,
  },
  {
    label: 'Draft Tasks',
    icon: PencilIcon,
    iconColor: 'text-blue-700',
    count: 0,
  },
  {
    label: 'Deleted Tasks',
    icon: TrashIcon,
    iconColor: 'text-red-500',
    count: 0,
  },
  {
    label: 'Completed Tasks',
    icon: CheckCircleIcon,
    iconColor: 'text-green-600',
    count: 0,
  },
]);

</script>