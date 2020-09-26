/** @jsx jsx */
import { jsx } from 'theme-ui';
import Content from '../elements/content';
import Divider from '../elements/divider';
import Inner from '../elements/inner';
// @ts-ignore
import Intro from '../sections/intro';
import { UpDown, UpDownWide } from '../styles/animations';
import SVG from './svg';

const Hero = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Divider speed={0.2} offset={offset} factor={factor}>
      <UpDown>
        <SVG
          icon="./cradle.png"
          hiddenMobile
          width={100}
          stroke
          color="icon_orange"
          left="10%"
          top="20%"
          isImage
          style={{
            opacity: 0.5,
          }}
        />
        <SVG
          icon="./balloons.png"
          width={24}
          stroke
          color="icon_red"
          left="60%"
          top="70%"
          isImage
          style={{
            opacity: 0.5,
          }}
        />
        <SVG
          icon="./abc-block.png"
          width={16}
          color="icon_darker"
          left="60%"
          top="15%"
          isImage
          style={{
            opacity: 0.5,
          }}
        />
      </UpDown>
      <UpDownWide>
        <SVG
          icon="./bib.png"
          hiddenMobile
          width={12}
          color="icon_blue"
          left="80%"
          top="10%"
          isImage
          style={{
            opacity: 0.5,
          }}
        />
        <SVG
          icon="./rattle.png"
          width={16}
          stroke
          color="icon_darkest"
          left="30%"
          top="65%"
          isImage
          style={{
            opacity: 0.5,
          }}
        />
        <SVG
          icon="teddy"
          width={16}
          stroke
          color="icon_pink"
          left="28%"
          top="15%"
        />
        <SVG
          icon="circle"
          width={6}
          color="icon_darkest"
          left="75%"
          top="10%"
        />
      </UpDownWide>
      <SVG icon="upDown" width={8} color="icon_darkest" left="95%" top="90%" />
      <SVG
        icon="./duckling.png"
        width={8}
        stroke
        color="icon_darker"
        left="25%"
        top="5%"
        isImage
        style={{ opacity: 0.5 }}
      />
    </Divider>
    <Content
      sx={{ variant: `texts.bigger` }}
      speed={0.4}
      offset={offset}
      factor={factor}
    >
      <Inner>
        <Intro />
      </Inner>
    </Content>
  </div>
);

export default Hero;
