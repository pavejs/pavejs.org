import archive from 'src/archive/index.js';
import PageHeader from 'src/components/page-header.js';
import DocumentationNav from 'src/components/pages/docs/nav.js';
import titleize from 'src/functions/titleize.js';
// import DocumentationSection from 'src/components/pages/docs/section.js';

const flattenContent = (obj, depth = 0) => {
  if (!obj) return [];
  return Object.entries(obj).reduce(
    (arr, [objKey, val]) =>
      arr.concat([
        <div
          key={objKey}
          className='font-semibold'
          style={{ fontSize: `${-(depth * 5) + 25}px` }}
        >
          {titleize(objKey)}
        </div>,
        ...[val.content, flattenContent(val.children, depth + 1) ?? []]
      ]),
    []
  );
};

export default ({ version }) => {
  const schema = archive[version];
  return (
    <div className='flex flex-grow space-x-6'>
      <div className='flex flex-col'>
        <PageHeader>Documentation</PageHeader>
        <div className='leading-loose'>
          PaveJS is a data-layer language designed with the purpose of being the
          most lightweight, simple, and versatile data-layer language to date.
          (More content to come)
        </div>
        {flattenContent(schema.content).map((content, i) => (
          <div key={i} className='py-6'>
            {content}
          </div>
        ))}
      </div>
      <DocumentationNav schema={schema.content} />
    </div>
  );
};
