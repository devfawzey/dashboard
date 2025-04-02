<script setup lang="ts">
import {shallowRef, computed} from "vue";
import {CalendarDate, DateFormatter, getLocalTimeZone, today} from '@internationalized/date'

const df = new DateFormatter("en-US", {
  dateStyle: "medium"
})
const selected = shallowRef<{ start: CalendarDate, end: CalendarDate }>({
  start: new CalendarDate(2022, 1, 20),
  end: new CalendarDate(2022, 2, 10)
})

interface Range {
  label: string,
  days?: number,
  months?: number,
  years?: number
}

const ranges: Range[] = [
  {label: 'Last 7 days', days: 7},
  {label: 'Last 14 days', days: 14},
  {label: 'Last 30 days', days: 30},
  {label: 'Last 3 months', months: 3},
  {label: 'Last 6 months', months: 6},
  {label: 'Last year', years: 1}
]

function selectRange(range: Range) {
  const endDate = today(getLocalTimeZone())
  let startDate = endDate.copy()
  if (range.days) {
    startDate = startDate.subtract({days: range.days})
  } else if (range.months) {
    startDate = startDate.subtract({months: range.months})
  } else if (range.years) {
    startDate = startDate.subtract({years: range.years})
  }
  selected.value = {
    start: startDate,
    end: endDate,
  }
}

const isRangeSelected = computed<(range: Range) => boolean>(() => {
  return (range: Range): boolean => {
    if (!selected.value.start || !selected.value.end) return false;
    const endDate = today(getLocalTimeZone())
    let startDate = endDate.copy()
    const {days, months, years} = range
    if (days) {
      startDate = startDate.subtract({days})
    } else if (months) {
      startDate = startDate.subtract({months})
    } else if (years) {
      startDate = startDate.subtract({years})
    }
    return startDate.compare(selected.value.start) === 0 && endDate.compare(selected.value.end) === 0
  }
})
</script>

<template>
  <UPopover>
    <UButton icon="i-lucide-calendar" trailing-icon="i-lucide-chevron-down">
      <template v-if="selected.start">
        <template v-if="selected.end">
          {{ df.format(selected.start.toDate(getLocalTimeZone())) }} - {{
            df.format(selected.end.toDate(getLocalTimeZone()))
          }}
        </template>
        <template v-else>
          {{ df.format(selected.start.toDate(getLocalTimeZone())) }}
        </template>
      </template>
      <template v-else>
        Pick a date
      </template>
    </UButton>
    <template #content>
      <div class="flex divide-x divide-(--ui-bg-elevated)">
        <ul class="hidden sm:flex flex-col justify-center">
          <UButton
              v-for="range in ranges"
              :label="range.label"
              truncate
              @click="selectRange(range)"
              class="p-2 rounded-none"
              :class="[isRangeSelected(range)?'bg-(--ui-bg-elevated)':'hover:bg-(--ui-bg-elevated)/50']"
          />
        </ul>
        <UCalendar range class="p-2" :number-of-months="2" v-model="selected"/>
      </div>
    </template>
  </UPopover>
</template>
