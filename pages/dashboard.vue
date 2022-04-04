<template>
  <div class="h-screen flex items-center justify-center bg-white">
    <div class="grid grid-cols-12 px-25 gap-5" style="margin: 55px">
      <div class="col-span-6">
        <p class="text-gray-800 text-3xl font-semibold">Welcome, {{ email }}</p>
      </div>
      <div class="col-span-6" style="margin-left: 350px">
        <button
          @click.prevent="logoutUser"
          class="block bg-red-600 mt-2 py-3 px-10 ml-15 rounded-xl text-white font-semibold mb-2"
        >
          Logout
        </button>
      </div>

      <!-- Card 1 -->
      <a class="col-span-4 bg-rose-700 rounded-xl h-52 md:h-80" href="/meals">
        <!-- Image -->
        <img
          :src="require('@/assets/images/cal-pic.jpg')"
          class="rounded-t-xl max-h-44"
          style="width: -webkit-fill-available"
        />

        <!-- City Name -->
        <p
          class="text-xl md:text-3xl text-gray-50 pl-3"
          style="padding-top: 20px"
        >
          Calorie Tracking
        </p>

        <!-- Distance -->
        <p class="text-xs md:text-lg font-light text-gray-50 pt-3 pl-3 pb-10">
          Track calories on the go!!
        </p>
      </a>

      <!-- Card 2 -->
      <a
        class="col-span-4 bg-red-500 rounded-xl h-52 md:h-80"
        href="/suggestor"
      >
        <!-- Image -->
        <img
          :src="require('@/assets/images/meal-pic.webp')"
          class="rounded-t-xl max-h-44"
          style="width: fit-content"
        />

        <!-- City Name -->
        <p
          class="text-xl md:text-3xl text-gray-50 pl-3"
          style="padding-top: 20px"
        >
          Meal Suggestor
        </p>

        <!-- Distance -->
        <p class="text-xs md:text-lg font-light text-gray-50 pt-3 pl-3 pb-10">
          Get customized meal plans
        </p>
      </a>

      <!-- Card 3 -->
      <a
        class="col-span-4 bg-pink-700 rounded-xl h-52 md:h-80"
        href="/exercise"
      >
        <!-- Image -->
        <img
          :src="require('@/assets/images/exercise-pic.jpg')"
          class="rounded-t-xl max-h-44"
          style="width: fit-content"
        />

        <!-- City Name -->
        <p
          class="text-xl md:text-3xl text-gray-50 pl-3"
          style="padding-top: 20px"
        >
          Exercise Tracker
        </p>

        <!-- Distance -->
        <p class="text-xs md:text-lg font-light text-gray-50 pt-3 pl-3 pb-10">
          An easy way to burn calories
        </p>
      </a>
      <h4 style="width: max-content">
        #Useful health tips <br />
        <span class="typed-text">{{ typeValue }}</span>
        <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
      </h4>
    </div>
  </div>
</template>

<script>
import { setTimeout } from "timers";

export default {
  name: "dashboard",
  data: () => {
    return {
      typeValue: "",
      typeStatus: false,
      typeArray: [
        "Be kind to yourself",
        "Add resistance and balance training as you get older",
        "Eat the Right Foods and Portion Each Meal",
        "Be Sure to Get Sleep",
        "Never rush through warm-up and cool-down sessions",
        "Sneak in workouts during the day",
        "Start walking",
        "Cut down on saturated fat and sugar",
        "Do not skip breakfast",
      ],
      typingSpeed: 200,
      erasingSpedd: 100,
      newTextDelay: 2000,
      typeArrayIndex: 0,
      charIndex: 0,
    };
  },
  methods: {
    async logoutUser() {
      try {
        await this.$fire.auth.signOut();
        this.$store.commit("app/logout");
        this.$router.push("/");
      } catch (e) {
        console.error(e);
      }
    },

    // for tips
    typeText() {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.typeArray[this.typeArrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if (this.typeArrayIndex >= this.typeArray.length)
          this.typeArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
  computed: {
    email() {
      return process.server ? "" : localStorage.getItem("track_eat_user_email");
    },
  },
};
</script>

<style scoped>
h4 span.typed-text {
  color: darkorange;
}
h4 span.cursor {
  display: inline-block;
  margin-left: 3px;
  width: 4px;
  background-color: #000;
  animation: cursorBlink 1s infinite;
}
h4 span.cursor.typing {
  animation: none;
}
@keyframes cursorBlink {
  49% {
    background-color: #fff;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}
</style>
