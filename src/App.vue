<template>
  <!-- Wrap IonApp with KonstaProvider with theme="parent" -->
  <k-provider theme="parent">
    <ion-app>
      <ion-router-outlet animated=true class="bg-white" />
    </ion-app>
  </k-provider>
</template>

<script setup lang="ts">
import { kProvider } from 'konsta/vue';
import { IonApp, IonRouterOutlet } from '@ionic/vue';


import { StatusBar, Style } from '@capacitor/status-bar';

StatusBar.setBackgroundColor("#1B98E0");
StatusBar.setStyle({ style: Style.Light });





</script>

<style>


</style>
