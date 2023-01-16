import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Valued proposition. What would you be offering to you employers or what projects can you help them built.
      </SectionText>
      <Button onClick={() => window.location = "mailto: mann3774@gmail.com"}>Send me your queries</Button>
    </LeftSection>
  </Section>
);

export default Hero;