<template>
  <!-- Content -->
  <div class="container">
    <div class="card content-main-card">
      <div class="card-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentMainCard",
  components: {

  },
};
</script>

<style scoped>
.content-main-card {
  margin-top: 20px;
}
</style>
