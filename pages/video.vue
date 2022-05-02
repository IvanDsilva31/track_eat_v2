<template>
  <!-- This is an example component -->
  <div>
    <video :src="require('@/assets/demo.mp4')" autoplay muted loop></video>
  </div>
</template>

<script>
export default {
  name: "video",
};
</script>

<style>
video {
  margin: auto;
  margin-top: 100px;
  width: 75%;
  justify-content: center;
  align-content: center;
}
</style>
