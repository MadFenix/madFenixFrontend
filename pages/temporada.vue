<template>
    <div v-if="seasonDetails">
      <!-- Case Study Hero -->
      <section class="tw-px-4 tw-py-12 md:tw-py-16 sm:tw-px-6 lg:tw-px-8">
        <div class="tw-max-w-screen-xl tw-mx-auto">
          <!-- Hero text -->
          <div class="tw-w-full tw-max-w-3xl tw-mx-auto tw-text-center lg:tw-max-w-5xl">
            <p
              class="tw-inline-flex tw-items-center tw-justify-center tw-px-6 tw-py-2 tw-text-sm tw-font-medium tw-tracking-wide tw-text-white tw-rounded-r-full tw-rounded-tl-full tw-bg-gradient-to-r tw-from-dark-600 tw-to-dark-700"
            >
              Temporada
            </p>
            <h1
              class="tw-mt-4 tw-text-4xl tw-font-extrabold tw-text-white md:tw-mt-5 sm:tw-text-5xl md:tw-text-6xl"
              v-html="seasonDetails.name"
            />
            <div class="tw-w-full tw-mx-auto lg:tw-w-4/5">
              <p class="tw-text-2xl tw-font-medium tw-tracking-tight tw-text-white sm:tw-text-3xl lg:tw-text-4xl lg:tw-leading-tight tw-mt-4" v-html="'Nivel: ' + (seasonDetails.user_season_level?? 0)" />
              <p class="tw-text-2xl tw-font-medium tw-tracking-tight tw-text-white sm:tw-text-3xl lg:tw-text-4xl lg:tw-leading-tight tw-mt-4" v-html="'Puntos: ' + (seasonDetails.user_season_points?? 0)" />
            </div>
          </div>
        </div>
      </section>

      <!-- Buscamos creadores section -->
      <section class="tw-max-w-screen-xl tw-px-4 tw-py-12 tw-mx-auto md:tw-py-16 sm:tw-px-6 lg:tw-px-8" v-if="seasonDetails.seasonRewards" v-for="seasonReward in seasonDetails.seasonRewards" :key="seasonReward.id">
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
                Nivel: <span v-html="seasonReward.level" />
              </h5>
              <h5 class="tw-text-2xl tw-font-extrabold tw-tracking-tight tw-text-white sm:tw-text-2xl">
                Premio: <span v-if="seasonReward.oro" v-html="seasonReward.oro + ' oro'" /><span v-if="seasonReward.plumas" v-html="seasonReward.plumas + ' pluma'" /><span v-if="seasonReward.nft" v-html="'1 Ítem ' + seasonReward.nft.name + '. Límite: '" /><span v-if="seasonReward.max_nft_rewards" v-html="seasonReward.max_nft_rewards" /><span v-if="seasonReward.custom_reward" v-html="seasonReward.custom_reward" />
              </h5>
            </div>
            <div class="tw-flex tw-justify-center tw-max-w-lg tw-mt-10 lg:tw-w-1/2 lg:tw-mt-0 lg:tw-justify-end">
              <div>
                <a v-if="seasonReward.redeemed" class="tw-flex tw-items-center tw-justify-center tw-w-auto tw-px-8 tw-py-4 tw-text-base tw-font-semibold tw-leading-snug tw-transition tw-ease-in-out tw-bg-white tw-rounded-full tw-h-14 tw-duration-250 tw-text-dark-900">
                  Canjeado
                </a>
                <a v-else-if="seasonReward.required_points < seasonDetails.user_season_points && !(seasonDetails.user_season_premium > 0) && !(seasonReward.level == 1 || seasonReward.level == 5 || seasonReward.level == 10 || seasonReward.level == 15 || seasonReward.level == 20)" class="tw-flex tw-items-center tw-justify-center tw-w-auto tw-px-8 tw-py-4 tw-text-base tw-font-semibold tw-leading-snug tw-transition tw-ease-in-out tw-bg-white tw-rounded-full tw-h-14 tw-duration-250 tw-text-dark-900">
                  Necesitas el pase premium
                </a>
                <a v-else-if="seasonReward.required_points < seasonDetails.user_season_points" @click="canjearPremio(seasonReward.level)" class="tw-flex tw-cursor-pointer tw-items-center tw-justify-center tw-w-auto tw-px-8 tw-py-4 tw-text-base tw-font-semibold tw-leading-snug tw-transition tw-ease-in-out tw-bg-white tw-rounded-full tw-h-14 tw-duration-250 tw-text-dark-900 hover:tw-text-white focus:tw-outline-none hover:tw-bg-dark-900">
                  Canjea el premio
                </a>
                <a v-else class="tw-flex tw-items-center tw-justify-center tw-w-auto tw-px-8 tw-py-4 tw-text-base tw-font-semibold tw-leading-snug tw-transition tw-ease-in-out tw-bg-white tw-rounded-full tw-h-14 tw-duration-250 tw-text-dark-900">
                  Por desbloquear
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
</template>

<script>
import {mapActions, mapMutations} from "vuex";

export default {
  middleware: 'authenticated',

  head: {
    title: 'Temporada - Mad Fénix',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Temporada en Mad Fénix.'
      }
    ]
  },

  data(){
    return {
      seasonDetails: null,
    }
  },

  mounted() {
    this.setUserCookies();
    this.$axios.setToken(this.token, 'Bearer')
    this.getSeasonDetails()
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
      setTimeout(() => this.$router.push({ path: '/' }), 2000)
    },

    logout () {
      this.$axios.post('/api/logout')
        .then(() => this.afterLogout())
        .catch(() => this.afterLogout())
    },

    afterSeasonDetails(response) {
      this.seasonDetails = response.data;
    },

    getSeasonDetails() {
      this.$axios.get('/api/season/seasonDetails')
        .then((response) => this.afterSeasonDetails(response))
        .catch(() => this.logout())
    },

    canjearPremio(level) {
      this.$axios.post('/api/season/redeemSeasonLvl', {level: level})
        .then(() => this.getSeasonDetails())
        .catch((error) => (error.response.data.message) ? (error.response.data.message === 'The given data was invalid.') ? this.setServerMessage('Datos inválidos.') : this.setServerMessage(error.response.data.message) : this.setServerMessage('Error.'))
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
  },
}
</script>
