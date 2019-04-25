<template>
  <div>
    <Button type="primary" @click="info">显示普通提示</Button>
  </div>
</template>

<script>
export default {
  methods: {
    info () {
      // this.$Message.info('This is a info tip');
      console.log(this.$Message);
    }
  }
};
</script>
