<template>
  <div
    class="unity-container"
    style="width: 100%; height: calc(100% - 56px)"
    :class="loading ? '' : ''"
  >
    <div
      class="unity-canvas-container d-flex flex-column justify-content-center align-items-center"
      style="width: 100%; height: 720px"
    >
      <div
        class="spinner-border position-absolute"
        role="status"
        v-if="loading"
      ></div>
      <canvas
        v-show="!loading"
        class="bg-danger bg-light"
        id="canvas"
        ref="canvasRef"
        style="width: 100%; height: 100%"
      />
    </div>
    <div class="unity-footer">
      <div id="unity-webgl-logo"></div>
      <button id="enter-vr" @click="enterVR()">VR</button>
      <button id="enter-ar" @click="enterAR()">AR</button>
      <div id="unity-webxr-link">
        Using
        <a
          href="https://github.com/De-Panther/unity-webxr-export"
          target="_blank"
          title="WebXR Export"
          >WebXR Export</a
        >
      </div>
      <div id="unity-build-title">Unity WebXR Export</div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "VRPlayView",
  data() {
    return {
      loading: true,
      config: {
        loaderUrl: "/immhaus/Build/unity.loader.js",
        dataUrl: "/immhaus/Build/unity.data",
        frameworkUrl: "/immhaus/Build/unity.framework.js",
        codeUrl: "/immhaus/Build/unity.wasm",
        streamingAssetsUrl: "StreamingAssets",
        companyName: "Immersive Haus",
        productName: "Beta",
        productVersion: "0.1",
      },
    };
  },
  setup() {
    const canvasRef = ref(null);
    let unityComponent = null;
    return {
      canvasRef,
      unityComponent: unityComponent,
    };
  },
  mounted() {
    console.log("Immersivehaus console:", this.canvasRef);
    if (!this.unityComponent) {
      this.loading = true;
      this.unityComponent = new this.$unityWgl(this.canvasRef, this.config);
    }
    if (this.unityComponent) setTimeout(() => (this.loading = false), 3000);
  },
  beforeUnmount() {
    if (this.unityComponent) {
      this.unityComponent.destroy();
      this.unityComponent = null;
    }
  },
  methods: {
    enterVR() {
      this.unityComponent.unityInstance.Module.WebXR.toggleVR();
    },
    enterAR() {
      this.unityComponent.unityInstance.Module.WebXR.toggleAR();
    },
  },
};
</script>
<style lang="scss">
.inset-bs {
  -webkit-box-shadow: inset 0px 0px 5px 3px #a8a8a8;
  box-shadow: inset 0px 0px 5px 3px #a8a8a8;
}
</style>
