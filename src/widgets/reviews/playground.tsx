import { createSignal } from "solid-js";
import { styled } from "solid-styled-components";
import { Code } from "~/components/code";
import { SidePanel } from "~/components/side-panel";

const StyleWrapper = styled<any>("div")`
  --oa-widget-reviews-background: ${(props) => props.background};
  --oa-widget-reviews-color: ${(props) => props.textColor};
  --oa-widget-reviews-box-shadow: ${(props) =>
    `${props.shadowX}em ${props.shadowY}em ${props.shadowSpread}em ${props.shadowColor};`}
  --oa-widget-reviews-border-radius: ${(props) => props.borderRadius}em;
    
  grid-column: 2 / 3;
`;

const Row = styled("div")`
  display: flex;
  align-items: center;
`;

const Group = styled("div")`
  display: flex;
  flex-direction: column;
`;

const ColorInput = styled("input")`
  background-color: transparent;
  border: none;
  width: 30px;
  height: 30px;
`;

const StyledSection = styled("section")`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 20px;
  grid-template-rows: auto 1fr;

  .sidebar {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
  }

  .code {
    grid-column: 2 / 3;
  }
`;

export const Playground = (props: any) => {
  const [background, setBackground] = createSignal("#E8DFD7");
  const [textColor, setTextColor] = createSignal("#111111");

  const [shadowColor, setShadowColor] = createSignal("#bababa");
  const [shadowSpread, setShadowSpread] = createSignal(1);
  const [shadowX, setShadowX] = createSignal(0.5);
  const [shadowY, setShadowY] = createSignal(0.5);

  const [borderRadius, setBorderRadius] = createSignal(1);

  const [websiteId, setWebsiteId] = createSignal("149038");
  const [propertyId, setPropertyId] = createSignal("199259");

  const [link, setLink] = createSignal("https://oscar-andell.lodgify.com/");

  const [ctaText, setCtaText] = createSignal("Book now");

  return (
    <>
      <StyledSection>
        <SidePanel class="sidebar">
          <Group>
            <Row>
              <label>Background color</label>
              <ColorInput
                type="color"
                value={background()}
                onInput={(e) => setBackground(e.currentTarget.value)}
              ></ColorInput>
            </Row>
            <Row>
              <label>Text color</label>
              <ColorInput
                type="color"
                value={textColor()}
                onInput={(e) => setTextColor(e.currentTarget.value)}
              ></ColorInput>
            </Row>
          </Group>
          <Group>
            <Row>
              <label>Shadow color</label>
              <ColorInput
                type="color"
                value={shadowColor()}
                onInput={(e) => setShadowColor(e.currentTarget.value)}
              ></ColorInput>
            </Row>
            <Row>
              <label>Shadow spread</label>
              <input
                type="range"
                value={shadowSpread()}
                min="0"
                max="5"
                step="0.1"
                onInput={(e) => setShadowSpread(+e.currentTarget.value)}
              ></input>
            </Row>
            <Row>
              <label>Shadow Y</label>
              <input
                type="range"
                value={shadowY()}
                min="-5"
                max="5"
                step="0.1"
                onInput={(e) => setShadowY(+e.currentTarget.value)}
              ></input>
            </Row>
            <Row>
              <label>Shadow X</label>
              <input
                type="range"
                value={shadowX()}
                min="-5"
                max="5"
                step="0.1"
                onInput={(e) => setShadowX(+e.currentTarget.value)}
              ></input>
            </Row>
          </Group>
          <Row>
            <label>Corner Radius</label>
            <input
              type="range"
              value={borderRadius()}
              min="0"
              max="4"
              step="0.05"
              onInput={(e) => setBorderRadius(+e.currentTarget.value)}
            ></input>
          </Row>
          <Group>
            <Row>
              <label>Website Id</label>
              <input
                value={websiteId()}
                onInput={(e) => setWebsiteId(e.currentTarget.value)}
              ></input>
            </Row>
            <Row>
              <label>Property Id</label>
              <input
                type="number"
                value={propertyId()}
                onInput={(e) => setPropertyId(e.currentTarget.value)}
              ></input>
            </Row>
          </Group>
          <Group>
            <Row>
              <label>Link</label>
              <input
                value={link()}
                onInput={(e) => setLink(e.currentTarget.value)}
              ></input>
            </Row>
            <Row>
              <label>CTA Text</label>
              <input
                value={ctaText()}
                onInput={(e) => setCtaText(e.currentTarget.value)}
              ></input>
            </Row>
          </Group>
        </SidePanel>
        <StyleWrapper
          background={background()}
          textColor={textColor()}
          shadowColor={shadowColor()}
          shadowSpread={shadowSpread()}
          shadowX={shadowX()}
          shadowY={shadowY()}
          borderRadius={borderRadius()}
        >
          <review-widget
            website={websiteId()}
            property={propertyId()}
            href={link()}
            cta={ctaText()}
          ></review-widget>
        </StyleWrapper>
        <Code class="code">
          <code>
            {`
<script src="https://cdn.jsdelivr.net/gh/OAndell/solid-widgets@latest/dist/widget.mjs" type="module"></script>
<style>
  .oa-widget-reviews-wrapper {
    --oa-widget-reviews-background: ${background()};
    --oa-widget-reviews-color: ${textColor()};
    --oa-widget-reviews-box-shadow: ${shadowX()}em ${shadowY()}em ${shadowSpread()}em ${shadowColor()};
    --oa-widget-reviews-border-radius: ${borderRadius()}em;
  }
</style>
<div class="oa-widget-reviews-wrapper">
    <review-widget website="${websiteId()}" property="${propertyId()}" href="${link()}" cta="${ctaText()}"></review-widget>
</div>`}
          </code>
        </Code>
      </StyledSection>
    </>
  );
};
