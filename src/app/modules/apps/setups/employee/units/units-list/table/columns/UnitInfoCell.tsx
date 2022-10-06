/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {FC} from 'react'
import {toAbsoluteUrl} from '../../../../../../../../../_metronic/helpers'
import {Unit} from '../../core/_models'

type Props = {
  unit: Unit
}

const UnitInfoCell: FC<Props> = ({unit}) => (
  <div className='d-flex align-items-center'>
    {/* begin:: Avatar */}
    {/* <div className='symbol symbol-circle symbol-50px overflow-hidden me-3'>
      <a href='#'>
        {Unit.avatar ? (
          <div className='symbol-label'>
            <img src={toAbsoluteUrl(`/media/${Unit.avatar}`)} alt={Unit.name} className='w-100' />
          </div>
        ) : (
          <div
            className={clsx(
              'symbol-label fs-3',
              `bg-light-${Unit.initials?.state}`,
              `text-${Unit.initials?.state}`
            )}
          >
            {Unit.initials?.label}
          </div>
        )}
      </a>
    </div> */}
    <div className='d-flex flex-column'>
      <a href='#' className='text-gray-800 text-hover-primary mb-1'>
        {unit.name}
      </a>
      {/* <span>{unit.email}</span> */}
    </div>
  </div>
)

export {UnitInfoCell}
