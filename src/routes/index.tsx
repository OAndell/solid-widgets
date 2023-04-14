import { Tabs } from "~/components/tabs";
import { createSignal } from "solid-js";

import { QuotePlayground } from "~/widgets/quote";
import { ReviewsWidgetPlayground } from "~/widgets/reviews";

export default function Home() {
  const [activeIndex, setActiveIndex] = createSignal(0);
  const tabs = [{ label: "Review" }, { label: "Quote" }, { label: "Tab 3" }];

  return (
    <>
      <header>
        <Tabs tabs={tabs} activeTab={0} onChange={setActiveIndex} />
      </header>
      <main>
        {activeIndex() === 1 && <QuotePlayground />}
        {activeIndex() === 0 && <ReviewsWidgetPlayground />}
      </main>
    </>
  );
}
