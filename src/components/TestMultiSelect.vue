<script lang="ts">
import { defineComponent, computed, PropType, onMounted, ref } from "vue";
import { iCheck, iChevronDown } from "@/composable/useIcons";
import {
  LIcon,
  LInputMultiSelect,
  LInputMultiSelectButton,
  LInputMultiSelectSearch,
  LInputMultiSelectList,
  LInputMultiSelectItem,
  LInputMultiSelectOptions,
  LInputMultiSelectOption,
} from "l-vueso";

export default defineComponent({
  name: "TestMultiSelect",
  props: {
    modelValue: {
      type: [Array],
      required: true,
      default: () => {
        return [];
      },
    },
    schema: {
      type: Object,
      required: true,
      default: () => {
        return {};
      },
    },
    autofocus: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
      default: "",
    },
  },
  emits: ["update:modelValue"],
  components: {
    LIcon,
    LInputMultiSelect,
    LInputMultiSelectButton,
    LInputMultiSelectSearch,
    LInputMultiSelectList,
    LInputMultiSelectItem,
    LInputMultiSelectOptions,
    LInputMultiSelectOption,
  },
  setup(props, { emit }) {
    const selectModel = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      },
    });
    const schemaField = ref(props.schema);
    const onLoadItems = async () => {
      await fetch("https://jsonplaceholder.typicode.com/users?&_limit=50")
        .then((response) => response.json())
        .then((json) => (schemaField.value.items = json));
    };
    onMounted(async () => {
      await onLoadItems();
    });

    return {
      selectModel,
      schemaField,

      onLoadItems,

      iChevronDown,
      iCheck,
    };
  },
});
</script>
<template>
  <LInputMultiSelect
    v-model="selectModel"
    :schema="schemaField"
    class="relative"
    #default="{ show }"
    @on-load-items="onLoadItems"
  >
    <LInputMultiSelectButton
      :class="[
        'outline-none flex items-center mt-1 cursor-text w-full transition',
      ]"
    >
      <div class="w-full flex items-center">
        <LInputMultiSelectList
          #default="{ items, removeItem }"
          class="flex-auto flex flex-wrap"
        >
          <LInputMultiSelectItem
            v-for="item in items"
            class="overflow-hidden flex items-center rounded-md mr-2 mb-2 bg-s-200 dark:bg-s-600 text-black dark:text-white"
          >
            <img
              :src="'https://picsum.photos/id/10' + item.id + '/200/200'"
              class="h-10 w-10"
              alt=""
            />
            <span class="p-2">
              {{ item.name }}
            </span>
          </LInputMultiSelectItem>
          <div v-if="!items.length" class="mb-2 p-1 text-s-500">
            {{ schemaField.placeholder }}
          </div>
        </LInputMultiSelectList>
        <div>
          <LIcon :class="['transition-transform', { ' rotate-180': show }]">
            {{ iChevronDown }}
          </LIcon>
        </div>
      </div>
    </LInputMultiSelectButton>
    <LInputMultiSelectOptions
      class="shadow-2xl overflow-hidden outline-none border border-s-200 focus:ring-1 focus-within:ring-1 dark:border-s-700 focus:ring-p-500 focus-within:ring-p-500 rounded-md mt-2 max-h-64 b-scroll overflow-y-auto absolute z-1 top-full left-0 right-0 bg-white dark:bg-s-800"
      :class="[show ? 'block' : 'hidden']"
    >
      <div
        class="sticky top-0 bg-white dark:bg-s-800 border-b border-s-200 dark:border-s-700"
      >
        <LInputMultiSelectSearch class="ml-4 p-2 outline-none bg-transparent" />
      </div>
      <LInputMultiSelectOption
        v-for="option in schemaField.items"
        :value="option.id"
        :id="option.id"
        class="cursor-pointer focus:outline-none focus:bg-black/10 hover:bg-black/10"
        #default="{ value, check }"
      >
        <div
          :class="[
            'flex p-2 items-center ',
            check ? 'text-black dark:text-white font-medium' : '',
          ]"
        >
          <div
            :class="[
              'flex items-center border rounded-md h-6 w-6 mr-2',
              check
                ? 'bg-p-600 border-p-600'
                : 'border-s-300 dark:border-s-700',
            ]"
          >
            <LIcon
              v-if="check"
              :class="[
                'text-xl',
                {
                  'text-white': check,
                },
              ]"
            >
              {{ iCheck }}
            </LIcon>
          </div>

          <img
            :src="'https://picsum.photos/id/' + option.id + '/200/300'"
            class="mr-2 rounded-full h-6 w-6"
            alt=""
          />
          {{ option.name }}
        </div>
      </LInputMultiSelectOption>
    </LInputMultiSelectOptions>
  </LInputMultiSelect>
</template>
