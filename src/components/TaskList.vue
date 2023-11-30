<template>
    <table class="h-max">
        <thead>
            <tr class="bg-gray-100 text-left text-gray-800">
                <th class="p-2 font-medium text-sm">Task</th>
            </tr>
        </thead>
        <tbody>
                <tr v-if="visibleTasks.length == 0">
                    <td class="text-center text-xl p-3">You currently have no tasks...</td>
                </tr>
            <tr v-else class="border-t border-b" v-for="(task) in visibleTasks">
                <td colspan="2" :class="[task.type == 'organisation' ? 'border-l-red-500' : 'border-l-transparent', 'border-l-4 w-full py-2 px-4 xl:px-8 flex justify-between items-center']">
                    <span class="text-6xl" :class="GetIconClass(task)">&#183;</span>
                        <div class="flex-1 ml-2">
                        <span class="font-bold">{{ task.name }}</span>
                        <div class="flex gap-x-1">
                            <span v-if="task.time">{{ task.time }}</span>
                            <span class="text-gray-400">({{ task.duration }})</span>
                        </div>
                    </div>
                    <div class="flex justify-end text-lg text-purple-600 font-semibold ml-2">View</div>
                    <div class="flex justify-end ml-2 xl:ml-8">
                    <Menu as="div" class="relative">
                        <MenuButton class="flex items-center">
                            <EllipsisVerticalIcon class="w-9 h-9"/>
                        </MenuButton>
                        <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                        <MenuItems class="absolute right-0 z-10 mt-2.5 w-52 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                        <MenuItem>
                        <button
                            class="text-gray-900 hover:bg-gray-50 group flex w-full items-center rounded-md px-2 py-2 text-md"
                            @click="open = true; selectedTask = task"
                        >
                            Complete
                        </button>
                        </MenuItem>
                        <MenuItem>
                        <button
                            class="text-gray-900 hover:bg-gray-50 group flex w-full items-center rounded-md px-2 py-2 text-md"
                        >
                            Edit
                        </button>
                        </MenuItem>
                        <MenuItem>
                        <button
                            class="text-gray-900 hover:bg-gray-50 group flex w-full items-center rounded-md px-2 py-2 text-md"
                        >
                            Reschedule to tomorrow
                        </button>
                        </MenuItem>
                        <MenuItem>
                        <button
                            class="text-red-500 hover:bg-gray-50 group flex w-full items-center rounded-md px-2 py-2 text-md"
                        >
                            Delete
                        </button>
                        </MenuItem>
                        </MenuItems>
                        </transition>
                    </Menu></div>
                </td>
            </tr>
        </tbody>
    <TransitionRoot as="template" :show="open">
        <Dialog as="div" class="relative z-50" @close="open = false">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div>
                    <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <CheckIcon class="h-6 w-6 text-green-600" aria-hidden="true" />
                    </div>
                    <div class="mt-3 text-center sm:mt-5">
                    <DialogTitle as="h3" class="text-base text-gray-900">"<strong>{{ selectedTask.name }}</strong>" task will be marked as <strong>complete</strong></DialogTitle>
                    </div>
                </div>
                <div class="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                    <button type="button" class="inline-flex w-full justify-center rounded-md bg-purple-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-600 sm:col-start-2" @click="saveTask">Confirm</button>
                    <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0" @click="open = false" ref="cancelButtonRef">Cancel</button>
                </div>
                </DialogPanel>
            </TransitionChild>
            </div>
        </div>
        </Dialog>
    </TransitionRoot>
    </table>
</template>
<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
import { EllipsisVerticalIcon, CheckIcon } from '@heroicons/vue/24/outline';
import { ref, onBeforeMount } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'

const open = ref(false)

interface Task {
    key: number,
    name: string,
    time?: string,
    duration: string,
    category: string,
    type?: string,
}

const visibleTasks = ref<Task[]>([])
const selectedTask = ref<any>();

function GetIconClass(task : any) {

    if (task?.category == 'memberRetention') {
        return 'text-purple-500';
    } else if (task?.category == 'socialMedia') {
        return 'text-orange-500';
    } else if (task?.inventory == 'socialMedia') {
        return 'text-yellow-500';
    }
    return 'text-yellow-500';
}

const tasks : Task[] = [
    {
        key: 1,
        name: 'Corporate Sales Webinar',
        time: '11:00 AM',
        duration: '2 hrs',
        category: 'memberRetention',
        type: 'organisation',
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
];

const emit = defineEmits(['onSave']);

onBeforeMount(() => {
    visibleTasks.value = tasks;
})

const saveTask = () => {
    visibleTasks.value = visibleTasks.value.filter(x => x.key != selectedTask.value.key);

    emit('onSave')

    open.value = false;
}

</script>