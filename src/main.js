import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";

let aframe = require("aframe");

var app = createApp(App);
app.config.globalProperties.$aframe = aframe;

app.use(router).mount("#app");
import "bootstrap/dist/js/bootstrap.js";
