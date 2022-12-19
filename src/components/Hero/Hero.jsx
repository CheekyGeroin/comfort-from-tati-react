import { BgContainer, Section } from './Hero.styled';
import TextContainer from './TextContainer/TextContainer';
import Video from './Video/Video';

const Hero = () => {
  return (
    <Section>
      <BgContainer>
        <TextContainer />
        <Video />
      </BgContainer>
    </Section>
  );
};

export default Hero;
