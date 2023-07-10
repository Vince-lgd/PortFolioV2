<template>
  <div>
    <div class="menu">
      <router-link to="/home">
        <button>Home</button>
      </router-link>
      <h1>Présentation</h1>
      <h1>Compétences</h1>
      <h1>Contact</h1>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup></script>

<style>
.menu {
  display: flex;
}
</style>
