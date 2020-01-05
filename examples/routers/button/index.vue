<template>
  <div>
    <h2>type</h2>
    <o-button>Default</o-button>
    <o-button type="default" @click.native="handleClick">Default</o-button>
    <o-button type="primary">Primary</o-button>
    <o-button type="warning">Warning</o-button>
    <o-button type="danger">Danger</o-button>
    <o-button type="success">Success</o-button>
    <o-button type="info">Info</o-button>
    <o-button type="inverse" @click="handleClick">Inverse</o-button>
    <br /><br />
    <h2>disabled</h2>
    <o-button disabled type="default">Default</o-button>
    <o-button disabled type="primary">Primary</o-button>
    <o-button disabled type="warning">Warning</o-button>
    <o-button disabled type="danger">Danger</o-button>
    <o-button disabled type="success">Success</o-button>
    <o-button disabled type="info">Info</o-button>
    <o-button disabled type="inverse" @click="handleClick">Inverse</o-button>
    <br /><br />
    <h2>block</h2>
    <o-button block type="default">Default</o-button>
    <p></p>
    <o-button block type="primary">Primary</o-button>
    <p></p>
    <o-button block type="warning">Warning</o-button>
    <p></p>
    <o-button block type="danger">Danger</o-button>
    <p></p>
    <o-button block type="success">Success</o-button>
    <p></p>
    <o-button block type="info">Info</o-button>
    <p></p>
    <o-button block type="inverse">Inverse</o-button>
    <h2>size</h2>
    <h3>large</h3>
    <o-button size="large">Default</o-button>
    <o-button size="large" type="default">Default</o-button>
    <o-button size="large" type="primary">Primary</o-button>
    <o-button size="large" type="warning">Warning</o-button>
    <o-button size="large" type="danger">Danger</o-button>
    <o-button size="large" type="success">Success</o-button>
    <o-button size="large" type="info">Info</o-button>
    <o-button size="large" type="inverse">Inverse</o-button>
    <h3>default</h3>
    <o-button>Default</o-button>
    <o-button type="default">Default</o-button>
    <o-button type="primary">Primary</o-button>
    <o-button type="warning">Warning</o-button>
    <o-button type="danger">Danger</o-button>
    <o-button type="success">Success</o-button>
    <o-button type="info">Info</o-button>
    <o-button type="inverse">Inverse</o-button>
    <h3>small</h3>
    <o-button size="small">Default</o-button>
    <o-button size="small" type="default">Default</o-button>
    <o-button size="small" type="primary">Primary</o-button>
    <o-button size="small" type="warning">Warning</o-button>
    <o-button size="small" type="danger">Danger</o-button>
    <o-button size="small" type="success">Success</o-button>
    <o-button size="small" type="info">Info</o-button>
    <o-button size="small" type="inverse">Inverse</o-button>
    <h2>button group</h2>
    <o-button-group>
      <o-button>左</o-button>
      <o-button>中</o-button>
      <o-button>右</o-button>
    </o-button-group>
    safdsa
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      /* eslint-disable */
      console.log("handleClick");
    }
  }
};
</script>

