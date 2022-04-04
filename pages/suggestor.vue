<template>
  <section>
    <div class="container initial">
      <h1 class="brand">Find Meals For Your Ingredients</h1>
      <blockquote class="custom_quote">
        Real food doesn't have ingredients, real food is ingredients.<br />
        <cite>- Jamie Oliver</cite>
      </blockquote>
      <form>
        <input type="text" placeholder="Search Your Recipe..." v-model="text" />
        <!-- <ion-icon name="search"></ion-icon> -->
        <button
          class="search_btn"
          id="search-btn"
          @click.prevent="fetchRecipes"
        >
          <i class="fas fa-search">Search</i>
        </button>
      </form>
      <div class="search-result">
        <div class="item" v-for="r in recipes" :key="r.recipe">
          <img :src="r.recipe.image" alt="" />
          <div class="flex-container">
            <h1 class="title">{{ r.recipe.label }}</h1>
            <a class="view-btn" :href="r.recipe.url">View Recipe</a>
          </div>
          <p class="item-data">Health labels: {{ r.recipe.healthLabels }}</p>
          <p class="item-data">Calories: {{ r.recipe.calories }}</p>
        </div>
      </div>
    </div>
    <script src="https://unpkg.com/ionicons@5.1.2/dist/ionicons.js"></script>
  </section>
</template>

<script>
export default {
  name: "suggestor",
  data: () => ({
    text: "",
    recipes: [],
  }),
  methods: {
    async fetchRecipes() {
      const res = await this.$axios.$get(
        `https://api.edamam.com/search?q=${this.text}&app_id=ae4c3a4b&app_key=ebe41ed05ec6b34a5a33e40a80ccf860&from=0&to=10`
      );
      const recipes = res.hits;
      this.recipes = recipes;

      this.text = "";
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600&display=swap");
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
html {
  font-family: "Nunito";
  font-size: 12px;
}

section {
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 0;
  background-color: rgb(26, 26, 27);
}
.container {
  width: 100%;
  height: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
.brand {
  text-align: center;
  font-size: 4rem;
  color: whitesmoke;
  margin-bottom: 30px;
}
form {
  width: 90%;
  /* max-width: 400px; */
  margin: 15px auto;
  background-color: rgb(223, 223, 223);
}
input {
  width: 90%;
  padding: 10px;
  border-radius: 4px;
  border: none;
  outline: none;
  font-size: 2rem;
  background-color: rgb(223, 223, 223);
  display: inline-block;
}
form ion-icon {
  width: 8%;
  font-size: 3rem;
  margin-bottom: -8px;
  color: rgb(75, 75, 75);
  display: inline-block;
}
.search-result {
  margin-top: 50px;
  width: 100%;
  display: grid;
  grid-gap: 25px;
  grid-template: auto / repeat(auto-fit, minmax(300px, 1fr));
}
.item {
  width: 100%;
  border-radius: 8px;
  background-color: rgb(37, 37, 37);
  padding: 15px;
  overflow: hidden;
}
.item:hover {
  background-color: #080808;
}
.item img {
  width: 100%;
  height: 300px;
  border-radius: 4px;
}
.flex-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.search-result .title {
  color: whitesmoke;
  margin: 20px 10px 0 0;
  font-size: 1.8rem;
  font-weight: 400;
}
.view-btn {
  text-decoration: none;
  text-align: center;
  width: 130px;
  padding: 10px 0;
  background-color: #404041;
  color: whitesmoke;
  font-size: 1.4rem;
  font-weight: 600;
  margin-top: 20px;
  border-radius: 4px;
  align-self: flex-start;
}
.view-btn:hover {
  background-color: #1aeb82;
}
.item-data {
  color: whitesmoke;
  display: block;
  margin-top: 10px;
  font-size: 1.4rem;
  letter-spacing: 0.05rem;
  line-height: 2rem;
}
.container.initial .brand {
  font-size: 5rem;
}
.container.initial form:hover {
  /* max-width: 800px; */
}
.container.initial form input {
  padding: 20px;
  font-size: 3rem;
}

.search_btn {
  padding: 8px;
  background: #1cc02a;
  color: white;
  font-size: 16px;
  border: 1px solid grey;
  border-left: none; /* Prevent double borders */
  cursor: pointer;
  margin: 8px;
}

.search_btn:hover {
  background: #74fc26;
}

.custom_quote {
  color: white;
  font-size: 2rem;
  text-align: center;
}

@media (max-width: 768px) {
  .search-result {
    grid-gap: 10px;
  }
  .container.initial .brand {
    font-size: 4rem;
  }
  .container.initial form {
    max-width: 500px;
  }
  .container.initial form input {
    padding: 10px;
    font-size: 2rem;
  }
}
</style>
