<template>
  <div class="tw-bg-dark-900">
    <header>
      <nav
        class="tw-flex tw-items-center tw-px-4 tw-py-6 tw-mx-auto tw-max-w-7xl sm:tw-px-6 lg:tw-px-8">
        <div class="tw-flex tw-items-center tw-justify-between tw-w-full">
          <!-- Logo -->
          <div class="tw-flex tw-items-center">
            <!-- Large logo -->
            <nuxt-link to="/"
              class="tw-block tw-flex tw-space-x-2 tw-items-center tw-text-2xl tw-font-black md:tw-hidden lg:tw-flex tw-group font-ancient-god"
            >
              <img src="/img/logo-white.png" title="Mad Fénix" alt="Mad Fénix" class="tw-w-12" />
              <span
                class="tw-text-white tw-transition tw-duration-200 tw-ease-in-out group-hover:tw-text-dark-300"
              >Mad</span
              >
              <span
                class="tw-transition tw-duration-200 tw-ease-in-out tw-text-dark-300 group-hover:tw-text-white"
              >Fénix</span
              >
            </nuxt-link>

            <!-- Small logo for mobile screens -->
            <a
              href="index.html"
              class="tw-hidden tw-text-3xl tw-font-black md:tw-block lg:tw-hidden tw-group"
            >
                <span
                  class="tw-text-white tw-transition tw-duration-200 tw-ease-in-out group-hover:tw-text-dark-300"
                >C</span
                ><span
              class="tw-transition tw-duration-200 tw-ease-in-out tw-text-dark-300 group-hover:tw-text-white"
            >S</span
            >
            </a>
          </div>

          <!-- Main menu for large screens -->
          <div
            class="tw-hidden md:tw-flex tw-justify-between tw-items-center md:tw-space-x-0.5 lg:tw-space-x-2 tw-text-xl md:tw-text-base tw-font-medium tw-text-dark-300"
          >
            <nuxt-link to="/"
               class="tw-block tw-px-4 tw-py-1 tw-transition tw-duration-200 tw-ease-in-out tw-rounded-full sm:tw-inline-block hover:tw-text-white hover:tw-bg-dark-700"
            >
              Home
            </nuxt-link>
            <nuxt-link to="/torneo-inaugural"
               class="tw-block tw-px-4 tw-py-1 tw-transition tw-duration-200 tw-ease-in-out tw-rounded-full sm:tw-inline-block hover:tw-text-white hover:tw-bg-dark-700"
            >
              Torneo inaugural
            </nuxt-link>

            <nuxt-link v-if="user" v-for="(item, key) in items" :key="key" :to="item.path"
              class="tw-block tw-px-4 tw-py-1 tw-transition tw-duration-200 tw-ease-in-out tw-rounded-full sm:tw-inline-block hover:tw-text-white hover:tw-bg-dark-700"
              v-html="item.text"
            />

            <a v-if="user" @click="logout()"
               class="tw-block tw-px-4 tw-py-1 tw-transition tw-duration-200 tw-ease-in-out tw-rounded-full sm:tw-inline-block hover:tw-text-white hover:tw-bg-dark-700"
            >
              Logout
            </a>
            <nuxt-link v-if="!user" to="/login"
               class="tw-block tw-px-4 tw-py-1 tw-transition tw-duration-200 tw-ease-in-out tw-rounded-full sm:tw-inline-block hover:tw-text-white hover:tw-bg-dark-700"
            >
              Login
            </nuxt-link>
            <nuxt-link v-if="!user" to="/registro"
               class="tw-block tw-px-4 tw-py-1 tw-transition tw-duration-200 tw-ease-in-out tw-rounded-full sm:tw-inline-block hover:tw-text-white hover:tw-bg-dark-700"
            >
              Registro
            </nuxt-link>

            <div class="tw-hidden md:tw-block">
              <nuxt-link to="/blog/2024-01-22-buscamos-creadores-de-contenido" class="tw-flex tw-items-center tw-justify-center tw-w-auto tw-px-8 tw-py-3 tw-text-base tw-font-semibold tw-leading-snug tw-transition tw-ease-in-out tw-bg-white tw-rounded-full tw-duration-250 tw-text-dark-900 hover:tw-text-white focus:tw-outline-none hover:tw-bg-dark-800">
                Buscamos creador@s
              </nuxt-link>
            </div>
          </div>

          <!-- Mobile menu container -->
          <div class="tw-block md:tw-hidden">
            <!-- Hamburger menu button -->
            <!--
              Toggle classes based on menu state
            -->
            <button
              class="tw-relative tw-z-50 tw-w-6 tw-h-5 tw-transition tw-duration-500 tw-ease-in-out tw-transform tw-rotate-0 tw-cursor-pointer tw-group focus:tw-outline-none"
              @click="open = !open"
            >
              <span
                class="tw-absolute tw-block tw-h-1 tw-transition-all tw-duration-300 tw-ease-in-out tw-transform tw-rotate-0 tw-rounded-full tw-opacity-100 tw-bg-dark-300 group-hover:tw-bg-white"
                :class="open ? 'tw-top-2 tw-left-1/2 tw-w-0': 'tw-w-full tw-top-0 tw-left-0'"
              ></span>
              <span
                class="tw-absolute tw-left-0 tw-block tw-w-full tw-h-1 tw-transition-all tw-duration-300 tw-ease-in-out tw-transform tw-rounded-full tw-opacity-100 tw-bg-dark-300 group-hover:tw-bg-white top-2"
                :class="open ? 'tw-rotate-45': 'tw-rotate-0'"
              ></span>
              <span
                class="tw-absolute tw-left-0 tw-block tw-w-full tw-h-1 tw-transition-all tw-duration-300 tw-ease-in-out tw-transform tw-rounded-full tw-opacity-100 tw-bg-dark-300 group-hover:tw-bg-white top-2"
                :class="open ? 'tw--rotate-45': 'tw-rotate-0'"
              ></span>
              <span
                class="tw-absolute tw-block tw-h-1 tw-transition-all tw-duration-300 tw-ease-in-out tw-transform tw-rotate-0 tw-rounded-full tw-opacity-100 tw-bg-dark-300 group-hover:tw-bg-white"
                :class="open ? 'tw-top-2 tw-left-1/2 tw-w-0': 'tw-w-full tw-left-0 tw-top-4'"
              ></span>
            </button>

            <!-- Mobile menu -->
            <!--
              Toggle classes based on menu state
            -->
            <div
              class="tw-absolute tw-top-0 tw-left-0 tw-z-40 tw-flex tw-items-center tw-justify-center tw-w-screen tw-h-screen tw-bg-gradient-to-tr tw-from-dark-800 tw-to-dark-900"
              @keydown.escape.window="open = false"
              @click.away="open = false"
              v-if="open"
              x-transition:enter="tw-transition tw-ease-out tw-duration-300"
              x-transition:enter-start="tw-opacity-0 tw--translate-y-full"
              x-transition:enter-end="opacity-100 translate-y-0"
              x-transition:leave="tw-transition tw-ease-in tw-duration-200"
              x-transition:leave-start="tw-opacity-100 tw-translate-y-0"
              x-transition:leave-end="tw-opacity-0 tw--translate-y-full"
            >
              <div
                class="tw-flex tw-flex-col tw-items-center tw-w-full tw-p-4 tw-mx-auto tw-space-y-8 tw-text-xl tw-justify-evenly"
              >
                <nuxt-link to="/"
                           class="tw-block tw-px-6 tw-py-2 tw-font-medium tw-transition tw-duration-200 tw-ease-in-out tw-rounded-full tw-text-dark-300 hover:tw-text-white hover:tw-bg-dark-700 sm:tw-inline-block"
                >
                  Home
                </nuxt-link>
                <nuxt-link to="/torneo-inaugural"
                           class="tw-block tw-px-6 tw-py-2 tw-font-medium tw-transition tw-duration-200 tw-ease-in-out tw-rounded-full tw-text-dark-300 hover:tw-text-white hover:tw-bg-dark-700 sm:tw-inline-block"
                >
                  Torneo inaugural
                </nuxt-link>

                <div v-if="user" v-for="(item, key) in items" :key="key">
                  <nuxt-link :to="item.path"
                   class="tw-block tw-px-6 tw-py-2 tw-font-medium tw-transition tw-duration-200 tw-ease-in-out tw-rounded-full tw-text-dark-300 hover:tw-text-white hover:tw-bg-dark-700 sm:tw-inline-block"
                    v-html="item.text"
                  />
                </div>

                <a v-if="user" @click="logout()"
                           class="tw-block tw-px-6 tw-py-2 tw-font-medium tw-transition tw-duration-200 tw-ease-in-out tw-rounded-full tw-text-dark-300 hover:tw-text-white hover:tw-bg-dark-700 sm:tw-inline-block"
                >
                  Logout
                </a>
                <nuxt-link v-if="!user" to="/login"
                           class="tw-block tw-px-6 tw-py-2 tw-font-medium tw-transition tw-duration-200 tw-ease-in-out tw-rounded-full tw-text-dark-300 hover:tw-text-white hover:tw-bg-dark-700 sm:tw-inline-block"
                >
                  Login
                </nuxt-link>
                <nuxt-link v-if="!user" to="/registro"
                           class="tw-block tw-px-6 tw-py-2 tw-font-medium tw-transition tw-duration-200 tw-ease-in-out tw-rounded-full tw-text-dark-300 hover:tw-text-white hover:tw-bg-dark-700 sm:tw-inline-block"
                >
                  Registro
                </nuxt-link>
                <nuxt-link to="/blog/2024-01-22-buscamos-creadores-de-contenido"
                           class="tw-block tw-px-6 tw-py-2 tw-font-medium tw-transition tw-duration-200 tw-ease-in-out tw-rounded-full tw-text-dark-300 hover:tw-text-white hover:tw-bg-dark-700 sm:tw-inline-block"
                >
                  Buscamos creador@s
                </nuxt-link>
              </div>
            </div>
          </div>

        </div>
      </nav>
    </header>
    <main>
      <nuxt />
    </main>
    <footer class="tw-px-4 tw-py-12 md:tw-py-16 tw-bg-dark-900 sm:tw-px-6 lg:tw-px-8">
      <div class="tw-grid tw-gap-8 tw-mx-auto lg:tw-max-w-screen-xl sm:tw-max-w-3xl md:tw-grid-cols-3 md:tw-gap-y-12 lg:tw-grid-cols-4">
        <!-- Logo and copyright text -->
        <div class="tw-flex tw-flex-col lg:tw-mx-auto">
          <div class="tw-flex tw-items-center">
            <a href="index.html" class="tw-text-2xl tw-font-black lg:tw-block group font-ancient-god">
              <span class="tw-text-white tw-transition tw-duration-200 tw-ease-in-out group-hover:tw-text-dark-300">Mad</span>
              <span class="tw-transition tw-duration-200 tw-ease-in-out tw-text-dark-300 group-hover:tw-text-white">Fénix</span>
            </a>
          </div>
          <div class="tw-mt-6 tw-text-lg md:tw-mt-8 tw-text-dark-300">
            © 2024 Mad Fénix.
            <br>
            Todos los derechos reservados.
          </div>
        </div>

        <!-- Contact information -->
        <div class="lg:tw-mx-auto">
          <h6 class="tw-text-xl tw-font-semibold tw-text-white">Ponte en contacto</h6>
          <p class="tw-mt-2 tw-text-lg tw-text-dark-300">
            C/ Sant Valentí 14 1er,
            <br>Sant Joan de Vilatorrada, Barcelona 08250
          </p>
          <p class="tw-text-lg tw-text-dark-300">iam@valentigamez.com</p>
        </div>

        <!-- Site links -->
        <div class="lg:tw-mx-auto">
          <h6 class="tw-text-xl tw-font-semibold tw-text-white">Estudio</h6>
          <ul class="tw-mt-2 tw-space-y-1 tw-text-lg">
            <li class="tw-font-medium tw-text-dark-300 hover:tw-text-white">
              <nuxt-link to="/">
                Home
              </nuxt-link>
            </li>
            <li class="tw-font-medium tw-text-dark-300 hover:tw-text-white">
              <nuxt-link to="/torneo-inaugural">
                Torneo inaugural
              </nuxt-link>
            </li>
            <li v-if="user" v-for="(item, key) in items" :key="key" class="tw-font-medium tw-text-dark-300 hover:tw-text-white">
              <nuxt-link :to="item.path" v-html="item.text" />
            </li>
            <li v-if="user" class="tw-font-medium tw-text-dark-300 hover:tw-text-white">
              <a @click="logout()" >
                Logout
              </a>
            </li>
            <li v-if="!user" class="tw-font-medium tw-text-dark-300 hover:tw-text-white">
              <nuxt-link to="/login" >
                Login
              </nuxt-link>
            </li>
            <li v-if="!user" class="tw-font-medium tw-text-dark-300 hover:tw-text-white">
              <nuxt-link to="/registro" >
                Registro
              </nuxt-link>
            </li>
            <li class="tw-font-medium tw-text-dark-300 hover:tw-text-white">
              <nuxt-link to="/aviso-legal" >
                Aviso legal
              </nuxt-link>
            </li>
            <li class="tw-font-medium tw-text-dark-300 hover:tw-text-white">
              <nuxt-link to="/condiciones" >
                Términos y condiciones
              </nuxt-link>
            </li>
            <li class="tw-font-medium tw-text-dark-300 hover:tw-text-white">
              <nuxt-link to="/politica-de-cookies" >
                Política de cookies
              </nuxt-link>
            </li>
            <li class="tw-font-medium tw-text-dark-300 hover:tw-text-white">
              <nuxt-link to="/politica-de-privacidad" >
                Política de privacidad
              </nuxt-link>
            </li>
          </ul>
        </div>

        <!-- Social links -->
        <div class="sm:tw-col-span-3 lg:tw-col-span-1 lg:tw-mx-auto">
          <h6 class="tw-text-xl tw-font-semibold tw-text-white">
            Síguenos
          </h6>
          <p class="tw-mt-2 tw-text-lg tw-text-dark-300">
            Renacer te vuelve más fuerte.
          </p>
          <div class="tw-w-full tw-mt-4 lg:tw-mt-6">
            <!-- Social links container -->
            <div class="tw-flex tw-justify-start tw-space-x-4">
              <!-- Instagram -->
              <a class="tw-flex tw-items-center tw-justify-center tw-w-12 tw-h-12 tw-transition tw-duration-300 tw-ease-in-out tw-rounded-full tw-bg-dark-700 hover:tw-text-dark-900 hover:tw-bg-white tw-text-dark-300" href="https://www.instagram.com/madfenixgames" target="_blank">
                <!-- TablerIcon name: brand-instagram -->
                <svg xmlns="http://www.w3.org/2000/svg" class="tw-w-6 tw-h-6" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <rect x="4" y="4" width="16" height="16" rx="4"></rect>
                  <circle cx="12" cy="12" r="3"></circle>
                  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501"></line>
                </svg>
              </a>

              <!-- Facebook -->
              <!--<a class="tw-flex tw-items-center tw-justify-center tw-w-12 tw-h-12 tw-transition tw-duration-300 tw-ease-in-out tw-rounded-full tw-bg-dark-700 hover:tw-text-dark-900 hover:tw-bg-white tw-text-dark-300" href="#" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                </svg>
              </a>-->

              <!-- Twitter -->
              <a class="tw-flex tw-items-center tw-justify-center tw-w-12 tw-h-12 tw-transition tw-duration-300 tw-ease-in-out tw-rounded-full tw-bg-dark-700 hover:tw-text-dark-900 hover:tw-bg-white tw-text-dark-300" href="https://twitter.com/madfenixgames" target="_blank">
                <!-- TablerIcon name: brand-twitter -->
                <svg xmlns="http://www.w3.org/2000/svg" class="tw-w-6 tw-h-6" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <vue-cookie-toggler :cookies-groups="cookiesGroups"
        title="Gestión de Cookies"
        settings-title="Configuración de Cookies"
        settings-label="Ajustes"
        accept-label="Aceptar todo"
        save-label="Guardar selección"
        cancel-label="Cancelar">
      Utilizamos cookies propias y de terceros con finalidades analíticas y para mostrarte publicidad relacionada con tus preferencias a partir de tus hábitos de navegación y tu perfil. Puedes configurar las cookies haciendo click en "Ajustes”. Para más información puedes visitar nuestra <a href="/politica-de-cookies" target="_blank">Política de cookies</a>.
    </vue-cookie-toggler>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex';
