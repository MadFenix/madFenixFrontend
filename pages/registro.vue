<template>
  <v-app>
    <CtCard title="Registro" width="300" class="mx-auto tw-mb-7">
      <v-row dense>
        <v-col cols="12" class="mt-5">
          <CtTextField append-icon="mdi-account" label="Nombre" v-model="signUpData.name"/>
        </v-col>
        <v-col cols="12">
          <CtTextField append-icon="mdi-email" label="Email" v-model="signUpData.email"/>
        </v-col>
        <v-col cols="12">
          <CtTextField type="password" append-icon="mdi-lock" label="Password" v-model="signUpData.password"/>
        </v-col>
        <v-col cols="12">
          <v-row>
            <v-col cols="2">
              <v-checkbox outlined v-model="signUpCheck"></v-checkbox>
            </v-col>
            <v-col cols="10" class="tw-mt-3">
              Acepto los <a href="/condiciones" target="_blank">términos y condiciones</a>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12">
          <v-row>
            <v-col cols="2">
              <v-checkbox outlined v-model="signUpData.newsletter"></v-checkbox>
            </v-col>
            <v-col cols="10" class="tw-mt-3">
              Quiero recibir la newsletter
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" v-if="serverMessage" v-html="serverMessage" class="error--text" />
        <v-col cols="12">
          <CtBtn @click="signUp()" type="primary" block>
            Enviar
          </CtBtn>
        </v-col>
        <v-col cols="12" class="my-5">
          <CtBtn to="/login" type="accent" block>
            Volver
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
    title: 'Registro - Mad Fénix',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Registro en Mad Fénix.'
      }
    ]
  },

  data(){
    return {
      signUpData: {
        name: '',
        email: '',
        password: '',
        newsletter: false,
      },
      signUpCheck: false,
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
    this.$axios.setToken(this.token, 'Bearer')
  },

  methods: {
    signUp(){
      if (this.signUpData.name == "") {
        this.setServerMessage("Debes poner un nombre de usuario.");
        return;
      }
      if (this.signUpData.email == "") {
        this.setServerMessage("Debes poner un correo.");
        return;
      }
      if (this.signUpData.password == "" || this.signUpData.password.length < 8) {
        this.setServerMessage("Debes poner un password de almenos 8 carácteres.");
        return;
      }
      if (!this.signUpCheck) {
        this.setServerMessage("Debes aceptar los términos y condiciones.");
        return;
      }
      this.$axios.post('/api/register', this.signUpData)
        .then((response) => (response.data === 'User registered') ? this.$router.push({ path: '/login' }) : this.setServerMessage(response.data))
    },

    ...mapActions({
      setServerMessage: 'serverMessage/setServerMessage',
    }),
  }
}
</script>
