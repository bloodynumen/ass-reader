<template>
  <div class="app-wrapper">
    <div class="main-container">
      <section class="app-main">
        <router-view />
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Layout"
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
