<template>
  <v-app>
    <CtCard title="Día a día" width="600" class="mx-auto">
      <v-row dense>
        <CtBtn color="primary" to="/registro" class="mt-4 mx-auto">
          Registro gratuito
        </CtBtn>
      </v-row>
    </CtCard>
  </v-app>
</template>

<script>
import {mapActions, mapMutations} from 'vuex';
export default {
  middleware: 'basic',

  head: {
    title: 'Día a día - Mad Fénix',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Día a día.'
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
