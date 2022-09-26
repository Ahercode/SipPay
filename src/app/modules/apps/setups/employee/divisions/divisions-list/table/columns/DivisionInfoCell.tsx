/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {FC} from 'react'
// import {toAbsoluteUrl} from '../../../../../../../../../_metronic/helpers'
import {Division} from '../../core/_models'

type Props = {
  division: Division
}

const DivisionInfoCell: FC<Props> = ({division}) => (
  <div className='d-flex align-items-center'>
    {/* begin:: Avatar */}
    {/* <div className='symbol symbol-circle symbol-50px overflow-hidden me-3'>
      <a href='#'>
        {division.avatar ? (
          <div className='symbol-label'>
            <img src={toAbsoluteUrl(`/media/${division.avatar}`)} alt={division.name} className='w-100' />
          </div>
        ) : (
          <div
            className={clsx(
              'symbol-label fs-3',
              `bg-light-${division.initials?.state}`,
              `text-${division.initials?.state}`
            )}
          >
            {division.initials?.label}
          </div>
        )}
      </a>
    </div> */}
    <div className='d-flex flex-column'>
      <a href='#' className='text-gray-800 text-hover-primary mb-1'>
        {division.name}
      </a>
      <span>{division.email}</span>
    </div>
  </div>
)

export {DivisionInfoCell}
