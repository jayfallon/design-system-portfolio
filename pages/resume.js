import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { AIRTABLE_API_KEY } from '../.config';

import Section from '../components/UI/Section';

const Resume = props => (
  <Section>
    <h1>Resume</h1>
    {props.records.map(record => (
      <ul key={record.id}>
        <li>{record.fields.company}</li>
        <li>{record.fields.location}</li>
        <li>{record.fields.title}</li>
        <li>{record.fields.startDate}</li>
        <li>{record.fields.endDate}</li>
        <li>{record.fields.description}</li>
      </ul>
    ))}
  </Section>
);

Resume.getInitialProps = async function() {
  const res = await fetch(
    `https://api.airtable.com/v0/appXd0P4lXEpbntLn/Job%20History?api_key=${AIRTABLE_API_KEY}`
  );

  const data = await res.json();

  return {
    records: data.records.map(entry => entry),
  };
};

export default Resume;
