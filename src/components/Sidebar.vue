<template>
<TransitionRoot as="template" :show="sidebarOpen">
      <Dialog as="div" class="relative z-50 xl:hidden" @close="emit('changeSidebarState', false)">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-900/80" />
        </TransitionChild>

        <div class="fixed inset-0 flex">
          <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
            <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
              <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
                <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
                  <button type="button" class="-m-2.5 p-2.5" @click="emit('changeSidebarState', false)">
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <!-- Sidebar component, swap this element with another sidebar if you like -->
              <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
                <div class="flex h-16 shrink-0 items-center">
                  <strong class="text-xl">MGR Guru</strong>
                </div>
                <nav class="flex flex-1 flex-col">
          <ul role="list" class="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" class="-mx-2 space-y-1">
                <li v-for="item in navigation" :key="item.name">
                  <Disclosure v-if="item.children" v-slot="{ open }">
                    <DisclosureButton
                      :class="[isCurrentRoute(item.href, item.children) ? 'bg-gray-50 text-gray-800' : 'text-gray-700 hover:text-gray-800 hover:bg-gray-50', 'group flex gap-x-3 rounded-md p-2 text-md font-semibold w-full']"
                    >
                      <component :is="item.icon" :class="['text-gray-400', 'h-6 w-6 shrink-0']" aria-hidden="true" />
                      <span>{{ item.name }}</span>
                      <ChevronDownIcon
                        :class="open ? 'rotate-180 transform' : ''"
                        class="h-5 w-5 text-gray-700 ml-auto"
                      />
                    </DisclosureButton>
                    <transition
                      enter-active-class="transition duration-100 ease-out"
                      enter-from-class="transform scale-95 opacity-0"
                      enter-to-class="transform scale-100 opacity-100"
                      leave-active-class="transition duration-75 ease-out"
                      leave-from-class="transform scale-100 opacity-100"
                      leave-to-class="transform scale-95 opacity-0"
                    >
                      <DisclosurePanel as="ul" class="text-md text-gray-500">
                        <li v-for="child in item.children" :key="child.name">
                          <router-link :to="child.href" :class="[isCurrentRoute(child.href) ? 'bg-gray-50 text-gray-800' : 'text-gray-700 hover:text-gray-800 hover:bg-gray-50', 'group flex gap-x-3 rounded-md p-2 pl-11 text-md  font-semibold']">{{ child.name }}</router-link>
                        </li>
                      </DisclosurePanel>
                    </transition>
                  </Disclosure>
                  <router-link v-else :to="item.href" :class="[isCurrentRoute(item.href) ? 'bg-gray-50 text-gray-800' : 'text-gray-700 hover:text-gray-800 hover:bg-gray-50', 'group flex gap-x-3 rounded-md p-2 text-md  font-semibold']">
                    <component :is="item.icon" :class="['text-gray-400', 'h-6 w-6 shrink-0']" aria-hidden="true" />
                    {{ item.name }}
                    <span v-if="item.notifications" class="ml-auto inline-flex items-center rounded-full bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">{{ item.notifications }}</span>
                  </router-link>
                </li>
              </ul>
            </li>
            <li class="mt-auto">
              <router-link to="/login" class="group -mx-2 flex gap-x-3 rounded-md p-2 text-md font-semibold  text-gray-700 hover:bg-gray-50 hover:text-gray-800">
                <ArrowRightOnRectangleIcon class="h-6 w-6 shrink-0 text-gray-400" aria-hidden="true" />
                Log out
              </router-link>
            </li>
          </ul>
                </nav>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden xl:fixed xl:inset-y-0 xl:z-50 xl:flex xl:w-72 xl:flex-col">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex grow flex-col overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
        <div class="flex h-16 shrink-0 items-center">
          <strong class="text-xl">MGR Guru</strong>
        </div>
        <nav class="flex flex-1 flex-col">
          <ul role="list" class="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" class="-mx-2 space-y-1">
                <li v-for="item in navigation" :key="item.name">
                  <Disclosure v-if="item.children" v-slot="{ open }">
                    <DisclosureButton
                      :class="[isCurrentRoute(item.href, item.children) ? 'bg-gray-50 text-gray-800' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50', 'group flex gap-x-3 rounded-md p-2 text-md  font-semibold w-full']"
                    >
                      <component :is="item.icon" :class="['text-gray-500', 'h-6 w-6 shrink-0']" aria-hidden="true" />
                      <span>{{ item.name }}</span>
                      <ChevronDownIcon
                        :class="open ? 'rotate-180 transform' : ''"
                        class="h-5 w-5 text-gray-700 ml-auto"
                      />
                    </DisclosureButton>
                    <transition
                      enter-active-class="transition duration-100 ease-out"
                      enter-from-class="transform scale-95 opacity-0"
                      enter-to-class="transform scale-100 opacity-100"
                      leave-active-class="transition duration-75 ease-out"
                      leave-from-class="transform scale-100 opacity-100"
                      leave-to-class="transform scale-95 opacity-0"
                    >
                      <DisclosurePanel as="ul" class="text-md text-gray-500">
                        <li v-for="child in item.children" :key="child.name">
                          <router-link :to="child.href" :class="[isCurrentRoute(child.href) ? 'bg-gray-50 text-gray-800' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50', 'group flex gap-x-3 rounded-md p-2 pl-11 text-md  font-semibold']">{{ child.name }}</router-link>
                        </li>
                      </DisclosurePanel>
                    </transition>
                  </Disclosure>
                  <router-link v-else :to="item.href" :class="[isCurrentRoute(item.href) ? 'bg-gray-50 text-gray-900' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50', 'group flex gap-x-3 rounded-md p-2 text-md  font-semibold']">
                    <component :is="item.icon" :class="['text-gray-500', 'h-6 w-6 shrink-0']" aria-hidden="true" />
                    {{ item.name }}
                    <span v-if="item.notifications" class="ml-auto inline-flex items-center rounded-full bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">{{ item.notifications }}</span>
                  </router-link>
                </li>
              </ul>
            </li>
            <li class="mt-auto">
              <router-link to="/login" class="group -mx-2 flex gap-x-3 rounded-md p-2 text-md font-semibold  text-gray-700 hover:bg-gray-50 hover:text-gray-800">
                <ArrowRightOnRectangleIcon class="h-6 w-6 shrink-0 text-gray-400" aria-hidden="true" />
                Log out
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
</template>
<script setup lang="ts">
import { toRef, watch, computed } from 'vue'
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
  Disclosure,
  DisclosureButton,
  DisclosurePanel
} from '@headlessui/vue'
import {
  ChatBubbleLeftEllipsisIcon,
  ChartPieIcon,
  Square2StackIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'
import { ArrowRightOnRectangleIcon, ChevronDownIcon } from '@heroicons/vue/20/solid'
import { Navigation } from '@/interface/navigation'
import router from '@/lib/router'

const currentRoute = computed(() => {
  return router.currentRoute.value.path?.toString().toLowerCase();
});

const isCurrentRoute = (route: string, children?: Navigation[]) => {
  if (children) {
    return children.filter(x => x.href.toLowerCase() == currentRoute.value).length > 0
  } else {
    return route.toLowerCase() == currentRoute.value;
  }
}


const navigation : Navigation[] = [
  { 
    name: 'Dashboard', 
    href: '/dashboard', 
    icon: HomeIcon, 
  },
  { 
    name: 'Tasks', 
    href: '/', 
    icon: Square2StackIcon, 
    children: [
      {
        name: 'Studios',
        href: '/', 
      },
      {
        name: 'Managers',
        href: '/',
      },
      {
        name: 'My Tasks',
        href: '/tasks',
      },
    ],
  },
  { 
    name: 'Messages', 
    href: '/', 
    icon: ChatBubbleLeftEllipsisIcon, 
    notifications: 1,
  },
  { 
    name: 'Reports', 
    href: '/', 
    icon: ChartPieIcon,
    children: [
      {
        name: 'Studios',
        href: '/', 
      },
      {
        name: 'Managers',
        href: '/reports/manager',
      },
    ], 
  },
  { 
    name: 'Team Management', 
    href: '/', 
    icon: UsersIcon, 
  },
];

const props = defineProps({
    sidebarOpen: {
        required: true,
        type: Boolean
    }
})

const emit = defineEmits(['changeSidebarState'])

router.afterEach(() => {
  emit('changeSidebarState', false)
})

watch(
  () => props.sidebarOpen,
  () => {
    sidebarOpen.value = props.sidebarOpen
  }
)

watch(
  () => router.currentRoute.value,
  () => {
    console.log(currentRoute.value);
  }
) 

const sidebarOpen = toRef(props.sidebarOpen)
</script>