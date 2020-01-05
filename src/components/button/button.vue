<template>
  <button :class="classes" :disabled="disabled">
    <span v-if="this.$slots.default !== undefined">
      <slot></slot>
    </span>
  </button>
</template>

<script>
const prefixCls = 'o-btn';

export default {
  name: 'Button',
  props: {
    type: {
      validator(value) {
        return [
          'default',
          'primary',
          'warning',
          'danger',
          'success',
          'info',
          'inverse'
        ].includes(value);
      },
      default: 'default'
    },
    size: {
      validator(value) {
        return ['large', 'small', 'default'].includes(value);
      },
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return [
        prefixCls,
        `${prefixCls}-${this.type}`,
        {
          [`${prefixCls}-block`]: this.block,
          [`${prefixCls}-${this.size}`]: this.size !== 'default'
        }
      ];
    }
  }
};
</script>
