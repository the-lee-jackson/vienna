<script setup lang="ts">
import TodoItemComponent from '@/components/TodoItemComponent.vue';

const props = defineProps({
    items: Array<any>()
})

const emit = defineEmits(['itemDelete', 'itemEdit', 'itemChangeStatus'])

function deleteItem(taskId: string) {
    emit('itemDelete', taskId)
}

function editItem(taskId: string) {
    emit('itemEdit', taskId)
}

function changeItemStatus(taskId: string, newStatus: string) {
    emit('itemChangeStatus', taskId, newStatus)
}


</script>

<template>
    <div class="list-group">
        <TodoItemComponent
            @delete="deleteItem"
            @edit="editItem"
            @changeStatus="changeItemStatus"
            :item="item"
            v-for="item in items"
            :key="item.id"
        />
    </div>
</template>