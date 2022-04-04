<template>
  <!-- This is an example component -->
  <div class="max-w-2xl mx-auto mt-24">
    <h1 class="mx-auto text-lg text-center">Burnt Calories</h1>
    <p class="mx-2 my-1">Total Calories Burnt: {{ totalCalories }}</p>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div class="p-4">
        <label for="table-search" class="sr-only">Search</label>
        <div class="relative mt-1">
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
          >
            <svg
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="table-search"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-80 pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter items"
            v-model="text"
          />
          <button
            @click.prevent="fetchCaloriesAndLogItem"
            class="bg-blue-600 my-4 px-6 py-2 rounded-xl text-white font-semibold"
          >
            Track
          </button>
        </div>
      </div>
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">Activity</th>
            <th scope="col" class="px-6 py-3">Calories</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="e in exercise"
            :key="e.name"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
            >
              {{ e.name }}
            </th>
            <td class="px-6 py-4">{{ e.calories }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <script src="https://unpkg.com/flowbite@1.3.4/dist/flowbite.js"></script>
  </div>
</template>

<script>
export default {
  name: "exercise",
  data: () => ({
    text: "",
    exercise: [],
  }),
  mounted() {
    const uid = process.server ? "" : localStorage.getItem("track_eat_user_id");
    this.$fire.firestore
      .collection("activities")
      .doc(uid)
      .onSnapshot((doc) => {
        this.exercise = doc.data().items;
      });
  },
  computed: {
    totalCalories() {
      var total = 0;
      for (var i in this.exercise) {
        total += this.exercise[i].calories;
      }
      return total;
    },
  },
  methods: {
    async fetchCaloriesAndLogItem() {
      const config = {
        headers: {
          "content-type": "application/json",
          "x-app-id": "4a7b5cdd",
          "x-app-key": "d15eb107974a6a5ce5d17d0d5a2cfd30",
        },
      };
      const data = {
        query: this.text,
      };
      const res = await this.$axios.$post(
        "https://trackapi.nutritionix.com/v2/natural/exercise",
        data,
        config
      );
      const cal = res.exercises[0].nf_calories;
      const formattedDate = this.$moment().format("yyyyMMDD");
      const _fbData = { date: formattedDate, name: this.text, calories: cal };
      const uid = process.server
        ? ""
        : localStorage.getItem("track_eat_user_id");
      const doc = await this.$fire.firestore
        .collection("activities")
        .doc(uid)
        .get();
      if (doc && doc.exists) {
        await doc.ref.update({
          items: this.$fireModule.firestore.FieldValue.arrayUnion(_fbData),
        });
      } else {
        await doc.ref.set(
          {
            items: this.$fireModule.firestore.FieldValue.arrayUnion(_fbData),
          },
          { merge: true }
        );
      }
      this.text = "";
    },
  },
};
</script>

<style></style>
