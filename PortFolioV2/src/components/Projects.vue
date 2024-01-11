<template>
  <div>
    <div class="projects">
      <div class="project">
        <span
          v-for="(project, index) in projects"
          :key="index"
          :style="{ '--i': index }"
        >
          <img :src="project.image" alt="" />
          <a target="_blank" :href="project.url">{{ project.name }}</a>
        </span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import wildStone from "../assets/wildStone.jpeg";
import green from "../assets/imgGreen.jpg";
import cv from "../assets/imgCv.png";
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
    name: "Site Florian Soria Photographe, React et Scss, durée 1 mois",
    url: "https://siteflo.vercel.app/",
    image: flo,
  },
  {
    id: 5,
    name: "Premier portfolio, React et SCSS, durée 2 mois",
    url: "https://portefolio-lyart.vercel.app/",
    image: portfolio,
  },
]);
</script>

<style scoped>
.projects {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  transform-style: preserve-3d;
}

.project {
  will-change: transform;
  position: relative;
  width: 200px;
  height: 200px;
  transform-style: preserve-3d;
  transition: 1.5s;
  transform: perspective(1000px) rotate(0deg);
  animation: rotate 20s linear infinite;
  animation-duration: 40s;
}

@keyframes rotate {
  from {
    transform: perspective(1000px) rotateY(0deg);
  }
  to {
    transform: perspective(1000px) rotateY(-360deg);
  }
}

.project span {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-origin: center;
  transform-style: preserve-3d;
  transform: rotateY(calc(var(--i) * 72deg)) translateZ(400px);
  -webkit-box-reflect: below 1px
    linear-gradient(transparent, transparent, #0002);
}

.project span img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  user-select: none;
}

a {
  text-align: center;
  position: absolute;
  margin-top: 28vh;
  color: aliceblue;
  font-family: "Poppins", sans-serif;
}
a:hover {
  color: rgb(162, 162, 162);
  height: 1px;
  text-decoration: underline;
  text-decoration-color: aliceblue;
  text-decoration-thickness: 2px;
  font-family: Playfair Display, serif !important;
}
img:hover {
  background-color: red;
}

h1 {
  color: aliceblue;
}
p {
  color: aliceblue;
}

@media all and (max-width: 1000px) {
  .project span img {
    position: absolute;
    top: 0;
    left: 0;
    width: 75%;
    height: 75%;
    object-fit: cover;
    user-select: none;
  }
  .project span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-origin: center;
    transform-style: preserve-3d;
    transform: rotateY(calc(var(--i) * 72deg)) translateZ(300px);
    -webkit-box-reflect: below 1px
      linear-gradient(transparent, transparent, #0002);
  }
  a {
    text-align: center;
    position: absolute;
    margin-top: 28vh;
    color: aliceblue;
    font-family: "Poppins", sans-serif;
    font-size: 10px;
    width: 8rem;
  }
}

@media all and (max-width: 700px) {
  .project span img {
    position: absolute;
    top: 0;
    left: 0;
    width: 75%;
    height: 75%;
    object-fit: cover;
    user-select: none;
  }
  .project span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-origin: center;
    transform-style: preserve-3d;
    transform: rotateY(calc(var(--i) * 72deg)) translateZ(200px);
    -webkit-box-reflect: below 1px
      linear-gradient(transparent, transparent, #0002);
  }
  a {
    text-align: center;
    position: absolute;
    margin-top: 28vh;
    color: aliceblue;
    font-family: "Poppins", sans-serif;
    font-size: 10px;
    width: 8rem;
  }
}

@media all and (max-width: 500px) {
  .project span img {
    position: absolute;
    top: 0;
    left: 0;
    width: 75%;
    height: 75%;
    object-fit: cover;
    user-select: none;
  }
  .project span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-origin: center;
    transform-style: preserve-3d;
    transform: rotateY(calc(var(--i) * 72deg)) translateZ(150px);
    -webkit-box-reflect: below 1px
      linear-gradient(transparent, transparent, #0002);
  }
  a {
    text-align: center;
    position: absolute;
    margin-top: 28vh;
    color: aliceblue;
    font-family: "Poppins", sans-serif;
    font-size: 10px;
    width: 8rem;
  }
}

@media all and (max-width: 430px) {
  .project span img {
    position: absolute;
    top: 0;
    left: 0;
    width: 75%;
    height: 75%;
    object-fit: cover;
    user-select: none;
  }
  .project span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-origin: center;
    transform-style: preserve-3d;
    transform: rotateY(calc(var(--i) * 72deg)) translateZ(100px);
    -webkit-box-reflect: below 1px
      linear-gradient(transparent, transparent, #0002);
  }
  a {
    text-align: center;
    position: absolute;
    margin-top: 28vh;
    color: aliceblue;
    font-family: "Poppins", sans-serif;
    font-size: 10px;
    width: 8rem;
  }
}

@media all and (max-width: 422px) {
  .project span img {
    position: absolute;
    top: 0;
    left: 0;
    width: 60%;
    height: 60%;
    object-fit: cover;
    user-select: none;
  }
  .project span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-origin: center;
    transform-style: preserve-3d;
    transform: rotateY(calc(var(--i) * 72deg)) translateZ(80px);
    -webkit-box-reflect: below 1px
      linear-gradient(transparent, transparent, #0002);
  }
  a {
    text-align: center;
    position: absolute;
    margin-top: 20vh;
    color: aliceblue;
    font-family: "Poppins", sans-serif;
    font-size: 10px;
    width: 5rem;
  }
}
</style>
