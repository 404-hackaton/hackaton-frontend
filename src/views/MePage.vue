<script setup lang="ts">
import KostilComponent from "@/components/KostilComponent.vue";
import Navbar from "@/components/NavbarComponent.vue";
import Header from "@/components/HeaderComponent.vue";
import { IonPage } from "@ionic/vue";
import QrcodeVue from 'qrcode.vue'
import type { Level, RenderAs } from 'qrcode.vue'
import { ref } from "vue";
import { v4 as uuidv4 } from 'uuid';

const isOpen = ref(false)

const value = ref(`mirea::student::24T07-1::${uuidv4()}`);
setInterval(() => {
  value.value = `mirea::student::24T07-1::${uuidv4()}`
}, 2000);

const level = ref<Level>('M')
const renderAs = ref<RenderAs>('svg')
const background = ref('#d9d9d9')
const foreground = ref('#000000')

const size = ref(100); // Размер для основного QR-кода
const sizeBig = ref(400); // Размер для QR-кода в модальном окне
const closeClass = ref('')

const closeModal = () => {
  closeClass.value = 'close'
  setTimeout(() => {
    isOpen.value = false
    closeClass.value = ''
  }, 270)
}
</script>

<template>
  <ion-page>
    <Header header="Студент" />
    <ion-content>
      <div v-if="isOpen" class="modal-backdrop" :class="closeClass">
        <div class="modal-content">
          <div class="modal-header">
            <h2>QR-код</h2>
            <button @click="closeModal">Закрыть</button>
          </div>
          <div class="modal-body">
            <div class="flex w-full h-full justify-center items-center modal flex-col prosto">
              <qrcode-vue
                  :value="value"
                  :level="level"
                  :render-as="renderAs"
                  :background="background"
                  :foreground='foreground'
                  :size="sizeBig"
                  :gradient="false"
              />
              <h3>Иванов Иван Иванович</h3>
              <h3>Группа ЭФБО-16-24</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="content prosto">
        <div class="studak">
          <div>
            <h2 class="text-center">Электронный студенческий</h2>
            <p class="text-center">24Т07-1</p> <!--личный номер-->
          </div>
          <div class="flex flex-row stud">
            <div class="code" @click="isOpen = true">
              <qrcode-vue
                  :value="value"
                  :level="level"
                  :render-as="renderAs"
                  :background="background"
                  :foreground='foreground'
                  :size="size"
                  :gradient="false"
              />
            </div>
            <div>
              <p class="text-center">Иванов Иван Иванович</p>
              <p class="text-center">Группа ЭФБО-16-24</p>
            </div>
          </div>
        </div>
        <div class="contentc">
          <h1>Информация о пользователе</h1>
          <div>
            E-mail: <p>mail@mail.mail</p>
          </div>
          <div>
            Последний вход в систему : <p>01.01.2021</p>
          </div>
          <div>
            Первый вход в систему : <p>01.01.2021</p>
          </div>
        </div>
      </div>
      <KostilComponent />
    </ion-content>
    <Navbar />
  </ion-page>
</template>

<style scoped>
.content {
  padding: 35px 27px;
}
p {
  font-size: 14px;
}
.studak {
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  width: 100%;
  background: #0D324D;
  color: white;
  border-radius: 10px;
  padding: 20px;
}
.stud {
  gap: 20px;
}
.code {
  padding: 3px;
  background: #d9d9d9;
  border-radius: 5px;
}
h2 {
  font-size: 20px;
}
.close{
  animation: fadeOut 0.3s;
}
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeIn 0.3s;
  z-index: 1001;
}
.close > .modal-content {
  animation: slideOut 0.3s;
}
.modal-content {
  background: #d9d9d9;
  padding: 20px;
  border-radius: 10px;
  animation: slideIn 0.3s;
}
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.modal-header h2 {
  margin: 0;
}
.modal-body {
  margin-top: 20px;
}
.modal-body h3 {
  font-size: 25px;
  text-align: center;
}

.modal > h3 {
  font-size: 25px;
  text-align: center;
}
.contentc > h1 {
  font-size: 32px;
  text-align: center;
  margin-top: 15px;
}
.contentc > div {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.contentc > div > p {
  font-size: 14px;
}
.contentc{
  padding: 10px 35px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes slideIn {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes slideOut {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-100%);
    opacity: 0;
  }
}
</style>
