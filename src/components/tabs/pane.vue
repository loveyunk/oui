<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
const prefixCls = 'o-tabs-tabpane';

export default {
  name: 'OTabPane',
  inject: ['TabInstance'],
  props: {
    name: {
      type: String
    },
    label: {
      type: String,
      default: ''
    }
  },
  methods: {
    updateNav() {
      this.TabsInstance.updateNav();
    }
  },
  watch: {
    label () {
      this.updateNav();
    }
  },
  mounted() {
    this.updateNav();
  }
};
</script>
