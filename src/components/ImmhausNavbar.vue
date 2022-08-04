<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">IMMHAUS</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li v-for="nav in navItems" :key="nav.label" class="nav-item">
            <router-link
              class="nav-link active"
              aria-current="page"
              :to="nav.path"
              >{{ nav.label }}</router-link
            >
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "ImmhausNavbar",
  // props: ["navItems"],
  data() {
    return {
      navItems: [
        { label: "Home", path: "/" },
        { label: "Examples", path: "/examples" },
        { label: "Documentation", path: "/docs" },
        { label: "VRplay", path: "/unity" },
        { label: "Download", path: "/download" },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped></style>
