<template>
    <div>
      En construcción
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  middleware: 'basic',

  head: {
    title: 'Sobre nosotros - Mad Fénix',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Sobre nosotros de Mad Fénix.'
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
