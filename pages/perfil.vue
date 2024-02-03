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
              <nuxt-link to="/canjear-cupon" class="tw-flex tw-items-center tw-justify-center tw-w-auto tw-px-8 tw-py-4 tw-text-base tw-font-semibold tw-leading-snug tw-transition tw-ease-in-out tw-bg-white tw-rounded-full tw-h-14 tw-duration-250 tw-text-dark-900 hover:tw-text-white focus:tw-outline-none hover:tw-bg-dark-900">
                Canjea un cupón
              </nuxt-link>
            </div>
          </div>
        </div>
      </section>
      <div class="tw-flex tw-items-center tw-py-5 tw-text-white tw-justify-center">
        <nuxt-link to="/eliminar-cuenta" class="tw-flex tw-items-center tw-justify-center tw-w-auto tw-px-8 tw-py-4 tw-text-base tw-font-semibold tw-leading-snug tw-transition tw-ease-in-out tw-bg-white tw-rounded-full tw-h-14 tw-duration-250 tw-text-dark-900 hover:tw-text-white focus:tw-outline-none hover:tw-bg-dark-900">
          Eliminar cuenta
        </nuxt-link>
      </div>
    </div>
</template>

<script>
import {mapActions} from "vuex";

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
    afterPerfil(response) {
      this.perfil = response.data;
    },

    getPerfil() {
      this.$axios.post('/api/profile/getUserProfile')
        .then((response) => this.afterPerfil(response))
        .catch((error) => (error.response.data.message) ? (error.response.data.message === 'The given data was invalid.') ? this.setServerMessage('Datos inválidos.') : this.setServerMessage(error.response.data.message) : this.setServerMessage('Error.'))
    },

    ...mapActions({
      setServerMessage: 'serverMessage/setServerMessage',
    }),
  },
}
</script>
