<template>
  <div>
    <label>{{ label }}</label>
    <div>
      <slot></slot>
      <div>
        {{ validateMessage }}
      </div>
    </div>
  </div>
</template>

<script>
import AsyncValidator from 'async-validator';

function getPropByPath(obj, path) {
  let tempObj = obj;
  path = path.replace(/\[(\w+)\]/g, '.$1');
  path = path.replace(/^\./, '');
  let keyArr = path.split('.');
  let i = 0;
  for (let len = keyArr.length; i < len - 1; ++i) {
    let key = keyArr[i];
    if (key in tempObj) {
      tempObj = tempObj[key];
    } else {
      throw new Error(
        '[iView warn]: please transfer a valid prop path to form item!'
      );
    }
  }
  return {
    o: tempObj,
    k: keyArr[i],
    v: tempObj[keyArr[i]]
  };
}

export default {
  name: 'OFormItem',
  inject: ['OFormInstance'],
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String
    }
  },
  data() {
    return {
      validateMessage: ''
    };
  },
  mounted() {
    if (this.prop) {
      this.setRules();
    }
  },
  methods: {
    setRules() {
      this.$off('on-form-blur', this.onFieldBlur);
      this.$off('on-form-change', this.onFieldChange);
      this.$on('on-form-blur', this.onFieldBlur);
      this.$on('on-form-change', this.onFieldChange);
    },
    fieldValue() {
      const model = this.OFormInstance.model;
      if (!model || !this.prop) return;

      let path = this.prop;

      if (path.indexOf(':') !== -1) {
        path = path.replace(/:/, '.');
      }
      return getPropByPath(model, path).v;
    },
    getRules() {
      let formRules = this.OFormInstance.rules;
      formRules = formRules ? formRules[this.prop] : [];
      return formRules;
    },
    getFilteredRule(trigger) {
      const rules = this.getRules();

      return rules.filter(
        rule => !rule.trigger || rule.trigger.indexOf(trigger) !== -1
      );
    },
    validate(trigger, callback = function() {}) {
      const rules = this.getFilteredRule(trigger);
      if (!rules || rules.length === 0) {
        callback();
        return true;
      }
    },
    onFieldBlur() {
      // this.validate('blur');
    },
    onFieldChange() {
      this.validate('change');
    }
  }
};
</script>
