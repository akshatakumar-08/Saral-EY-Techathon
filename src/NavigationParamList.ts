/**
 * Navigation params for each route in the app
 */
export type MainStackParamList = {
    Login: {};
    Signup: {};
    Questionnaire: {};
    Home: {};
    Dashboard: {};
    Profile: {};
    SchemeDetails: {
      schemeId: string;
    };
    ChatBot: {};
    LanguageSelect: {};
  };