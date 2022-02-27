<script setup lang="ts">
import TodoItemComponent from '@/components/TodoItemComponent.vue';

const props = defineProps({
    items: Array<any>()
})

const emit = defineEmits(['itemDelete'])

function deleteItem(taskId: string) {
    emit('itemDelete', taskId)
}

</script>

<template>
    <div class="list-group">
        <TodoItemComponent @delete="deleteItem" :item="item" v-for="item in items" :key="item.id" />
    </div>
</template>