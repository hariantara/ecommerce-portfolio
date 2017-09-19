<template lang="html">
  <div class="container">
  <!-- Modal -->
  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">

      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Login</h4>
        </div>
        <div class="modal-body">
          <form @click.prevent>
              <p><input type="text" v-model='signin.username' class="span3" name="eid" id="email" placeholder="Username"></p>
              <p><input type="password" v-model='signin.password' class="span3" name="passwd" placeholder="Password"></p>
              <p><button type="submit" @click='signinForm()' class="btn btn-primary">Sign in</button>
                <a href="#">Forgot Password?</a>
              </p>
            </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>

    </div>
  </div>

</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      signin: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'isLogin'
    ]),
    signinForm () {
      this.isLogin(this.signin)
    }
  }
}
</script>

</style>
