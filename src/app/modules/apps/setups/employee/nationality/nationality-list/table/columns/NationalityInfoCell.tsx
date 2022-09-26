/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {FC} from 'react'
import {toAbsoluteUrl} from '../../../../../../../../../_metronic/helpers'
import {Nationality} from '../../core/_models'

type Props = {
  nationality: Nationality
}

const NationalityInfoCell: FC<Props> = ({nationality}) => (
  <div className='d-flex align-items-center'>
    {/* begin:: Avatar */}
    {/* <div className='symbol symbol-circle symbol-50px overflow-hidden me-3'>
      <a href='#'>
        {Nationality.avatar ? (
          <div className='symbol-label'>
            <img src={toAbsoluteUrl(`/media/${Nationality.avatar}`)} alt={Nationality.name} className='w-100' />
          </div>
        ) : (
          <div
            className={clsx(
              'symbol-label fs-3',
              `bg-light-${Nationality.initials?.state}`,
              `text-${Nationality.initials?.state}`
            )}
          >
            {Nationality.initials?.label}
          </div>
        )}
      </a>
    </div> */}
    <div className='d-flex flex-column'>
      <a href='#' className='text-gray-800 text-hover-primary mb-1'>
        {nationality.name}
      </a>
      <span>{nationality.email}</span>
    </div>
  </div>
)

export {NationalityInfoCell}
