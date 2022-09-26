/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {FC} from 'react'
import {toAbsoluteUrl} from '../../../../../../../../../_metronic/helpers'
import {Medical} from '../../core/_models'

type Props = {
  medical: Medical
}

const MedicalInfoCell: FC<Props> = ({medical}) => (
  <div className='d-flex align-items-center'>
    {/* begin:: Avatar */}
    <div className='symbol symbol-circle symbol-50px overflow-hidden me-3'>
      <a href='#'>
        {medical.avatar ? (
          <div className='symbol-label'>
            <img src={toAbsoluteUrl(`/media/${medical.avatar}`)} alt={medical.name} className='w-100' />
          </div>
        ) : (
          <div
            className={clsx(
              'symbol-label fs-3',
              `bg-light-${medical.initials?.state}`,
              `text-${medical.initials?.state}`
            )}
          >
            {medical.initials?.label}
          </div>
        )}
      </a>
    </div>
    <div className='d-flex flex-column'>
      <a href='#' className='text-gray-800 text-hover-primary mb-1'>
        {medical.name}
      </a>
      <span>{medical.email}</span>
    </div>
  </div>
)

export {MedicalInfoCell}
