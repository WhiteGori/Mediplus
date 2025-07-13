/****************************************************/
/*                       COMMON                     */
/****************************************************/

export const FULL_APP_NAME = 'MediPlus';
export const SHORT_APP_NAME = 'Medi+';

export const languageOptions = [
  {key: 1, label: 'Español', value: 'ES'},
  {key: 2, label: 'English', value: 'EN'},
  {key: 3, label: 'Português', value: 'PT'},
  {key: 4, label: 'Français', value: 'FR'},
  {key: 5, label: 'Deutsch', value: 'DE'},
  {key: 6, label: 'Italiano', value: 'IT'},
];
const DEFAULT_LANGUAGE = languageOptions[0]; // Spanish

let appLanguage = DEFAULT_LANGUAGE;

export const getAppLanguage = () => {
  console.log('** DEBUG ** getAppLanguage: ' + appLanguage.value);
  return appLanguage;
};

export const setAppLanguage = language => {
  let tmp = appLanguage;
  appLanguage = language;
  console.log(
    '** DEBUG ** appLanguage changed from ',
    tmp.value,
    ' to ',
    appLanguage.value,
  );
};

/****************************************************/
/*                      AppIntro                    */
/****************************************************/

const AppIntroText_ES = {
  screenName: undefined,
  welcome: '¡Bienvenido!',
  appDescription:
    FULL_APP_NAME +
    ' es una nueva aplicación que le ayudará a administrar la toma de su medicación.\n' +
    'En los próximos pasos, podrá agregar los diferentes medicamentos que consume, junto con los días y horarios correspondientes.\n' +
    'También puede especificar la dosis requerida para cada medicamento y la cantidad disponible de cada uno al momento de la compra. De esta forma, se le notificará cuando deba obtener más medicación.\n\n' +
    'Esperamos que disfrute de ' +
    FULL_APP_NAME +
    '.\n',
};

const AppIntroText_EN = {
  screenName: undefined,
  welcome: 'Welcome!',
  appDescription:
    FULL_APP_NAME +
    ' is a new application that will help you manage your medication intake.\n' +
    'In the following steps, you will be able to add the various medications you take, along with the corresponding days and times.\n' +
    "You can also specify the required dosage for each medication and the available quantity of each one at the time of purchase. This way, you'll be notified when it's time to get more medication.\n\n" +
    'We hope you enjoy ' +
    FULL_APP_NAME +
    '.\n',
};

const AppIntroText_PT = {
  screenName: undefined,
  welcome: 'Bem-vindo!',
  appDescription:
    FULL_APP_NAME +
    ' é um novo aplicativo que o ajudará a gerenciar a ingestão de sua medicação.\n' +
    'Nas próximas etapas, você poderá adicionar os diferentes medicamentos que consome, juntamente com os dias e horários correspondentes.\n' +
    'Você também pode especificar a dose necessária para cada medicamento e a quantidade disponível de cada um no momento da compra. Desta forma, você será notificado quando for necessário comprar mais medicamentos.\n\n' +
    'Esperamos que você aproveite o ' +
    FULL_APP_NAME +
    '.\n',
};

const AppIntroText_FR = {
  screenName: undefined,
  welcome: 'Bienvenue!',
  appDescription:
    FULL_APP_NAME +
    ' est une nouvelle application qui vous aidera à gérer la prise de vos médicaments.\n' +
    'Dans les prochaines étapes, vous pourrez ajouter les différents médicaments que vous prenez, ainsi que les jours et les heures correspondants.\n' +
    "Vous pouvez également spécifier la dose requise pour chaque médicament et la quantité disponible de chaque un au moment de l'achat. Ainsi, vous serez averti lorsque vous devrez acheter plus de médicaments.\n\n" +
    'Nous espérons que vous apprécierez ' +
    FULL_APP_NAME +
    '.\n',
};

const AppIntroText_DE = {
  screenName: undefined,
  welcome: 'Willkommen!',
  appDescription:
    FULL_APP_NAME +
    ' ist eine neue Anwendung, die Ihnen bei der Verwaltung Ihrer Medikamenteneinnahme hilft.\n' +
    'In den nächsten Schritten können Sie die verschiedenen Medikamente hinzufügen, die Sie einnehmen, zusammen mit den entsprechenden Tagen und Zeiten.\n' +
    'Sie können auch die benötigte Dosis für jedes Medikament und die verfügbare Menge zum Zeitpunkt des Kaufs angeben. Auf diese Weise werden Sie benachrichtigt, wenn es Zeit ist, mehr Medikamente zu besorgen.\n\n' +
    'Wir hoffen, dass Sie ' +
    FULL_APP_NAME +
    ' genießen werden.\n',
};

