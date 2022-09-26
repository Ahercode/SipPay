/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {FC} from 'react'
import {toAbsoluteUrl} from '../../../../../../../../../_metronic/helpers'
import {Config} from '../../core/_models'

type Props = {
  config: Config
}

const ConfigInfoCell: FC<Props> = ({config}) => (
  <div className='d-flex align-items-center'>
    {/* begin:: Avatar */}
    <div className='symbol symbol-circle symbol-50px overflow-hidden me-3'>
      <a href='#'>
        {config.avatar ? (
          <div className='symbol-label'>
            <img src={toAbsoluteUrl(`/media/${config.avatar}`)} alt={config.name} className='w-100' />
          </div>
        ) : (
          <div
            className={clsx(
              'symbol-label fs-3',
              `bg-light-${config.initials?.state}`,
              `text-${config.initials?.state}`
            )}
          >
            {config.initials?.label}
          </div>
        )}
      </a>
    </div>
    <div className='d-flex flex-column'>
      <a href='#' className='text-gray-800 text-hover-primary mb-1'>
        {config.name}
      </a>
      <span>{config.email}</span>
    </div>
  </div>
)

export {ConfigInfoCell}
