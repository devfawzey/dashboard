<script setup lang="ts">
import type {DropdownMenuItem} from "@nuxt/ui"
import NotificationButton from "@/components/App/NotificationButton.vue";
import NewCustomerModal from "@/components/Modals/NewCustomerModal.vue";
import NewMailModal from "@/components/Modals/NewMailModal.vue";

const overlay = useOverlay()
const createCustomerModal = overlay.create(NewCustomerModal)
const createMailModal = overlay.create(NewMailModal)

const items: DropdownMenuItem[] = [
  {
    label: "New mail",
    icon: "i-lucide-send",
    onSelect() {
      createMailModal.open()
    }
  },
  {
    label: "New customer",
    icon: "i-lucide-user-plus",
    onSelect() {
      createCustomerModal.open()
    }
  },
]
</script>
<template>
  <UWrapper>
    <Header label="Home">
      <NotificationButton/>
      <UDropdownMenu :items="items">
        <UButton color="primary" icon="i-lucide-plus" square class="rounded-full ms-3" size="md" variant="solid"/>
      </UDropdownMenu>
    </Header>
  </UWrapper>
</template>