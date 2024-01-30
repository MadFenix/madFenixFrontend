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
import { mapActions } from 'vuex';
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
    this.$axios.setToken(this.token, 'Bearer')
  },
}
</script>
