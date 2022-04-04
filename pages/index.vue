<template>
  <div id="app" class="min-h-screen w-full bg-gray-200">
    <main>
      <component
        v-for="(component, index) in page.components"
        :key="index"
        :is="component.name"
        v-bind="component.props"
      />
    </main>
  </div>
</template>

<script>
import navbar from "@/components/navbar.vue";
import hero from "@/components/hero.vue";
import features from "@/components/features.vue";
import contact from "@/components/contact.vue";

export default {
  name: "index",
  components: {
    navbar,
    hero,
    features,
    contact,
  },
  data() {
    return {
      page: {
        components: [
          {
            name: "navbar",
            props: {},
          },
          {
            name: "hero",
            props: {},
          },
          {
            name: "features",
            props: {},
          },
          {
            name: "contact",
            props: {},
          },
        ],
      },
    };
  },
};
</script>

<style></style>
