import { Tabs } from "~/components/tabs";
import { createSignal } from "solid-js";

import { QuotePlayground } from "~/widgets/quote";
import { ReviewsWidgetPlayground } from "~/widgets/reviews";
import { styled } from "solid-styled-components";

const StyledMain = styled.main`
  max-width: 1000px;
  margin: auto;
`;

export default function Home() {
  const [activeIndex, setActiveIndex] = createSignal(0);
  const tabs = [{ label: "Review" }, { label: "Quote" }, { label: "Tab 3" }];

  return (
    <>
      <header>
        <Tabs tabs={tabs} activeTab={0} onChange={setActiveIndex} />
      </header>
      <StyledMain>
        {activeIndex() === 1 && <QuotePlayground />}
        {activeIndex() === 0 && <ReviewsWidgetPlayground />}
      </StyledMain>
    </>
  );
}
