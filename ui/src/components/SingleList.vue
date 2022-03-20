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
    // Stores the title of each location
    title: String,
  },
};
</script>

<style scoped>
.card {
  height: max-content;
  font-weight: bold;
  font-size: 1.8rem;
  border: none;
  outline: none;
  border-radius: 22px;
  background-color: #e0e5ec;
  box-shadow: 9px 9px 16px rgb(163, 177, 198, 0.6),
    -9px -9px 16px rgba(255, 255, 255, 0.5);
}

.card-header:hover {
  box-shadow: inset 9px 9px 16px rgb(163, 177, 198, 0.6),
    inset -9px -9px 16px rgba(255, 255, 255, 0.5);
}

.card-header {
  border: none;
  outline: none;
  border-radius: 22px;
  background-color: #e0e5ec;
  box-shadow: 9px 9px 16px rgb(163, 177, 198, 0.6),
    -9px -9px 16px rgba(255, 255, 255, 0.5);
}
span {
  color: #363233;
  font-size: 1.5rem;
  font-family: Luminari, fantasy;
  font-weight: 100;
  text-shadow: 9px 9px 16px rgb(163, 177, 198, 0.6),
    -9px -9px 16px rgba(255, 255, 255, 0.5);
  outline: none;
  border: none;
}
</style>
