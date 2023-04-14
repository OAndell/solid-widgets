import { createSignal } from "solid-js";
import { styled } from "solid-styled-components";
import { Code } from "~/components/code";
import { SidePanel } from "~/components/side-panel";

const StyleWrapper = styled<any>("div")`
  --oa-widget-quote-background: ${(props) => props.background};
  --oa-widget-quote-color: ${(props) => props.textColor};
  --oa-widget-quote-box-shadow: 0.5em 0.5em ${(props) => props.shadowColor};
  grid-column: 2 / 3;
`;

const Row = styled("div")`
  display: flex;
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
  const [textColor, setTextColor] = createSignal("#CE8D31");
  const [shadowColor, setShadowColor] = createSignal("#064c72");

  const [qoute, setQoute] = createSignal(
    "I would sooner be a foreigner in Spain than in most countries. How easy it is to make friends in Spain!"
  );
  const [cite, setCite] = createSignal("George Orwell, Homage to Catalonia");
  return (
    <>
      <StyledSection>
        <SidePanel class="sidebar">
          <Row>
            <label>Background color</label>
            <input
              type="color"
              onInput={(e) => setBackground(e.currentTarget.value)}
            ></input>
          </Row>
          <Row>
            <label>Text color</label>
            <input
              type="color"
              onInput={(e) => setTextColor(e.currentTarget.value)}
            ></input>
          </Row>
          <Row>
            <label>Shadow color</label>
            <input
              type="color"
              onInput={(e) => setShadowColor(e.currentTarget.value)}
            ></input>
          </Row>
          <Row>
            <textarea
              value={qoute()}
              onInput={(e) => setQoute(e.currentTarget.value)}
            ></textarea>
          </Row>
          <Row>
            <input
              type="text"
              value={cite()}
              onInput={(e) => setCite(e.currentTarget.value)}
            ></input>
          </Row>
        </SidePanel>
        <StyleWrapper
          background={background()}
          textColor={textColor()}
          shadowColor={shadowColor()}
        >
          <quote-widget quote={qoute()} cite={cite()}></quote-widget>
        </StyleWrapper>
        <Code class="code">
          <code>
            {`
<script src="https://cdn.jsdelivr.net/gh/OAndell/solid-widgets/dist/widget.mjs" type="module"></script>
<style>
  .oa-widget-quote-wrapper {
    --oa-widget-quote-background: ${background()};
    --oa-widget-quote-color: ${textColor()};
    --oa-widget-quote-box-shadow: 0.5em 0.5em ${shadowColor()};
  }
</style>
<div class="oa-widget-quote-wrapper">
    <quote-widget quote="${qoute()}" cite="${cite()}"></quote-widget>
</div>`}
          </code>
        </Code>
      </StyledSection>
    </>
  );
};
