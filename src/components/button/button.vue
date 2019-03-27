<template>
  <button :class="classes" :disabled="disabled">
    <span>
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
          [`${prefixCls}-block`]: this.block
        }
      ];
    }
  }
};
</script>
