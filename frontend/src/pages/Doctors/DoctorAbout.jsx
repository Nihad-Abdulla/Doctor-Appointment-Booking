import React from 'react';
import { formatDate } from '../../utils/formateDate';

const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>
          About of
          <span className='text-irisBlueColor font-bold text-[24px] leading-9'>
            Muhibur Rahman
          </span>
        </h3>
        <p className='text-para'>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt
        </p>
      </div>

      <div className='mt-12'>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
          Education
        </h3>

        <ul className='pt-4 md:p-5'>
          <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
            <div>
              <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                {formatDate('09-06-2014')} - {formatDate('09-06-2016')}
              </span>
              <p className='text-[16px] leading-6 font-medium text-textColor'>
                PHD in Surgeon
              </p>
            </div>
            <p className='text-[14px] leading-5 font-medium text-textColor'>
              New Apollo Hospital,New york.
            </p>
          </li>
          <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
          <div>
              <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
              {formatDate('12-04-2010')} - {formatDate('12-04-2010')}
              </span>
              <p className='text-[15px] leading-6 font-medium text-textColor'>
                PHD in Surgeon
              </p>
            </div>
            <p className='text-[14px] leading-5 font-medium text-textColor'>
              New Apollo Hospital,New york.
            </p>
          </li>
        </ul>
      </div>


      <div className='mt-12'>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
          Experience
        </h3>
        <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
          <li className='p-4 rounded bg-[#ff9ea]'>
            <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
            {formatDate('09-06-2014')} - {formatDate('09-06-2016')}
            </span>
            <p className='text-[15px] leading-6 font-medium text-textColor'>
                Sr. Surgeon
              </p>
              <p className='text-[14px] leading-5 font-medium text-textColor'>
              New Apollo Hospital,New york.
            </p>
          </li>
          <li className='p-4 rounded bg-[#ff9ea]'>
            <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
            {formatDate('09-06-2014')} - {formatDate('09-06-2016')}
            </span>
            <p className='text-[15px] leading-6 font-medium text-textColor'>
                Sr. Surgeon
              </p>
              <p className='text-[14px] leading-5 font-medium text-textColor'>
              New Apollo Hospital,New york.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;