<template>
  <v-app>
    <CtCard title="Modificar password" width="300" class="mx-auto">
      <v-row dense>
        <v-col cols="12" class="mt-5">
          <CtTextField append-icon="mdi-email" label="Email" v-model="forgotData.email"/>
        </v-col>
        <v-col cols="12">
          <CtTextField type="password" append-icon="mdi-lock" label="Password" v-model="forgotData.password"/>
        </v-col>
        <v-col cols="12">
          <CtTextField type="password" append-icon="mdi-lock" label="Confirmación password" v-model="forgotData.password_confirmation"/>
        </v-col>
        <v-col cols="12" v-if="serverMessage" v-html="serverMessage" class="error--text" />
        <v-col cols="12">
          <CtBtn @click="forgot()" type="primary" block>
            Enviar
          </CtBtn>
        </v-col>
      </v-row>
    </CtCard>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  head: {
    title: 'Recordar password - Mad Fénix',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Recordar password en Mad Fénix.'
      }
    ]
  },

  data(){
    return {
      forgotData: {
        email: '',
        password: '',
        password_confirmation: '',
        token: '',
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
    forgot(){
      (this.$router.currentRoute.query.token) ? this.forgotData.token = this.$router.currentRoute.query.token : this.$router.push('/login')
      this.$axios.post('/api/forgotReset', this.forgotData)
        .then((response) => (response.data === 'Password reset') ? this.$router.push('/login') : this.setServerMessage(response.data))
        .catch((error) => (error.response.data.message) ? (error.response.data.message === 'The given data was invalid.') ? this.setServerMessage('Datos inválidos.') : this.setServerMessage(error.response.data.message) : this.setServerMessage('Error.'))
    },

    ...mapActions({
      setServerMessage: 'serverMessage/setServerMessage',
    }),
  }
}
</script>
