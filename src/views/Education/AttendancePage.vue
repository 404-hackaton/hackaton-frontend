<script setup lang="ts">

import {IonPage} from "@ionic/vue";
import Header from "@/components/HeaderComponent.vue";
import Navbar from "@/components/NavbarComponent.vue";
import KostilComponent from "@/components/KostilComponent.vue";
</script>

<template>
  <ion-page>
    <Header header="Образование" />
    <ion-content>
      <KostilComponent />
    </ion-content>
    <Navbar />
  </ion-page>
</template>

<style scoped>

</style>