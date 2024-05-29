<template>
    <div>
      <!-- Case Study Hero -->
      <section class="tw-px-4 tw-py-12 md:tw-py-16 sm:tw-px-6 lg:tw-px-8" v-if="user">
        <div class="tw-max-w-screen-xl tw-mx-auto">
          <!-- Hero text -->
          <div class="tw-w-full tw-max-w-3xl tw-mx-auto tw-text-center lg:tw-max-w-5xl">
            <p
              class="tw-inline-flex tw-items-center tw-justify-center tw-px-6 tw-py-2 tw-text-sm tw-font-medium tw-tracking-wide tw-text-white tw-rounded-r-full tw-rounded-tl-full tw-bg-gradient-to-r tw-from-dark-600 tw-to-dark-700"
            >
              Perfil
            </p>
            <h1
              class="tw-mt-4 tw-text-4xl tw-font-extrabold tw-text-white md:tw-mt-5 sm:tw-text-5xl md:tw-text-6xl"
              v-html="user.name"
            />
            <div class="tw-w-full tw-mx-auto lg:tw-w-4/5">
              <p class="tw-text-2xl tw-font-medium tw-tracking-tight tw-text-white sm:tw-text-3xl lg:tw-text-4xl lg:tw-leading-tight tw-mt-4" v-html="user.email" />
            </div>
          </div>
        </div>
      </section>

      <div v-if="perfil && perfil.referred_code_from" class="tw-my-4 tw-w-full tw-text-white tw-text-center">
        Tu referido: <span v-html="perfil.referred_code_from" />.&nbsp;
      </div>
      <div v-else class="tw-my-4">
        <nuxt-link to="/vincular-codigo-referido"  class="tw-flex tw-items-center tw-w-2/3 md:tw-w-1/3 tw-m-auto tw-justify-center tw-px-8 tw-py-4 tw-text-base tw-font-semibold tw-leading-snug tw-transition tw-ease-in-out tw-bg-white tw-rounded-full tw-h-14 tw-duration-250 tw-text-dark-900 hover:tw-text-white focus:tw-outline-none hover:tw-bg-dark-900">
           Vincular código de referido
        </nuxt-link>
      </div>

      <div v-if="perfil && perfil.referred_code" class="tw-my-4 tw-w-full tw-text-white tw-text-center">
        Tu código de referido: <span v-html="perfil.referred_code" />.&nbsp;
      </div>
      <div v-else class="tw-my-4">
        <nuxt-link to="/crear-codigo-referido"  class="tw-flex tw-items-center tw-w-2/3 md:tw-w-1/3 tw-m-auto tw-justify-center tw-px-8 tw-py-4 tw-text-base tw-font-semibold tw-leading-snug tw-transition tw-ease-in-out tw-bg-white tw-rounded-full tw-h-14 tw-duration-250 tw-text-dark-900 hover:tw-text-white focus:tw-outline-none hover:tw-bg-dark-900">
          Crear código de referido
        </nuxt-link>
      </div>

      <div v-if="perfil && perfil.user_twitch" class="tw-my-4 tw-w-full tw-text-white tw-text-center">
        Conectad@ con <span v-html="perfil.user_twitch" />.&nbsp;
        <a @click="desconectarTwitch()" class="tw-text-white tw-underline tw-font-semibold hover:tw-no-underline">
          Desconectar Twitch
        </a>
      </div>
      <div v-else class="tw-my-4">
        <a :href="'https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=2wbjjwkzyy9t68a8ex5b4fsz7kfc37&redirect_uri=https%3A%2F%2Fapi.madfenix.com%2Fapi%2Ftwitch%2FconnectAccount&scope=user%3Aread%3Aemail&state=user' + user.id" class="tw-flex tw-items-center tw-w-2/3 md:tw-w-1/3 tw-m-auto tw-justify-center tw-px-8 tw-py-4 tw-text-base tw-font-semibold tw-leading-snug tw-transition tw-ease-in-out tw-bg-white tw-rounded-full tw-h-14 tw-duration-250 tw-text-dark-900 hover:tw-text-white focus:tw-outline-none hover:tw-bg-dark-900">
          Conectar Twitch
        </a>
      </div>

      <div v-if="perfil && perfil.user_steam" class="tw-my-4 tw-w-full tw-text-white tw-text-center tw-hidden">
        Conectad@ con <span v-html="perfil.user_steam" />.&nbsp;
        <a @click="desconectarSteam()" class="tw-text-white tw-underline tw-font-semibold hover:tw-no-underline">
          Desconectar Steam
        </a>
      </div>
      <div v-else class="tw-my-4 tw-hidden">
        <a @click="conectarSteam()" class="tw-flex tw-items-center tw-w-2/3 md:tw-w-1/3 tw-m-auto tw-justify-center tw-px-8 tw-py-4 tw-text-base tw-font-semibold tw-leading-snug tw-transition tw-ease-in-out tw-bg-white tw-rounded-full tw-h-14 tw-duration-250 tw-text-dark-900 hover:tw-text-white focus:tw-outline-none hover:tw-bg-dark-900">
          Conectar Steam
        </a>
      </div>

      <div class="tw-my-4">
        <a @click="logout()" class="tw-flex tw-items-center tw-w-2/3 md:tw-w-1/3 tw-m-auto tw-justify-center tw-px-8 tw-py-4 tw-text-base tw-font-semibold tw-leading-snug tw-transition tw-ease-in-out tw-bg-white tw-rounded-full tw-h-14 tw-duration-250 tw-text-dark-900 hover:tw-text-white focus:tw-outline-none hover:tw-bg-dark-900">
          Logout
        </a>
      </div>

      <!-- Buscamos creadores section -->
      <section class="tw-max-w-screen-xl tw-px-4 tw-py-12 tw-mx-auto md:tw-py-16 sm:tw-px-6 lg:tw-px-8">
        <!-- CTA card -->
        <div class="tw-relative tw-py-16 tw-rounded-3xl tw-bg-dark-700 lg:tw-py-20">
          <!-- Right background diagonal -->
          <svg class="tw-absolute tw-inset-y-0 tw-top-0 tw-z-20 tw-w-1/4 tw-h-full tw-right-1/4 tw-text-dark-700" preserveAspectRatio="none" viewBox="0 0 100 100" fill="currentcolor">
            <polygon points="0,0 100,0 0,100"></polygon>
          </svg>
          <div class="tw-absolute tw-inset-y-0 tw-z-10 tw-w-1/2 tw-h-full tw-left-1/2 tw-bg-dark-800 tw-rounded-r-3xl"></div>

          <!-- CTA content -->
          <div class="tw-relative tw-z-30 tw-flex tw-flex-col tw-items-center tw-justify-center tw-px-4 tw-mx-auto tw-text-center sm:tw-px-16 lg:tw-flex-row lg:tw-text-left">
            <div class="tw-max-w-lg tw-text-2xl tw-font-bold sm:tw-text-4xl lg:tw-w-1/2">
              <h5 class="tw-text-4xl tw-font-extrabold tw-tracking-tight tw-text-white sm:tw-text-5xl">
                Plumas: <span v-if="perfil" v-html="perfil.plumas" /><span v-else>...</span>
              </h5>
            </div>
            <div class="tw-flex tw-justify-center tw-max-w-lg tw-mt-10 lg:tw-w-1/2 lg:tw-mt-0 lg:tw-justify-end">
              <div>
                <nuxt-link to="/canjear-cupon" class="tw-flex tw-items-center tw-justify-center tw-w-auto tw-px-8 tw-py-4 tw-text-base tw-font-semibold tw-leading-snug tw-transition tw-ease-in-out tw-bg-white tw-rounded-full tw-h-14 tw-duration-250 tw-text-dark-900 hover:tw-text-white focus:tw-outline-none hover:tw-bg-dark-900">
                  Canjea un cupón
                </nuxt-link>
                <br>
                <nuxt-link to="/transfiere-plumas-a-hedera" class="tw-flex tw-items-center tw-justify-center tw-w-auto tw-px-8 tw-py-4 tw-text-base tw-font-semibold tw-leading-snug tw-transition tw-ease-in-out tw-bg-white tw-rounded-full tw-h-14 tw-duration-250 tw-text-dark-900 hover:tw-text-white focus:tw-outline-none hover:tw-bg-dark-900">
                  Transfiere Plumas
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="tw-max-w-screen-xl tw-px-4 tw-py-12 tw-mx-auto md:tw-py-16 sm:tw-px-6 lg:tw-px-8">
        <!-- CTA card -->
        <div class="tw-relative tw-py-16 tw-rounded-3xl tw-bg-dark-700 lg:tw-py-20">
          <!-- Right background diagonal -->
          <svg class="tw-absolute tw-inset-y-0 tw-top-0 tw-z-20 tw-w-1/4 tw-h-full tw-right-1/4 tw-text-dark-700" preserveAspectRatio="none" viewBox="0 0 100 100" fill="currentcolor">
            <polygon points="0,0 100,0 0,100"></polygon>
          </svg>
          <div class="tw-absolute tw-inset-y-0 tw-z-10 tw-w-1/2 tw-h-full tw-left-1/2 tw-bg-dark-800 tw-rounded-r-3xl"></div>

          <!-- CTA content -->
          <div class="tw-relative tw-z-30 tw-flex tw-flex-col tw-items-center tw-justify-center tw-px-4 tw-mx-auto tw-text-center sm:tw-px-16 lg:tw-flex-row lg:tw-text-left">
            <div class="tw-max-w-lg tw-text-2xl tw-font-bold sm:tw-text-4xl lg:tw-w-1/2">
              <h5 class="tw-text-4xl tw-font-extrabold tw-tracking-tight tw-text-white sm:tw-text-5xl">
                Oro: <span v-if="perfil" v-html="perfil.oro" /><span v-else>...</span>
              </h5>
            </div>
            <div class="tw-flex tw-justify-center tw-max-w-lg tw-mt-10 lg:tw-w-1/2 lg:tw-mt-0 lg:tw-justify-end">
              <div>
                <nuxt-link to="/canjear-cupon-oro" class="tw-flex tw-items-center tw-justify-center tw-w-auto tw-px-8 tw-py-4 tw-text-base tw-font-semibold tw-leading-snug tw-transition tw-ease-in-out tw-bg-white tw-rounded-full tw-h-14 tw-duration-250 tw-text-dark-900 hover:tw-text-white focus:tw-outline-none hover:tw-bg-dark-900">
                  Canjea un cupón
                </nuxt-link>
                <br>
                <nuxt-link to="/transfiere-oro-a-hedera" class="tw-flex tw-items-center tw-justify-center tw-w-auto tw-px-8 tw-py-4 tw-text-base tw-font-semibold tw-leading-snug tw-transition tw-ease-in-out tw-bg-white tw-rounded-full tw-h-14 tw-duration-250 tw-text-dark-900 hover:tw-text-white focus:tw-outline-none hover:tw-bg-dark-900">
                  Transfiere Oro
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div v-if="perfil">
        <section v-for="nft in perfil.nfts" :key="nft.id" class="tw-max-w-screen-xl tw-px-4 tw-py-12 tw-mx-auto md:tw-py-16 sm:tw-px-6 lg:tw-px-8">
          <!-- CTA card -->
          <div class="tw-relative tw-py-16 tw-rounded-3xl tw-bg-dark-700 lg:tw-py-20">
            <!-- Right background diagonal -->
            <svg class="tw-absolute tw-inset-y-0 tw-top-0 tw-z-20 tw-w-1/4 tw-h-full tw-right-1/4 tw-text-dark-700" preserveAspectRatio="none" viewBox="0 0 100 100" fill="currentcolor">
              <polygon points="0,0 100,0 0,100"></polygon>
            </svg>
            <div class="tw-absolute tw-inset-y-0 tw-z-10 tw-w-1/2 tw-h-full tw-left-1/2 tw-bg-dark-800 tw-rounded-r-3xl"></div>

            <!-- CTA content -->
            <div class="tw-relative tw-z-30 tw-flex tw-flex-col tw-items-center tw-justify-center tw-px-4 tw-mx-auto tw-text-center sm:tw-px-16 lg:tw-flex-row lg:tw-text-left">
              <div class="tw-max-w-lg tw-flex tw-items-center tw-space-x-3 tw-text-2xl tw-font-bold sm:tw-text-4xl lg:tw-w-1/2">
                <img :src="nft.image" width="80px" :alt="nft.name" />
                <h5 class="tw-text-4xl tw-font-extrabold tw-tracking-tight tw-text-white sm:tw-text-5xl">
                  <span v-html="nft.name" />
                </h5>
              </div>
              <div class="tw-flex tw-justify-center tw-max-w-lg tw-mt-10 lg:tw-w-1/2 lg:tw-mt-0 lg:tw-justify-end">
                <div>
                  <nuxt-link :to="'/transfiere-item-a-hedera/?item_identification_id=' + nft.id + '&nft_token_id=' + nft.nft.token_props + '.' + nft.nft.token_realm + '.' + nft.nft.token_number" class="tw-flex tw-items-center tw-justify-center tw-w-auto tw-px-8 tw-py-4 tw-text-base tw-font-semibold tw-leading-snug tw-transition tw-ease-in-out tw-bg-white tw-rounded-full tw-h-14 tw-duration-250 tw-text-dark-900 hover:tw-text-white focus:tw-outline-none hover:tw-bg-dark-900">
                    Transfiere el Ítem
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div class="tw-flex tw-items-center tw-py-5 tw-text-white tw-justify-center">
        <nuxt-link to="/eliminar-cuenta" class="tw-flex tw-items-center tw-justify-center tw-w-auto tw-px-8 tw-py-4 tw-text-base tw-font-semibold tw-leading-snug tw-transition tw-ease-in-out tw-bg-white tw-rounded-full tw-h-14 tw-duration-250 tw-text-dark-900 hover:tw-text-white focus:tw-outline-none hover:tw-bg-dark-900">
          Eliminar cuenta
        </nuxt-link>
      </div>
    </div>
