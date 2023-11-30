<template>
    <div class="relative w-40 h-40">
          <svg class="w-full h-full" viewBox="0 0 100 100">
            <!-- Background circle -->
            <circle
              class="text-gray-200 stroke-current"
              stroke-width="10"
              
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
            ></circle>
            <!-- Progress circle -->
            <circle
              class="text-purple-500  progress-ring__circle stroke-current"
              stroke-width="10"
              stroke-linecap="round"
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              :stroke-dashoffset="`calc(400 - (400 * (${props.progress} * 0.625)) / 100)`"
            ></circle>
            
            <!-- Center text -->
            <text x="50" y="50" font-weight="bold" font-size="18" text-anchor="middle" alignment-baseline="middle">{{ props.progress }}%</text>

          </svg>
        </div>
</template>
<script setup lang="ts">
const props = defineProps({
    progress: {
        type: Number,
        required: true,
    }
})
</script>