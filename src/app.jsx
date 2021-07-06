// import * as React from "react";
// // The HOC
// import { withTranslation } from "react-i18next";

// const App = ({ t }) => {
//   /*
//     "This field should contain at least 10 characters" for English.
//     "Это поле должно состоять минимум из 10 символов" for Russian.
//   */
//   const translatedText = t("errors:validation.field.length.lessThan", {
//     minLength: 10,
//   });

//   return <h1>{translatedText}</h1>;
// };

// const AppWithTranslation = withTranslation()(App);

// export { AppWithTranslation as App };

import * as React from "react";
// The React Hook
import { useTranslation } from "react-i18next";

const App = () => {
  const { t } = useTranslation();

  /*
    "This field should contain at least 10 characters" for English.
    "Это поле должно состоять минимум из 10 символов" for Russian.
  */
  const translatedText = t("errors:validation.field.length.lessThan", {
    minLength: 10,
  });

  return <h1>{translatedText}</h1>;
};

export { App };
