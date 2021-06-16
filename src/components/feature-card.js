export default ({ imgSrc, card: { header, description } }) => (
  <div className='flex flex-col justify-center space-y-2'>
    <img src={imgSrc} className='' />
    <div className='font-semibold text-lg'>{header}</div>
    <div className='font-light'>{description}</div>
  </div>
);
