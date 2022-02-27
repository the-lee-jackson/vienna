<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="main-header">
    <div>
      <nav>
        <ul class="nav">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">Todo list</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/export">Export data</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/about">About</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.main-header {
  background: rgb(204, 204, 204);;
}
</style>