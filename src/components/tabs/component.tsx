import { createSignal } from "solid-js";
import { Tab, TabsContainer } from "./styles";

export const Tabs = ({ tabs, activeTab, onChange }: any) => {
  const [activeIndex, setActiveIndex] = createSignal(activeTab);

  const handleClick = (index: number) => {
    setActiveIndex(index);
    onChange && onChange(index);
  };

  return (
    <TabsContainer>
      {tabs.map((tab, index: number) => (
        <Tab
          class={`${index === activeIndex() && "active"}`}
          onClick={() => handleClick(index)}
        >
          {tab.label}
        </Tab>
      ))}
    </TabsContainer>
  );
};

export default Tabs;
