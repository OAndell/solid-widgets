import { customElement } from "solid-element";
//import { Quote } from "./widgets/quote";
import { Widget as Reviews } from "./widgets/reviews/reviews";

export const registerWebComponents = () => {
  customElement("review-widget", getInitialReviewsProps(), Reviews);
  //customElement("quote-widget", getInitialProps(), Quote);
};

function getInitialProps() {
  return {
    quote: "",
    cite: "",
  };
}

function getInitialReviewsProps() {
  return {
    website: "314075",
    property: "315887",
    href: "/",
    cta: "Book Now",
  };
}
