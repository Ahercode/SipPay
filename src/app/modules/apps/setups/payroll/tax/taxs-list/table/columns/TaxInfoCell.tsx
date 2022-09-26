/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {FC} from 'react'
import {toAbsoluteUrl} from '../../../../../../../../../_metronic/helpers'
import {Tax} from '../../core/_models'

type Props = {
  tax: Tax
}

const TaxInfoCell: FC<Props> = ({tax}) => (
  <div className='d-flex align-items-center'>
    {/* begin:: Avatar */}
    {/* <div className='symbol symbol-circle symbol-50px overflow-hidden me-3'>
      <a href='#'>
        {tax.avatar ? (
          <div className='symbol-label'>
            <img src={toAbsoluteUrl(`/media/${tax.avatar}`)} alt={tax.name} className='w-100' />
          </div>
        ) : (
          <div
            className={clsx(
              'symbol-label fs-3',
              `bg-light-${tax.initials?.state}`,
              `text-${tax.initials?.state}`
            )}
          >
            {tax.initials?.label}
          </div>
        )}
      </a>
    </div> */}
    <div className='d-flex flex-column'>
      <a href='#' className='text-gray-800 text-hover-primary mb-1'>
        {tax.name}
      </a>
      <span>{tax.email}</span>
    </div>
  </div>
)

export {TaxInfoCell}
