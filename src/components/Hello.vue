<script setup lang="ts">
const props = defineProps<{
  name: string
}>()

const uppercase = computed(() => props.name.toUpperCase())
</script>

<template>
  <div text="green 3xl" font="mono">
    Hello {{ uppercase }}
  </div>
</template>

