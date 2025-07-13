import {Home} from './Homescreen';
import {SignIn} from './SignIn';
import {SignUp} from './SignUp';
import {AppIntro} from './AppIntro';
import {Map} from './Map';
import {Profile} from './Profile';
import {Settings} from './Settings';
import {MedicationDetail} from './MedicationDetail';
import {AddMedicine} from './AddMedicine';
import * as Res from '../resources';
import { PedidosUser } from './PedidosUser';
import {PedidosPharmacy} from './PedidosPharmacy';
import {Stock} from './Stock';

export const DRAWER_ICON = {
  NONE: 0, // No icon should be shown.
  MENU: 1, // Hamburger Menu icon.
  BACK_ARROW: 2, // Back Arrow icon.
};

/*
This object assigns a unique ID to each Screen. Used for screen rendering.
 */
export const ScreenRefByID = {
  /* SCREENS THAT ARE SHOWN IN DRAWER HERE */
  0: 'Home',
  1: 'Map',
  2: 'Profile',
  3: 'Settings',
  4: 'PedidosUser',
  5: 'PedidosPharmacy',
  6: 'Stock',

  /* SCREENS THAT ARE NOT SHOWN IN DRAWER HERE */
  100: 'SignIn',
  101: 'SignUp',
  102: 'AppIntro',
  103: 'MedicationDetail',
  104: 'AddMedicine',
};

/*
These objects hold the information about each Screen.
* 'component' references the component to be rendered.
* 'name' indicates the name of the Screen.

The following properties indicate how the drawer should behave for each Screen.
* 'showInDrawer' indicates whether that screen should be listed in the drawer.
* 'showDrawerIcon' indicates whether the Header should render the drawer button
  when that screen is displayed.
* 'drawerIconStyle' indicates which icon should be rendered from the ones defined
  above.
 */
export const ScreenInfo = {
  /* SCREENS THAT ARE SHOWN IN DRAWER HERE */
  Home: {
    name: 'Home',
    component: Home,
    nameToShow: Res.GetHomeScreenText().screenName,
    showInDrawer: true,
    showDrawerIcon: true,
    drawerIconStyle: DRAWER_ICON.MENU,
  },
  Map: {
    name: 'Map',
    component: Map,
    nameToShow: Res.GetMapText().screenName,
    showInDrawer: true,
    showDrawerIcon: true,
    drawerIconStyle: DRAWER_ICON.MENU,
  },
  Profile: {
    name: 'Profile',
    component: Profile,
    nameToShow: Res.GetProfileText().screenName,
    showInDrawer: true,
    showDrawerIcon: true,
    drawerIconStyle: DRAWER_ICON.MENU,
  },
  Settings: {
    name: 'Settings',
    component: Settings,
    nameToShow: Res.GetSettingsText().screenName,
    showInDrawer: true,
    showDrawerIcon: true,
    drawerIconStyle: DRAWER_ICON.MENU,
  },

  /* SCREENS THAT ARE NOT SHOWN IN DRAWER HERE */
  SignIn: {
    name: 'SignIn',
    component: SignIn,
    nameToShow: Res.GetSignInText().screenName,
    showInDrawer: false,
    showDrawerIcon: false,
    drawerIconStyle: DRAWER_ICON.NONE,
  },
  SignUp: {
    name: 'SignUp',
    component: SignUp,
    nameToShow: Res.GetSignUpText().screenName,
    showInDrawer: false,
    showDrawerIcon: false,
    drawerIconStyle: DRAWER_ICON.NONE,
  },
  AppIntro: {
    name: 'AppIntro',
    component: AppIntro,
    nameToShow: Res.GetAppIntroText().screenName,
    showInDrawer: false,
    showDrawerIcon: false,
    drawerIconStyle: DRAWER_ICON.NONE,
  },
  MedicationDetail: {
    name: 'MedicationDetail',
    component: MedicationDetail,
    nameToShow: Res.GetMedicationDetailText().screenName,
    showInDrawer: false,
    showDrawerIcon: true,
    drawerIconStyle: DRAWER_ICON.BACK_ARROW,
  },
  AddMedicine: {
    name: 'AddMedicine',
    component: AddMedicine,
    nameToShow: Res.GetAddMedicineText().screenName,
    showInDrawer: false,
    showDrawerIcon: true,
    drawerIconStyle: DRAWER_ICON.BACK_ARROW,
  },
  PedidosUser: {
    name: 'PedidosUser',
    component: PedidosUser,
    nameToShow: "Pedidos",
    showInDrawer: true,
    showDrawerIcon: true,
    drawerIconStyle: DRAWER_ICON.MENU,
  },
  PedidosPharmacy: {
    name: 'PedidosPharmacy',
    component: PedidosPharmacy,
    nameToShow: "Pedidos (Farmacia)",
    showInDrawer: true,
    showDrawerIcon: true,
    drawerIconStyle: DRAWER_ICON.MENU,
  },
  Stock: {
    name: 'Stock',
    component: Stock,
    nameToShow: "Stock (Farmacia)",
    showInDrawer: true,
    showDrawerIcon: true,
    drawerIconStyle: DRAWER_ICON.MENU,
  }
};
