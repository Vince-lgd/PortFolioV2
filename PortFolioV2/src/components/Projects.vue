<template>
  <div class="logos">
    <div v-for="(logo, index) in logos" :key="index">
      <div v-if="logo.returnStatus === true" class="competences">
        <img @click="selectedLogo(logo)" :src="logo.front" alt="logo" />
      </div>
      <div v-if="logo.returnStatus === false" class="backCard">
        <img @click="selectedLogo(logo)" :src="logo.back" alt="backCard" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import react from "../assets/logoReact.png";
import vue from "../assets/logoVue.png";
import js from "../assets/logoJs.png";
import typescript from "../assets/logoTypescript.png";
import mysql from "../assets/logoMysql.png";
import nodejs from "../assets/logoNodejs.png";
import mongodb from "../assets/logoMongodb.png";
import graphql from "../assets/logoGraphql.png";
import docker from "../assets/logoDocker.png";
import sass from "../assets/logoSass.png";
import tailwind from "../assets/logoTailwind.png";
import bootstrap from "../assets/logoBootstrap.png";
import postman from "../assets/logoPostman.png";
import figma from "../assets/logoFigma.png";
import backcard from "../assets/backCard.png";

const choice1 = ref("");
const choice2 = ref("");

const selectedLogo = (logo) => {
  if (!choice1) {
    choice1.value = logo.value;
    logo.returnStatus = true;
  } else {
    choice2.value = logo.value;
    logo.returnStatus = true;
  }
  console.log("coucou");
};

const logos = ref([
  {
    front: react,
    back: backcard,
    valeur: react,
    returnStatus: false,
  },
  {
    front: vue,
    back: backcard,
    valeur: vue,
    returnStatus: false,
  },
  {
    front: js,
    back: backcard,
    valeur: js,
    returnStatus: false,
  },
  {
    front: typescript,
    back: backcard,
    valeur: typescript,
    returnStatus: false,
  },
  {
    front: mysql,
    back: backcard,
    valeur: mysql,
    returnStatus: false,
  },
  {
    front: nodejs,
    back: backcard,
    valeur: nodejs,
    returnStatus: false,
  },
  {
    front: mongodb,
    back: backcard,
    valeur: mongodb,
    returnStatus: false,
  },
  {
    front: graphql,
    back: backcard,
    valeur: graphql,
    returnStatus: false,
  },
  {
    front: docker,
    back: backcard,
    valeur: docker,
    returnStatus: false,
  },
  {
    front: sass,
    back: backcard,
    valeur: sass,
    returnStatus: false,
  },
  {
    front: tailwind,
    back: backcard,
    valeur: tailwind,
    returnStatus: false,
  },
  {
    front: bootstrap,
    back: backcard,
    valeur: bootstrap,
    returnStatus: false,
  },
  {
    front: postman,
    back: backcard,
    valeur: postman,
    returnStatus: false,
  },
  {
    front: figma,
    back: backcard,
    valeur: figma,
    returnStatus: false,
  },
]);
</script>

<style scoped>
.box {
  border: 1px solid red;
  background-color: red;
  height: 100px;
  width: 10%;
}

.logos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 4rem;
}
.competences {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 4rem;
}
.backCard {
  display: flex;
  justify-content: center;
  margin: 2rem;
}
img {
  display: flex;
  align-items: center;
  width: 7rem;
}
</style>
