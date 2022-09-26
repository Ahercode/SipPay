/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {FC} from 'react'
import {toAbsoluteUrl} from '../../../../../../../../../_metronic/helpers'
import {DisciplinaryAction} from '../../core/_models'

type Props = {
  disciplinaryAction: DisciplinaryAction
}

const DisciplinaryActionInfoCell: FC<Props> = ({disciplinaryAction}) => (
  <div className='d-flex align-items-center'>
    {/* begin:: Avatar */}
    <div className='symbol symbol-circle symbol-50px overflow-hidden me-3'>
      <a href='#'>
        {disciplinaryAction.avatar ? (
          <div className='symbol-label'>
            <img src={toAbsoluteUrl(`/media/${disciplinaryAction.avatar}`)} alt={disciplinaryAction.name} className='w-100' />
          </div>
        ) : (
          <div
            className={clsx(
              'symbol-label fs-3',
              `bg-light-${disciplinaryAction.initials?.state}`,
              `text-${disciplinaryAction.initials?.state}`
            )}
          >
            {disciplinaryAction.initials?.label}
          </div>
        )}
      </a>
    </div>
    <div className='d-flex flex-column'>
      <a href='#' className='text-gray-800 text-hover-primary mb-1'>
        {disciplinaryAction.name}
      </a>
      <span>{disciplinaryAction.email}</span>
    </div>
  </div>
)

export {DisciplinaryActionInfoCell}
