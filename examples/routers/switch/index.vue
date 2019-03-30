<template>
  <div>
    <h2>value</h2>
    <o-switch v-model="value" @on-change="onChange"></o-switch>
    <Button type="primary" @click="handleClick">Button</Button>
    <h2>disabled</h2>
    <o-switch v-model="value2" disabled></o-switch>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: true,
      value2: true
    };
  },
  methods: {
    onChange(value) {
      console.log('onChange' + value);
    },
    handleClick() {
      this.value = false;
    }
  },
  watch: {
    value(val) {
      console.log('watch' + val);
    }
  }
};
</script>

