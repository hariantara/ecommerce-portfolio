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
            <div class="row">
              <div class="col-md-9">
                <Boxes></Boxes>
              </div>
            </div>
          </div>
          <!--  -->
          <div class="">
            <Login></Login>
            <Registers></Registers>
            <Cart></Cart>
          </div>
          <!--  -->
        </div>
      </div>
    </div>
    <!--  -->
    <div class="">
      <Footers></Footers>
    </div>
  </div>
</template>

<script>
import Cart from '@/components/Cart'
import Registers from '@/components/Registers'
import Login from '@/components/Login'
import Boxes from '@/components/Boxes'
import Navbar from '@/components/Navbar'
import Footers from '@/components/Footer'
export default {
  components: {
    Navbar,
    Footers,
    Boxes,
    Login,
    Registers,
    Cart
  }
}
</script>

<style lang="css">
</style>
