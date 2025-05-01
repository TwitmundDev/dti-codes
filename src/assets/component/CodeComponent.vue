<template>
  <div class="card">
    <div class="card-header">
      <h2>{{ name }}</h2>
      <span :class="{'status-active': !expired, 'status-expired': expired}">
        {{ expired ? 'Expired' : 'Active' }}
      </span>
      <button @click="copyToClipboard(code)">
        <font-awesome-icon icon="clipboard" size="2x"/>
      </button>
    </div>
  </div>
</template>

<script>
import {toast} from "vue3-toastify";

export default {
  name: 'CodeCard',
  props: {
    name: {
      type: String,
      required: true
    },
    expired: {
      type: Boolean,
      required: true
    },
    code: {
      type: String,
      required: true
    }
  },methods:{
    copyToClipboard(code) {
      navigator.clipboard.writeText(code).then(() => {
        toast("Code copied to clipboard", {
          "theme": "colored",
          "type": "info",
          "dangerouslyHTMLString": true
        })
        console.log('Code copied to clipboard');
      }).catch(err => {
        console.error('Failed to copy: ', err);
      });
    }
  }
}

</script>

<style scoped>
.card {
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin: 16px 0;
  min-width: 500px;
  min-height: 100px;
}

.card-header {
  background-color: var(--primary-color);
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 30px;
  border:2px solid var(--third-color);
}

button {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--primary-text-color);
}

.status-active {
  color: green;
  font-weight: bold;
}

.status-expired {
  color: red;
  font-weight: bold;
}
</style>