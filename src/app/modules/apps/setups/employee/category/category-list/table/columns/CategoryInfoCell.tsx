/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {FC} from 'react'
import {toAbsoluteUrl} from '../../../../../../../../../_metronic/helpers'
import {Category} from '../../core/_models'

type Props = {
  category: Category
}

const CategoryInfoCell: FC<Props> = ({category}) => (
  <div className='d-flex align-items-center'>
    {/* begin:: Avatar */}
    {/* <div className='symbol symbol-circle symbol-50px overflow-hidden me-3'>
      <a href='#'>
        {bank.avatar ? (
          <div className='symbol-label'>
            <img src={toAbsoluteUrl(`/media/${bank.avatar}`)} alt={bank.name} className='w-100' />
          </div>
        ) : (
          <div
            className={clsx(
              'symbol-label fs-3',
              `bg-light-${bank.initials?.state}`,
              `text-${bank.initials?.state}`
            )}
          >
            {bank.initials?.label}
          </div>
        )}
      </a>
    </div> */}
    <div className='d-flex flex-column'>
      <a href='#' className='text-gray-800 text-hover-primary mb-1'>
        {category.name}
      </a>
      {/* <span>{category.email}</span> */}
    </div>
  </div>
)

export {CategoryInfoCell}
