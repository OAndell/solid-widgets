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

  const formatText = (text: string = "") => {
    return text.length > 200 ? text.substring(0, 200) + "..." : text;
  };

  return (
    <a href={props.href}>
      <figure class="quote__wrapper">
        <style>{style}</style>
        <blockquote class="quote__blockquote">
          {formatText(reviews()[reviewIndex()]?.text)}
        </blockquote>
        <figcaption class="quote__citation">
          <cite class="quote__citation__cite">{`-${
            reviews()[reviewIndex()]?.author
          }`}</cite>
          <div class="quote__citation__stars">
            {getStars(reviews()[reviewIndex()]?.rating)}
          </div>
        </figcaption>
        <div class="quote__footer">
          <div class="quote__footer__rect"></div>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 200"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".35"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </figure>
    </a>
  );
};
