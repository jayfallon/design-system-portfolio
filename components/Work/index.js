import Link from 'next/link';

const Work = () => (
  <div>
    <h1>This is the work page</h1>
    <ul>
      <li>
        <Link href="/work/design-system">
          <a title="hello">design system</a>
        </Link>
      </li>
      <li>
        <Link href="/work/styled-components">
          <a title="hello">styled components</a>
        </Link>
      </li>
      <li>
        <Link href="/work/deethree">
          <a title="hello">D3</a>
        </Link>
      </li>
      <li>
        <Link href="/work/past">
          <a title="hello">Past Work</a>
        </Link>
      </li>
    </ul>
  </div>
);

export default Work;
