<template>
  <!-- Wrap IonApp with KonstaProvider with theme="parent" -->
  <k-provider theme="parent">
    <ion-app>
      <ion-router-outlet class="bg-white" />
    </ion-app>
  </k-provider>
</template>

<script lang="ts">
import { kProvider } from 'konsta/vue';
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    kProvider,
  },
});
</script>

<style>


</style>
