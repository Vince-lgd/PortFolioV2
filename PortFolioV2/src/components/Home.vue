<template>
  <div>
    <div class="container">
      <p>
        <span> Développeur front-end </span>
      </p>
    </div>
    <div ref="text" class="text">
      <h1>Scroll Down</h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="120"
        height="120"
        viewBox="0 0 16 16"
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M3.75 5.75L8 10.25l4.25-4.5"
        />
      </svg>
    </div>
    <div class="links">
      <h3>Réseaux Sociaux</h3>
      <div class="link">
        <a
          class="link"
          target="_blank"
          href="https://www.linkedin.com/in/vincent-lagarde-b61322234/"
          >Linkedin</a
        >
        <a
          class="link"
          target="_blank"
          href="https://github.com/Vince-lgd?tab=repositories"
          >GitHub</a
        >
      </div>
    </div>
    <div class="projects">
      <Projects />
    </div>
    <div class="profil">
      <Profil />
    </div>
  </div>
</template>

<script setup>
import { gsap } from "gsap";
import { ref, onMounted } from "vue";
import Projects from "../components/Projects.vue";
import Profil from "../components/Profil.vue";

const text = ref(null);

const animatexte = () => {
  gsap.set(text.value, { y: -10 });
  gsap.to(text.value, {
    y: 10,
    opacity: 1,
    repeat: -1,
    yoyo: true,
    duration: 1.25,
  });
};

onMounted(() => {
  animatexte();
});
</script>

<style scoped>
*,
::before,
::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
}
h3 {
  color: aliceblue;
}
svg {
  color: aliceblue;
}
h1 {
  color: aliceblue;
}
a {
  font-size: 1rem;
  color: aliceblue;
  gap: 4rem;
}

.container {
  position: relative;
  max-width: 1600px;
  margin: 0 auto;
  padding: 100px 20px 0;
  margin-top: 4rem;
}
.text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
}

.links {
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 2rem;
}
.link {
  display: flex;
  gap: 1rem;
  font-family: "Poppins", sans-serif;
}
.projects {
  margin-top: 10rem;
}
.profil {
  margin-top: 20rem;
}
a:hover {
  color: rgb(162, 162, 162);
  height: 1px;
  text-decoration: underline;
  text-decoration-color: aliceblue;
  text-decoration-thickness: 2px;
  font-family: Playfair Display, serif !important;
}

p {
  text-transform: uppercase;
  color: rgb(255, 255, 255);
  font-weight: 900;
  color: transparent;
  font-size: 0px;
}
p span {
  display: inline-block;
  position: relative;
  overflow: hidden;
  font-size: clamp(20px, 8vw, 120px);
}
p span::after {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transform: translateX(-100%);
}
p:nth-child(1) {
  font-weight: 300;
  animation: txt-appearance 0s 1s forwards;
}
p:nth-child(2) {
  animation: txt-appearance 0s 1.25s forwards;
}
p:nth-child(1) span::after {
  background: #57eb00;
  animation: slide-in 0.75s ease-out forwards,
    slide-out 0.75s 1s ease-out forwards;
}
p:nth-child(2) span::after {
  background: #a3b4d5;
  animation: slide-in 0.75s 0.3s ease-out forwards,
    slide-out 0.75s 1.3s ease-out forwards;
}

@keyframes slide-in {
  100% {
    transform: translateX(0%);
  }
}
@keyframes slide-out {
  100% {
    transform: translateX(100%);
  }
}
@keyframes txt-appearance {
  100% {
    color: rgb(255, 255, 255);
  }
}

@media all and (max-width: 430px) {
  .text {
    margin-top: 12rem;
  }
  .links {
    margin-top: 5rem;
  }
  .menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2.5rem;
    padding: 10px;
  }
  p > span {
    font-size: 3rem;
  }
}
</style>
