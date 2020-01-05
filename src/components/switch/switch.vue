<template>
  <span :class="wrapClasses" @click="toggle">
    <input type="hidden" :value="currentValue" />
  </span>
</template>

<script>
const prefixCls = 'o-switch';

export default {
  name: 'OSwitch',
  props: {
    value: {
      type: [String, Number, Boolean],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    trueValue: {
      type: [String, Number, Boolean],
      default: true
    },
    falseValue: {
      type: [String, Number, Boolean],
      default: false
    }
  },
  data() {
    return {
      currentValue: this.value
    };
  },
  computed: {
    wrapClasses() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-checked`]: this.currentValue === this.trueValue,
          [`${prefixCls}-disabled`]: this.disabled
        }
      ];
    }
  },
  methods: {
    toggle() {
      if (this.disabled) return;

      const checked =
        this.currentValue === this.trueValue ? this.falseValue : this.trueValue;
      this.currentValue = checked;
      this.$emit('input', checked);
      this.$emit('on-change', checked);
    }
  },
  watch: {
    value(value) {
      if (value !== this.trueValue && value !== this.falseValue) {
        throw 'Value should be trueVale or falseValue';
      }
      this.currentValue = value;
    }
  }
};
</script>
