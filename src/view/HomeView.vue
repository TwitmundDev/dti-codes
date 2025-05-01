<script setup>
import {fetchCodes} from "../utils/codeFetcher.js";
import HeaderComponent from "../assets/component/HeaderComponent.vue";
import CodeComponent from "../assets/component/CodeComponent.vue";
import {onMounted, ref} from "vue";

const codes = ref([]);

onMounted(async () => {
  const fetched = await fetchCodes();
  if (fetched) {
    // Transformation de l'objet en tableau avec la clé utilisée comme valeur pour la prop "code"
    codes.value = Object.keys(fetched).map(key => ({ ...fetched[key], code: key }));
  }
});
</script>

<template>
  <div class="codeContainer">
    <CodeComponent
        v-for="item in codes"
        :key="item.code"
        :name="item.name"
        :expired="item.expired"
        :code="item.code"
    />
  </div>
</template>

<style>
.codeContainer{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  min-width: 300px;
  min-height: 400px;
}
</style>