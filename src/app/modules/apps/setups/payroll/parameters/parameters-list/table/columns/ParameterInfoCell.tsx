/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {FC} from 'react'
import {toAbsoluteUrl} from '../../../../../../../../../_metronic/helpers'
import {Parameter} from '../../core/_models'

type Props = {
  parameter: Parameter
}

const ParameterInfoCell: FC<Props> = ({parameter}) => (
  <div className='d-flex align-items-center'>
    {/* begin:: Avatar */}
    <div className='symbol symbol-circle symbol-50px overflow-hidden me-3'>
      <a href='#'>
        {parameter.avatar ? (
          <div className='symbol-label'>
            <img src={toAbsoluteUrl(`/media/${parameter.avatar}`)} alt={parameter.name} className='w-100' />
          </div>
        ) : (
          <div
            className={clsx(
              'symbol-label fs-3',
              `bg-light-${parameter.initials?.state}`,
              `text-${parameter.initials?.state}`
            )}
          >
            {parameter.initials?.label}
          </div>
        )}
      </a>
    </div>
    <div className='d-flex flex-column'>
      <a href='#' className='text-gray-800 text-hover-primary mb-1'>
        {parameter.name}
      </a>
      <span>{parameter.email}</span>
    </div>
  </div>
)

export {ParameterInfoCell}
