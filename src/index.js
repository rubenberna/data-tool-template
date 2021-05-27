import React from "react";
import PropTypes from "prop-types";
import { IntlProvider } from "react-intl";
import { App } from "./components/App";
import { ExampleIcon } from "./assets/icons/ExampleIcon";

export const Component = ({ state }) => {
  return (
    <IntlProvider locale="en" defaultLocale="en">
      <App state={state} />
    </IntlProvider>
  );
};

const metadata = {
  title: "Data tool template",
  requiredPermissions: ["Admin", "Super.Admin"],
  description: "A description about what this tool should do",
  icon: ExampleIcon,
};

export { Component as default, metadata };

App.propTypes = {
  state: PropTypes.shape({
    isAuthenticated: PropTypes.bool,
    token: PropTypes.string,
    username: PropTypes.string,
    role: PropTypes.string,
    errorMessage: PropTypes.string,
  }),
};
