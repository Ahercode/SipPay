/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {FC} from 'react'
// import {toAbsoluteUrl} from '../../../../../../../../../_metronic/helpers'
import {Deduction} from '../../core/_models'

type Props = {
  deduction: Deduction
}

const DeductionInfoCell: FC<Props> = ({deduction}) => (
  <div className='d-flex align-items-center'>
    {/* begin:: Avatar */}
    {/* <div className='symbol symbol-circle symbol-50px overflow-hidden me-3'>
      <a href='#'>
        {Deduction.avatar ? (
          <div className='symbol-label'>
            <img src={toAbsoluteUrl(`/media/${Deduction.avatar}`)} alt={Deduction.name} className='w-100' />
          </div>
        ) : (
          <div
            className={clsx(
              'symbol-label fs-3',
              `bg-light-${Deduction.initials?.state}`,
              `text-${Deduction.initials?.state}`
            )}
          >
            {Deduction.initials?.label}
          </div>
        )}
      </a>
    </div> */}
    <div className='d-flex flex-column'>
      <a href='#' className='text-gray-800 text-hover-primary mb-1'>
        {deduction.name}
      </a>
      <span>{deduction.email}</span>
    </div>
  </div>
)

export {DeductionInfoCell}
