<template>
  <v-app>
    <CtCard title="Login" width="300" class="mx-auto">
      <v-row dense>
        <v-col cols="12" class="mt-5">
          <CtTextField append-icon="mdi-email" label="Email" v-model="signInData.email"/>
        </v-col>
        <v-col cols="12">
          <CtTextField type="password" append-icon="mdi-lock" label="Password" v-model="signInData.password"/>
        </v-col>
        <v-col cols="12" v-if="serverMessage" v-html="serverMessage" class="error--text" />
        <v-col cols="12">
          <CtBtn @click="login()" type="primary" block>
            Entrar
          </CtBtn>
        </v-col>
        <v-col cols="12" class="mt-5">
          <v-row>
            <v-spacer />
            <nuxt-link to="/recordar-password">
              ¿Has olvidado el password?
            </nuxt-link>
            <v-spacer />
          </v-row>
        </v-col>
        <v-col cols="12" class="my-5">
          <CtBtn to="/registro" type="accent" block>
            Registro
          </CtBtn>
        </v-col>
      </v-row>
    </CtCard>
  </v-app>
</template>

<script>
import {mapActions, mapMutations} from 'vuex'

export default {
  middleware: 'basic',

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
      signInData: {
        email: '',
        password: '',
        device_name: 'website',
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
    afterLogin(response){
      this.setToken(response.data.token)
      this.fetchUser()
      this.$router.push('/sala-de-espera')
    },

    login(){
      this.$axios.post('/api/login', this.signInData)
        .then((response) => (response.data.token) ? this.afterLogin(response) : this.setServerMessage(response.data))
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
