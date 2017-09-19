<template lang="html">
  <nav class="navbar navbar-default navbar-fixed-top">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Bali Vaporize</a>
    </div>

    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li><a href="#">Mod <span class="sr-only">(current)</span></a></li>
        <li><a href="#">Atomizer</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Accessories <span class="caret"></span></a>
          <ul class="dropdown-menu" role="menu">
            <li><a href="#">Battery</a></li>
            <li><a href="#">Coil and Cotton</a></li>
            <li><a href="#">Tools</a></li>
            <li class="divider"></li>
            <li><a href="#">Local Liquid</a></li>
            <li class="divider"></li>
            <li><a href="#">Import Liquid</a></li>
          </ul>
        </li>
      </ul>
      <form class="navbar-form navbar-left" role="search">
        <div class="form-group">
          <input class="form-control" placeholder="Search" type="text">
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#" data-toggle="modal" data-target="#cart">Cart</a></li>
        <li><a href="#" data-toggle="modal" data-target="#tes">Register</a></li>
        <li><a href="#" data-toggle="modal" data-target="#myModal">Login</a></li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
}
</script>

<style lang="css">
body { padding-top: 70px; }
</style>
