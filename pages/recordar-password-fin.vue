<template>
  <v-app>
    <CtCard title="Recordar password" width="300" class="mx-auto">
      <v-row dense>
        <v-col cols="12" class="mt-5">
          En unos momentos recibirás un correo con las instrucciones para modificar el password.
        </v-col>
        <v-col cols="12">
          <CtBtn to="/" type="primary" block>
            Home
          </CtBtn>
        </v-col>
        <v-col cols="12" class="my-5">
          <CtBtn to="/login" type="accent" block>
            Login
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
    title: 'Recordar password fin - Mad Fénix',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Recordar password fin en Mad Fénix.'
      }
    ]
  },

  computed: {
    token () {
      return this.$store.state.user.token
    },
  },

  mounted() {
    this.setUserCookies();
    this.$axios.setToken(this.token, 'Bearer')
  },

  methods: {

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
