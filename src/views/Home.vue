<script lang="ts">
import { defineComponent, ref } from "vue";
import ButtonRepo from "@/components/ButtonRepo.vue";
import TestMultiSelect from "@/components/TestMultiSelect.vue";
export default defineComponent({
  name: "Home",
  setup() {
    const modelField = ref([]);

    const schema = ref({
      id: "languages",
      component: "TestLInputMultiSelect",
      name: "languages",
      label: "Your languages",
      description: "Input languages your know",
      placeholder: "Choose language",
      items: [],
      vtype: "array",
      rules: [
        {
          type: "required",
          params: ["This field is required"],
        },
        {
          type: "min",
          params: [1, "Languages cannot be less than 1 language"],
        },
        {
          type: "max",
          params: [5, "Languages cannot be more than 5 language"],
        },
      ],
    });

    return {
      schema,
      modelField,
    };
  },
  components: { ButtonRepo, TestMultiSelect },
});
</script>

<template>
  <div>
    <section class="bg-gray-800">
      <div
        class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"
      >
        <div
          class="text-3xl font-extrabold leading-9 tracking-tight text-white sm:text-4xl sm:leading-10"
        >
          <h1 class="text-green-600">CV</h1>
          <p class="text-xl">Parakhnevich Mikalai</p>
        </div>
        <!-- <div class="flex mt-8 lg:flex-shrink-0 lg:mt-0"></div> -->
      </div>
    </section>

    <section class="bg-white">
      <div
        class="max-w-screen-xl mx-auto lg:p-8 lg:flex lg:items-center lg:justify-center"
      >
        <div class="flex-none">
          <img
            class="object-contain h-48"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
            alt="node.js"
          />
        </div>
        <div class="flex-auto">
          <h2></h2>
          <ul class="p-6">
            <li>Vue.js</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="bg-gray-50">
      <div
        class="max-w-screen-xl mx-auto lg:px-8 lg:flex lg:items-center lg:justify-center"
      >
        <div class="flex-none">
          <img
            class="object-contain h-48"
            src="https://nodejs.org/static/images/logo.svg"
            alt="node.js"
          />
        </div>
        <div class="flex-auto">
          <h2></h2>
          <ul class="p-6">
            <li>2</li>
          </ul>
          <TestMultiSelect
            v-model="modelField"
            :schema="schema"
            error=""
          ></TestMultiSelect>
        </div>
      </div>
    </section>
  </div>
</template>
