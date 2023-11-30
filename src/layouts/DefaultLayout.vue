<template>
  <div>
    <Sidebar
      :sidebar-open="sidebarOpen"
      @change-sidebar-state="changeSidebarState"
    />
      <div class="xl:pl-72">
        <Header
        @change-sidebar-state="changeSidebarState"
        />

      <main class="max-w-7xl mx-auto px-4 lg:px-8 py-5 lg:py-7">
          <slot></slot>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from '@/components/Sidebar.vue' 
import Header from '@/components/Header.vue' 
import { ref } from 'vue'
import router from '@/lib/router';

const sidebarOpen = ref<boolean>(false);

const changeSidebarState = (value: boolean) => {
  sidebarOpen.value = value;
}

router.isReady().then(() => {
  console.log(router.currentRoute.value)
})
</script>