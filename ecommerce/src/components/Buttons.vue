<template lang="html">
  <div class="productprice"><div class="pull-right"><button class="btn btn-danger btn-sm" role="button" @click='addToCart(data._id, data.name, data.category, data.price)'>Add to Cart</button></div><div class="pricetext">{{ data.price }}</div></div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      cart: [],
      button: null
    }
  },
  methods: {
    ...mapActions([
      'loadList'
    ]),
    addToCart (id, name, category, price) {
      this.cart.push({id: id, name: name, category: category, price: price})
    }
  },
  mounted () {
    this.loadList()
  },
  computed: {
    stuffList () {
      return this.$store.state.stuff
    }
  }
}
</script>

<style lang="css">
</style>
