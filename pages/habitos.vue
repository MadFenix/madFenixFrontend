<template>
  <v-app>
    <CtCard title="Hábitos" width="500" class="mx-auto" v-if="perfil">
      <v-row dense>
        <v-col cols="12" class="mt-5 tw-grid tw-grid-cols-3" v-for="habit in perfil.habits" :key="habit.id">
          <CtTextField append-icon="mdi-user" label="Nombre" v-model="habit.name"/>
          <CtTextField append-icon="mdi-order-alphabetical-ascending" label="Orden" v-model="habit.order"/>
          <CtBtn @click="postHabit(habit.id, habit.name, habit.order)">
            Guardar
          </CtBtn>
        </v-col>
        <v-col cols="12" class="mt-5 tw-grid tw-grid-cols-3 tw-space-x-3">
          <CtTextField append-icon="mdi-user" label="Nombre" v-model="newHabit.name"/>
          <CtTextField append-icon="mdi-order-alphabetical-ascending" label="Orden" v-model="newHabit.order"/>
          <CtBtn @click="postHabit(0, newHabit.name, newHabit.order)">
            Crear
          </CtBtn>
        </v-col>
        <v-col cols="12" v-if="serverMessage" v-html="serverMessage" class="error--text" />
        <v-col cols="12" class="my-5">
          <CtBtn to="/" type="accent" block>
            Home
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
    title: 'Hábitos - Mad Fénix',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Hábitos en Mad Fénix.'
      }
    ]
  },
  data(){
    return {
      transactionData: {
        id: '',
        name: '',
        order: 0,
      },
      newHabit: {
        id: '',
        name: '',
        order: 0,
      },
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
    this.$axios.setToken(this.token, 'Bearer');
    this.getPerfil();
  },

  methods: {
    afterPostHabit(response){
      this.getPerfil();
    },

    postHabit(id, name, order){
      this.transactionData.id = id;
      this.transactionData.name = name;
      this.transactionData.order = order;
      this.$axios.post('/api/habit/post', this.transactionData)
        .then((response) => this.afterPostHabit(response))
        .catch((error) => (error.response.data.message) ? (error.response.data.message === 'The given data was invalid.') ? this.setServerMessage('Datos inválidos.') : this.setServerMessage(error.response.data.message) : this.setServerMessage(error.response.data))
    },
    afterLogout(){
      this.setToken('')
      this.removeUser()
      setTimeout(() => this.$router.push({ path: '/' }), 2000)
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
