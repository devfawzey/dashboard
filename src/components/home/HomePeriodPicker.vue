<script setup lang="ts">
import {type DropdownMenuItem} from "@nuxt/ui"
import {computed, ref} from "vue";

const items: DropdownMenuItem[] = [
  {
    label: "Daily",
    type: "checkbox",
  },
  {
    label: "Monthly",
    type: "checkbox"

  },
  {
    label: "Yearly",
    type: "checkbox"
  }
]

const selected = ref<DropdownMenuItem['label']>(items[0].label)

const getItems = computed<DropdownMenuItem[]>(() => {
  return items.map(item => ({
    ...item,
    checked: item.label === selected.value,
    onSelect() {
      if (item.label)
        selected.value = item.label
    }
  }))
})


</script>
<template>
  <UDropdownMenu :items="getItems">
    <UButton :label="selected" trailing-icon="i-lucide-chevron-down"/>
  </UDropdownMenu>
</template>