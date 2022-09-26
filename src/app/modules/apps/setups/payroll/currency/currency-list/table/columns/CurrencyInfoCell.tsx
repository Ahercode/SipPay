/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {FC} from 'react'
// import {toAbsoluteUrl} from '../../../../../../../../../_metronic/helpers'
import {Currency} from '../../core/_models'

type Props = {
  currency: Currency
}

const CurrencyInfoCell: FC<Props> = ({currency}) => (
  <div className='d-flex align-items-center'>
    {/* begin:: Avatar */}
    {/* <div className='symbol symbol-circle symbol-50px overflow-hidden me-3'>
      <a href='#'>
        {Currency.avatar ? (
          <div className='symbol-label'>
            <img src={toAbsoluteUrl(`/media/${Currency.avatar}`)} alt={Currency.name} className='w-100' />
          </div>
        ) : (
          <div
            className={clsx(
              'symbol-label fs-3',
              `bg-light-${Currency.initials?.state}`,
              `text-${Currency.initials?.state}`
            )}
          >
            {Currency.initials?.label}
          </div>
        )}
      </a>
    </div> */}
    <div className='d-flex flex-column'>
      <a href='#' className='text-gray-800 text-hover-primary mb-1'>
        {currency.name}
      </a>
      <span>{currency.email}</span>
    </div>
  </div>
)

export {CurrencyInfoCell}