const AppIntroText_IT = {
  screenName: undefined,
  welcome: 'Benvenuti!',
  appDescription:
    FULL_APP_NAME +
    " è una nuova applicazione che ti aiuterà a gestire l'assunzione dei tuoi farmaci.\n" +
    'Nei prossimi passi, potrai aggiungere i vari farmaci che assumi, insieme ai giorni e agli orari corrispondenti.\n' +
    "Puoi anche specificare la dose necessaria per ciascun farmaco e la quantità disponibile di ciascuno al momento dell'acquisto. In questo modo, sarai informato quando sarà necessario acquistare più farmaci.\n\n" +
    'Speriamo che tu apprezzi ' +
    FULL_APP_NAME +
    '.\n',
};

export const GetAppIntroText = () => {
  switch (appLanguage.value) {
    case 'ES':
      return AppIntroText_ES;
    case 'EN':
      return AppIntroText_EN;
    case 'PT':
      return AppIntroText_PT;
    case 'FR':
      return AppIntroText_FR;
    case 'DE':
      return AppIntroText_DE;
    case 'IT':
      return AppIntroText_IT;
    default:
      return AppIntroText_EN;
  }
};

/****************************************************/
/*                     HomeScreen                   */
/****************************************************/

const HomeScreenText_ES = {
  screenName: 'Inicio',
  start: 'Medicamentos',
};

const HomeScreenText_EN = {
  screenName: 'Home',
  start: 'Medicine',
};

const HomeScreenText_PT = {
  screenName: 'Início',
  start: 'Medicação',
};

const HomeScreenText_FR = {
  screenName: 'Accueil',
  start: 'Médicaments',
};

const HomeScreenText_DE = {
  screenName: 'Startseite',
  start: 'Medikamente',
};

const HomeScreenText_IT = {
  screenName: 'Home',
  start: 'Medikamente',
};

export const GetHomeScreenText = () => {
  switch (appLanguage.value) {
    case 'ES':
      return HomeScreenText_ES;
    case 'EN':
      return HomeScreenText_EN;
    case 'PT':
      return HomeScreenText_PT;
    case 'FR':
      return HomeScreenText_FR;
    case 'DE':
      return HomeScreenText_DE;
    case 'IT':
      return HomeScreenText_IT;
    default:
      return HomeScreenText_EN;
  }
};

/****************************************************/
/*                      Buttons                     */
/****************************************************/

const ButtonText_ES = {
  signIn: 'Acceder',
  signUp: 'Registrarse',
  cancel: 'Cancelar',
  accept: 'Aceptar',
};

const ButtonText_EN = {
  signIn: 'Sign In',
  signUp: 'Sign Up',
  cancel: 'Cancel',
  accept: 'Accept',
};

const ButtonText_PT = {
  signIn: 'Entrar',
  signUp: 'Registrar',
  cancel: 'Cancelar',
  accept: 'Aceitar',
};

const ButtonText_FR = {
  signIn: 'Se connecter',
  signUp: "S'inscrire",
  cancel: 'Annuler',
  accept: 'Accepter',
};

const ButtonText_DE = {
  signIn: 'Anmelden',
  signUp: 'Registrieren',
  cancel: 'Abbrechen',
  accept: 'Akzeptieren',
};

const ButtonText_IT = {
  signIn: 'Accedi',
  signUp: 'Iscriviti',
  cancel: 'Annulla',
  accept: 'Accetta',
};


export const GetButtonText = () => {
  switch (appLanguage.value) {
    case 'ES':
      return ButtonText_ES;
    case 'EN':
      return ButtonText_EN;
    case 'PT':
      return ButtonText_PT;
    case 'FR':
      return ButtonText_FR;
    case 'DE':
      return ButtonText_DE;
    case 'IT':
      return ButtonText_IT;
    default:
      return ButtonText_EN;
  }
};

/****************************************************/
/*                       Sign In                    */
/****************************************************/

const SignInText_ES = {
  screenName: undefined,
  title: 'Acceder',
  description: 'Acceda a su cuenta para ver y administrar su medicación.',
  emailPlaceHolder: 'Correo Electrónico',
  passwordPlaceHolder: 'Contraseña',
  signUpShortcut: '¿Todavía no tiene una cuenta? Pulse aquí para registrarse.',
};

const SignInText_EN = {
  screenName: undefined,
  title: 'Sign In',
  description: 'Sign in to your account to view and manage your medication.',
  emailPlaceHolder: 'Email',
  passwordPlaceHolder: 'Password',
  signUpShortcut: "Don't have an account yet? Click here to sign up.",
};