import VueCookieToggler from 'vue-cookie-toggler';

export default {
  components: {VueCookieToggler},

  props: {
    source: String,
  },

  data: () => ({
    open: null,
    items: [
      { icon: ['fas', 'user'], text: 'Perfil', path: '/perfil' },
    ],
    footerItems: [
      {
        href: 'https://twitter.com/madfenixgames',
        icon: ['fab', 'twitter'],
        title: 'Pperfil de Twitter',
      },
      {
        href: 'https://www.instagram.com/madfenixgames/',
        icon: ['fab', 'instagram'],
        title: 'Perfil de Instagram',
      },
    ],
    accept: false,
    settings: true,
    save: true,
    cancel: false,
    cookiesGroups: [
      {
        category: 'essential',
        name: 'Funcionales',
        description:'Necesarias para navegar en este sitio y utilizar sus funciones.<br>' +
          'Identificarle como usuario y almacenar sus preferencias como idioma y moneda.<br>' +
          'Personalizar su experiencia en base con su navegación.<br>' +
          'Cookies de terceros con propósitos funcionales.<br>' +
          '<a href="/politica-de-cookies" target="_blank">Más información sobre las cookies</a>.',
        active: true,
        required: true,
      },
      {
        category: 'analytics',
        name: 'Analítica',
        description:'Permiten medir la actividad de los usuarios y elaborar estadísticas de navegación.',
        active: false,
      },
      {
        category: 'social_networking',
        name: 'Publicidad',
        description:'Permiten regular la publicidad de la web según el usuario.',
        active: false,
      },
    ]
  }),

  computed: {
    user () {
      return this.$store.state.user.user
    }
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
    },

    ...mapActions({
      setToken: 'user/setToken',
    }),

    ...mapMutations({
      removeUser: 'user/removeUser',
    }),
  },
}
</script>

<style>
/* SCROLL THEME */
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: #6C8894;
}
</style>
