<template>
      <div class="sticky top-0 z-40">
        <div class="flex h-16 items-center gap-x-4 border-b border-gray-200 bg-white shadow-sm px-4 xl:px-0 xl:shadow-none">
          <button type="button" class="-m-2.5 p-2.5 text-gray-700 xl:hidden" @click="emit('changeSidebarState', true)">
            <span class="sr-only">Open sidebar</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>

          <!-- Separator -->
          <div class="h-6 w-px bg-gray-200 xl:hidden" aria-hidden="true" />

          <div class="flex flex-1 gap-x-4 self-stretch xl:gap-x-6 justify-end">
            <div class="flex items-center gap-x-4 xl:gap-x-6">
              <button type="button" class="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                <span class="sr-only">Settings</span>
                <Cog6ToothIcon class="h-6 w-6" aria-hidden="true" />
              </button>
              <button type="button" class="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                <span class="sr-only">View notifications</span>
                <BellIcon class="h-6 w-6" aria-hidden="true" />
              </button>
              <!-- Profile dropdown -->
              <Menu as="div" class="relative">
                <MenuButton class="-m-1.5 flex items-center p-1.5">
                  <span class="sr-only">Open user menu</span>
                  <img class="h-12 w-12 rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                </MenuButton>
                <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                  <MenuItems class="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                    <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                      <a :href="item.href" :class="[active ? 'bg-gray-50' : '', 'block px-3 py-1 text-sm text-gray-900']">{{ item.name }}</a>
                    </MenuItem>
                  </MenuItems>
                </transition>
              </Menu>
            </div>
          </div>
        </div>
      </div>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems, } from '@headlessui/vue'
import { Bars3Icon, BellIcon, Cog6ToothIcon, } from '@heroicons/vue/24/outline'

const emit = defineEmits(['changeSidebarState'])

const userNavigation = [
  { 
    name: 'Your profile', 
    href: '#' 
  },
  { 
    name: 'Sign out', 
    href: '#' 
  },
];
</script>