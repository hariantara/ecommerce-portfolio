<template>
  <div id="app">
    <div class="">
      <div class="row">
        <div class="col-md-12">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Home from '@/components/Home'
export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style>

</style>
