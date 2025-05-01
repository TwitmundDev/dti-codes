<script setup>
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="footer">
    <p>Twitmund | &copy; 2025 - {{ currentYear }}</p>
  </footer>
</template>

<style scoped>
.footer {
  text-align: center;
  padding: 0.5rem;
  background-color: var(--primary-color);
  color: var(--primary-text-color);
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>