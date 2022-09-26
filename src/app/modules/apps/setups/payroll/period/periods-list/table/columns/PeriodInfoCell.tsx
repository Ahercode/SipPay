/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {FC} from 'react'
import {toAbsoluteUrl} from '../../../../../../../../../_metronic/helpers'
import {Period} from '../../core/_models'

type Props = {
  period: Period
}

const PeriodInfoCell: FC<Props> = ({period}) => (
  <div className='d-flex align-items-center'>
    {/* begin:: Avatar */}
    {/* <div className='symbol symbol-circle symbol-50px overflow-hidden me-3'>
      <a href='#'>
        {Period.avatar ? (
          <div className='symbol-label'>
            <img src={toAbsoluteUrl(`/media/${Period.avatar}`)} alt={Period.name} className='w-100' />
          </div>
        ) : (
          <div
            className={clsx(
              'symbol-label fs-3',
              `bg-light-${Period.initials?.state}`,
              `text-${Period.initials?.state}`
            )}
          >
            {Period.initials?.label}
          </div>
        )}
      </a>
    </div> */}
    <div className='d-flex flex-column'>
      <a href='#' className='text-gray-800 text-hover-primary mb-1'>
        {period.name}
      </a>
      <span>{period.email}</span>
    </div>
  </div>
)

export {PeriodInfoCell}
