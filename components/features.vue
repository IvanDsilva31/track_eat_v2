<template>
  <section id="services" class="services" style="background-color: white">
    <div class="container">
      <div class="row text-center">
        <h1 class="display-3 fw-bold">Our Services</h1>
        <div class="heading-line mb-1"></div>
      </div>
      <!-- START THE DESCRIPTION CONTENT  -->
      <div class="row pt-2 pb-2 mt-0 mb-3">
        <div class="col-md-6 border-right">
          <div class="bg-white p-3">
            <h2 class="fw-bold text-capitalize text-center">
              Our Services Range From Calorie Tracking To Suggesting diet plans
            </h2>
          </div>
        </div>
        <div class="col-md-6">
          <div class="bg-white p-4 text-start">
            <p class="fw-light">
              What is better than an insta-fit freak? A Track-EATER!<br />
              The home solution and one-stop destination to set healthy habits,
              diets and excercises. We provide various services to help you on
              your journey from a fitness fad-follower to a fit body and soul<br />
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- START THE CONTENT FOR THE SERVICES  -->
    <div class="container">
      <!-- START THE MARKETING CONTENT  -->
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
          <div class="services__content">
            <div class="icon d-block fas fa-seedling"></div>
            <h3 class="display-3--title mt-1">Calorie Tracking</h3>
            <p class="lh-lg">
              The path to progress in minute steps is invisible but it CAN BE
              MEASURED! Celebrate your daily milestones with our
              Calorie-Tracker.
              <br />
              <font style="font-size: smaller">
                P.S. What do you call a whole grain that’s zero calories but is
                rarely used?<br />

                Weird flax but 0k</font
              >
            </p>
            <a href="/login"
              ><button
                type="button"
                class="rounded-pill btn-rounded border-primary"
              >
                Learn more
                <span
                  ><img
                    :src="require('@/assets/images/arrow-right.png')"
                    alt="arrow-right"
                /></span>
              </button>
            </a>
          </div>
        </div>
        <div
          class="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-end"
        >
          <div class="services__pic">
            <img
              :src="require('@/assets/images/Eating healthy food.gif')"
              alt="marketing illustration"
              class="img-fluid"
            />
          </div>
        </div>
      </div>

      <div class="row">
        <div
          class="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-start"
        >
          <div class="services__pic">
            <img
              :src="require('@/assets/images/Athletics.gif')"
              alt="web development illustration"
              class="img-fluid"
            />
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
          <div class="services__content">
            <div class="icon d-block fas fa-running"></div>
            <h3 class="display-3--title mt-1">Exercise Tracking</h3>
            <p class="lh-lg">
              You want to get fit but don't know where to start? Pick a workout
              of your choice from our Excercise Tracker!
            </p>
            <a href="/login"
              ><button
                type="button"
                class="rounded-pill btn-rounded border-primary"
              >
                Learn more
                <span
                  ><img
                    :src="require('@/assets/images/arrow-right.png')"
                    alt="arrow-right"
                /></span>
              </button>
            </a>
          </div>
        </div>
      </div>
      <!-- START THE CLOUD HOSTING CONTENT  -->
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
          <div class="services__content">
            <div class="icon d-block fas fa-user-md"></div>
            <h3 class="display-3--title mt-1">Diet Suggestor</h3>
            <p class="lh-lg">
              Hmmm, are you craving something? Are you itching to order-in some
              fast-food? Too tired to cook a healthy meal? Don't worry! We've
              got you covered.<br />
              From fast-cook recipes to allergy-considerate, our diet suggestor
              is here to help your fitness journey
            </p>
            <a href="/login"
              ><button
                type="button"
                class="rounded-pill btn-rounded border-primary"
              >
                Learn more
                <span
                  ><img
                    :src="require('@/assets/images/arrow-right.png')"
                    alt="arrow-right"
                /></span>
              </button>
            </a>
          </div>
        </div>
        <div
          class="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-end"
        >
          <div class="services__pic">
            <img
              :src="require('@/assets/images/dietSuggestor.gif')"
              alt="cloud hosting illustration"
              class="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style src="@/assets/css/style.css">
body {
  background-color: white;
}
</style>
