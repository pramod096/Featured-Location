<template>
  <div class="conatiner">
    <div class="list" v-for="title in titles" :key="title">
      <SingleList :title="title" />
    </div>
  </div>
</template>