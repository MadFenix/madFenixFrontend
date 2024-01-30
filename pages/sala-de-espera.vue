<template>
  <v-app>
    <CtCard title="Sala de espera" width="300" class="mx-auto">
      <v-row dense>
        <v-col cols="12" class="mt-5">
          En breves momentos serás redirigido hacia el perfil.
        </v-col>
        <v-col cols="12" class="mt-5">
          <v-row>
            <v-spacer />
            <v-subheader v-html="'¿Ha pasado más de 5 segundos?'" />
            <v-spacer />
          </v-row>
        </v-col>
        <v-col cols="12" class="my-5">
          <CtBtn to="/perfil" type="accent" block>
            Ir al perfil
          </CtBtn>
        </v-col>
      </v-row>
    </CtCard>
  </v-app>
</template>

<script>
export default {
  head: {
    title: 'Sala de espera - Mad Fénix',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Sala de espera en Mad Fénix.'
      }
    ]
  },

  mounted() {
    setTimeout(() => this.$router.push({ path: '/perfil' }), 3000)
  }
}
</script>
