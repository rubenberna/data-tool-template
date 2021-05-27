import React from "react";
import { defineMessages, useIntl } from "react-intl";
import "../styles/main.scss";

const MESSAGES = defineMessages({
  title: {
    defaultMessage: "Example Component for: ",
    id: "YOUR-DATA-TOO.home.title",
  },
  subtitle: {
    defaultMessage: "What are you going to build?",
    id: "YOUR-DATA-TOO.home.subtitle",
  },
});

export const App = ({ state }) => {
  const intl = useIntl();
  return (
    <div className="dt-main">
      <div className="dt-main__container">
        <span className="dt-main__container__title">
          {intl.formatMessage(MESSAGES.title)} {state.username}
        </span>
        <div>{intl.formatMessage(MESSAGES.subtitle)}</div>
      </div>
    </div>
  );
};
