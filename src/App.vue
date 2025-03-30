<script setup lang="ts">
import {provide, ref} from "vue";
import {COLLAPSED_KEY} from "@/utils/constants.ts";

const collapsed = ref<boolean>(false)
provide(COLLAPSED_KEY, collapsed)
</script>
<template>
  <UApp>
    <div class="flex">
      <Sidebar :collapsed="collapsed"/>
      <RouterView v-slot="{ Component }">
        <Transition name="scale" mode="out-in">
          <component :is="Component"/>
        </Transition>
      </RouterView>
    </div>
  </UApp>
</template>

<style scoped>
.scale-enter-active {
  transition: all 0.5s ease;
}

.scale-enter-from,
.scale-leave-to {
  transform: translateY(10px) scale(.9);
  opacity: 0;
}
</style>
