<script setup lang="ts">
import {inject, ref} from "vue";
import {COLLAPSED_KEY} from "@/utils/constants.ts";

const {label = "home"} = defineProps<{ label: string }>()
const collapsed = inject(COLLAPSED_KEY, ref(false))

function toggleSidebar() {
  collapsed.value = !collapsed.value
}
</script>

<template>
  <div class="flex items-center h-(--ui-header-height)">
    <UButton @click="toggleSidebar" v-bind="{icon:collapsed?'i-lucide-panel-left-open':'i-lucide-panel-left-close'}"
             variant="ghost" color="neutral"/>
    <h1 v-text="label" class="ms-2 font-semibold"/>
    <div class="flex-1"/>
    <slot name="default"/>
  </div>
</template>


