<template>
  <div id="app">
    <immhaus-navbar nav-items="navItems"></immhaus-navbar>
    <router-view />
  </div>
</template>

<script>
import ImmhausNavbar from "@/components/ImmhausNavbar";

export default {
  name: "App",
  data() {
    return {
      navItems: [
        { label: "Home", path: "/" },
        { label: "Examples", path: "/examples" },
        { label: "Documentation", path: "/docs" },
        { label: "Unity", path: "/unity" },
        { label: "Download", path: "/download" },
      ],
    };
  },
  components: {
    ImmhausNavbar,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
