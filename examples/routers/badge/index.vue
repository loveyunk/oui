<template>
  <div>
    <Badge :count="11">
      <a href="javascript:void(0)" class="demo-badge"></a>
    </Badge>
    <span style="padding-right: 20px"></span>
    <Badge :count="30">
      <a href="javascript:void(0)" class="demo-badge"></a>
    </Badge>
    <span style="padding-right: 20px"></span>
    <Badge :count="10000">
      <a href="javascript:void(0)" class="demo-badge"></a>
    </Badge>
    <h2>Type</h2>
    <Badge :count="22" type="success">
      <a href="javascript:void(0)" class="demo-badge"></a>
    </Badge>
    <span style="padding-right: 20px"></span>
    <Badge :count="22" type="primary">
      <a href="javascript:void(0)" class="demo-badge"></a>
    </Badge>
    <span style="padding-right: 20px"></span>
    <Badge :count="22" type="danger">
      <a href="javascript:void(0)" class="demo-badge"></a>
    </Badge>
    <span style="padding-right: 20px"></span>
    <Badge :count="22" type="warning">
      <a href="javascript:void(0)" class="demo-badge"></a>
    </Badge>
    <span style="padding-right: 20px"></span>
    <Badge :count="22" type="info">
      <a href="javascript:void(0)" class="demo-badge"></a>
    </Badge>
    <span style="padding-right: 20px"></span>
    <Badge :count="22" type="inverse">
      <a href="javascript:void(0)" class="demo-badge"></a>
    </Badge>
    <span style="padding-right: 20px"></span>
    <Badge :count="22" type="normal">
      <a href="javascript:void(0)" class="demo-badge"></a>
    </Badge>
    <span style="padding-right: 20px"></span>
    <h2>封顶数字</h2>
    <Badge :count="11100" :overflowCount="999">
      <a href="javascript:void(0)" class="demo-badge"></a>
    </Badge>
    <span style="padding-right: 20px"></span>
    <h2>dot</h2>
    <Badge :count="22" dot>
      <a href="javascript:void(0)" class="demo-badge"></a>
    </Badge>
    <span style="padding-right: 20px"></span>
    <h2>showZero</h2>
    <Badge :count="0" showZero>
      <a href="javascript:void(0)" class="demo-badge"></a>
    </Badge>
    <span style="padding-right: 20px"></span>
    <Badge :count="0" dot>
      <a href="javascript:void(0)" class="demo-badge"></a>
    </Badge>
    <span style="padding-right: 20px"></span>
    <h2>隐藏Bradge</h2>
    <Badge :count="1000" showZero :hidden="hidden">
      <a href="javascript:void(0)" class="demo-badge"></a>
    </Badge>
    <span style="padding-right: 20px"></span>
    <Badge dot :hidden="hidden">
      <a href="javascript:void(0)" class="demo-badge"></a>
    </Badge>
    <span style="padding-right: 20px"></span>
    <Button type="primary" @click="toggleBradge">Toggle</Button>
    <h2>status</h2>
    这里是一些文字<Badge status="success" /> <br />
    这里是一些文字<Badge status="warning" /> <br />
    这里是一些文字<Badge status="default" /> <br />
    这里是一些文字<Badge status="processing" /> <br />
    这里是一些文字<Badge status="danger" /> <br />
    <Badge status="success" text="Success" />
    <br />
    <Badge status="danger" text="Danger" />
    <br />
    <Badge status="default" text="Default" />
    <br />
    <Badge status="processing" text="Processing" />
    <br />
    <Badge status="warning" text="Warning" />
    <br /><br /><br />
  </div>
</template>
<script>
export default {
  data() {
    return {
      hidden: false
    };
  },
  methods: {
    toggleBradge() {
      this.hidden = !this.hidden;
    }
  }
};
</script>

<style scoped>
.demo-badge {
  width: 42px;
  height: 42px;
  background: #eee;
  border-radius: 6px;
  display: inline-block;
}
</style>
