<template>
  <button :class="classes" :disabled="disabled" @click="handleClick">
    <span v-if="this.$slots.default !== undefined">
      <slot></slot>
    </span>
  </button>
</template>

<script>
const prefixCls = 'oui-btn';
import { oneOf } from '../../utils/assist';

export default {
  name: 'Button',
  props: {
    type: {
      validator(value) {
        return oneOf(value, [
          'default',
          'primary',
          'warning',
          'danger',
          'success',
          'info',
          'inverse'
        ]);
      },
      default: 'default'
    },
    size: {
      validator(value) {
        return oneOf(value, ['large', 'small', 'default']);
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
  },
  methods: {
    handleClick(event) {
      if (this.disabled) return;
      this.$emit('click', event);
    }
  }
};
</script>
