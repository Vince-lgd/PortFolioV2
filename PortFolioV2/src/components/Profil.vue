<template>
  <div>
    <div class="pres">
      <div class="text">
        <h1>Développeur Front-End</h1>
        <div class="line"></div>
        <p class="dispo">Ouvert aux opportunités professionelles</p>
        <div ref="text2" class="text2">
          <p>
            J'ai réalisé deux formations, une première de trois mois orienté
            Fron-End avec une spécialisation en React.
          </p>
          <p>
            Une deuxième formation cette fois-ci en alternance d'une durée d'un
            an, afin de préparer le titre de Concepteur développeur
            d'application
          </p>
        </div>
        <div ref="text3" class="text3">
          <div class="bull">
            <a ref="changeColor" href="mailto:lagardevincent64@gmail.com"
              >Envoyez-moi un email</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { gsap } from "gsap";
import { ref, onMounted } from "vue";

const text2 = ref(null);
const text3 = ref(null);
const changeColor = ref(null);

const animateElement = () => {
  // gsap.to(text2.value, { x: 120, duration: 1 });
  // gsap.to(text3.value, { x: 250, duration: 1 });
  // gsap.to(text3.value, { x: 400, duration: 2 });
  gsap.to(text3.value, { backgroundColor: "#00ffee", duration: 2 });
  gsap.to(changeColor.value, { color: "black", duration: 1 });
};

onMounted(() => {
  animateElement();
});
</script>

<style scoped>
.pres {
  display: flex;
  justify-content: space-between;
}
h1 {
  font-size: 4rem;
  color: aliceblue;
}

p {
  font-size: 1.5rem;
  color: aliceblue;
}

img {
  margin-top: 5rem;
  width: 15rem;
  height: auto;
}
.text {
  font-family: "Poppins", sans-serif;
  margin-left: 3rem;
  margin-top: 5rem;
}
.text2 {
  margin-top: 5rem;
  width: 40rem;
}
.text3 {
  display: flex;
  justify-content: center;
  align-items: center;
  color: aliceblue;
  border: solid 1px #103734;
  border-radius: 50px;
  width: 50%;
  height: 10%;
  margin-top: 4rem;
}

a {
  color: black;
}

.text3:hover {
  background-color: #00ffee;
  color: aliceblue;
}

.line {
  display: flex;
  border: solid 2px #00ffee;
  width: 40px;
}
.dispo {
  font-size: 1rem;
}
.contact {
  font-size: 1rem;
  color: rgb(151, 151, 151);
}

a:hover {
  text-decoration: underline;
  text-decoration-color: aliceblue;
  text-decoration-thickness: 2px;
  font-family: Playfair Display, serif !important;
}

@media all and (max-width: 900px) {
  .text3 {
    width: 100%;
    margin-top: 6rem;
  }
}
@media all and (max-width: 430px) {
  h1 {
    font-size: 1.8rem;
  }
  .dispo {
    font-size: 1.2rem;
  }
  .text2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 15rem;
  }
  p {
    font-size: 1rem;
  }
}
</style>
