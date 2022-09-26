import {useMemo} from 'react'
import {useTable, ColumnInstance, Row} from 'react-table'
import {CustomHeaderColumn} from '../table/columns/CustomHeaderColumn'
import {CustomRow} from '../table/columns/CustomRow'
import {useQueryResponseData, useQueryResponseLoading} from '../core/QueryResponseProvider'
import {salaryUpgradesColumns} from './columns/_columns'
import {SalaryUpgrade} from '../core/_models'
import {SalaryUpgradesListLoading} from '../components/loading/SalaryUpgradesListLoading'
import {SalaryUpgradesListPagination} from '../components/pagination/SalaryUpgradesListPagination'
import {KTCardBody} from '../../../../../../../../_metronic/helpers'

const SalaryUpgradesTable = () => {
  const salaryUpgrades = useQueryResponseData()
  const isLoading = useQueryResponseLoading()
  const data = useMemo(() => salaryUpgrades, [salaryUpgrades])
  const columns = useMemo(() => salaryUpgradesColumns, [])
  const {getTableProps, getTableBodyProps, headers, rows, prepareRow} = useTable({
    columns,
    data,
  })

  return (
    <KTCardBody className='py-4'>
      <div className='table-responsive'>
        <table
          id='kt_table_salaryUpgrades'
          className='table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer'
          {...getTableProps()}
        >
          <thead>
            <tr className='text-start text-muted fw-bolder fs-7 text-uppercase gs-0'>
              {headers.map((column: ColumnInstance<SalaryUpgrade>) => (
                <CustomHeaderColumn key={column.id} column={column} />
              ))}
            </tr>
          </thead>
          <tbody className='text-gray-600 fw-bold' {...getTableBodyProps()}>
            {/* {rows.length > 0 ? (
              rows.map((row: Row<SalaryUpgrade>, i) => {
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
            )} */}
            <tr>
                <td colSpan={7}>
                  <div className='d-flex text-center w-100 align-content-center justify-content-center'>
                    No matching records found
                  </div>
                </td>
              </tr>
          </tbody>
        </table>
      </div>
      <SalaryUpgradesListPagination />
      {isLoading && <SalaryUpgradesListLoading />}
    </KTCardBody>
  )
}

export {SalaryUpgradesTable}
