<template>
  <v-app>
    <CtCard title="Día a día" width="600" class="mx-auto">
      <v-row dense>
        <CtBtn color="primary" to="/registro" class="mt-4 mx-auto">
          Registro gratuito
        </CtBtn>
      </v-row>
    </CtCard>
  </v-app>
</template>

<script>
export default {
  head: {
    title: 'Día a día - Mad Fénix',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Día a día.'
      }
    ]
  },
}
</script>
