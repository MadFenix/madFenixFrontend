<template>
    <div v-if="storeDetails">
      <!-- Case Study Hero -->
      <section class="tw-px-4 tw-py-12 md:tw-py-16 sm:tw-px-6 lg:tw-px-8">
        <div class="tw-max-w-screen-xl tw-mx-auto">
          <!-- Hero text -->
          <div class="tw-w-full tw-max-w-3xl tw-mx-auto tw-text-center lg:tw-max-w-5xl">
            <p
              class="tw-inline-flex tw-items-center tw-justify-center tw-px-6 tw-py-2 tw-text-sm tw-font-medium tw-tracking-wide tw-text-white tw-rounded-r-full tw-rounded-tl-full tw-bg-gradient-to-r tw-from-dark-600 tw-to-dark-700"
            >
              Tienda
            </p>
            <h1
              class="tw-mt-4 tw-text-4xl tw-font-extrabold tw-text-white md:tw-mt-5 sm:tw-text-5xl md:tw-text-6xl"
              v-html="'Pasa al siguiente nivel'"
            />
          </div>
        </div>
      </section>

      <!-- Buscamos creadores section -->
      <section class="tw-max-w-screen-xl tw-px-4 tw-py-12 tw-mx-auto md:tw-py-16 sm:tw-px-6 lg:tw-px-8" v-if="storeDetails.products" v-for="product in storeDetails.products" :key="product.id">
        <!-- CTA card -->
        <div class="tw-relative tw-py-16 tw-rounded-3xl tw-bg-dark-700 lg:tw-py-20">
          <!-- Right background diagonal -->
          <svg class="tw-absolute tw-inset-y-0 tw-top-0 tw-z-20 tw-w-1/4 tw-h-full tw-right-1/4 tw-text-dark-700" preserveAspectRatio="none" viewBox="0 0 100 100" fill="currentcolor">
            <polygon points="0,0 100,0 0,100"></polygon>
          </svg>
          <div class="tw-absolute tw-inset-y-0 tw-z-10 tw-w-1/2 tw-h-full tw-left-1/2 tw-bg-dark-800 tw-rounded-r-3xl"></div>

          <!-- CTA content -->
          <div class="tw-relative tw-z-30 tw-flex tw-flex-col tw-items-center tw-justify-center tw-px-4 tw-mx-auto tw-text-center sm:tw-px-16 lg:tw-flex-row lg:tw-text-left">
            <div class="tw-max-w-lg tw-text-2xl tw-font-bold sm:tw-text-4xl lg:tw-w-1/2">
              <h5 class="tw-text-4xl tw-font-extrabold tw-tracking-tight tw-text-white sm:tw-text-5xl">
                <span v-html="product.name" />
              </h5>
              <p class="tw-text-white tw-text-md" v-if="product.short_description" v-html="product.short_description" />
            </div>
            <div class="tw-flex tw-justify-center tw-max-w-lg tw-mt-10 lg:tw-w-1/2 lg:tw-mt-0 lg:tw-justify-end">
              <div>
                <stripe-buy-button v-if="product.price_fiat > 0 && product.price_fiat == 5"
                   buy-button-id="buy_btn_1PAYYpHruUfPE2wuw5Mhazx8"
                   publishable-key="pk_live_51PAXsOHruUfPE2wuT1MTCc3LMcanaF77ZykWh93fUu8whnI6GLIFVfPcBSJVNTzGSiQtchKVsRu2kiziQlOD44XH006ERR5INg"
                   :customer-email="user.email"
                >
                </stripe-buy-button>
                <stripe-buy-button v-else-if="product.price_fiat > 0 && product.price_fiat == 10"
                  buy-button-id="buy_btn_1PAaDhHruUfPE2wuOkz0bx5C"
                  publishable-key="pk_live_51PAXsOHruUfPE2wuT1MTCc3LMcanaF77ZykWh93fUu8whnI6GLIFVfPcBSJVNTzGSiQtchKVsRu2kiziQlOD44XH006ERR5INg"
                  :customer-email="user.email"
                >
                </stripe-buy-button>
                <stripe-buy-button v-else-if="product.price_fiat > 0 && product.price_fiat == 20"
                  buy-button-id="buy_btn_1PAaEuHruUfPE2wu6DXK5KYT"
                  publishable-key="pk_live_51PAXsOHruUfPE2wuT1MTCc3LMcanaF77ZykWh93fUu8whnI6GLIFVfPcBSJVNTzGSiQtchKVsRu2kiziQlOD44XH006ERR5INg"
                  :customer-email="user.email"
                >
                </stripe-buy-button>
                <stripe-buy-button v-else-if="product.price_fiat > 0 && product.price_fiat == 40"
                  buy-button-id="buy_btn_1PAaI3HruUfPE2wu9m6H5vGp"
                  publishable-key="pk_live_51PAXsOHruUfPE2wuT1MTCc3LMcanaF77ZykWh93fUu8whnI6GLIFVfPcBSJVNTzGSiQtchKVsRu2kiziQlOD44XH006ERR5INg"
                  :customer-email="user.email"
                >
                </stripe-buy-button>
                <stripe-buy-button v-else-if="product.price_fiat > 0 && product.price_fiat == 80"
                  buy-button-id="buy_btn_1PAaHCHruUfPE2wua82AVGzY"
                  publishable-key="pk_live_51PAXsOHruUfPE2wuT1MTCc3LMcanaF77ZykWh93fUu8whnI6GLIFVfPcBSJVNTzGSiQtchKVsRu2kiziQlOD44XH006ERR5INg"
                  :customer-email="user.email"
                >
                </stripe-buy-button>
                <stripe-buy-button v-else-if="product.price_fiat > 0 && product.price_fiat == 160"
                  buy-button-id="buy_btn_1PAaJKHruUfPE2wuU9Jq0Nu9"
                  publishable-key="pk_live_51PAXsOHruUfPE2wuT1MTCc3LMcanaF77ZykWh93fUu8whnI6GLIFVfPcBSJVNTzGSiQtchKVsRu2kiziQlOD44XH006ERR5INg"
                  :customer-email="user.email"
                >
                </stripe-buy-button>
                <a v-else-if="product.price_fiat > 0" class="tw-flex tw-cursor-pointer tw-items-center tw-justify-center tw-w-auto tw-px-8 tw-py-4 tw-text-base tw-font-semibold tw-leading-snug tw-transition tw-ease-in-out tw-bg-white tw-rounded-full tw-h-14 tw-duration-250 tw-text-dark-900">
                  Próximamente
                </a>
                <a v-else @click="buyProduct(product.id, product.price_oro, product.price_plumas)" class="tw-flex tw-cursor-pointer tw-items-center tw-justify-center tw-w-auto tw-px-8 tw-py-4 tw-text-base tw-font-semibold tw-leading-snug tw-transition tw-ease-in-out tw-bg-white tw-rounded-full tw-h-14 tw-duration-250 tw-text-dark-900">
                  Comprar por <span class="tw-ml-2" /><span class="tw-ml-2" v-html="getPrice(product)" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
