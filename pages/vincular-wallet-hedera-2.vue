<template>
  <v-app>
    <CtCard title="Vincular cartera de hedera" width="300" class="mx-auto">
      <v-row dense>
        <v-col cols="12" class="mt-5 text-center">
          Debes enviar una transacción de 0.<span v-if="perfil" v-html="perfil.hedera_wallet_check" /> hbar a la cartera 0.0.4970116 con el siguiente memo:<br>
          <span class="tw-text-3xl" v-html="'vincular:' + user.id" /><br>
          El proceso de vincular y asociar tus NFTs puede tardar hasta 1 hora.<br>
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
  middleware: 'authenticated',

  head: {
    title: 'Vincular cartera de hedera - Mad Fénix',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Vincular cartera de hedera en Mad Fénix.'
      }
    ]
  },
  data(){
    return {
      perfil: null,
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
    this.getPerfil()
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

    afterPerfil(response) {
      this.perfil = response.data;
    },

    getPerfil() {
      this.$axios.post('/api/profile/getUserProfile')
        .then((response) => this.afterPerfil(response))
        .catch(() => this.logout())
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
