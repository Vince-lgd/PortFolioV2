<template>
  <div>
    <div class="pres">
      <div class="text">
        <h1>Développeur Full-Stack</h1>
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
          <p class="contact">Contact :</p>
          <a ref="changeColor" href="mailto:lagardevincent64@gmail.com"
            >lagardevincent64@gmail.com</a
          >
        </div>
        <div class="links">
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
    </div>
  </div>
</template>

<script setup>
import { gsap } from "gsap";
import { ref, onMounted } from "vue";

const text2 = ref(null);
const text3 = ref(null);
const changeColor = ref(null);

const animateElement = (event) => {
  gsap.to(text2.value, { x: 120, duration: 1 });
  gsap.to(text3.value, { x: 250, duration: 1 });
  gsap.to(text3.value, { x: 350, duration: 2 });
  gsap.to(text3.value, { backgroundColor: "#ffae00", duration: 2 });
  gsap.to(changeColor.value, { color: "aliceblue", duration: 1 });
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
a {
  font-size: 1rem;
  color: aliceblue;
  gap: 4rem;
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
  flex-direction: column;
  align-items: center;
  color: aliceblue;
  border: solid 1px #ffae00;
  border-radius: 50px;
  width: 50%;
  margin-top: 4rem;
}

.text3:hover {
  background-color: #ffae00;
  color: aliceblue;
}

.line {
  display: flex;
  border: solid 2px #ffae00;
  width: 40px;
}
.dispo {
  font-size: 1rem;
}
.contact {
  font-size: 1rem;
  color: rgb(151, 151, 151);
}

.links {
  display: flex;
  gap: 2rem;
  margin-top: 5rem;
}
a:hover {
  text-decoration: underline;
  text-decoration-color: aliceblue;
  text-decoration-thickness: 2px;
  font-family: Playfair Display, serif !important;
}
</style>