</template>

<script>
import {mapActions, mapMutations} from "vuex";

export default {
  middleware: 'authenticated',

  head: {
    title: 'Tienda - Mad Fénix',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Tienda en Mad Fénix.'
      }
    ],
    script: [
      {
        async: true,
        src: "https://js.stripe.com/v3/buy-button.js",
      }
    ]
  },

  data(){
    return {
      storeDetails: null,
    }
  },

  mounted() {
    this.setUserCookies();
    this.$axios.setToken(this.token, 'Bearer')
    this.getStoreDetails()
  },

  computed: {
    user () {
      return this.$store.state.user.user
    },
    token () {
      return this.$store.state.user.token
    },
  },

  methods: {
    afterLogout(){
      this.$cookies.remove('token')
      this.$cookies.remove('user')
      this.setToken('')
      this.setUserToNull()
      this.removeUser()
      setTimeout(() => this.$router.push({ path: '/login' }), 2000)
    },

    logout () {
      this.$axios.post('/api/logout')
        .then(() => this.afterLogout())
        .catch(() => this.afterLogout())
    },

    afterStoreDetails(response) {
      this.storeDetails = response.data;
    },

    getStoreDetails() {
      this.$axios.get('/api/store/details')
        .then((response) => this.afterStoreDetails(response))
        .catch(() => this.logout())
    },

    validateProduct(product_order) {
      this.$axios.post('/api/store/validateProductOrder', {product_order_id: product_order.id})
        .then(() => this.$router.push({ path: '/perfil' }))
        .catch((error) => (error.response.data.message) ? (error.response.data.message === 'The given data was invalid.') ? this.setServerMessage('Datos inválidos.') : this.setServerMessage(error.response.data.message) : this.setServerMessage('Error.'))
    },

    getPrice(product) {
      if (product.price_oro > 0) {
        return product.price_oro + ' oros';
      } else {
        return product.price_plumas + ' plumas';
      }
    },

    buyProduct(product_id, price_oro, price_plumas) {
      this.$axios.post('/api/store/addProductToOrder', {product_id: product_id})
        .then((response) => {
          if (price_oro > 0 || price_plumas > 0) {
            this.validateProduct(response.data);
          }
        })
        .catch((error) => (error.response.data.message) ? (error.response.data.message === 'The given data was invalid.') ? this.setServerMessage('Datos inválidos.') : this.setServerMessage(error.response.data.message) : this.setServerMessage('Error.'))
    },

    setUserCookies() {
      let token = this.$cookies.get('token')
      if (token) {
        this.setToken(token);

        //let user = document.cookie.match(new RegExp('(^| )user=([^;]+)'))
        let user = this.$cookies.get('user')

        if (user) {
          this.updateUser(user);
        } else {
          console.log('test')
          try {
            this.fetchUser();
          } catch (error) {
          }
        }
      }
    },

    ...mapActions({
      setServerMessage: 'serverMessage/setServerMessage',
      setToken: 'user/setToken',
      setUserToNull: 'user/setUserToNull',
      updateUser: 'user/updateUser',
      fetchUser: 'user/fetchUser',
    }),
    ...mapMutations({
      updateUser: 'user/updateUser',
      removeUser: 'user/removeUser',
    }),
  },
}
</script>
