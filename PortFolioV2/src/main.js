import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import Profil from "./components/Profil.vue";
import Projects from "./components/Projects.vue";
import Contact from "./components/Contact.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/profil",
    component: Profil,
  },
  {
    path: "/projects",
    component: Projects,
  },
  {
    path: "/contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
