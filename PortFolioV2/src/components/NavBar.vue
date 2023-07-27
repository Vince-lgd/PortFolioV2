<template>
  <div class="body">
    <div class="menu">
      <router-link to="/">
        <div class="but"><p>Home</p></div>
      </router-link>
      <router-link to="/profil">
        <div class="but"><p>Présentation</p></div>
      </router-link>
      <router-link to="/skils">
        <div class="but"><p>Compétences</p></div>
      </router-link>
      <router-link to="/projects">
        <div class="but"><p>Projets</p></div>
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
  justify-content: space-around;

  text-decoration: none;
  border: solid 1px black;
  border-radius: 20px;
  height: 5rem;
  align-items: center;
  backdrop-filter: blur(10px);
  box-shadow: 0px 0px 20px 10px #ffae00;
}

.but {
  display: flex;
  justify-content: center;
  text-align: center;
  border: solid 1px #a3b4d5;
  width: 7rem;
  text-decoration: none;
  cursor: pointer;
  backdrop-filter: blur(10px);
  box-shadow: 0px 0px 20px 10px #a3b4d5;
  border: black;
  background-image: linear-gradient(
    to right,
    #ff4e50 0%,
    #f9d423 51%,
    #ff4e50 100%
  );
  text-align: center;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
}
.but:hover {
  background-position: right center;
  color: #fff;
  text-decoration: none;
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
