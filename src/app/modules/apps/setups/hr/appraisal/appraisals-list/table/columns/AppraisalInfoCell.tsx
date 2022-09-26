/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {FC} from 'react'
import {toAbsoluteUrl} from '../../../../../../../../../_metronic/helpers'
import {Appraisal} from '../../core/_models'

type Props = {
  appraisal: Appraisal
}

const AppraisalInfoCell: FC<Props> = ({appraisal}) => (
  <div className='d-flex align-items-center'>
    {/* begin:: Avatar */}
    <div className='symbol symbol-circle symbol-50px overflow-hidden me-3'>
      <a href='#'>
        {appraisal.avatar ? (
          <div className='symbol-label'>
            <img src={toAbsoluteUrl(`/media/${appraisal.avatar}`)} alt={appraisal.name} className='w-100' />
          </div>
        ) : (
          <div
            className={clsx(
              'symbol-label fs-3',
              `bg-light-${appraisal.initials?.state}`,
              `text-${appraisal.initials?.state}`
            )}
          >
            {appraisal.initials?.label}
          </div>
        )}
      </a>
    </div>
    <div className='d-flex flex-column'>
      <a href='#' className='text-gray-800 text-hover-primary mb-1'>
        {appraisal.name}
      </a>
      <span>{appraisal.email}</span>
    </div>
  </div>
)

export {AppraisalInfoCell}
