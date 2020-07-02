<template>
  <div>
    我是详情页
  </div>
</template>

<script>
  export default {
    name: 'Detail',
    mounted() {
      console.log(this.$route.params)
    }
  }
</script>

<style>
</style>
