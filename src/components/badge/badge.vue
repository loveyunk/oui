<template>
  <div v-if="dot" :class="classes">
    <slot></slot>
    <sup v-show="!hidden" :class="dotClasses"></sup>
  </div>
  <div v-else-if="status" v-show="!hidden" :class="[classes, statusClasses]">
    <span :class="statusDotClasses"></span>
    <span :class="statusTextClasses">{{ text }}</span>
  </div>
  <div v-else :class="classes">
    <slot></slot>
    <sup v-if="hasCount" v-show="!hidden" :class="countClasses">
      {{ finalCount }}
    </sup>
  </div>
</template>

<script>
const prefixCls = 'oui-badge';

export default {
  name: 'Badge',
  props: {
    count: Number,
    dot: {
      type: Boolean,
      default: false
    },
    overflowCount: {
      type: Number,
      default: 99
    },
    type: {
      validator(value) {
        return [
          'success',
          'primary',
          'normal',
          'danger',
          'warning',
          'info',
          'inverse'
        ].includes(value);
      }
    },
    status: {
      validator(value) {
        return [
          'success',
          'processing',
          'default',
          'danger',
          'warning'
        ].includes(value);
      }
    },
    showZero: {
      type: Boolean,
      default: false
    },
    hidden: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ''
    }
  },
  computed: {
    classes() {
      return `${prefixCls}`;
    },
    dotClasses() {
      return `${prefixCls}-dot`;
    },
    statusClasses() {
      return `${prefixCls}-status`;
    },
    statusDotClasses() {
      return [
        `${prefixCls}-status-dot`,
        {
          [`${prefixCls}-status-${this.status}`]: !!this.status
        }
      ];
    },
    statusTextClasses() {
      return `${prefixCls}-status-text`;
    },
    countClasses() {
      return [
        `${prefixCls}-count`,
        {
          [`${prefixCls}-count-${this.type}`]: !!this.type
        }
      ];
    },
    finalCount() {
      if (this.text !== '') return this.text;
      return parseInt(this.count) >= parseInt(this.overflowCount)
        ? `${this.overflowCount}+`
        : this.count;
    },
    hasCount() {
      if (this.count || this.text !== '') return true;
      if (this.showZero && parseInt(this.count) === 0) return true;
      else return false;
    }
  }
};
</script>

