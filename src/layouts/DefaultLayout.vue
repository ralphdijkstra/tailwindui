<template>
  <div>
    <Sidebar
      :sidebar-open="sidebarOpen"
      @change-sidebar-state="changeSidebarState"
    />
      <div class="lg:pl-72">
        <Header
        @change-sidebar-state="changeSidebarState"
        />

      <main class="py-10">
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