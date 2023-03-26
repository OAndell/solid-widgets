import style from "./quote.css?inline";

export const Widget = (props: any) => {
  return (
    <figure class="quote__wrapper">
      <style>{style}</style>
      <blockquote class="quote__blockquote">{props.quote} </blockquote>
      <figcaption class="quote__citation">
        --<cite>{props.cite}</cite>
      </figcaption>
    </figure>
  );
};
