<template lang="html">
  <div class="container">
  <!-- Modal -->
  <div class="modal fade" id="tes" role="dialog">
    <div class="modal-dialog">

      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Register</h4>
        </div>
        <div class="modal-body">
          <form>
              <p><input type="text" v-model='signup.username' class="span3" name="eid" id="email" placeholder="Username"></p>
              <p><input type="password" v-model='signup.password' class="span3" name="passwd" placeholder="Password"></p>
              <p><button type="submit" @click='signupForm()' class="btn btn-primary">Sign up</button></p>
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
      signup: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'isSignup'
    ]),
    signupForm () {
      this.isSignup(this.signup)
    }
  }
}
</script>

<style lang="css">
</style>
