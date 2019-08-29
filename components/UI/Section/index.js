import Section_SC from './styles';

const Section = props => (
  <Section_SC>
    <div className="section__constraint">{props.children}</div>
  </Section_SC>
);

export default Section;
