<template>
  <div>
    <div class="pres">
      <p>
        Bonjour, je me présente Vincent Lagarde. A la suite de ma première
        formation en tant que développeur front-end, j'ai suivi une alternance
        pour devenir concepteur développeur d'application. Elle a durée 1 an et
        durant cette formation j'ai appris pleins de choses et j'ai également
        gagné en expérience.
      </p>

      <img src="../assets//me.png" alt="" />
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.pres {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 4rem;
  text-align: start;
}
p {
  font-size: 1.5rem;
  width: 20rem;
  color: aliceblue;
}
img {
  width: 15rem;
  height: 17rem;
}
img:hover {
  transform: scale(1.125);
  color: #6e93bd;
}
.me {
  display: flex;
  justify-content: end;
}
</style>
