<template>
  <div>
    <template v-if="type !== 'textarea'">
      <input
        v-bind="$attrs"
        :class="inputClasses"
        :type="type"
        :value="currentValue"
        :disabled="disabled"
        @input="handleInput"
        @change="handleChange"
        @blur="handleBlur"
      />
    </template>
  </div>
</template>

<script>
import Emitter from '../../mixins/emitter';

const prefixCls = 'o-input';

export default {
  name: 'OInput',
  mixins: [Emitter],
  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: [String, Number],
      default: ''
    },
    size: {
      type: String,
      validator(value) {
        return ['large', 'default', 'small'].includes(value);
      }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentValue: this.value
    };
  },
  computed: {
    inputClasses() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-${this.size}`]: !!this.size
        }
      ];
    }
  },
  watch: {
    value(newVal) {
      this.setCurrentValue(newVal);
    }
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value);
    },
    setCurrentValue(value) {
      if (value === this.currentValue) return;
      this.currentValue = value;
      this.dispatch('OFormItem', 'on-form-change', value);
    },
    handleChange(e) {
      this.$emit('on-input-change', e);
    },
    handleBlur(e) {
      this.$emit('blur', e);
      this.dispatch('OFormItem', 'on-form-blur', this.currentValue);
    }
  }
};
</script>
