<template>
  <v-app>
    <CtCard title="Notificaciones" width="500" class="mx-auto">
      <v-row dense>
        <v-col cols="12" class="mt-5" v-for="calendarEvent in events" :key="calendarEvent.id">
          <v-card color="primary" dark>
            <v-card-title class="headline" v-html="calendarEvent.description" />
            <v-card-subtitle v-html="(new Date(calendarEvent.reservated_at)).toString()" />
            <v-container>
              <span v-html="calendarEvent.details" />
            </v-container>
          </v-card>
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
    title: 'Notificaciones - Mad Fénix',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Notificaciones en Mad Fénix.'
      }
    ]
  },

  data() {
    return {
      events: [],
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
    this.fetch()
  },

  methods: {
    fetch() {
      this.$axios.get('/api/event')
        .then((response) => (response.data) ? this.events = response.data : '')
        .catch((error) => (error.response.data.message) ? this.setServerMessage(error.response.data.message) : this.setServerMessage('Error.'))
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
