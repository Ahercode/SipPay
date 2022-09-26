/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {FC} from 'react'
// import {toAbsoluteUrl} from '../../../../../../../../../_metronic/helpers'
import {Department} from '../../core/_models'

type Props = {
  department: Department
}

const DepartmentInfoCell: FC<Props> = ({department}) => (
  <div className='d-flex align-items-center'>
    {/* begin:: Avatar */}
    {/* <div className='symbol symbol-circle symbol-50px overflow-hidden me-3'>
      <a href='#'>
        {Department.avatar ? (
          <div className='symbol-label'>
            <img src={toAbsoluteUrl(`/media/${Department.avatar}`)} alt={Department.name} className='w-100' />
          </div>
        ) : (
          <div
            className={clsx(
              'symbol-label fs-3',
              `bg-light-${Department.initials?.state}`,
              `text-${Department.initials?.state}`
            )}
          >
            {Department.initials?.label}
          </div>
        )}
      </a>
    </div> */}
    <div className='d-flex flex-column'>
      <a href='#' className='text-gray-800 text-hover-primary mb-1'>
        {department.name}
      </a>
      {/* <span>{department.description}</span> */}
    </div>
  </div>
)

export {DepartmentInfoCell}
