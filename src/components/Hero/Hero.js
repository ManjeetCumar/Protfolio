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
      <SectionText>Full Stack | Machine Learning | Artificial Intelligence | AWS | Quantitative Finance </SectionText>
      <Button onClick={() => window.location = "mailto: mann3774@gmail.com"}>Send me your queries</Button>
    </LeftSection>
  </Section>
);

export default Hero;