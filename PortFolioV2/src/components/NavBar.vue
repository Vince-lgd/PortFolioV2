<template>
  <div class="body">
    <div ref="texte" class="menu">
      <router-link to="/">
        <div ref="texte" class="name">
          <h3 class="prenom">Vincent</h3>
          <h3>Lagarde</h3>
        </div>
      </router-link>
      <div class="freelance">
        <div ref="circle" class="circle"></div>
        <h2>Disponible pour du travail en freelance</h2>
      </div>
      <div ref="texte" class="but">
        <router-link to="/projects">
          <div class="but"><p class="link">Projets</p></div>
        </router-link>
        <router-link to="/profil">
          <div class="but"><p class="link">A propos</p></div>
        </router-link>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script setup>
import { gsap } from "gsap";
import { ref, onMounted } from "vue";

const texte = ref(null);
const circle = ref(null);

const animateNavBar = () => {
  gsap.set(texte.value, { opacity: 0 });
  gsap.to(texte.value, { opacity: 1, duration: 1, delay: 1 });
  // gsap.to(circle.value, { opacity: 0, duration: 0.5 });
};

onMounted(() => {
  animateNavBar();
});
</script>

<style scoped>
.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;
  padding: 10px;
}
.name {
  display: flex;
  gap: 10px;
}
.prenom {
  color: rgb(162, 162, 162);
}
.circle {
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 1px rgb(94, 255, 0);
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: rgb(94, 255, 0);
}
.freelance {
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px aliceblue;
  border-radius: 20px;
  height: 2rem;
  width: 20%;
  gap: 5px;
}

.but {
  display: flex;
  gap: 4rem;
}
p {
  text-decoration: none;
  color: aliceblue;
  font-family: "Poppins", sans-serif;
}
h2 {
  color: aliceblue;
  font-family: "Poppins", sans-serif;
  font-size: 0.5rem;
}
h3 {
  color: aliceblue;
}

p:hover {
  color: rgb(162, 162, 162);
  height: 1px;
  text-decoration: underline;
  text-decoration-color: aliceblue;
  text-decoration-thickness: 2px;
  font-family: Playfair Display, serif !important;
}
</style>
