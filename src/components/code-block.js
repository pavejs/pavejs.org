import classy from 'src/functions/classy.js';

const Boxed = classy('div', 'rounded border-2 border-gray-200 bg-gray-100 p-3');

// &#123;
//             <br />
//             &nbsp;query: &#123;
//             <br />
//             &nbsp;&nbsp;_field: &apos;basic_schema&apos;,
//             <br />
//             &nbsp;&nbsp;_args: &#123; id: 0 &#125;,
//             <br />
//             &nbsp;&nbsp;id: &#123;&#125;
//             <br />
//             &nbsp;&nbsp;name: &#123;&#125;
//             <br />
//             &nbsp;&nbsp;randomField: &#123;&#125;
//             <br />
//             &nbsp;&#125;
//             <br />
//             &#125;
//             <br />

// const CodeLine = ({ depth, code }) => (

// );

export default ({ children }) => (
  <Boxed>
    <pre>{children}</pre>
  </Boxed>
);
