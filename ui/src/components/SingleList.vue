<template>
  <div class="container text-center">
    <div class="card mx-auto">
      <div class="card-header">
        <span>{{ title }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleList",
  props: {
    title: String,
  },
};
</script>