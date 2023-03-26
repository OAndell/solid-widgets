import { createSignal } from "solid-js";
import { styled } from "solid-styled-components";

const StyleWrapper = styled<any>("div")`
  --oa-widget-quote-background: ${(props) => props.background};
  --oa-widget-quote-color: ${(props) => props.textColor};
  --oa-widget-quote-box-shadow: 0.5em 0.5em ${(props) => props.shadowColor};
`;

const ConfigPanel = styled("section")`
  display: flex;
  flex-direction: column;
  gap: 1em;
  border: 1px solid #999;
  border-radius: 4px;
`;

const Row = styled("div")`
  display: flex;
`;

const Code = styled("pre")`
  border: 1px solid #333;
  padding: 1em;
  background-color: #eee;
  text-align: left;
  white-space: pre-wrap;
`;

const StyledSection = styled("section")`
  display: flex;
`;

export const Playground = (props: any) => {
  const [background, setBackground] = createSignal("#E8DFD7");
  const [textColor, setTextColor] = createSignal("#CE8D31");
  const [shadowColor, setShadowColor] = createSignal("#064c72");

  const [qoute, setQoute] = createSignal(
    "I would sooner be a foreigner in Spain than in most countries. How easy it is to make friends in Spain!"
  );
  const [cite, setCite] = createSignal("George Orwell, Homage to Catalonia");
  //0.5em 0.5em #064c72;
  return (
    <>
      <StyledSection>
        <ConfigPanel>
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
        </ConfigPanel>
        <StyleWrapper
          background={background()}
          textColor={textColor()}
          shadowColor={shadowColor()}
        >
          <quote-widget quote={qoute()} cite={cite()}></quote-widget>
        </StyleWrapper>
      </StyledSection>
      <Code>
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
    </>
  );
};
