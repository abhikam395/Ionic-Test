import { IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonPage, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar } from "@ionic/react";
import { menuController } from '@ionic/core';

export default function Map(){
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton autoHide={false}/>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonMenu side="start" contentId='content' type="overlay">
                <IonHeader>
                    <IonToolbar color="primary">
                    <IonTitle>Start Menu</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonList>
                    <IonItem>Menu Item</IonItem>
                    </IonList>
                </IonContent>
            </IonMenu>
            <IonRouterOutlet id="content"/>
        </IonPage>
    )
}