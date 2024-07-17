<template>
  <div>


    <!-- Blog section -->
    <section class="tw-px-4 tw-py-12 md:tw-py-16 sm:tw-px-6 lg:tw-px-8">
      <!-- Section text -->
      <div class="tw-max-w-xl tw-mx-auto tw-text-center md:tw-max-w-2xl lg:tw-text-left lg:tw-max-w-screen-xl">
        <p class="tw-inline-flex tw-items-center tw-justify-center tw-px-6 tw-py-2 tw-text-sm tw-font-medium tw-tracking-wide tw-text-white tw-rounded-r-full tw-rounded-tl-full tw-bg-gradient-to-r tw-from-dark-600 tw-to-dark-700">
          Nuestros juegos
        </p>
        <div class="tw-grid tw-w-full tw-gap-6 tw-mt-6 lg:tw-grid-cols-5">
          <div class="lg:tw-col-span-3">
            <h2 class="tw-text-3xl tw-font-extrabold tw-text-white sm:tw-text-4xl md:tw-text-5xl">
              Nuestra esencia
            </h2>
          </div>

          <div class="lg:tw-col-span-2">
            <p class="tw-text-xl tw-text-dark-300">
              La forma que tenemos de transmitir nuestro mensaje de empatía y autosuperación
            </p>
          </div>
        </div>
      </div>

      <div class="tw-max-w-screen-xl tw-mx-auto tw-mt-10 md:tw-mt-12 lg:tw-mt-16">
        <!-- Blog container -->
        <div class="tw-order-2 tw-mt-12 tw-overflow-hidden md:tw-mt-0 md:tw-order-1 md:tw-col-span-9">
          <!-- Posts container -->
          <div class="tw-grid tw-gap-6 lg:tw-grid-cols-2 md:tw-gap-8">
            <!-- Juego 1 -->
            <div class="tw-max-w-lg tw-mx-auto tw-shadow-xl tw-rounded-3xl tw-bg-dark-700">
              <div class="tw-w-full tw-h-64 tw-bg-center tw-bg-cover tw-rounded-t-3xl" data-background-image="/img/games/habitos/habitos.jpg" style="background-image: url('/img/games/habitos/habitos.jpg')">
                <p class="tw-inline-flex tw-items-center tw-justify-center tw-px-6 tw-py-2 tw-mt-4 tw-ml-6 tw-text-xs tw-font-medium tw-tracking-wide tw-text-white tw-rounded-r-full tw-rounded-tl-full tw-bg-gradient-to-r lg:tw-ml-4 xl:tw-ml-6 tw-from-dark-700 tw-to-dark-800">
                  Salud
                </p>
              </div>
              <div class="tw-w-full tw-p-6 lg:tw-p-4 xl:tw-p-6">
                <div class="tw-flex tw-flex-wrap tw-w-full">
                  <div class="tw-flex tw-items-center tw-justify-start tw-w-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="tw-w-5 tw-h-5 tw-text-dark-400" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <rect x="4" y="5" width="16" height="16" rx="2"></rect>
                      <line x1="16" y1="3" x2="16" y2="7"></line>
                      <line x1="8" y1="3" x2="8" y2="7"></line>
                      <line x1="4" y1="11" x2="20" y2="11"></line>
                      <line x1="11" y1="15" x2="12" y2="15"></line>
                      <line x1="12" y1="15" x2="12" y2="18"></line>
                    </svg>
                    <div class="tw-ml-2 tw-text-base tw-font-medium tw-leading-6 tw-text-dark-400">
                      06 de Mayo 2024
                    </div>
                  </div>
                  <div class="tw-flex tw-justify-end tw-w-1/2 tw-space-x-1">
                    <svg class="tw-w-6 tw-h-6 tw-text-dark-400" style="enable-background:new 0 0 32 32;" version="1.1" viewBox="0 0 32 32" stroke="currentColor" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <path class="st1" d="M21.8,10C15,14.5,7.1,23.4,5,29.4"/><path class="st0" d="M5.7,22.4c-0.1-2.6,0.2-6,2-7.8c8.9-8.9,21-11.3,21-11.3s-2.5,9.8-8.5,17.7l0,0H15l2.4,3.3  c-1.8,1.8-5.2,2.1-7.7,2"/>
                      </svg>
                  </div>
                </div>
                <h3 class="tw-mt-6 tw-text-xl tw-font-semibold tw-leading-6 tw-text-white md:tw-text-2xl">
                  Hábitos diarios
                </h3>
                <p class="tw-mt-1 tw-text-base tw-leading-relaxed tw-text-dark-300">
                  Configura tus hábitos y consigue puntos de temporada por completar todo el día.
                </p>
                <div v-if="perfil">
                  <div class="tw-mt-3 tw-text-base tw-leading-relaxed tw-text-dark-300 tw-grid tw-grid-cols-5 tw-space-x-3" v-for="habit in perfil.habits" :key="habit.id">
                    <div v-if="!habit.habit_completed" class="tw-flex tw-justify-end tw-mt-1">
                      <input class="tw-mr-0 tw-cursor-pointer" type="checkbox" @click="completeHabit(habit.id)" />
                    </div>
                    <div v-else class="tw-flex tw-justify-end tw-mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="tw-mr-0 tw-w-6 tw-h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </div>
                    <div class="tw-col-span-4" v-html="habit.name" />
                  </div>
                </div>
                <div class="mt-8">
                  <nuxt-link to="/habitos" class="tw-mt-3 tw-relative tw-inline-flex tw-items-center tw-justify-center tw-w-auto tw-h-12 tw-px-8 tw-text-base tw-font-medium tw-leading-snug tw-text-white md:tw-h-14 tw-group">
                    <span class="tw-absolute tw-top-0 tw-left-0 tw-z-10 tw-block tw-w-full tw-h-full tw-transition-all tw-ease-in-out tw-rounded-full tw-bg-gradient-to-r tw-duration-250 tw-from-dark-800 tw-to-dark-900 md:tw-w-14 md:group-hover:tw-w-full"></span>
                    <span class="tw-relative tw-z-20">Configurar</span>
                  </nuxt-link>
                </div>
              </div>
            </div>


            <!-- Juego 2 -->
            <div class="tw-max-w-lg tw-mx-auto tw-shadow-xl tw-rounded-3xl tw-bg-dark-700">
              <!--<nuxt-link to="/blog/2024-03-12-tokens-mad-fenix">-->
              <div class="tw-w-full tw-h-64 tw-bg-center tw-bg-cover tw-rounded-t-3xl" data-background-image="img/games/2elevado/portadaStores.jpg" style="background-image: url('/img/games/2elevado/portadaStores.jpg')">
                <p class="tw-inline-flex tw-items-center tw-justify-center tw-px-6 tw-py-2 tw-mt-4 tw-ml-6 tw-text-xs tw-font-medium tw-tracking-wide tw-text-white tw-rounded-r-full tw-rounded-tl-full tw-bg-gradient-to-r lg:tw-ml-4 xl:tw-ml-6 tw-from-dark-700 tw-to-dark-800">
                  Puzzles
                </p>
              </div>
              <!--</nuxt-link>-->
              <div class="tw-w-full tw-p-6 lg:tw-p-4 xl:tw-p-6">
                <div class="tw-flex tw-flex-wrap tw-w-full">
                  <div class="tw-flex tw-items-center tw-justify-start tw-w-1/2">
                    <!-- TablerIcon name: calendar -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="tw-w-5 tw-h-5 tw-text-dark-400" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <rect x="4" y="5" width="16" height="16" rx="2"></rect>
                      <line x1="16" y1="3" x2="16" y2="7"></line>
                      <line x1="8" y1="3" x2="8" y2="7"></line>
                      <line x1="4" y1="11" x2="20" y2="11"></line>
                      <line x1="11" y1="15" x2="12" y2="15"></line>
                      <line x1="12" y1="15" x2="12" y2="18"></line>
                    </svg>
                    <div class="tw-ml-2 tw-text-base tw-font-medium tw-leading-6 tw-text-dark-400">
                      06 de Mayo 2024
                    </div>
                  </div>
                  <div class="tw-flex tw-justify-end tw-w-1/2 tw-space-x-1">
                    <!-- TablerIcon name: brand-tailwind -->
                    <svg class="tw-w-6 tw-h-6 tw-text-dark-400" style="enable-background:new 0 0 32 32;" version="1.1" viewBox="0 0 32 32" stroke="currentColor" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <path class="st1" d="M21.8,10C15,14.5,7.1,23.4,5,29.4"/><path class="st0" d="M5.7,22.4c-0.1-2.6,0.2-6,2-7.8c8.9-8.9,21-11.3,21-11.3s-2.5,9.8-8.5,17.7l0,0H15l2.4,3.3  c-1.8,1.8-5.2,2.1-7.7,2"/>
                      </svg>
                  </div>
                </div>
                <h3 class="tw-mt-6 tw-text-xl tw-font-semibold tw-leading-6 tw-text-white md:tw-text-2xl">
                  2 Elevado
                </h3>
                <p class="tw-mt-1 tw-text-base tw-leading-relaxed tw-text-dark-300">
                  Un juego de sumar números iguales
                </p>
                <div class="mt-8 tw-grid tw-grid-cols-2 tw-mt-3">
                  <a href="https://apps.apple.com/es/app/2-elevado/id6499581395" target="_blank" class="tw-relative tw-inline-flex tw-items-center tw-justify-center tw-w-auto tw-h-12 tw-px-8 tw-text-base tw-font-medium tw-leading-snug tw-text-white md:tw-h-14 tw-group">
                    <span class="tw-absolute tw-top-0 tw-left-0 tw-z-10 tw-block tw-w-full tw-h-full tw-transition-all tw-ease-in-out tw-rounded-full tw-bg-gradient-to-r tw-duration-250 tw-from-dark-800 tw-to-dark-900 md:tw-w-14 md:group-hover:tw-w-full"></span>
                    <span class="tw-relative tw-z-20">Descargar iOS</span>
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.madfenix.twoelevado" target="_blank" class="tw-relative tw-inline-flex tw-items-center tw-justify-center tw-w-auto tw-h-12 tw-px-8 tw-text-base tw-font-medium tw-leading-snug tw-text-white md:tw-h-14 tw-group">
                    <span class="tw-absolute tw-top-0 tw-left-0 tw-z-10 tw-block tw-w-full tw-h-full tw-transition-all tw-ease-in-out tw-rounded-full tw-bg-gradient-to-r tw-duration-250 tw-from-dark-800 tw-to-dark-900 md:tw-w-14 md:group-hover:tw-w-full"></span>
                    <span class="tw-relative tw-z-20">Descargar Android</span>
                  </a>
                  <div class="tw-col-span-2 tw-mt-3">
                    <a href="https://iamvalentigamez.itch.io/2elevado" target="_blank" class="tw-relative tw-inline-flex tw-items-center tw-justify-center tw-w-auto tw-h-12 tw-px-8 tw-text-base tw-font-medium tw-leading-snug tw-text-white md:tw-h-14 tw-group">
                      <span class="tw-absolute tw-top-0 tw-left-0 tw-z-10 tw-block tw-w-full tw-h-full tw-transition-all tw-ease-in-out tw-rounded-full tw-bg-gradient-to-r tw-duration-250 tw-from-dark-800 tw-to-dark-900 md:tw-w-14 md:group-hover:tw-w-full"></span>
                      <span class="tw-relative tw-z-20">Jugar en navegador</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Case Study Hero -->
    <section class="tw-px-4 tw-py-12 md:tw-py-16 sm:tw-px-6 lg:tw-px-8">
      <div class="tw-max-w-screen-xl tw-mx-auto">
        <!-- Hero text -->
        <div class="tw-w-full tw-max-w-3xl tw-mx-auto tw-text-center lg:tw-max-w-5xl">
          <p
            class="tw-inline-flex tw-items-center tw-justify-center tw-px-6 tw-py-2 tw-text-sm tw-font-medium tw-tracking-wide tw-text-white tw-rounded-r-full tw-rounded-tl-full tw-bg-gradient-to-r tw-from-dark-600 tw-to-dark-700"
          >
            Nos aliamos contigo para crecer juntos
          </p>
          <h1
            class="tw-mt-4 tw-text-4xl tw-font-extrabold tw-text-white md:tw-mt-5 sm:tw-text-5xl md:tw-text-6xl"
          >
            Creamos juegos que mueven comunidades
          </h1>
        </div>
      </div>

      <div class="tw-grid tw-justify-center tw-w-full tw-gap-12 tw-mx-auto tw-mt-12 lg:tw-grid-cols-2 lg:tw-gap-8 lg:tw-mt-16 lg:tw-max-w-screen-xl xl:tw-max-w-screen-xl lg:tw-justify-start">
        <!-- Image collage right -->
        <div class="tw-flex tw-items-center tw-justify-center tw-max-w-screen-md lg:tw-max-w-full">
          <div class="tw-grid tw-h-full tw-grid-flow-col tw-grid-rows-2 tw-gap-4">
            <div class="tw-shadow-xl tw-rounded-3xl">
              <img src="/img/games/bookersVillage/bookersVillageMonje.jpg" class="tw-object-cover tw-object-center tw-w-full tw-h-full tw-rounded-3xl">
            </div>
            <div class="tw-shadow-xl tw-rounded-3xl">
              <img src="/img/games/bookersVillage/bookersVillageGranjero.jpg" class="tw-object-cover tw-object-center tw-w-full tw-h-full tw-rounded-3xl">
            </div>
            <div class="tw-row-span-2 tw-shadow-xl tw-rounded-3xl">
              <img src="/img/games/bookersVillage/bookersVillageFighter.jpg" class="tw-object-cover tw-object-center tw-w-full tw-h-full tw-rounded-3xl">
            </div>
          </div>
        </div>

        <!-- Image collage left -->
        <div class="tw-flex tw-items-center tw-justify-center tw-max-w-screen-md lg:tw-max-w-full">
          <div class="tw-grid tw-h-full tw-grid-flow-col tw-grid-rows-2 tw-gap-4">
            <div class="tw-row-span-2 tw-shadow-xl tw-rounded-3xl">
              <img src="/img/games/bookersVillage/bookersVillageEstudiante.jpg" class="tw-object-cover tw-object-center tw-w-full tw-h-full tw-rounded-3xl">
            </div>
            <div class="tw-shadow-xl tw-rounded-3xl">
              <img src="/img/games/bookersVillage/bookersVillageDoctor.jpg" class="tw-object-cover tw-object-center tw-w-full tw-h-full tw-rounded-3xl">
            </div>
            <div class="tw-shadow-xl tw-rounded-3xl">
              <img src="/img/games/bookersVillage/bookersVillageAliado.jpg" class="tw-object-cover tw-object-center tw-w-full tw-h-full tw-rounded-3xl">
            </div>
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
              #BookersVillage
            </h5>
          </div>
          <div class="tw-flex tw-justify-center tw-max-w-lg tw-mt-10 lg:tw-w-1/2 lg:tw-mt-0 lg:tw-justify-end">
            <a href="https://twitter.com/search?q=%23BookersVillage&src=typed_query&f=top" target="_blank" class="tw-flex tw-items-center tw-justify-center tw-w-auto tw-px-8 tw-py-4 tw-text-base tw-font-semibold tw-leading-snug tw-transition tw-ease-in-out tw-bg-white tw-rounded-full tw-h-14 tw-duration-250 tw-text-dark-900 hover:tw-text-white focus:tw-outline-none hover:tw-bg-dark-900">
              Consulta el hashtag
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Diagonal separator -->
    <div class="tw-relative tw-w-full tw-h-16 md:tw-h-32 lg:tw-h-48">
      <svg class="tw-absolute tw-w-full tw-h-full tw-text-dark-800" preserveAspectRatio="none" viewBox="0 0 100 100" fill="currentcolor">
        <polygon points="0,0 0,100 100,100"></polygon>
      </svg>
    </div>

    <!-- What we do -->
    <section class="tw-px-4 tw-py-10 md:tw-py-12 tw-bg-dark-800 sm:tw-px-6 lg:tw-px-8">
      <!-- Section text -->
      <div class="tw-max-w-xl tw-mx-auto tw-text-center md:tw-max-w-2xl lg:tw-text-left lg:tw-max-w-screen-xl">
        <p class="tw-inline-flex tw-items-center tw-justify-center tw-px-6 tw-py-2 tw-text-sm tw-font-medium tw-tracking-wide tw-text-white tw-rounded-r-full tw-rounded-tl-full tw-bg-gradient-to-r tw-from-dark-600 tw-to-dark-700">
          Qué hacemos
        </p>
        <div class="tw-grid tw-w-full tw-gap-6 tw-mt-6 lg:tw-grid-cols-5">
          <div class="lg:tw-col-span-3">
            <h2 class="tw-text-3xl tw-font-extrabold tw-text-white sm:tw-text-4xl md:tw-text-5xl">
              Creamos juegos que mueven comunidades
            </h2>
          </div>

          <div class="lg:tw-col-span-2">
            <p class="tw-text-xl tw-text-dark-300">
              Desde torneos a premios personalizados en nuestro pase de temporada.
            </p>
          </div>
        </div>
      </div>

      <!-- Section content -->
      <div class="tw-grid tw-justify-center tw-w-full tw-gap-12 tw-mx-auto tw-mt-12 lg:tw-grid-cols-2 lg:tw-gap-8 lg:tw-mt-16 lg:tw-max-w-screen-xl xl:tw-max-w-screen-xl lg:tw-justify-start">
        <!-- Features list -->
        <div>
          <!-- Item -->
          <div class="tw-w-full">
            <div class="tw-max-w-lg tw-mx-auto lg:tw-mr-auto xl:tw-mx-auto">
              <div class="tw-relative tw-flex tw-w-full tw-px-8 tw-py-6 tw-shadow-xl tw-rounded-3xl tw-bg-dark-700 sm:tw-px-10">
                <div class="tw-text-center sm:tw-flex sm:tw-text-left">
                  <div class="tw-w-full sm:tw-w-1/5">
                    <div class="tw-flex tw-items-center tw-justify-center tw-w-12 tw-h-12 tw-mx-auto tw-bg-gradient-to-r tw-rounded-2xl tw-text-dark-300 sm:tw-mx-0 tw-from-dark-800 tw-to-dark-900">
                      <!-- TablerIcon name: artboard -->
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="tw-w-6 tw-h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
                      </svg>
                    </div>
                  </div>
                  <div class="tw-w-full tw-mt-3 sm:tw-mt-0">
                    <h5 class="tw-text-lg tw-font-semibold tw-text-white">
                      Torneos
                    </h5>
                    <p class="tw-mt-1 tw-text-base tw-text-dark-300">
                      Intercomunitarios o personalizados para proyectos amigos. Nuestro objetivo es que las tribus amigas se entretengan, ganen premios y hagan ruido en redes sociales.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Item -->
          <div class="tw-w-full tw-mt-8 lg:tw-mt-5 xl:tw-mt-8 2xl:tw-mt-10 xl:tw-pr-18 2xl:tw-pr-28">
            <div class="tw-max-w-lg tw-mx-auto lg:tw-mr-auto xl:tw-mx-auto">
              <div class="tw-flex tw-w-full tw-px-8 tw-py-6 tw-shadow-xl tw-rounded-3xl tw-bg-dark-700 sm:tw-px-10">
                <div class="tw-text-center sm:tw-flex sm:tw-text-left">
                  <div class="tw-w-full sm:tw-w-1/5">
                    <div class="tw-flex tw-items-center tw-justify-center tw-w-12 tw-h-12 tw-mx-auto tw-bg-gradient-to-r tw-rounded-2xl tw-text-dark-300 sm:tw-mx-0 tw-from-dark-800 tw-to-dark-900">
                      <!-- TablerIcon name: code -->
                      <svg class="tw-w-6 tw-h-6" style="enable-background:new 0 0 32 32;" version="1.1" viewBox="0 0 32 32" stroke="currentColor" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <path class="st1" d="M21.8,10C15,14.5,7.1,23.4,5,29.4"/><path class="st0" d="M5.7,22.4c-0.1-2.6,0.2-6,2-7.8c8.9-8.9,21-11.3,21-11.3s-2.5,9.8-8.5,17.7l0,0H15l2.4,3.3  c-1.8,1.8-5.2,2.1-7.7,2"/>
                      </svg>
                    </div>
                  </div>
                  <div class="tw-w-full tw-mt-3 sm:tw-mt-0">
                    <h5 class="tw-text-lg tw-font-semibold tw-text-white">
                      Plumas fénix
                    </h5>
                    <p class="tw-mt-1 tw-text-base tw-text-dark-300">
                      Son un reclamo para los juegos que proponemos ya que te dan una pequeña ventaja. Solo se consiguen mediante acciones con nosotros o nuestros aliados.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Item -->
          <div class="tw-w-full tw-mt-8 lg:tw-mt-5 xl:tw-mt-8 2xl:tw-mt-10">
            <div class="tw-max-w-lg tw-mx-auto lg:tw-mr-auto xl:tw-mx-auto">
              <div class="tw-flex tw-w-full tw-px-8 tw-py-6 tw-shadow-xl tw-rounded-3xl tw-bg-dark-700 sm:tw-px-10">
                <div class="tw-text-center sm:tw-flex sm:tw-text-left">
                  <div class="tw-w-full sm:tw-w-1/5">
                    <div class="tw-flex tw-items-center tw-justify-center tw-w-12 tw-h-12 tw-mx-auto tw-bg-gradient-to-r tw-rounded-2xl tw-text-dark-300 sm:tw-mx-0 tw-from-dark-800 tw-to-dark-900">
                      <!-- TablerIcon name: tool -->
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="tw-w-6 tw-h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" />
                      </svg>
                    </div>
                  </div>
                  <div class="tw-w-full tw-mt-3 sm:tw-mt-0">
                    <h5 class="tw-text-lg tw-font-semibold tw-text-white">
                      Pase de temporada
                    </h5>
                    <p class="tw-mt-1 tw-text-base tw-text-dark-300">
                      Nuestros jugadores ganan premios con cada nivel superado. Podemos agregar ventajas de proyectos amigos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Image collage -->
        <div class="tw-flex tw-items-center tw-justify-center tw-max-w-screen-md lg:tw-max-w-full">
          <div class="tw-grid tw-h-full tw-grid-flow-col tw-grid-rows-2 tw-gap-4">
            <div class="tw-row-span-2 tw-shadow-xl tw-rounded-3xl">
              <img src="/img/home/personaJugandoEnMadFenixGame.jpg" class="tw-object-cover tw-object-right tw-w-full tw-h-full tw-rounded-3xl">
            </div>
            <div class="tw-shadow-xl tw-rounded-3xl">
              <img src="/img/home/persona2JugandoEnMadFenixGame.jpg" class="tw-object-cover tw-object-center tw-w-full tw-h-full tw-rounded-3xl">
            </div>
            <div class="tw-shadow-xl tw-rounded-3xl">
              <img src="/img/home/persona3JugandoEnMadFenixGame.jpg" class="tw-object-cover tw-object-center tw-w-full tw-h-full tw-rounded-3xl">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Diagonal separator -->
    <div class="tw-relative tw-w-full tw-h-16 tw-bg-dark-800 md:tw-h-32 lg:tw-h-48">
      <svg class="tw-absolute tw-w-full tw-h-full tw-text-dark-900" preserveAspectRatio="none" viewBox="0 0 100 100" fill="currentcolor">
        <polygon points="0,100 100,100 100,0"></polygon>
      </svg>
    </div>

    <section class="tw-px-4 tw-pt-6 tw-pb-12 tw-mx-auto tw-max-w-screen-2xl md:tw-pb-16 sm:tw-px-6 lg:tw-px-8">
      <!-- Hero card -->
      <div class="tw-relative tw-shadow-xl tw-rounded-3xl sm:tw-overflow-hidden tw-bg-dark-700">
        <!-- Right background diagonal -->
        <svg class="tw-absolute tw-inset-y-0 tw-z-20 tw-w-1/4 tw-h-full tw-right-1/4 tw-text-dark-700" preserveAspectRatio="none" viewBox="0 0 100 100" fill="currentcolor">
          <polygon points="0,0 100,0 0,100"></polygon>
        </svg>
        <div class="tw-absolute tw-inset-y-0 tw-z-10 tw-w-1/2 tw-h-full tw-left-1/2 tw-bg-dark-800 tw-rounded-r-3xl"></div>

        <!-- Hero card content -->
        <div class="tw-relative tw-max-w-screen-xl tw-px-4 tw-py-12 tw-mx-auto lg:tw-grid lg:tw-grid-cols-2 lg:tw-auto-rows-max lg:tw-gap-x-8 xl:tw-gap-x-12 sm:tw-px-6 sm:tw-py-12 lg:tw-py-12 lg:tw-px-8">
          <!-- Card content text-->
          <div class="tw-flex tw-flex-col tw-items-center tw-justify-center lg:tw-items-start">
            <p class="tw-z-30 tw-inline-flex tw-items-center tw-justify-center tw-px-6 tw-py-2 tw-text-sm tw-font-medium tw-tracking-wide tw-text-white tw-rounded-r-full tw-rounded-tl-full tw-bg-gradient-to-r tw-from-dark-800 tw-to-dark-900">
              Dragones Custodio
            </p>
            <div class="tw-z-30 tw-w-full tw-max-w-lg tw-mx-auto tw-mt-6 tw-text-center lg:tw-text-left lg:tw-max-w-none md:tw-max-w-2xl">
              <h1 class="tw-text-4xl tw-font-extrabold tw-text-white sm:tw-text-5xl md:tw-text-6xl lg:tw-text-5xl xl:tw-text-6xl">
                La colección matriz de Mad Fénix
              </h1>
              <p class="tw-mt-6 tw-text-xl tw-text-dark-300">
                Los Dragones Custodio simbolizan los guardianes de la esencia del proyecto. Tienen las mayores utilidades y son el activo digital más preciado de Mad Fenix Games.
              </p>
            </div>
            <!-- Hero buttons -->
            <div class="tw-z-30 tw-mt-10 sm:tw-flex sm:tw-justify-center lg:tw-justify-start">
              <a class="tw-flex tw-items-center tw-justify-center tw-w-auto tw-px-8 tw-py-4 tw-text-base tw-font-semibold tw-leading-snug tw-transition tw-ease-in-out tw-bg-white tw-rounded-full tw-h-14 tw-duration-250 tw-text-dark-900 hover:tw-text-white focus:tw-outline-none hover:tw-bg-dark-900" href="/dragones-custodio#utilidades">
                Ver utilidades
              </a>
            </div>
          </div>

          <!-- Hero image -->
          <div class="tw-flex tw-items-center tw-justify-center tw-max-w-xl tw-mx-auto tw-mt-12 sm:tw-mt-16 lg:tw-mt-0 lg:tw-max-w-none">
            <img src="/img/dragones-custodio/dragon_fenix.png" class="tw-z-30 tw-object-cover tw-w-auto tw-h-3/4 tw-shadow-md tw-rounded-3xl">
          </div>
        </div>
      </div>
    </section>

    <!-- Blog section -->
    <section class="tw-px-4 tw-py-12 md:tw-py-16 sm:tw-px-6 lg:tw-px-8">
      <!-- Section text -->
      <div class="tw-max-w-xl tw-mx-auto tw-text-center md:tw-max-w-2xl lg:tw-text-left lg:tw-max-w-screen-xl">
        <p class="tw-inline-flex tw-items-center tw-justify-center tw-px-6 tw-py-2 tw-text-sm tw-font-medium tw-tracking-wide tw-text-white tw-rounded-r-full tw-rounded-tl-full tw-bg-gradient-to-r tw-from-dark-600 tw-to-dark-700">
          Noticias
        </p>
        <div class="tw-grid tw-w-full tw-gap-6 tw-mt-6 lg:tw-grid-cols-5">
          <div class="lg:tw-col-span-3">
            <h2 class="tw-text-3xl tw-font-extrabold tw-text-white sm:tw-text-4xl md:tw-text-5xl">
              La actualidad de
              <br><span class="font-ancient-god"><span class="tw-text-white tw-transition tw-duration-200 tw-ease-in-out group-hover:tw-text-dark-300">Mad</span> <span class="tw-transition tw-duration-200 tw-ease-in-out tw-text-dark-300 group-hover:tw-text-white">Fénix</span></span>
            </h2>
          </div>

          <div class="lg:tw-col-span-2">
            <p class="tw-text-xl tw-text-dark-300">
              Lanzamientos de nuestros videojuegos, torneos, game jams, temporadas y más
            </p>
          </div>
        </div>
      </div>

      <div class="tw-max-w-screen-xl tw-mx-auto tw-mt-10 md:tw-mt-12 lg:tw-mt-16">
        <!-- Blog container -->
        <div class="tw-order-2 tw-mt-12 tw-overflow-hidden md:tw-mt-0 md:tw-order-1 md:tw-col-span-9">
          <!-- Posts container -->
          <div class="tw-grid tw-gap-6 lg:tw-grid-cols-2 md:tw-gap-8">
            <!-- Post -->
            <div class="tw-max-w-lg tw-mx-auto tw-shadow-xl tw-rounded-3xl tw-bg-dark-700">
              <nuxt-link to="/blog/2024-03-12-tokens-mad-fenix">
                <div class="tw-w-full tw-h-64 tw-bg-center tw-bg-cover tw-rounded-t-3xl" data-background-image="images/work-image-01.jpg" style="background-image: url('/img/blog/tokensWeb3.jpg')">
                  <p class="tw-inline-flex tw-items-center tw-justify-center tw-px-6 tw-py-2 tw-mt-4 tw-ml-6 tw-text-xs tw-font-medium tw-tracking-wide tw-text-white tw-rounded-r-full tw-rounded-tl-full tw-bg-gradient-to-r lg:tw-ml-4 xl:tw-ml-6 tw-from-dark-700 tw-to-dark-800">
                    Bases
                  </p>
                </div>
              </nuxt-link>
              <div class="tw-w-full tw-p-6 lg:tw-p-4 xl:tw-p-6">
                <div class="tw-flex tw-flex-wrap tw-w-full">
                  <div class="tw-flex tw-items-center tw-justify-start tw-w-1/2">
                    <!-- TablerIcon name: calendar -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="tw-w-5 tw-h-5 tw-text-dark-400" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <rect x="4" y="5" width="16" height="16" rx="2"></rect>
                      <line x1="16" y1="3" x2="16" y2="7"></line>
                      <line x1="8" y1="3" x2="8" y2="7"></line>
                      <line x1="4" y1="11" x2="20" y2="11"></line>
                      <line x1="11" y1="15" x2="12" y2="15"></line>
                      <line x1="12" y1="15" x2="12" y2="18"></line>
                    </svg>
                    <div class="tw-ml-2 tw-text-base tw-font-medium tw-leading-6 tw-text-dark-400">
                      12 de Marzo 2024
                    </div>
                  </div>
                  <div class="tw-flex tw-justify-end tw-w-1/2 tw-space-x-1">
                    <!-- TablerIcon name: brand-tailwind -->
                    <svg class="tw-w-6 tw-h-6 tw-text-dark-400" style="enable-background:new 0 0 32 32;" version="1.1" viewBox="0 0 32 32" stroke="currentColor" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <path class="st1" d="M21.8,10C15,14.5,7.1,23.4,5,29.4"/><path class="st0" d="M5.7,22.4c-0.1-2.6,0.2-6,2-7.8c8.9-8.9,21-11.3,21-11.3s-2.5,9.8-8.5,17.7l0,0H15l2.4,3.3  c-1.8,1.8-5.2,2.1-7.7,2"/>
                      </svg>
                  </div>
                </div>
                <nuxt-link to="/blog/2024-03-12-tokens-mad-fenix">
                  <h3 class="tw-mt-6 tw-text-xl tw-font-semibold tw-leading-6 tw-text-white md:tw-text-2xl">
                    Tokens de Mad Fénix
                  </h3>
                </nuxt-link>
                <p class="tw-mt-1 tw-text-base tw-leading-relaxed tw-text-dark-300">
                  Conceptualización de los tres tokens del ecosistema: Plumas Fénix, Piezas de Oro y Dragones Custodio.
                </p>
                <div class="mt-8">
                  <nuxt-link to="/blog/2024-03-12-tokens-mad-fenix" class="tw-relative tw-inline-flex tw-items-center tw-justify-center tw-w-auto tw-h-12 tw-px-8 tw-text-base tw-font-medium tw-leading-snug tw-text-white md:tw-h-14 tw-group">
                    <span class="tw-absolute tw-top-0 tw-left-0 tw-z-10 tw-block tw-w-full tw-h-full tw-transition-all tw-ease-in-out tw-rounded-full tw-bg-gradient-to-r tw-duration-250 tw-from-dark-800 tw-to-dark-900 md:tw-w-14 md:group-hover:tw-w-full"></span>
                    <span class="tw-relative tw-z-20">Ver noticia</span>
                  </nuxt-link>
                </div>
              </div>
            </div>


            <!-- Post -->
            <div class="tw-max-w-lg tw-mx-auto tw-shadow-xl tw-rounded-3xl tw-bg-dark-700">
              <nuxt-link to="/blog/2024-01-22-plataforma-web">
                <div class="tw-w-full tw-h-64 tw-bg-center tw-bg-cover tw-rounded-t-3xl" data-background-image="images/work-image-01.jpg" style="background-image: url('/img/blog/encuentraTuTribu.jpg')">
                  <p class="tw-inline-flex tw-items-center tw-justify-center tw-px-6 tw-py-2 tw-mt-4 tw-ml-6 tw-text-xs tw-font-medium tw-tracking-wide tw-text-white tw-rounded-r-full tw-rounded-tl-full tw-bg-gradient-to-r lg:tw-ml-4 xl:tw-ml-6 tw-from-dark-700 tw-to-dark-800">
                    Plataforma web
                  </p>
                </div>
              </nuxt-link>
              <div class="tw-w-full tw-p-6 lg:tw-p-4 xl:tw-p-6">
                <div class="tw-flex tw-flex-wrap tw-w-full">
                  <div class="tw-flex tw-items-center tw-justify-start tw-w-1/2">
                    <!-- TablerIcon name: calendar -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="tw-w-5 tw-h-5 tw-text-dark-400" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <rect x="4" y="5" width="16" height="16" rx="2"></rect>
                      <line x1="16" y1="3" x2="16" y2="7"></line>
                      <line x1="8" y1="3" x2="8" y2="7"></line>
                      <line x1="4" y1="11" x2="20" y2="11"></line>
                      <line x1="11" y1="15" x2="12" y2="15"></line>
                      <line x1="12" y1="15" x2="12" y2="18"></line>
                    </svg>
                    <div class="tw-ml-2 tw-text-base tw-font-medium tw-leading-6 tw-text-dark-400">
                      22 de Enero 2024
                    </div>
                  </div>
                  <div class="tw-flex tw-justify-end tw-w-1/2 tw-space-x-1">
                    <!-- TablerIcon name: brand-tailwind -->
                    <svg class="tw-w-6 tw-h-6 tw-text-dark-400" style="enable-background:new 0 0 32 32;" version="1.1" viewBox="0 0 32 32" stroke="currentColor" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <path class="st1" d="M21.8,10C15,14.5,7.1,23.4,5,29.4"/><path class="st0" d="M5.7,22.4c-0.1-2.6,0.2-6,2-7.8c8.9-8.9,21-11.3,21-11.3s-2.5,9.8-8.5,17.7l0,0H15l2.4,3.3  c-1.8,1.8-5.2,2.1-7.7,2"/>
                      </svg>
                  </div>
                </div>
                <nuxt-link to="/blog/2024-01-22-plataforma-web">
                  <h3 class="tw-mt-6 tw-text-xl tw-font-semibold tw-leading-6 tw-text-white md:tw-text-2xl">
                    Lanzamiento de la página web
                  </h3>
                </nuxt-link>
                <p class="tw-mt-1 tw-text-base tw-leading-relaxed tw-text-dark-300">
                  Torneos intercomunitarios y personalizados, el lanzamiento de nuestro primer juego y las exclusivas Plumas Fénix.
                </p>
                <div class="mt-8">
                  <nuxt-link to="/blog/2024-01-22-plataforma-web" class="tw-relative tw-inline-flex tw-items-center tw-justify-center tw-w-auto tw-h-12 tw-px-8 tw-text-base tw-font-medium tw-leading-snug tw-text-white md:tw-h-14 tw-group">
                    <span class="tw-absolute tw-top-0 tw-left-0 tw-z-10 tw-block tw-w-full tw-h-full tw-transition-all tw-ease-in-out tw-rounded-full tw-bg-gradient-to-r tw-duration-250 tw-from-dark-800 tw-to-dark-900 md:tw-w-14 md:group-hover:tw-w-full"></span>
                    <span class="tw-relative tw-z-20">Ver noticia</span>
                  </nuxt-link>
                </div>
              </div>
            </div>

            <!-- Post -->
            <div class="tw-max-w-lg tw-mx-auto tw-shadow-xl tw-rounded-3xl tw-bg-dark-700">
              <nuxt-link to="/blog/2024-01-22-buscamos-creadores-de-contenido">
                <div class="tw-w-full tw-h-64 tw-bg-center tw-bg-cover tw-rounded-t-3xl" data-background-image="images/work-image-01.jpg" style="background-image: url('/img/blog/buscamosCreadores.jpg')">
                  <p class="tw-inline-flex tw-items-center tw-justify-center tw-px-6 tw-py-2 tw-mt-4 tw-ml-6 tw-text-xs tw-font-medium tw-tracking-wide tw-text-white tw-rounded-r-full tw-rounded-tl-full tw-bg-gradient-to-r lg:tw-ml-4 xl:tw-ml-6 tw-from-dark-700 tw-to-dark-800">
                    Colaboradores
                  </p>
                </div>
              </nuxt-link>
              <div class="tw-w-full tw-p-6 lg:tw-p-4 xl:tw-p-6">
                <div class="tw-flex tw-flex-wrap tw-w-full">
                  <div class="tw-flex tw-items-center tw-justify-start tw-w-1/2">
                    <!-- TablerIcon name: calendar -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="tw-w-5 tw-h-5 tw-text-dark-400" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <rect x="4" y="5" width="16" height="16" rx="2"></rect>
                      <line x1="16" y1="3" x2="16" y2="7"></line>
                      <line x1="8" y1="3" x2="8" y2="7"></line>
                      <line x1="4" y1="11" x2="20" y2="11"></line>
                      <line x1="11" y1="15" x2="12" y2="15"></line>
                      <line x1="12" y1="15" x2="12" y2="18"></line>
                    </svg>
                    <div class="tw-ml-2 tw-text-base tw-font-medium tw-leading-6 tw-text-dark-400">
                      22 de Enero 2024
                    </div>
                  </div>
                  <div class="tw-flex tw-justify-end tw-w-1/2 tw-space-x-1">
                    <!-- TablerIcon name: brand-tailwind -->
                    <svg class="tw-w-6 tw-h-6 tw-text-dark-400" style="enable-background:new 0 0 32 32;" version="1.1" viewBox="0 0 32 32" stroke="currentColor" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <path class="st1" d="M21.8,10C15,14.5,7.1,23.4,5,29.4"/><path class="st0" d="M5.7,22.4c-0.1-2.6,0.2-6,2-7.8c8.9-8.9,21-11.3,21-11.3s-2.5,9.8-8.5,17.7l0,0H15l2.4,3.3  c-1.8,1.8-5.2,2.1-7.7,2"/>
                      </svg>
                  </div>
                </div>
                <nuxt-link to="/blog/2024-01-22-buscamos-creadores-de-contenido">
                  <h3 class="tw-mt-6 tw-text-xl tw-font-semibold tw-leading-6 tw-text-white md:tw-text-2xl">
                    Buscamos Creadores de Contenido
                  </h3>
                </nuxt-link>
                <p class="tw-mt-1 tw-text-base tw-leading-relaxed tw-text-dark-300">
                  Mad Fénix busca creadores de contenido apasionad@s y creativos para aliarse y crecer juntos.
                </p>
                <div class="mt-8">
                  <nuxt-link to="/blog/2024-01-22-buscamos-creadores-de-contenido" class="tw-relative tw-inline-flex tw-items-center tw-justify-center tw-w-auto tw-h-12 tw-px-8 tw-text-base tw-font-medium tw-leading-snug tw-text-white md:tw-h-14 tw-group">
                    <span class="tw-absolute tw-top-0 tw-left-0 tw-z-10 tw-block tw-w-full tw-h-full tw-transition-all tw-ease-in-out tw-rounded-full tw-bg-gradient-to-r tw-duration-250 tw-from-dark-800 tw-to-dark-900 md:tw-w-14 md:group-hover:tw-w-full"></span>
                    <span class="tw-relative tw-z-20">Ver noticia</span>
                  </nuxt-link>
                </div>
              </div>
            </div>

            <!-- Post 3 -->


          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {mapActions, mapMutations} from 'vuex';

