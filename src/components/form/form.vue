<template>
  <form>
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'OForm',
  provide() {
    return {
      OFormInstance: this
    };
  },
  props: {
    model: {
      type: Object
    },
    rules: {
      type: Object
    },
    labelWidth: {
      type: Number
    }
  }
};
</script>
