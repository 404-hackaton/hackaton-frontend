<script setup lang="ts">

import {IonPage} from "@ionic/vue";
import Header from "@/components/HeaderComponent.vue";
import Navbar from "@/components/NavbarComponent.vue";
import SubjectMini from "@/components/SubjectMiniComponent.vue";
import {ref} from "vue";
import KostilComponent from "@/components/KostilComponent.vue";
import {useIonRouter} from "@ionic/vue";

const ionRouter = useIonRouter();

const coursesIds = ref(["1", "2", "3", "4"])
</script>

<template>
  <ion-page>
    <Header header="Образование" />
    <ion-content>
      <div class="content">
        <h1 class="prosto text-center">
          Список дисциплин
        </h1>
        <div class="contentt">
          <SubjectMini @click="ionRouter.push(`/edu/courseId/${courseId}`, 'forward', 'push')" v-for="courseId in coursesIds" :key="courseId" :subjectId="courseId"/>
        </div>
        <div>

        </div>
      </div>
      <KostilComponent />
    </ion-content>
    <Navbar />
  </ion-page>
</template>

<style scoped>
h1{
  font-size:40px;
}
.contentt{
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.content{
  padding: 15px 35px;
}

</style>