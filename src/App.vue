<script>
import {defineComponent} from "vue";
import HeaderComponent from "./assets/component/HeaderComponent.vue";
import FooterComponent from "./assets/component/FooterComponent.vue";

export default defineComponent({
  components: {FooterComponent, HeaderComponent}
})
</script>

<template>
  <HeaderComponent/>
  <RouterView/>
  <FooterComponent/>
</template>