<script setup lang="ts">
import TodoItemComponent from '@/components/TodoItemComponent.vue';

const props = defineProps({
    items: Array<any>()
})

</script>

<template>
    <div class="list-group">

        <TodoItemComponent :item="item" v-for="item in items" :key="item.id" />

    </div>
</template>