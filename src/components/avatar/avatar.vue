<template>
  <span :class="classes">
    <img :src="src" />
  </span>
</template>

<script>
const prefixCls = 'o-avatar';

export default {
  name: 'OAvatar',
  props: {
    src: {
      type: String
    },
    shape: {
      type: String,
      validator(value) {
        return ['circle', 'square'].includes(value);
      },
      default: 'circle'
    }
  },
  computed: {
    classes() {
      return [`${prefixCls}`];
    }
  }
};
</script>
