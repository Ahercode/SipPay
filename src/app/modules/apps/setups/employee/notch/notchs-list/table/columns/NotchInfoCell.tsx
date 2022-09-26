/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {FC} from 'react'
import {toAbsoluteUrl} from '../../../../../../../../../_metronic/helpers'
import {Notch} from '../../core/_models'

type Props = {
  notch: Notch
}

const NotchInfoCell: FC<Props> = ({notch}) => (
  <div className='d-flex align-items-center'>
    {/* begin:: Avatar */}
    {/* <div className='symbol symbol-circle symbol-50px overflow-hidden me-3'>
      <a href='#'>
        {notch.avatar ? (
          <div className='symbol-label'>
            <img src={toAbsoluteUrl(`/media/${notch.avatar}`)} alt={notch.name} className='w-100' />
          </div>
        ) : (
          <div
            className={clsx(
              'symbol-label fs-3',
              `bg-light-${notch.initials?.state}`,
              `text-${notch.initials?.state}`
            )}
          >
            {notch.initials?.label}
          </div>
        )}
      </a>
    </div> */}
    <div className='d-flex flex-column'>
      <a href='#' className='text-gray-800 text-hover-primary mb-1'>
        {notch.name}
      </a>
      <span>{notch.salarygrade}</span>
    </div>
  </div>
)

export {NotchInfoCell}
