<template>
  <button :class="classes" :disabled="disabled" @click="handleClick">
    <span v-if="this.$slots.default !== undefined">
      <slot></slot>
    </span>
  </button>
</template>

<script>
const prefixCls = 'oui-btn';

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
  },
  methods: {
    handleClick(event) {
      if (this.disabled) return;
      this.$emit('click', event);
    }
  }
};
</script>
