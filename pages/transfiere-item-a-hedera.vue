<template>
  <v-app>
    <v-row dense>
      <v-spacer />
      <v-col cols="6" class="my-5">
        IMPORTANTE: Debes agregar el token <span v-html="nft_token_id" /> a tu wallet.
      </v-col>
      <v-spacer />
    </v-row>
    <v-row dense>
      <v-spacer />
      <v-col cols="6" class="mb-5">
        Las transferencias pueden tardar de 5 a 15 minutos. Si hay problemas en la red, tras 30 minutos no te llega tu oro o tienes cualquier problema contacta con iam@valentigamez.com o en Twitter en la cuenta @MadFenixGames o @iamvalentigamez.
      </v-col>
      <v-spacer />
    </v-row>
    <CtCard title="Transferir Ítem a Hedera" width="300" class="mx-auto">
      <v-row dense>
        <v-col cols="12" class="mt-5">
          <CtTextField append-icon="mdi-ticket" label="Id de hedera" v-model="transactionData.id_hedera"/>
        </v-col>
        <v-col cols="12" v-if="serverMessage" v-html="serverMessage" class="error--text" />
        <v-col cols="12">
          <CtBtn @click="transferToHedrera()" type="primary" block>
            Transferir
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
        <b>Para transferir un Ítem desde Hedera a tu cuenta</b><br>
        Debes enviar el ítem que quieras ingresar a la cuenta 0.0.4970116 con el siguiente memo:<br>
        <span class="tw-text-3xl" v-html="'deposito:' + user.id" /><br>
        Este proceso puede tardar de 10 a 20 minutos.
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
    title: 'Transferir Ítem a Hedera - Mad Fénix',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Transferir Ítem en Mad Fénix.'
      }
    ]
  },
  data(){
    return {
      transactionData: {
        id_hedera: '',
        nft_identification_id: '',
      },
      nft_token_id: '',
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
    this.transactionData.nft_identification_id = this.$route.query.item_identification_id;
    this.nft_token_id = this.$route.query.nft_token_id;
  },

  methods: {
    afterTransferToHedrera(response){
      this.$router.push('/perfil')
    },

    transferToHedrera(){
      this.$axios.post('/api/blockchain/transferNftToHedera', this.transactionData)
        .then((response) => this.afterTransferToHedrera(response))
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
      updateUser: 'user/updateUser',
      fetchUser: 'user/fetchUser',
    }),
    ...mapMutations({
      updateUser: 'user/updateUser',
    }),
  }
}
</script>
