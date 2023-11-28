<template>
  <DefaultLayout v-if="layout != Layout.None">
    <RouterView/>
  </DefaultLayout>
  <RouterView v-else/>
</template>

<script setup lang="ts">
  import DefaultLayout from '@/layouts/DefaultLayout.vue'
  import router from '@/lib/router';
  import { Layout } from '@/router/routes.ts';
  import { ref } from 'vue'

  const layout = ref<Layout>(Layout.None)

  router.afterEach(() => {
    layout.value = router.currentRoute.value.meta.layout ?? Layout.None;
  })
</script>