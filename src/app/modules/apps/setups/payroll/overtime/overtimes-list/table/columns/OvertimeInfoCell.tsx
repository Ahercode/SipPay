/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {FC} from 'react'
import {toAbsoluteUrl} from '../../../../../../../../../_metronic/helpers'
import {Overtime} from '../../core/_models'

type Props = {
  overtime: Overtime
}

const OvertimeInfoCell: FC<Props> = ({overtime}) => (
  <div className='d-flex align-items-center'>
    {/* begin:: Avatar */}
    {/* <div className='symbol symbol-circle symbol-50px overflow-hidden me-3'>
      <a href='#'>
        {Overtime.avatar ? (
          <div className='symbol-label'>
            <img src={toAbsoluteUrl(`/media/${Overtime.avatar}`)} alt={Overtime.name} className='w-100' />
          </div>
        ) : (
          <div
            className={clsx(
              'symbol-label fs-3',
              `bg-light-${Overtime.initials?.state}`,
              `text-${Overtime.initials?.state}`
            )}
          >
            {Overtime.initials?.label}
          </div>
        )}
      </a>
    </div> */}
    <div className='d-flex flex-column'>
      <a href='#' className='text-gray-800 text-hover-primary mb-1'>
        {overtime.name}
      </a>
      <span>{overtime.email}</span>
    </div>
  </div>
)

export {OvertimeInfoCell}
