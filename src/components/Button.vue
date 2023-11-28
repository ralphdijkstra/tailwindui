<template>
    <button type="button" class="flex items-center gap-x-2 rounded-md bg-violet-500 px-5 py-3 text-md font-semibold text-white shadow-sm hover:bg-violet-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600">
        <PlusIcon class="w-6 h-6"/>
        Create Task
    </button>
</template>
<script setup lang="ts">
import { PlusIcon } from '@heroicons/vue/24/outline';

</script>