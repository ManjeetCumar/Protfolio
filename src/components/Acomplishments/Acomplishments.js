import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: null, text: 'AWS Certified Cloud Practitioner - 2023'},
  { number: 1561, text: 'All India GATE Exam rank - 2020'},
  { number: null, text: 'Post Graduate Mtech CSE NSIT Delhi - 2022' },
  { number: null, text: 'Certification in AI/ML from IIIT Bangalore - 2021' },
  { number: null, text: 'Certification in Quantitative Finance from IIQF Mumbai - 2022', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Acomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key = {index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
