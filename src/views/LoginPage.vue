<script setup lang="ts">
import { IonPage, IonContent, IonInput, IonItem, IonButton } from '@ionic/vue';
import axios from '@/store/axios';
import store from "@/store/storage";
import {useIonRouter} from "@ionic/vue";
import KostilComponent from "@/components/KostilComponent.vue";

const ionRouter = useIonRouter();


const login = async () => {
  await store.set('token', 'testToken')

  console.log(store.get('token'))

  ionRouter.push('/schedule', 'forward', 'replace')
}

</script>

<template>
<ion-page>
  <ion-content>
    <div class="w-screen h-screen flex justify-center items-center">
      <div class="flex flex-col gap-7">
        <h1 class="header text-center prosto">Авторизация</h1>
        <div class="w-full flex flex-col gap-3 pr-4">
            <ion-item>
              <ion-input label-placement="floating">
                <div slot="label">Email</div>
              </ion-input>
            </ion-item>
          <ion-item>
            <ion-input label-placement="floating">
              <div slot="label">Пароль</div>
            </ion-input>
          </ion-item>
        </div>
        <div class="w-full mt-8">
          <ion-button @click="login" class="w-full">Войти</ion-button>
        </div>
      </div>
    </div>
    <KostilComponent />
  </ion-content>
</ion-page>
</template>

<style scoped>
.header{
  font-size: 32px;
}
.pr-4{
  padding-right: 16px;
}


</style>