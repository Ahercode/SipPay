/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {FC} from 'react'
import {toAbsoluteUrl} from '../../../../../../../../../_metronic/helpers'
import {Audit} from '../../core/_models'

type Props = {
  audit: Audit
}

const AuditInfoCell: FC<Props> = ({audit}) => (
  <div className='d-flex align-items-center'>
    {/* begin:: Avatar */}
    {/* <div className='symbol symbol-circle symbol-50px overflow-hidden me-3'>
      <a href='#'>
        {audit.avatar ? (
          <div className='symbol-label'>
            <img src={toAbsoluteUrl(`/media/${audit.avatar}`)} alt={audit.name} className='w-100' />
          </div>
        ) : (
          <div
            className={clsx(
              'symbol-label fs-3',
              `bg-light-${audit.initials?.state}`,
              `text-${audit.initials?.state}`
            )}
          >
            {audit.initials?.label}
          </div>
        )}
      </a>
    </div> */}
    <div className='d-flex flex-column'>
      <a href='#' className='text-gray-800 text-hover-primary mb-1'>
        {audit.name}
      </a>
      {/* <span>{audit.email}</span> */}
    </div>
  </div>
)

export {AuditInfoCell}
