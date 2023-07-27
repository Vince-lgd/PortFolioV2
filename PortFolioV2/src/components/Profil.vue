<template>
  <div>
    <div class="pres">
      <div class="text">
        <p>
          Bonjour, je suis Vincent et j'ai 23 ans. Je viens de terminer une
          alternance pour devenir concepteur développeur d'application.
        </p>
        <div ref="text2" class="text2">
          <p>
            Cette formation m'as permis d'acquérir beaucoup en compétences et en
            autonomie et à me réconforter dans le fait que je veux faire du
            développement mon métier.
          </p>
        </div>
        <div ref="text3" class="text3">
          <p>
            Je suis disponible pour un poste début Septembre 2023, très
            rigoureux, autonome, bon esprit d'équipe.
          </p>
        </div>
      </div>

      <div class="box">
        <div class="border"></div>
        <img src="../assets//me.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { gsap } from "gsap";
import { ref, onMounted } from "vue";

const text2 = ref(null);
const text3 = ref(null);

const animateElement = () => {
  gsap.to(text2.value, { x: 120, duration: 1 });
  gsap.to(text3.value, { x: 250, duration: 1 });
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
p {
  font-size: 1.5rem;
  width: 18rem;
  color: aliceblue;
}
img {
  margin-top: 5rem;
  width: 15rem;
  height: auto;
}
.text {
  margin-left: 3rem;
  margin-top: 5rem;
}
.text2 {
  color: #ffae00;
}

.box {
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 4rem;
}
.border {
  position: absolute;
  height: 40rem;
  width: 1rem;
  background-color: #ffae00;
}
</style>

<!-- 
<template>
  <div>
    <div ref="elementToAnimate" class="box"></div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ref, onMounted } from "vue";

export default {
  setup() {

    const animateElement = () => {
      gsap.to(elementToAnimate.value, { x: 100, duration: 1 });
    };

    onMounted(() => {
      // Vous pouvez également effectuer des actions lors du montage du composant ici.
    });

    return {
      elementToAnimate,
      animateElement,
    };
  },
};
</script>

<style>
.box {
  width: 100px;
  height: 100px;
  background-color: red;
}
</style> -->