const SignInText_PT = {
  screenName: undefined,
  title: 'Entrar',
  description:
    'Faça login na sua conta para visualizar e gerenciar sua medicação.',
  emailPlaceHolder: 'E-mail',
  passwordPlaceHolder: 'Senha',
  signUpShortcut: 'Ainda não tem uma conta? Clique aqui para se cadastrar.',
};

const SignInText_FR = {
  screenName: undefined,
  title: 'Se connecter',
  description:
    'Connectez-vous à votre compte pour voir et gérer votre médication.',
  emailPlaceHolder: 'E-mail',
  passwordPlaceHolder: 'Mot de passe',
  signUpShortcut: "Vous n'avez pas de compte? Cliquez ici pour vous inscrire.",
};

const SignInText_DE = {
  screenName: undefined,
  title: 'Anmelden',
  description:
    'Melden Sie sich an, um Ihr Konto anzuzeigen und Ihre Medikamente zu verwalten.',
  emailPlaceHolder: 'E-Mail',
  passwordPlaceHolder: 'Passwort',
  signUpShortcut:
    'Sie haben noch keinen Account? Klicken Sie hier, um sich anzumelden.',
};

const SignInText_IT = {
  screenName: undefined,
  title: 'Accedi',
  description:
    'Accedi al tuo account per visualizzare e gestire la tua medicazione.',
  emailPlaceHolder: 'E-mail',
  passwordPlaceHolder: 'Password',
  signUpShortcut: 'Non hai ancora un account? Clicca qui per registrarti.',
};

export const GetSignInText = () => {
  switch (appLanguage.value) {
    case 'ES':
      return SignInText_ES;
    case 'EN':
      return SignInText_EN;
    case 'PT':
      return SignInText_PT;
    case 'FR':
      return SignInText_FR;
    case 'DE':
      return SignInText_DE;
    case 'IT':
      return SignInText_IT;
    default:
      return SignInText_EN;
  }
};

/****************************************************/
/*                       Sign Up                    */
/****************************************************/

const SignUpText_ES = {
  screenName: undefined,
  title: 'Registrarse',
  description: 'Cree una nueva cuenta de ' + SHORT_APP_NAME + '.',
  emailPlaceHolder: 'Correo Electrónico',
  passwordPlaceHolder: 'Contraseña',
  reEnterPasswordPlaceHolder: 'Reingrese la Contraseña',
  birthDatePlaceHolder: 'Fecha de Nacimiento',
  firstNamePlaceHolder: 'Nombre',
  lastNamePlaceHolder: 'Apellido',
  signInShortcut: '¿Ya tiene una cuenta? Pulse aquí para iniciar sesión.',
};

const SignUpText_EN = {
  screenName: undefined,
  title: 'Sign Up',
  description: 'Create a new ' + SHORT_APP_NAME + ' account.',
  emailPlaceHolder: 'Email',
  passwordPlaceHolder: 'Password',
  reEnterPasswordPlaceHolder: 'Re-enter Password',
  birthDatePlaceHolder: 'Birth Date',
  firstNamePlaceHolder: 'First Name',
  lastNamePlaceHolder: 'Last Name',
  signInShortcut: 'Already have an account? Press here to sign in.',
};

const SignUpText_PT = {
  screenName: undefined,
  title: 'Registrar',
  description: 'Crie uma nova conta no ' + SHORT_APP_NAME + '.',
  emailPlaceHolder: 'E-mail',
  passwordPlaceHolder: 'Senha',
  reEnterPasswordPlaceHolder: 'Reintroduza a Senha',
  birthDatePlaceHolder: 'Data de Nascimento',
  firstNamePlaceHolder: 'Nome',
  lastNamePlaceHolder: 'Sobrenome',
  signInShortcut: 'Já tem uma conta? Pressione aqui para entrar.',
};

const SignUpText_FR = {
  screenName: undefined,
  title: "S'inscrire",
  description: 'Créez un nouveau compte ' + SHORT_APP_NAME + '.',
  emailPlaceHolder: 'E-mail',
  passwordPlaceHolder: 'Mot de passe',
  reEnterPasswordPlaceHolder: 'Re-entrez le mot de passe',
  birthDatePlaceHolder: 'Date de naissance',
  firstNamePlaceHolder: 'Prénom',
  lastNamePlaceHolder: 'Nom de famille',
  signInShortcut: 'Vous avez déjà un compte? Appuyez ici pour vous connecter.',
};

