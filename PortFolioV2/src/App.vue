<template>
  <div>
    <div>
      <NavBar />
    </div>

    <div class="title">
      <h1>Vincent Lagarde</h1>
      <h2>Développeur Web</h2>
    </div>
    <div class="stars">
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
    </div>
  </div>
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
</script>

<style>
body {
  background-color: rgb(20, 89, 91);
}
.title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
}
h1 {
  font-size: 3rem;
}
h2 {
  font-size: 1.75rem;
}
.stars {
  display: flex;
  gap: 8rem;
}
.star {
  background-color: rgb(255, 255, 201);
  backdrop-filter: blur(10px);
  box-shadow: 0px 0px 20px 10px #a3b4d5;
  border: 1px solid rgb(255, 255, 201);
  border-radius: 10rem;
  width: 2px;
  height: 2px;
  animation-name: clignot;
  animation-duration: 10s;
  animation-iteration-count: infinite;
}

@keyframes clignot {
  100% {
    transform: translatey(-300px);
  }
}
</style>
