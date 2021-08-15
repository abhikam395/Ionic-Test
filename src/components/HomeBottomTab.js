import { IonBadge, IonContent, IonHeader, IonLabel, IonRouterOutlet, IonTab, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from "@ionic/react";
import { Redirect, Route, Switch } from "react-router-dom";
import About from "../pages/About";
import Map from "../pages/Map";
import Schedule from "../pages/Schedule";
import Speakers from "../pages/Speakers";

function HomeBottomTab(){
    return (
        <IonTabs>
            <IonRouterOutlet>
                <Switch>
                    <Route path="/home/schedule" exact component={Schedule} />
                    <Route path="/home/about" exact component={About} />
                    <Route path="/home/map" exact component={Map} />
                    <Route path="/home/speakers" exact component={Speakers} />
                    <Route path="/" render={() => <Redirect to="/home/schedule"/>}/>
                </Switch>
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
                <IonTabButton tab="schedule" href="/home/schedule">
                    {/* <IonIcon icon={calendar} /> */}
                    <IonLabel>Schedule</IonLabel>
                </IonTabButton>

                <IonTabButton tab="speakers" href="/home/speakers">
                    {/* <IonIcon icon={personCircle} /> */}
                    <IonLabel>Speakers</IonLabel>
                </IonTabButton>

                <IonTabButton tab="map" href="/home/map">
                    {/* <IonIcon icon={map} /> */}
                    <IonLabel>Map</IonLabel>
                </IonTabButton>

                <IonTabButton tab="about" href="/home/about">
                    {/* <IonIcon icon={informationCircle} /> */}
                    <IonLabel>About</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    )
}

export default HomeBottomTab;