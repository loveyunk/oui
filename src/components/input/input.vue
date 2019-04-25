<template>
  <div :class="wrapClasses">
    <template v-if="type !== 'textarea'">
      <input :type="type">
    </template>
  </div>
</template>

<script>
const prefixCls = 'oui-input';

export default {
  name: 'Input',
  props: {
    type: String,
    default: 'text'
  },
  computed: {
    wrapClasses() {
      return [
        `${prefixCls}-wrap`
      ];
    }
  }
};
</script>
