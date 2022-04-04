<template>
  <section id="home" class="intro-section">
    <div class="container">
      <div class="row align-items-center text-white">
        <!-- START THE CONTENT FOR THE INTRO  -->
        <div class="col-md-6 intros text-start">
          <h1 class="display-2">
            <span
              class="display-2--intro"
              style="color: black; font-weight: 750"
              >Track-EAT</span
            ><br />
            <h1>
              <span class="typed-text">{{ typeValue }}</span>
              <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
            </h1>
            <span
              class="display-2--description lh-base headerText"
              style="color: black"
            >
              Your one stop fitness destination
            </span>
          </h1>
          <br />
          <a href="#services"
            ><button type="button" class="rounded-pill btn-rounded">
              Get Started
              <span>
                <img
                  :src="require('@/assets/images/arrow-right.png')"
                  alt="arrow-right"
              /></span>
            </button>
          </a>
          <a href="/login"
            ><button type="button" class="rounded-pill btn-rounded">
              Register
              <span>
                <img
                  :src="require('@/assets/images/arrow-right.png')"
                  alt="arrow-right"
                />
              </span>
            </button>
          </a>
        </div>
        <!-- START THE CONTENT FOR THE VIDEO -->
        <div class="col-md-6 intros text-end">
          <div class="video-box">
            <img
              :src="require('@/assets/images/headerImg.svg')"
              alt="video illutration"
              class="img-fluid headerImg"
              style="margin-left: 0"
            />
            <a
              href=""
              class="glightbox position-absolute top-50 start-50 translate-middle"
            >
              <span>
                <img
                  :src="require('@/assets/images/play-circle.png')"
                  alt="play-circle"
                  class=""
                />
              </span>
              <span class="border-animation border-animation--border-1"></span>
              <span class="border-animation border-animation--border-2"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#ffffff"
        fill-opacity="1"
        d="M0,160L48,176C96,192,192,224,288,208C384,192,480,128,576,133.3C672,139,768,213,864,202.7C960,192,1056,96,1152,74.7C1248,53,1344,107,1392,133.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
  </section>
</template>

<script>
import { setTimeout } from "timers";

export default {
  data: () => {
    return {
      typeValue: "",
      typeStatus: false,
      typeArray: ["Calorie Tracker", "Meal Suggestor", "Exercise Tracker"],
      typingSpeed: 200,
      erasingSpedd: 100,
      newTextDelay: 2000,
      typeArrayIndex: 0,
      charIndex: 0,
    };
  },
  methods: {
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
};
</script>

<style scoped>
h1 span.typed-text {
  color: darkorange;
}
h1 span.cursor {
  display: inline-block;
  margin-left: 3px;
  width: 4px;
  background-color: #fff;
  animation: cursorBlink 1s infinite;
}
h1 span.cursor.typing {
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
