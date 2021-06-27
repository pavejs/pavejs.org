import PageHeader from 'src/components/page-header.js';
import classy from 'src/functions/classy.js';

const SubHeader = classy('div', 'py-6 text-2xl font-semibold');

export default () => (
  <>
    <div className='flex flex-col'>
      <PageHeader>PaveJS</PageHeader>
      <div className='leading-loose'>
        PaveJS is a data-layer language designed with the purpose of being
        lightweight, simple, and versatile. It achieves this through several
        features, the key of which being
      </div>
      <SubHeader>Why Pave?</SubHeader>
      <table>
        <tbody>
          <tr>
            <td className='p-4'>
              <img src={'/svgs/globe.svg'} className='h-24 mx-auto' />
            </td>
            <td className='p-4'>
              <img src={'/svgs/globe.svg'} className='h-24 mx-auto' />
            </td>
            <td className='p-4'>
              <img src={'/svgs/globe.svg'} className='h-24 mx-auto' />
            </td>
          </tr>
          <tr>
            <td className='text-center space-y-2 p-2'>
              <div className='font-bold text-lg'>Versatile</div>
              <div className='leading-relaxed'>
                Pave doesn&apos;t force you into a box with classes and
                requirements. It&apos;s a blank slate, where you decide how
                it&apos;s structured
              </div>
            </td>
            <td className='text-center space-y-2 p-2'>
              <div className='font-bold text-lg'>Versatile</div>
              <div className='leading-relaxed'>
                Pave doesn&apos;t force you into a box with classes and
                requirements. It&apos;s a blank slate, where you decide how
                it&apos;s structured
              </div>
            </td>
            <td className='text-center space-y-2 p-2'>
              <div className='font-bold text-lg'>Versatile</div>
              <div className='leading-relaxed'>
                Pave doesn&apos;t force you into a box with classes and
                requirements. It&apos;s a blank slate, where you decide how
                it&apos;s structured
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </>
);