</template>

<script>
import {mapActions, mapMutations} from "vuex";

export default {
  middleware: 'authenticated',

  head: {
    title: 'Perfil - Mad Fénix',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Perfil en Mad Fénix.'
      }
    ]
  },

  data(){
    return {
      perfil: null,
    }
  },

  mounted() {
    this.setUserCookies();
    this.$axios.setToken(this.token, 'Bearer')
    this.getPerfil()
  },

  computed: {
    user () {
      return this.$store.state.user.user
    },
    token () {
      return this.$store.state.user.token
    },
  },

  methods: {
    afterLogout(){
      this.setToken('')
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

    desconectarTwitch() {
      this.$axios.post('/api/twitch/disconnectTwitch')
        .then((response) => this.getPerfil())
        .catch((error) => (error.response.data.message) ? (error.response.data.message === 'The given data was invalid.') ? this.setServerMessage('Datos inválidos.') : this.setServerMessage(error.response.data.message) : this.setServerMessage('Error.'))
    },

    desconectarSteam() {
      this.$axios.post('/api/steam/disconnectSteam')
        .then((response) => this.getPerfil())
        .catch((error) => (error.response.data.message) ? (error.response.data.message === 'The given data was invalid.') ? this.setServerMessage('Datos inválidos.') : this.setServerMessage(error.response.data.message) : this.setServerMessage('Error.'))
    },

    conectarSteam() {
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
  },
}
</script>
