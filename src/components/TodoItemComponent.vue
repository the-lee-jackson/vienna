<script lang="ts">
export default {
    props: ['item']
}
</script>

<template>
    <a href="#" class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">{{ item.text }} </h5>
        <small class="text-muted">03/03/2022 10:24 PM</small>
        </div>
        <div class="row">
            <div class="col">
                <p>Last modified on 03/03/2022 10:33 PM</p>
            </div>
            <div class="col text-end">
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-primary btn-success">Start task</button>
                    <button type="button" class="btn btn-primary">Edit</button>
                    <button type="button" class="btn btn-primary btn-danger">Delete</button>
                </div>
            </div>
        </div>
    </a>
</template>
