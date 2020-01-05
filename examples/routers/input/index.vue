<template>
  <div>
    <div>
      <o-input v-model="value" placeholder="haha" />
      <div>{{ value }}</div>
    </div>
    <div>
      <h3>Size</h3>
      <o-input size="large" />
      <br>
      <o-input />
      <br>
      <o-input size="small" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ''
    };
  }
};
</script>
