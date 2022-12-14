import {useMemo} from 'react'
import {useTable, ColumnInstance, Row} from 'react-table'
import {CustomHeaderColumn} from '../table/columns/CustomHeaderColumn'
import {CustomRow} from '../table/columns/CustomRow'
import {useQueryResponseData, useQueryResponseLoading} from '../core/QueryResponseProvider'
import {approvalsColumns} from './columns/_columns'
import {Approval} from '../core/_models'
import {ApprovalsListLoading} from '../components/loading/ApprovalsListLoading'
import {ApprovalsListPagination} from '../components/pagination/ApprovalsListPagination'
import {KTCardBody} from '../../../../../../../../_metronic/helpers'

const ApprovalsTable = () => {
  const approvals = useQueryResponseData()
  const isLoading = useQueryResponseLoading()
  const data = useMemo(() => approvals, [approvals])
  const columns = useMemo(() => approvalsColumns, [])
  const {getTableProps, getTableBodyProps, headers, rows, prepareRow} = useTable({
    columns,
    data,
  })

  return (
    <KTCardBody className='py-4'>
      <div className='table-responsive'>
        <table
          id='kt_table_approvals'
          className='table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer'
          {...getTableProps()}
        >
          <thead>
            <tr className='text-start text-muted fw-bolder fs-7 text-uppercase gs-0'>
              {headers.map((column: ColumnInstance<Approval>) => (
                <CustomHeaderColumn key={column.id} column={column} />
              ))}
            </tr>
          </thead>
          <tbody className='text-gray-600 fw-bold' {...getTableBodyProps()}>
            {rows.length > 0 ? (
              rows.map((row: Row<Approval>, i) => {
                prepareRow(row)
                return <CustomRow row={row} key={`row-${i}-${row.id}`} />
              })
            ) : (
              <tr>
                <td colSpan={7}>
                  <div className='d-flex text-center w-100 align-content-center justify-content-center'>
                    No matching records found
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <ApprovalsListPagination />
      {isLoading && <ApprovalsListLoading />}
    </KTCardBody>
  )
}

export {ApprovalsTable}
