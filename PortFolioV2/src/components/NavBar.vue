<template>
  <div class="body">
    <div class="menu">
      <router-link to="/">
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
  justify-content: center;
  align-items: center;
  text-decoration: none;
}
.menu {
  display: flex;
  justify-content: center;
  gap: 5rem;
  text-decoration: none;
}
.but {
  display: flex;
  justify-content: center;
  text-align: center;
  border: solid 1px #a3b4d5;
  width: 8rem;
  border-radius: 20px;
  text-decoration: none;
  cursor: pointer;
  backdrop-filter: blur(10px);
  box-shadow: 0px 0px 20px 10px #a3b4d5;
}
.but:hover {
  transform: scale(1.125);
  color: #6e93bd;
}
p {
  text-decoration: none;
  color: aliceblue;
}
</style>
