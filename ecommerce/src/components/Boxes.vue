<template lang="html">
  <div class="">
    <div class="col-md-4 column productbox" v-for='data in stuffList'>
      <img src="http://placehold.it/460x250/e67e22/ffffff&text=HTML5" class="img-responsive">
      <div class="producttitle">
        <h3>{{ data.name }}</h3>
        <p>Stock: {{ data.stock }}</p>
        <p>Category: {{ data.category }}</p>
      </div>
      <!-- <Buttons></Buttons> -->
    <div class="productprice"><div class="pull-right"><button class="btn btn-danger btn-sm" role="button" @click='addToCart(data._id, data.name, data.category, data.price)'>Add to Cart</button></div><div class="pricetext">{{ data.price }}</div></div>
    </div>
  </div>
</template>

<script>
// import Buttons from '@/components/Buttons'
import { mapActions } from 'vuex'
export default {
  components: {
    // Buttons
  },
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
      console.log('masuk test')
      console.log(this.cart.length)
      var status = true
      for (var i = 0; i < this.cart.length; i++) {
        console.log('masuk')
        if (this.cart[i].id === id) {
          status = false
          alert('barang udah ada')
        }
      }
      if (status === true) {
        this.cart.push({id: id, name: name, category: category, price: price})
        alert('barang telah di tambah')
      }
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
.productbox {
    background-color:#ffffff;
	padding:10px;
	margin-bottom:10px;
	-webkit-box-shadow: 0 8px 6px -6px  #999;
	   -moz-box-shadow: 0 8px 6px -6px  #999;
	        box-shadow: 0 8px 6px -6px #999;
}

.producttitle {
    font-weight:bold;
	padding:5px 0 5px 0;
}

.productprice {
	border-top:1px solid #dadada;
	padding-top:5px;
}

.pricetext {
	font-weight:bold;
	font-size:1.4em;
}
</style>
