<template>
    <table class="mx-6 h-max">
        <thead>
            <tr class="bg-gray-100 text-left text-gray-800">
                <th class="p-2 font-normal text-sm">Task</th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-t border-b" v-for="(task) in tasks">
                <td colspan="2" @click="setSelectedNode(task.key)" :class="[selectedNode == task.key ? 'border-l-red-500' : 'border-l-transparent', 'border-l-4 w-full py-2 px-8 flex justify-between items-center hover:bg-gray-50 hover:cursor-pointer']">
                    <span :class="[categories[task.category],'text-6xl']">&#183;</span>
                        <div class="flex-1 ml-2">
                        <span class="font-bold">{{ task.name }}</span>
                        <div class="flex gap-x-1">
                            <span v-if="task.time">{{ task.time }}</span>
                            <span class="text-gray-400">({{ task.duration }})</span>
                        </div>
                    </div>
                    <div class="flex justify-end text-lg text-purple-600 font-semibold">View</div>
                    <div class="flex justify-end ml-8"><EllipsisVerticalIcon class="w-9 h-9"/></div>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script setup lang="ts">
import { EllipsisVerticalIcon } from '@heroicons/vue/24/outline';
import { ref } from 'vue';

const selectedNode = ref<number>(1);

const setSelectedNode = (value: number) => {
    selectedNode.value = value;
}

const categories = {
    memberRetention: 'text-purple-500',
    socialMedia: 'text-orange-500',
    inventory: 'text-yellow-500',
}

const tasks = [
    {
        key: 1,
        name: 'Corporate Sales Webinar',
        time: '11:00 AM',
        duration: '2 hrs',
        category: 'memberRetention',
    },
    {
        key: 2,
        name: 'Pull Weekly Sales / Membership Repots',
        time: '11:00 AM',
        duration: '1 hr',
        category: 'memberRetention',
    },
    {
        key: 3,
        name: 'Facebook / Instagram Post',
        duration: '30 mins',
        category: 'socialMedia',
    },
    {
        key: 4,
        name: 'Order Cleaning Supplies',
        duration: '30 mins',
        category: 'inventory',
    },
    {
        key: 5,
        name: 'Review Member Suspension / Freeze',
        duration: '1 hr',
        category: 'memberRetention',
    },
]
</script>