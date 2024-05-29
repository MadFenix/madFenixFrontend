<template>
  <v-app>
    <CtCard title="Vincular código de referido" width="300" class="mx-auto">
      <v-row dense>
        <v-col cols="12" class="mt-5">
          <CtTextField append-icon="mdi-ticket" label="Código de referido" v-model="referred.referred_code_from"/>
        </v-col>
        <v-col cols="12" v-if="serverMessage" v-html="serverMessage" class="error--text" />
        <v-col cols="12">
          <CtBtn @click="linkReferred()" type="primary" block>
            Vincular
          </CtBtn>
        </v-col>
        <v-col cols="12" class="my-5">
          <CtBtn to="/perfil" type="accent" block>
            Perfil
          </CtBtn>
        </v-col>
      </v-row>
    </CtCard>
    <v-row dense>
      <v-spacer />
      <v-col cols="6" class="mb-5 text-center mt-5">
        Cuando vinculas tu código de refereido obtienes 5 oros. También apoyas al referido que vinculas.
      </v-col>
      <v-spacer />
    </v-row>
  </v-app>
</template>

<script>
import {mapActions, mapMutations} from 'vuex'

export default {
  middleware: 'authenticated',

  head: {
    title: 'Vincular código de referidos - Mad Fénix',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Vincular código de referidos en Mad Fénix.'
      }
    ]
  },
  data(){
    return {
      referred: {
        referred_code_from: '',
      },
    }
  },

  computed: {
    serverMessage () {
      return this.$store.state.serverMessage.serverMessage
    },
    user () {
      return this.$store.state.user.user
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
    afterCreateReferred(response){
      this.$router.push('/perfil')
    },

    linkReferred(){
      this.$axios.post('/api/profile/setUserProfileReferredCodeFrom', this.referred)
        .then((response) => this.afterCreateReferred(response))
        .catch((error) => (error.response.data.message) ? (error.response.data.message === 'The given data was invalid.') ? this.setServerMessage('Datos inválidos.') : this.setServerMessage(error.response.data.message) : this.setServerMessage(error.response.data))
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
