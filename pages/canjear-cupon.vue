<template>
  <v-app>
    <CtCard title="Canjear cupón" width="300" class="mx-auto">
      <v-row dense>
        <v-col cols="12" class="mt-5">
          <CtTextField append-icon="mdi-ticket" label="Cupón" v-model="couponData.coupon"/>
        </v-col>
        <v-col cols="12" v-if="serverMessage" v-html="serverMessage" class="error--text" />
        <v-col cols="12">
          <CtBtn @click="useCoupon()" type="primary" block>
            Canjear
          </CtBtn>
        </v-col>
        <v-col cols="12" class="my-5">
          <CtBtn to="/perfil" type="accent" block>
            Perfil
          </CtBtn>
        </v-col>
      </v-row>
    </CtCard>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  middleware: 'authenticated',

  head: {
    title: 'Login - Mad Fénix',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Login en Mad Fénix.'
      }
    ]
  },
  data(){
    return {
      couponData: {
        coupon: '',
      },
    }
  },

  computed: {
    serverMessage () {
      return this.$store.state.serverMessage.serverMessage
    },
    token () {
      return this.$store.state.user.token
    },
  },

  mounted() {
    this.$axios.setToken(this.token, 'Bearer')
  },

  methods: {
    afterUseCoupon(response){
      this.$router.push('/perfil')
    },

    useCoupon(){
      this.$axios.post('/api/coupon/usePlumasCoupon', this.couponData)
        .then((response) => this.afterUseCoupon(response))
        .catch((error) => (error.response.data.message) ? (error.response.data.message === 'The given data was invalid.') ? this.setServerMessage('Datos inválidos.') : this.setServerMessage(error.response.data.message) : this.setServerMessage('Error.'))
    },

    ...mapActions({
      setServerMessage: 'serverMessage/setServerMessage',
    }),
  }
}
</script>
