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
import { mapActions } from 'vuex'
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
    this.$axios.setToken(this.token, 'Bearer')
  },
}
</script>
