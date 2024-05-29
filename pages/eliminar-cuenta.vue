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
import {mapActions, mapMutations} from 'vuex'

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
    this.setUserCookies();
    this.$axios.setToken(this.token, 'Bearer')
  },

  methods: {
    deleteAccountAction(){
      this.$axios.post('/api/deleteAccount', this.deleteAccount)
        .then((response) => (response.data === 'Cuenta en proceso de eliminación') ? this.$router.push('/') : this.setServerMessage(response.data))
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
  }
}
</script>
