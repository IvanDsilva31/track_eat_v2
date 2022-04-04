<template>
  <div
    class="tip"
    style="
      display: flex;
      flex-direction: row;
      max-width: 100%;
      height: auto mt-1000;
    "
  >
    <img class="bulb-icon" src="images/bulb.svg" alt="tip" />
    <div
      style="
        display: flex;
        flex-direction: column;
        max-width: 100%;
        height: auto;
      "
    >
      <p class="tip-text1">#Useful Health Tips</p>

      <div id="tip-text2"></div>
    </div>
  </div>
</template>

<script>
var tips = [
  "Be kind to yourself",
  "Add resistance and balance training as you get older",
  "Eat the Right Foods and Portion Each Meal",
  "Be Sure to Get Sleep",
  "Never rush through warm-up and cool-down sessions",
  "Sneak in workouts during the day",
  "Start walking",
  "Cut down on saturated fat and sugar",
  "Do not skip breakfast",
];
</script>

<style scoped>
.tip {
  height: 6vw;
  width: 100vw;
  top: 319.90625px;
  color: black;
  background: #c9c9c945;
}

.tip-text1 {
  max-width: 100%;
  height: auto;
  width: 1vw;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 2vw;
  inline-size: auto;
  margin-top: 1vw;
  margin-left: 1vw;
}

#tip-text2 {
  max-width: 100%;
  height: auto;
  width: 1vw;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.5vw;
  inline-size: auto;
  margin-top: -2vw;
  margin-left: 1vw;
  margin-bottom: 1vw;
}
</style>
