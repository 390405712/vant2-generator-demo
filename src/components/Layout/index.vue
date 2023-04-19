<template>
  <div class="Layout">
    <router-view class="content"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
}
</script>
<style lang="scss" scoped>
.Layout {
  width: 100%;
  height: 100%;

  >.content {
    width: 100%;
    overflow: overlay;
    // padding-bottom: 50px;
  }
}
</style>