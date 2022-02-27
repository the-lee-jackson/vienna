
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
        }
    }
}
</script>

<template>
    <a href="#" class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">{{ item.text }}</h5>
            <small class="text-muted">{{ formatDataForItem(item.addedAt) }}</small>
        </div>
        <div class="row">
            <div class="col">
                <p>Last modified on {{ formatDataForItem(item.modifiedAt) }}</p>
            </div>
            <div class="col text-end">
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-primary btn-success">Start task</button>
                    <button type="button" class="btn btn-primary">Edit</button>
                    <button @click="deleteTask(item.id)" type="button" class="btn btn-primary btn-danger">Delete</button>
                </div>
            </div>
        </div>
    </a>
</template>
