import React from 'react';
import { DiAws, DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { GiArtificialIntelligence } from 'react-icons/gi';
import { FaAws } from 'react-icons/fa';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id = "tech">
    <SectionDivider />
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in web development and AI ML world.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size = '3rem'/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            HTML, CSS, JS, React
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size = '3rem'/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Flask and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <GiArtificialIntelligence size = '3rem'/>
        <ListContainer>
          <ListTitle>AI/ML</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Machine Learning, Deep Learning
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaAws size = '3rem'/>
        <ListContainer>
          <ListTitle>Cloud</ListTitle>
          <ListParagraph>
            Experience with <br/>
            AWS Cloud Services
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
