<template>
  <v-app>
    <CtCard title="Eliminar cuenta" width="300" class="mx-auto">
      <v-row dense>
        <v-col cols="12" class="mt-5">
          Con esta acción eliminarás la cuenta de Mad Fénix junto a todos los datos introducidos en la aplicación 2 Elevado de la Play Store, App Store y Itch.io. El proceso puede tardar hasta 48 horas laborables.
        </v-col>
        <v-col cols="12" class="mt-5">
          <CtTextField append-icon="mdi-email" label="Email" v-model="deleteAccount.email"/>
        </v-col>
        <v-col cols="12">
          <CtTextField type="password" append-icon="mdi-lock" label="Password" v-model="deleteAccount.password"/>
        </v-col>
        <v-col cols="12" v-if="serverMessage" v-html="serverMessage" class="error--text" />
        <v-col cols="12">
          <CtBtn @click="deleteAccountAction()" type="primary" block>
            Eliminar cuenta
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
    title: 'Eliminar cuenta - Mad Fénix',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Eliminar cuenta en Mad Fénix.'
      }
    ]
  },

  data(){
    return {
      deleteAccount: {
        email: '',
        password: '',
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
    deleteAccountAction(){
      this.$axios.post('/api/deleteAccount', this.deleteAccount)
        .then((response) => (response.data === 'Cuenta en proceso de eliminación') ? this.$router.push('/') : this.setServerMessage(response.data))
        .catch((error) => (error.response.data.message) ? (error.response.data.message === 'The given data was invalid.') ? this.setServerMessage('Datos inválidos.') : this.setServerMessage(error.response.data.message) : this.setServerMessage('Error.'))
    },

    ...mapActions({
      setServerMessage: 'serverMessage/setServerMessage',
    }),
  }
}
</script>
