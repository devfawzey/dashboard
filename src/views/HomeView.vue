<script setup lang="ts">
import type {DropdownMenuItem} from "@nuxt/ui"
import HomePeriodPicker from "@/components/home/HomePeriodPicker.vue"
import NotificationButton from "@/components/app/NotificationButton.vue";
import NewCustomerModal from "@/components/modals/NewCustomerModal.vue";
import NewMailModal from "@/components/modals/NewMailModal.vue";
import Divider from "@/components/base/Divider.vue";
import UWrapper from "@/components/base/Wrapper.vue";

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
  <main class="w-full h-full">
    <UWrapper>
      <Header label="Home">
        <NotificationButton/>
        <UDropdownMenu :items="items">
          <UButton color="primary" icon="i-lucide-plus" square class="rounded-full ms-3" size="md" variant="solid"/>
        </UDropdownMenu>
      </Header>
    </UWrapper>
    <Divider/>
    <UWrapper class="py-2 flex items-center">
      <HomeDateRangePicker/>
      <HomePeriodPicker/>
    </UWrapper>
    <Divider/>
  </main>
</template>