<script setup lang="ts">

import {useIonRouter} from "@ionic/vue";

const ionRouter = useIonRouter();

</script>

<template>
<div class="prenav">
  <nav>
    <div @click="ionRouter.navigate('/schedule', 'root', 'replace')" >
      <div>
        <img class="icon" src="/icons/calendar_month_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg" alt="">
      </div>
    </div>
    <div @click="ionRouter.navigate('/edu', 'root', 'replace')">
      <img src="/icons/school_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg" alt="" class="icon">
    </div>
    <div>
      <div class="preicon-big">
        <img class="icon-big" src="/icons/qr_code_scanner_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg" alt="">
      </div>
    </div>
    <div>
      <img src="/icons/import_contacts_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg" alt="" class="icon">
    </div>
    <div>
      <img src="/icons/person_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg" alt="" class="icon">
    </div>
  </nav>
</div>

</template>

<style scoped>

.icon {
  height: 40px;
  width: 40px;
}

.preicon-big{
  width: 85px;
  height: 85px;
  background: #1C2541;
  border-radius: 100px;
  transform: translateY(-20px);
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon-big {
  height: 60px;
  width: 60px;
}

.prenav{
  padding: 30px 20px;
  position: fixed;
  bottom:0;
  left:0;
  width:100vw;
  z-index: 1000;
}

nav{
  height: 100%;
  min-height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #1B98E0;
  border-radius: 20px;
}

</style>