import {SectionWrapper, HeaderMain, HeaderInner, Addon} from "./styled";

const Section = ({ title, headerAddons, specialAddons }) => (
  <SectionWrapper>
    
    <HeaderMain>
      <HeaderInner>
        {title}
      </HeaderInner>

      {headerAddons}
    </HeaderMain>

    <Addon>
      {specialAddons}
    </Addon>
  </SectionWrapper>
);

export default Section;