const SignUpText_DE = {
  screenName: undefined,
  title: 'Registrieren',
  description: 'Erstellen Sie ein neues Konto für ' + SHORT_APP_NAME + '.',
  emailPlaceHolder: 'E-Mail',
  passwordPlaceHolder: 'Passwort',
  reEnterPasswordPlaceHolder: 'Passwort erneut eingeben',
  birthDatePlaceHolder: 'Geburtsdatum',
  firstNamePlaceHolder: 'Vorname',
  lastNamePlaceHolder: 'Nachname',
  signInShortcut:
    'Haben Sie bereits ein Konto? Hier klicken, um sich anzumelden.',
};

const SignUpText_IT = {
  screenName: undefined,
  title: 'Iscriviti',
  description: 'Crea un nuovo account ' + SHORT_APP_NAME + '.',
  emailPlaceHolder: 'E-mail',
  passwordPlaceHolder: 'Password',
  reEnterPasswordPlaceHolder: 'Reinserisci la password',
  birthDatePlaceHolder: 'Data di nascita',
  firstNamePlaceHolder: 'Nome',
  lastNamePlaceHolder: 'Cognome',
  signInShortcut: 'Hai già un account? Premi qui per accedere.',
};

export const GetSignUpText = () => {
  switch (appLanguage.value) {
    case 'ES':
      return SignUpText_ES;
    case 'EN':
      return SignUpText_EN;
    case 'PT':
      return SignUpText_PT;
    case 'FR':
      return SignUpText_FR;
    case 'DE':
      return SignUpText_DE;
    case 'IT':
      return SignUpText_IT;
    default:
      return SignUpText_EN;
  }
};

/****************************************************/
/*                       Profile                    */
/****************************************************/

const ProfileText_ES = {
  screenName: 'Perfil',
  emailLabel: 'Correo electrónico:',
  birthDateLabel: 'Fecha de nacimiento:',
  ageLabel: 'Edad:',
  addressLabel: 'Dirección:',
};

const ProfileText_EN = {
  screenName: 'Profile',
  emailLabel: 'Email:',
  birthDateLabel: 'Birth Date:',
  ageLabel: 'Age:',
  addressLabel: 'Address:',
};

const ProfileText_PT = {
  screenName: 'Perfil',
  emailLabel: 'Email:',
  birthDateLabel: 'Data de Nascimento:',
  ageLabel: 'Idade:',
  addressLabel: 'Endereço:',
};

const ProfileText_FR = {
  screenName: 'Profil',
  emailLabel: 'E-mail :',
  birthDateLabel: 'Date de naissance :',
  ageLabel: 'Âge :',
  addressLabel: 'Adresse :',
};

const ProfileText_DE = {
  screenName: 'Profil',
  emailLabel: 'E-Mail:',
  birthDateLabel: 'Geburtsdatum:',
  ageLabel: 'Alter:',
  addressLabel: 'Adresse:',
};

const ProfileText_IT = {
  screenName: 'Profilo',
  emailLabel: 'Email:',
  birthDateLabel: 'Data di nascita:',
  ageLabel: 'Età:',
  addressLabel: 'Indirizzo:',
};

export const GetProfileText = () => {
  switch (appLanguage.value) {
    case 'ES':
      return ProfileText_ES;
    case 'EN':
      return ProfileText_EN;
    case 'PT':
      return ProfileText_PT;
    case 'FR':
      return ProfileText_FR;
    case 'DE':
      return ProfileText_DE;
    case 'IT':
      return ProfileText_IT;
    default:
      return ProfileText_EN;
  }
};

/****************************************************/
/*                      Settings                    */
/****************************************************/

const SettingsText_ES = {
  screenName: 'Configuración',
  title: 'Configuración',
  selectLanguage: 'Idioma:',
  logoutButton: 'Cerrar Sesión',
};

const SettingsText_EN = {
  screenName: 'Settings',
  title: 'Settings',
  selectLanguage: 'Language:',
  logoutButton: 'Logout',
};

const SettingsText_PT = {
  screenName: 'Configurações',
  title: 'Configurações',
  selectLanguage: 'Idioma:',
  logoutButton: 'Sair',
};

const SettingsText_FR = {
  screenName: 'Paramètres',
  title: 'Réglages',
  selectLanguage: 'Langue:',
  logoutButton: 'Déconnexion',
};

const SettingsText_DE = {
  screenName: 'Einstellungen',
  title: 'Einstellungen',
  selectLanguage: 'Sprache:',
  logoutButton: 'Abmelden',
};

const SettingsText_IT = {
  screenName: 'Impostazioni',
  title: 'Impostazioni',
  selectLanguage: 'Lingua:',
  logoutButton: 'Esci',
};


