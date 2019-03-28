<template>
  <div>
    <h2>type</h2>
    <Button>Default</Button>
    <Button type="default">Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="warning">Warning</Button>
    <Button type="danger">Danger</Button>
    <Button type="success">Success</Button>
    <Button type="info">Info</Button>
    <Button type="inverse" @click="handleClick">Inverse</Button>
    <br /><br />
    <h2>disabled</h2>
    <Button disabled type="default">Default</Button>
    <Button disabled type="primary">Primary</Button>
    <Button disabled type="warning">Warning</Button>
    <Button disabled type="danger">Danger</Button>
    <Button disabled type="success">Success</Button>
    <Button disabled type="info">Info</Button>
    <Button disabled type="inverse" @click="handleClick">Inverse</Button>
    <br /><br />
    <h2>block</h2>
    <Button block type="default">Default</Button>
    <p></p>
    <Button block type="primary">Primary</Button>
    <p></p>
    <Button block type="warning">Warning</Button>
    <p></p>
    <Button block type="danger">Danger</Button>
    <p></p>
    <Button block type="success">Success</Button>
    <p></p>
    <Button block type="info">Info</Button>
    <p></p>
    <Button block type="inverse">Inverse</Button>
    <h2>size</h2>
    <h3>large</h3>
    <Button size="large">Default</Button>
    <Button size="large" type="default">Default</Button>
    <Button size="large" type="primary">Primary</Button>
    <Button size="large" type="warning">Warning</Button>
    <Button size="large" type="danger">Danger</Button>
    <Button size="large" type="success">Success</Button>
    <Button size="large" type="info">Info</Button>
    <Button size="large" type="inverse">Inverse</Button>
    <h3>default</h3>
    <Button>Default</Button>
    <Button type="default">Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="warning">Warning</Button>
    <Button type="danger">Danger</Button>
    <Button type="success">Success</Button>
    <Button type="info">Info</Button>
    <Button type="inverse">Inverse</Button>
    <h3>small</h3>
    <Button size="small">Default</Button>
    <Button size="small" type="default">Default</Button>
    <Button size="small" type="primary">Primary</Button>
    <Button size="small" type="warning">Warning</Button>
    <Button size="small" type="danger">Danger</Button>
    <Button size="small" type="success">Success</Button>
    <Button size="small" type="info">Info</Button>
    <Button size="small" type="inverse">Inverse</Button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick () {
      console.log('handleClick');
    }
  }
};
</script>

