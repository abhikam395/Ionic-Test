import { IonContent, IonFooter, IonHeader, IonPage, IonRouterOutlet, IonTitle, IonToolbar } from '@ionic/react';
import { StatusBar } from '@ionic-native/status-bar';
import HomeBottomTab from '../components/HomeBottomTab';
import './Home.css';
import { IonReactRouter } from '@ionic/react-router';
import { useLocation } from 'react-router-dom'

// StatusBar.backgroundColorByName("red");

export default function(){
  StatusBar.backgroundColorByName('red');
  return (
    <IonPage>
        <IonContent>
          <IonReactRouter>
            <HomeBottomTab />
          </IonReactRouter>
        </IonContent>
    </IonPage>
  );
};
