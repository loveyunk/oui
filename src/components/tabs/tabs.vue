<template>
  <div :class="classes">
    <div>
      <div v-for="(item, index) in navList">
        {{ item.label }}
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
const prefixCls = 'o-tabs';
import { findComponentsDownward } from '../../utils';

export default {
  name: 'OTabs',
  provide() {
    return {
      TabInstance: this
    };
  },
  props: {},
  data() {
    return {
      navList: []
    };
  },
  computed: {
    classes() {}
  },
  methods: {
    getTabs() {
      const allTabPanes = findComponentsDownward(this, 'OTabPane');

      return allTabPanes;
    },

    updateNav() {
      this.navList = [];
      this.getTabs().forEach(item => {
        this.navList.push({
          label: item.label
        });
      });
    }
  }
};
</script>
