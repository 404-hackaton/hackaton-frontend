<template>
  <!-- Use IonPage, IonHeader, IonFooter & IonToolbar from Ionic -->
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>My App</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-footer>
      <ion-toolbar>
        <k-link slot="start" toolbar>
          Link 1
        </k-link>
        <k-button href="/tabs/tab1" toolbar>Home</k-button>
        <k-link href="/tabs/tab1" slot="end" toolbar>
          Link 2
        </k-link>
      </ion-toolbar>
    </ion-footer>

    <ion-content fullscreen>
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">My App</ion-title>
        </ion-toolbar>
      </ion-header>

      <!-- In page content we can use Konsta UI components -->
      <k-block strong>
        <p>
          Here is your Ionic & Konsta UI app. Let's see what we have
          here.
        </p>
      </k-block>
      <k-block-title>Navigation</k-block-title>
      <k-list>
        <k-list-item href="/about/" title="About" />
        <k-list-item href="/form/" title="Form" />
      </k-list>

      <k-block strong class="flex space-x-4">
        <k-button>Button 1</k-button>
        <k-button>Button 2</k-button>
      </k-block>
    </ion-content>
  </ion-page>
</template>
<script>
import {
  IonContent,
  IonHeader,
  IonFooter,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/vue';
import {
  kBlock,
  kButton,
  kList,
  kListItem,
  kBlockTitle,
  kLink,
} from 'konsta/vue';

export default {
  components: {
    IonContent,
    IonHeader,
    IonFooter,
    IonPage,
    IonTitle,
    IonToolbar,
    kBlock,
    kButton,
    kList,
    kListItem,
    kBlockTitle,
    kLink,
  }
}

</script>
