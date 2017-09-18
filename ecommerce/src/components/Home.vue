<template lang="html">
  <div class="">
    <div class="">
      <Navbar></Navbar>
    </div>
    <!--  -->
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="col-md-3">
            <!--  -->
            <div class="panel panel-default">
              <div class="panel-heading">Panel heading</div>
              <div class="panel-body">
                Panel content
              </div>
            </div>
            <!--  -->
          </div>
          <!--  -->
          <div class="container">
            <div class="col-md-9">
              <Boxes></Boxes>
            </div>
          </div>
          <!--  -->
          <div class="">
            <Login></Login>
            <Registers></Registers>
          </div>
          <!--  -->
        </div>
      </div>
    </div>
    <!--  -->
    <div class="">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Registers from '@/components/Registers'
import Login from '@/components/Login'
import Boxes from '@/components/Boxes'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export default {
  components: {
    Navbar,
    Footer,
    Boxes,
    Login,
    Registers
  }
}
</script>

<style lang="css">
</style>
