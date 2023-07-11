<template>
  <div class="body">
    <div class="menu">
      <router-link to="/home">
        <div class="but"><p>Home</p></div>
      </router-link>
      <router-link to="/profil">
        <div class="but"><p>Présentation</p></div>
      </router-link>
      <router-link to="/projects">
        <div class="but"><p>Compétences / Projets</p></div>
      </router-link>
      <router-link to="/contact">
        <div class="but"><p>Contact</p></div>
      </router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script></script>

<style scoped>
.body {
  display: flex;
  justify-content: center;
  text-decoration: none;
}
.menu {
  display: flex;
  gap: 5rem;
  text-decoration: none;
}
.but {
  display: flex;
  justify-content: center;
  border: solid 1px red;
  width: 8rem;
  border-radius: 20px;
  text-decoration: none;
  cursor: pointer;
}
p {
  text-decoration: none;
  color: black;
}
</style>
