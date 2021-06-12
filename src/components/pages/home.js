import PageHeader from 'src/components/page-header.js';

const FeatureCard = ({ title, imgSrc, text }) => (
    <div className='flex flex-col justify-center space-y-4 p-4'>
        <img src={imgSrc} className='w-2/3 h-auto' />
        <div className='space-y-2 flex flex-col'>
            <span className='font-bold text-lg'>{title}</span>
            <span>{text}</span>
        </div>
    </div>
);

export default () => (
    <>
        <div className='flex flex-col'>
            <PageHeader>PaveJS</PageHeader>
            <div className='leading-loose'>
                PaveJS is a data-layer language designed with the purpose of being lightweight, simple, and versatile. It achieves this through several features, the key of which being
            </div>
            <div className='grid lg:grid-cols-3 lg:gap-x-4 gap-y-4'>
                <FeatureCard title='Feature 1' text='Feature 1 text' imgSrc='/images/placeholder' />
                <FeatureCard title='Feature 2' text='Feature 2 text' imgSrc='/images/placeholder' />
                <FeatureCard title='Feature 3' text='Feature 3 text' imgSrc='/images/placeholder' />
            </div>
        </div>
    </>
);