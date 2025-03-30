<script setup lang="ts">
import type {DropdownMenuItem} from "@nuxt/ui"
import NotificationButton from "@/components/App/NotificationButton.vue";

const items: DropdownMenuItem[] = [
  {
    label: "New main",
    icon: "i-lucide-send"
  },
  {
    label: "New customer",
    icon: "i-lucide-user-plus"
  },
]
</script>
<template>
  <UWrapper class="w-full">
    <Header label="Home">
      <NotificationButton/>
      <UDropdownMenu :items="items">
        <UButton color="primary" icon="i-lucide-plus" square class="rounded-full ms-3" size="md" variant="solid"/>
      </UDropdownMenu>
    </Header>
  </UWrapper>
</template>