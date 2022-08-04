import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ExamplesView from "../views/ExamplesView.vue";
import DocumentationView from "@/views/DocumentationView";
import VRPlayView from "@/views/UnityPlayerView";
import DownloadView from "@/views/DownloadView";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/examples",
    name: "examples",
    component: ExamplesView,
  },
  {
    path: "/docs",
    name: "documentation",
    component: DocumentationView,
  },
  {
    path: "/unity",
    name: "vrplay",
    component: VRPlayView,
  },
  {
    path: "/download",
    name: "download",
    component: DownloadView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
