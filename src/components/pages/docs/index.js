import PageHeader from 'src/components/page-header.js';
import DocumentationNav from 'src/components/pages/docs/nav.js';

export default () => (
  <div className='flex flex-grow space-x-6'>
    <div className='flex flex-col'>
      <PageHeader>Documentation</PageHeader>
      <div className='leading-loose'>
        PaveJS is a data-layer language designed with the purpose of being the
        most lightweight, simple, and versatile data-layer language to date.
        (More content to come)
      </div>
    </div>
    <DocumentationNav />
  </div>
);