export const GetSettingsText = () => {
  switch (appLanguage.value) {
    case 'ES':
      return SettingsText_ES;
    case 'EN':
      return SettingsText_EN;
    case 'PT':
      return SettingsText_PT;
    case 'FR':
      return SettingsText_FR;
    case 'DE':
      return SettingsText_DE;
    case 'IT':
      return SettingsText_IT;
    default:
      return SettingsText_EN;
  }
};

/****************************************************/
/*                         Map                      */
/****************************************************/

const MapText_ES = {
  screenName: 'Farmacias',
  title: 'Farmacias cerca tuyo',
};

const MapText_EN = {
  screenName: 'Pharmacies',
  title: 'Pharmacies near you',
};

const MapText_PT = {
  screenName: 'Farmácias',
  title: 'Farmácias próximas a você',
};

const MapText_FR = {
  screenName: 'Pharmacies',
  title: 'Pharmacies à proximité',
};

const MapText_DE = {
  screenName: 'Apotheken',
  title: 'Apotheken in Ihrer Nähe',
};

const MapText_IT = {
  screenName: 'Farmacie',
  title: 'Farmacie vicino a te',
};

export const GetMapText = () => {
  switch (appLanguage.value) {
    case 'ES':
      return MapText_ES;
    case 'EN':
      return MapText_EN;
    case 'PT':
      return MapText_PT;
    case 'FR':
      return MapText_FR;
    case 'DE':
      return MapText_DE;
    case 'IT':
      return MapText_IT;
    default:
      return MapText_EN;
  }
};

/****************************************************/
/*                  MedicationDetail                */
/****************************************************/

const MedicationDetailText_ES = {
  screenName: undefined,
};

const MedicationDetailText_EN = {
  screenName: undefined,
};

const MedicationDetailText_PT = {
  screenName: undefined,
};

const MedicationDetailText_FR = {
  screenName: undefined,
};

const MedicationDetailText_DE = {
  screenName: undefined,
};

const MedicationDetailText_IT = {
  screenName: undefined,
};

export const GetMedicationDetailText = () => {
  switch (appLanguage.value) {
    case 'ES':
      return MedicationDetailText_ES;
    case 'EN':
      return MedicationDetailText_EN;
    case 'PT':
      return MedicationDetailText_PT;
    case 'FR':
      return MedicationDetailText_FR;
    case 'DE':
      return MedicationDetailText_DE;
    case 'IT':
      return MedicationDetailText_IT;
    default:
      return MedicationDetailText_EN;
  }
};

/****************************************************/
/*                     AddMedicine                  */
/****************************************************/

const AddMedicineText_ES = {
  screenName: undefined,
  title: 'Añadir Medicamento',
  pickerPlaceholder: 'Seleccione un medicamento',
  timeSubtitle: 'Hora del recordatorio',
  timeSeparator: '  :  ',
};

const AddMedicineText_EN = {
  screenName: undefined,
  title: 'Add Medication',
  pickerPlaceholder: 'Select a medication',
  timeSubtitle: 'Reminder time',
  timeSeparator: '  :  ',
};

const AddMedicineText_PT = {
  screenName: undefined,
  title: 'Adicionar Medicamento',
  pickerPlaceholder: 'Selecione um medicamento',
  timeSubtitle: 'Hora do lembrete',
  timeSeparator: '  :  ',
};

const AddMedicineText_FR = {
  screenName: undefined,
  title: 'Ajouter un médicament',
  pickerPlaceholder: 'Sélectionnez un médicament',
  timeSubtitle: 'Heure de rappel',
  timeSeparator: '  :  ',
};

const AddMedicineText_DE = {
  screenName: undefined,
  title: 'Medikament hinzufügen',
  pickerPlaceholder: 'Wählen Sie ein Medikament aus',
  timeSubtitle: 'Erinnerungszeit',
  timeSeparator: '  :  ',
};

const AddMedicineText_IT = {
  screenName: undefined,
  title: 'Aggiungi Medicinale',
  pickerPlaceholder: 'Seleziona un medicinale',
  timeSubtitle: 'Orario del promemoria',
  timeSeparator: '  :  ',
};

export const GetAddMedicineText = () => {
  switch (appLanguage.value) {
    case 'ES':
      return AddMedicineText_ES;
    case 'EN':
      return AddMedicineText_EN;
    case 'PT':
      return AddMedicineText_PT;
    case 'FR':
      return AddMedicineText_FR;
    case 'DE':
      return AddMedicineText_DE;
    case 'IT':
      return AddMedicineText_IT;
    default:
      return AddMedicineText_EN;
  }
};
