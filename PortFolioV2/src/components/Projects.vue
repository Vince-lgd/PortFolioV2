<template>
  <div>
    <div class="title">
      <h1>Mes Projets</h1>
    </div>
    <div class="project" v-for="(project, index) in projects" :key="index">
      <div class="pro">
        <img :src="project.image" alt="" />
        <a target="_blank" :href="project.url">{{ project.name }}</a>
      </div>
    </div>
  </div>
</template>
<script setup>
// import { gsap } from "gsap";
import { ref } from "vue";
import wildStone from "../assets/wildStone.jpeg";
import green from "../assets/imgGreen.jpg";
import cv from "../assets/imgCv.png";
import ace from "../assets/imgAce.png";
import flo from "../assets/imgFlo.jpg";
import portfolio from "../assets/imgMe.png";

const projects = ref([
  {
    id: 1,
    name: "WildStone, Projet 2 en React et Tailwind, durée 1 mois",
    url: "https://wildstone.vercel.app/ ",
    image: wildStone,
  },
  {
    id: 2,
    name: "Green My Mind, Hackathon en 30h React et SCSS",
    url: "https://green-my-mind.vercel.app/",
    image: green,
  },
  {
    id: 3,
    name: "CV Profesionnel, HTML, CSS et JavaScript",
    url: "https://cv-pro-vincent.vercel.app/",
    image: cv,
  },
  {
    id: 4,
    name: "Personnage Animé, TJS",
    url: "https://react-tjs.vercel.app/",
    image: ace,
  },
  {
    id: 5,
    name: "Site Florian Soria Photographe, React et Scss, durée 1 mois",
    url: "https://siteflo.vercel.app/",
    image: flo,
  },
  {
    id: 6,
    name: "Premier portfolio, React et SCSS, durée 2 mois",
    url: "https://portefolio-lyart.vercel.app/",
    image: portfolio,
  },
]);
</script>

<style scoped>
h1 {
  color: aliceblue;
}
p {
  color: aliceblue;
}
a {
  color: aliceblue;
}

img {
  width: 20rem;
}
.title {
  display: flex;
  justify-content: center;
}
.project {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 2rem;
}

.pro {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}
</style>
