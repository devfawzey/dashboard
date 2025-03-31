<script setup lang="ts">
import {computed} from "vue"
import {useSidebar} from "@/composables/useSidebar.ts";

const {label = "home"} = defineProps<{ label: string }>()
const {state, isMobile, setOpenMobile, openMobile, toggleSidebar} = useSidebar()

function handleSidebar(): void {
  if (isMobile.value)
    return setOpenMobile(!openMobile.value)
  toggleSidebar()
}

const getHandlerIcon = computed<string>(() => {
  if (isMobile.value) return 'i-lucide-menu'
  if (state.value === 'expanded') return 'i-lucide-panel-left-open'
  return 'i-lucide-panel-left-close'
})
</script>

<template>
  <div class="flex items-center h-(--ui-header-height)">
    <UButton
        @click="handleSidebar"
        :icon="getHandlerIcon"
        variant="ghost" color="neutral"/>
    <h1 v-text="label" class="ms-2 font-semibold"/>
    <div class="flex-1"/>
    <slot name="default"/>
  </div>
</template>


