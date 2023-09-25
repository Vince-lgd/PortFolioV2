<template>
  <div>
    <div class="custom-cursor" ref="cursor"></div>
    <div>
      <NavBar />
    </div>
  </div>
</template>

<script setup>
import NavBar from "./components/NavBar.vue";

import { gsap } from "gsap";
import { ref, onMounted } from "vue";

const cursor = ref(null);

const followCursor = (event) => {
  gsap.to(cursor.value, {
    left: event.clientX,
    top: event.clientY,
    duration: 0.4,
  });
  if (event.target.classList == "link") {
    gsap.to(cursor.value, {
      width: 80,
      height: 80,
      backgroundColor: "gray",
      opacity: "0.8",
    });
  } else {
    gsap.to(cursor.value, {
      width: 20,
      height: 20,
      backgroundColor: "#00ffee",
    });
  }
};

onMounted(() => {
  window.addEventListener("mousemove", followCursor);
});
</script>

<style>
body {
  background-color: rgb(0, 0, 0);
}

.custom-cursor {
  width: 10px;
  height: 10px;
  z-index: -1;
  background: "#00ffee";
  border-radius: 50%;
  position: fixed;
  transform: translate(-50%, -50%);
  pointer-events: none;
}
</style>
