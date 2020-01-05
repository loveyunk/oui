<template>
  <div class="container">
    <nav>
      <ul>
        <li><router-link to="/button">Button</router-link></li>
        <li><router-link to="/message">Message</router-link></li>
        <li><router-link to="/badge">badge</router-link></li>
        <li><router-link to="/icon">icon</router-link></li>
        <li><router-link to="/switch">switch</router-link></li>
        <li><router-link to="/input">input</router-link></li>
        <li><router-link to="/checkbox">checkbox</router-link></li>
        <li><router-link to="/tabs">tabs</router-link></li>
        <li><router-link to="/form">form</router-link></li>
        <li><router-link to="/avatar">avatar</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
@import "../src/styles/index.less";
</style>


<style lang="less" scoped>
nav {
  margin-bottom: 40px;

  ul {
    display: flex;
    flex-wrap: wrap;
  }
  li {
    display: inline-block;
  }
  li + li {
    border-left: solid 1px #bbb;
    padding-left: 10px;
    margin-left: 10px;
  }
}
.container {
  padding: 10px 40px 0;
}
.v-link-active {
  color: #bbb;
}
</style>
