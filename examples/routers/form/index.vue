<template>
  <div>
    <o-form :model="formModel">
      <o-form-item label="username" prop="username">
        <o-input v-model="formModel.username"></o-input>
      </o-form-item>
    </o-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formModel: {
        username: 'tom'
      }
    };
  }
};
</script>
