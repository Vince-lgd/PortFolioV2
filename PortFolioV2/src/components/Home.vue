<template>
  <div class="container">
    <p>
      <span> Lagarde Vincent </span>
    </p>
    <p>
      <span> Développeur full-stack </span>
    </p>
    <div>
      <div class="starsBlue">
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
      </div>
      <div class="starsSalmon">
        <div class="starSalmon"></div>
        <div class="starSalmon"></div>
        <div class="starSalmon"></div>
        <div class="starSalmon"></div>
        <div class="starSalmon"></div>
        <div class="starSalmon"></div>
        <div class="starSalmon"></div>
        <div class="starSalmon"></div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.starsBlue {
  display: flex;
  justify-content: center;
  gap: 9rem;
}
.starsSalmon {
  display: flex;
  justify-content: center;
  gap: 9rem;
}
.star {
  background-color: rgb(255, 255, 201);
  backdrop-filter: blur(10px);
  box-shadow: 0px 0px 20px 10px #a3b4d5;
  border: 1px solid rgb(255, 255, 201);
  border-radius: 10rem;
  width: 3px;
  height: 3px;
  animation-name: clignot;
  animation-duration: 10s;
  animation-iteration-count: infinite;
}
.starSalmon {
  background-color: rgb(255, 255, 201);
  backdrop-filter: blur(10px);
  box-shadow: 0px 0px 20px 10px salmon;
  border: 1px solid rgb(255, 255, 201);
  border-radius: 10rem;
  width: 3px;
  height: 3px;
  animation-name: clignotSalmon;
  animation-duration: 10s;
  animation-iteration-count: infinite;
}

@keyframes clignot {
  100% {
    transform: translatey(-300px);
  }
}
@keyframes clignotSalmon {
  100% {
    transform: translatey(300px);
  }
}

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

.container {
  max-width: 1600px;
  margin: 0 auto;
  padding: 100px 20px 0;
}
p {
  text-transform: uppercase;
  color: rgb(0, 0, 0);
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
  background: salmon;
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
    color: #222;
  }
}
</style>
