import archive from 'src/archive/index.js';
import PageHeader from 'src/components/page-header.js';
import DocumentationNav from 'src/components/pages/docs/nav.js';
// import DocumentationSection from 'src/components/pages/docs/section.js';

const flattenChildren = obj => obj;

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
        {/* {flattenChildren(schema).map(([key, obj], i) => (
          <CollapsibleNav key={i} location={location} objKey={key} obj={obj} />
        ))} */}
      </div>
      <DocumentationNav schema={schema.content} />
    </div>
  );
};
