import { customElement } from "solid-element";
import { Quote } from "./widgets/quote";

export const registerWebComponents = () => {
  customElement("quote-widget", getInitialProps(), Quote);
};

function getInitialProps() {
  return {
    asset: "",
  };
}
