
<script lang="ts">
import { formatDataForItem } from '@/utils/DateUtils'

export default {
    props: ['item'],
    emits: ['changeStatus', 'edit', 'delete'],
    methods: {
        formatDataForItem,
        // startTask(taskId: string) {
        //     this.$emit('changeStatus', 'IN_PROGRESS')
        // },

        // editTask(taskId: string) {
        //     this.$emit('edit', taskId)
        // },

        deleteTask(taskId: string) {
            this.$emit('delete', taskId)
        },

        editTask(taskId: string) {
            this.$emit('edit', taskId)
        },

        changeStatusOfTask(taskId: string, newStatus: string) {
            this.$emit('changeStatus', taskId, newStatus)
        }
    }
}
</script>

<template>
    <a
        href="#"
        class="list-group-item list-group-item-action"
        :class="{
            'todoItem': item.status === 'TODO',
            'doneItem': item.status === 'DONE',
            'inProgressItem': item.status === 'IN_PROGRESS'
        }"
    >
        <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1" :class="{'itemDoneTitle': item.status === 'DONE'}">{{ item.text }}</h5>
            <small class="text-muted">{{ formatDataForItem(item.addedAt) }}</small>
        </div>
        <div class="row">
            <div class="col">
                <p>Last modified on {{ formatDataForItem(item.modifiedAt) }}</p>
            </div>
            <div class="col text-end">
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button
                        v-if="item.status === 'TODO'"
                        @click="changeStatusOfTask(item.id, 'IN_PROGRESS')"
                        type="button"
                        class="btn btnDefaultStyle"
                    >Start task</button>

                    <button
                        v-if="item.status === 'IN_PROGRESS'"
                        @click="changeStatusOfTask(item.id, 'DONE')"
                        type="button"
                        class="btn btnDefaultStyle"
                    >Mark item as done</button>

                    <button
                        v-if="item.status === 'DONE'"
                        @click="changeStatusOfTask(item.id, 'IN_PROGRESS')"
                        type="button"
                        class="btn btnDefaultStyle"
                    >Not completed</button>

                    <button @click="editTask(item.id)" type="button" class="btn btnDefaultStyle btnEdit">Edit</button>
                    <button
                        @click="deleteTask(item.id)"
                        type="button"
                        class="btn btnDefaultStyle btnDelete"
                    >Delete</button>
                </div>
            </div>
        </div>
    </a>
</template>

<style scoped>

.btnDefaultStyle {
    background: #e5f8fb;
    border: 1px solid black;
    font-family: monospace;
    font-weight: bold;
    color: black;
}

.btnDelete {
    background-color: rgb(255, 204, 204);
}

.btnEdit {
    background-color: rgb(255, 252, 204);
}

.todoItem {
    background: #fff8e0;
}

.inProgressItem {
    background: #ffe7e0;
}

.doneItem {
    background: #e6ffe0;
}

.itemDoneTitle {
    text-decoration: line-through;
    color: darkgray;
    font-style: italic;
}
</style>