export default {
  middleware: 'basic',

  head: {
    title: 'Creamos juegos que mueven comunidades - Mad Fénix',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Desarrolladora indie Open Source. Desde torneos a premios personalizados en nuestro pase de temporada.'
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://madfenix.com/'
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'Creamos juegos que mueven comunidades - Mad Fénix'
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: 'https://madfenix.com/img/home/chicaJugandoA2Elevado.jpg'
      },
      {
        hid: 'og:image:width',
        name: 'og:image:width',
        content: '1067'
      },
      {
        hid: 'og:image:height',
        name: 'og:image:height',
        content: '684'
      },
      {
        hid: 'og:image:type',
        name: 'og:image:type',
        content: 'image/jpg'
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@MadFenixGames'
      },
    ]
  },

  data() {
    return {
      perfil: null,
      newCompleteHabit: {
        id: 0
      }
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
    this.$axios.setToken(this.token, 'Bearer');
    this.pwaInstall();
    this.getPerfil();
  },

  methods: {
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

    afterLogout(){
      this.$cookies.remove('token')
      this.$cookies.remove('user')
      this.setToken('')
      this.setUserToNull()
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
      if (!this.token) {
        return;
      }

      this.$axios.post('/api/profile/getUserProfile')
        .then((response) => this.afterPerfil(response))
        .catch(() => this.logout())
    },

    completeHabit(habitId) {
      if (!this.token) {
        return;
      }

      this.newCompleteHabit.id = habitId;

      this.$axios.post('/api/habit/postComplete', this.newCompleteHabit)
        .then((response) => this.getPerfil())
        .catch(() => this.logout())
    },

    pwaInstall() {
      if ('serviceWorker' in navigator && 'PushManager' in window) {
        window.addEventListener('beforeinstallprompt', (e) => {
          e.preventDefault();

          const deferredPrompt = e;

          const installButton = document.createElement('button');
          installButton.textContent = 'Instalar App Mad Fénix';
          installButton.style.position = 'fixed';
          installButton.style.background = 'white';
          installButton.style.bottom = '70px';
          installButton.style.left = '20vw';
          installButton.style.width = '60vw';
          //installButton.style.transform = 'translateX(-50%)';
          installButton.style.zIndex = '9999';
          installButton.style.padding = '10px 20px';
          installButton.classList.add('btn-grad');
          installButton.style.fontWeight = 'bold';
          installButton.style.color = 'black';
          installButton.style.border = 'none';
          installButton.style.borderRadius = '5px';
          installButton.style.cursor = 'pointer';

          installButton.addEventListener('click', () => {

            deferredPrompt.prompt();

            deferredPrompt.userChoice.then(choiceResult => {
              if (choiceResult.outcome === 'accepted') {
                console.log('App installed');
              } else {
                console.log('App installation declined');
              }

              installButton.style.display = 'none';
            });
          });

          document.body.appendChild(installButton);
        });
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
