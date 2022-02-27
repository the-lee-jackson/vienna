<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div>
      <h1 class="text-center text-bold">VIENNA</h1>
      <nav>
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/about">About</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>

  <hr />

  <RouterView />
</template>

