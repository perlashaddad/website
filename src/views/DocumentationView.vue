<template>
  <div class="documentations">
    <a-scene background="color: #ECECEC">
      <a-assets>
        <a-asset-item
          id="cityModel"
          src="https://cdn.aframe.io/test-models/models/glTF-2.0/virtualcity/VC.gltf"
        ></a-asset-item>
      </a-assets>
      <a-entity gltf-model="#cityModel" modify-materials></a-entity>
    </a-scene>
  </div>
</template>

<script>
export default {
  name: "DocumentationView",
};
</script>

<style scoped></style>
