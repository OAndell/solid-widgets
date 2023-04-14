import { createEffect, createSignal } from "solid-js";
import style from "./reviews.css";
import { Review } from "./types";

export const Widget = (props: any) => {
  const [reviews, setReviews] = createSignal<Review[]>([]);
  const [reviewIndex, setReviewIndex] = createSignal(0);

  createEffect(() => {
    fetch(
      `https://websiteserver.lodgify.com/v2/websites/reviews/website/${props.website}/property/${props.property}?page=1&count=100`
    )
      .then((e) => e.json())
      .then((e) => {
        setReviews(e.reviews);
      })
      .catch((e) => {
        console.error(e);
      });
  });

  createEffect(() => {
    setInterval(() => {
      const nextIndex = reviewIndex() + 1;
      setReviewIndex(nextIndex > reviews().length - 1 ? 0 : nextIndex);
    }, 4000);
  });

  const getStars = (rating: number = 0) => {
    return Array(rating)
      .fill(0)
      .map(() => {
        return <span class="review__rating__star">★</span>;
      });
  };

  return (
    <figure class="quote__wrapper">
      <style>{style}</style>
      <blockquote class="quote__blockquote">
        {reviews()[reviewIndex()]?.text}{" "}
      </blockquote>
      <figcaption class="quote__citation">
        <cite>{`-${reviews()[reviewIndex()]?.author}`}</cite>
        <div>{getStars(reviews()[reviewIndex()]?.rating)}</div>
      </figcaption>
    </figure>
  );
};
