<script>
import { defineComponent } from "vue";

console.log("HeaderComponent loaded");
export default defineComponent({});
</script>

<template>
<div class="header">
  <img class="logo" src="../img/logo.png" alt="Logo" height="160" width="160" />
  <nav>
    <ul>
      <li><RouterLink class="headerButton" to="/">Home</RouterLink></li>
      <li><RouterLink class="headerButton" to="/codeChecker">Code checker</RouterLink></li>
      <li><RouterLink class="headerButton" to="/contact">Contact</RouterLink></li>
      <li><RouterLink class="headerButton" to="/about">About</RouterLink></li>
      <li><a class="headerButton" target="_blank" href="https://github.com/TwitmundDev/jsonHosting-dti-webapp/issues/2">Suggest a code</a></li>
    </ul>
  </nav>
</div>
</template>

<style scoped>
.header {
  display: flex;
  margin: 25px;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  color: #000000;
}
nav ul {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
}
nav ul li {
  margin: 0 50px; /* Ajout d'un espace horizontal entre les <li> */
}
.headerButton {
  text-decoration: none;
  color: var(--primary-text-color);
  font-weight: bold;
  transition: color 0.3s;
  background-color: var(--primary-color);
  padding: 15px;
  border-radius: 30px;
  border:2px solid var(--third-color); /* Changement de la couleur de la bordure au survol */
}

.headerButton:hover {
  background-color: var(--secondary-color);
}

</style>