<template>
  <div>
    <h1>Home</h1>
    <div>
      <router-link to="/#"></router-link>
      <div v-if="product">
   	  	<p>{{product}}</p>
      </div>

    </div>
  </div>
</template>

<script type="text/javascript">
	import axios from 'axios'
	export default {	
		name: 'HelloWorld',
		props: {
			msg: String
		},
		data(){
			return {
				product: ''
			} 
		},
		methods: {
			async get_all_products(){

				let config = {
					headers: {
						'Accept' : 'application/json'
					}
				}

				const product_list = await axios.get('https://jpeee3sav9.execute-api.ap-southeast-1.amazonaws.com/prod/products/', config)

				this.product_list = product
			}

		}

	}

	get_all_products()


</script>