import { IonCheckbox, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonPage, IonRadio, IonTitle, IonToggle, IonToolbar } from "@ionic/react";

const list = [0, 1, 2, 4, 5, 6, 7, 8, 9 ];

export default function About(props){

    const renderItem = (item) => {
        return (
            <IonItem key={item}>
                <IonLabel>asdfadsfasdf</IonLabel>
            </IonItem>
        )
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>About</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    {list.map(data => renderItem(data))}
                </IonList>
            </IonContent>  
        </IonPage>
    )
}