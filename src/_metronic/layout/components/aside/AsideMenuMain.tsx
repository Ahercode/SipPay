/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {useIntl} from 'react-intl'
import {KTSVG} from '../../../helpers'
import {AsideMenuItemWithSub} from './AsideMenuItemWithSub'
import {AsideMenuItem} from './AsideMenuItem'

export function AsideMenuMain() {
  const intl = useIntl()

  return (
    <>
      <AsideMenuItem
        to='/dashboard'
        icon='/media/icons/duotune/art/art002.svg'
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon='bi bi-people fs-2'
      />
      
      <AsideMenuItem
        to='/apps/user-management/users'
        icon='/media/icons/custom/people.svg'
        title='Employees'
        fontIcon='bi bi-people fs-2'
      />
      {/* <AsideMenuItem to='/apps/bank/banks' title='Bank' hasBullet={false} /> */}


      <AsideMenuItemWithSub
        to='/crafted/'
        title='Transactions'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/general/gen022.svg'
      >
        <AsideMenuItemWithSub to='/crafted/tran-human-resource' title='Human Resource' hasBullet={true}>
          <AsideMenuItem to='/crafted/tran-human-resource/recruitment-and-selecttions' title='Recruitment and Selection' hasBullet={true} />
          <AsideMenuItem to='/crafted/tran-human-resource/compensation-and-benefits' title='Compensation and Benefits' hasBullet={true} />
          <AsideMenuItem to='/crafted/tran-human-resource/training-and-developments' title='Training and development' hasBullet={true} />
          <AsideMenuItem to='/crafted/tran-human-resource/appraisal-and-performance' title='Appraisal and performance' hasBullet={true} />
          <AsideMenuItem
            to='/crafted/tran-human-resource/desciplinary-actions'
            title='Disciplinary actions'
            hasBullet={true}
          />
          <AsideMenuItem
            to='/crafted/tran-human-resource/leave-plannings'
            title='Leave Planning'
            hasBullet={true}
          />
          <AsideMenuItem
            to='/crafted/tran-human-resource/medical-entries'
            title='Medical entries'
            hasBullet={true}
          />
        </AsideMenuItemWithSub>
        <AsideMenuItemWithSub to='/crafted/pro-payroll' title='Payroll' hasBullet={true}>
          <AsideMenuItem to='/crafted/pro-payroll/approvals' title='Timesheet' hasBullet={true} />
          <AsideMenuItem to='/crafted/pro-payroll/checktaxs' title='Recurrent ' hasBullet={true} />
          <AsideMenuItem to='/crafted/pro-payroll/journals' title='Non-recurrent ' hasBullet={true} />
          <AsideMenuItem to='/crafted/pro-payroll/projectsheetinputs' title='Saving schemes' hasBullet={true} />
          <AsideMenuItem to='/crafted/pro-payroll/payruns' title='Salary Upload' hasBullet={true} />
          <AsideMenuItem to='/crafted/pro-payroll/payruns' title='Relief and Rebate input' hasBullet={true} />
        </AsideMenuItemWithSub>

        {/* <AsideMenuItemWithSub to='/crafted/pages/wizards' title='Wizards' hasBullet={true}>
          <AsideMenuItem
            to='/crafted/pages/wizards/horizontal'
            title='Horizontal'
            hasBullet={true}
          />
          <AsideMenuItem to='/crafted/pages/wizards/vertical' title='Vertical' hasBullet={true} />
        </AsideMenuItemWithSub> */}
      </AsideMenuItemWithSub>
      {/* <AsideMenuItem
            to='/crafted/pages/wizards/horizontal'
            title='Horizontal'
            hasBullet={true}
          /> */}


      {/** Processes starts here**/}

      <AsideMenuItemWithSub
        to='/crafted/accounts'
        title='Processes'
        icon='/media/icons/duotune/communication/com006.svg'
        fontIcon='bi-person'
      > 

      {/** Processes payroll starts here**/}

        <AsideMenuItemWithSub to='/crafted/pro-payroll' title='Payroll' hasBullet={true}>
          <AsideMenuItem to='/crafted/pro-payroll/approvals' title='Approval' hasBullet={true} />
          <AsideMenuItem to='/crafted/pro-payroll/checktaxs' title='Check Tax ' hasBullet={true} />
          <AsideMenuItem to='/crafted/pro-payroll/journals' title='Journal' hasBullet={true} />
          <AsideMenuItem to='/crafted/pro-payroll/projectsheetinputs' title='Project Sheets and Inputs' hasBullet={true} />
          <AsideMenuItem to='/crafted/pro-payroll/payruns' title='Payrun' hasBullet={true} />
        </AsideMenuItemWithSub>
        <AsideMenuItemWithSub to='/crafted/pro-payroll' title='Human resource' hasBullet={true}>
          
        </AsideMenuItemWithSub>
       
      </AsideMenuItemWithSub>

      {/** Reports starts here**/}

      <AsideMenuItemWithSub
        to='/crafted/accounts'
        title='Reports'
        icon='/media/icons/duotune/communication/com006.svg'
        fontIcon='bi-person'
      >
        <AsideMenuItemWithSub to='/crafted/account/overview' title='Human Resource' hasBullet={false} >

        </AsideMenuItemWithSub>
        <AsideMenuItemWithSub to='/crafted/account/settings' title='Payroll' hasBullet={false} >

        </AsideMenuItemWithSub>
      </AsideMenuItemWithSub>
      
      <div className='menu-item'>
        <div className='menu-content'>
          <div className='separator mx-1 my-4'></div>
        </div>
      </div>
      {/** Setup starts here**/}
      <AsideMenuItemWithSub to='/crafted/setup/' icon='/media/icons/custom/settings.svg' title='SetUp' hasBullet={false} >
      <AsideMenuItemWithSub to='/crafted/setup/'  title='Administration' hasBullet={true} >
          <AsideMenuItem to='/apps/setups/administration/company/companys' title='Company' hasBullet={true} />
          <AsideMenuItem to='/apps/setups/administration/audit/audits' title='Audit ' hasBullet={true} />
          <AsideMenuItem to='/crafted/administration/usermanagement' title='User Management' hasBullet={true} />
          <AsideMenuItem to='/apps/setups/administration/config/configs' title='Configurations' hasBullet={true} />
        </AsideMenuItemWithSub>
        <AsideMenuItemWithSub to='/crafted/setup/'  title='Employee' hasBullet={true} >
          <AsideMenuItem to='/apps/setups/employee/paygroup/paygroups' title='Paygroups' hasBullet={true} />
          <AsideMenuItem to='apps/setups/employee/category/categorys' title='Categories ' hasBullet={true} />
          <AsideMenuItem to='apps/setups/employee/jobtitle/jobtitles' title='Job Title' hasBullet={true} />
          <AsideMenuItem to='apps/setups/employee/department/departments' title='Department' hasBullet={true} />
          <AsideMenuItem to='apps/setups/employee/salary-upgrade/salaryUpgrades' title='Salary Upgrade' hasBullet={true} />
          <AsideMenuItem to='apps/setups/employee/region/regions' title='Regions' hasBullet={true} />
          <AsideMenuItem to='apps/setups/employee/grade/grades' title='Grades' hasBullet={true} />
          <AsideMenuItem to='apps/setups/employee/notch/notchs' title='Notches' hasBullet={true} />
          <AsideMenuItem to='apps/setups/employee/nationality/nationalitys' title='Nationality' hasBullet={true} />
        </AsideMenuItemWithSub>
        <AsideMenuItemWithSub to='/crafted/setup/'  title='Human Resource' hasBullet={true} >
          <AsideMenuItem to='/apps/setups/hr/appraisal/appraisals' title='Appraisals' hasBullet={true} />
          <AsideMenuItem to='/apps/setups/hr/leave/leaves' title='Leaves ' hasBullet={true} />
          <AsideMenuItem to='/apps/setups/hr/disciplinary-actions/disciplinaryActions' title='Disciplinary Actions' hasBullet={true} />
          <AsideMenuItem to='/apps/setups/hr/training/trainings' title='Trainings' hasBullet={true} />
          <AsideMenuItem to='/apps/setups/hr/medical/medicals' title='Medicals' hasBullet={true} />
          <AsideMenuItem to='/apps/setups/hr/recruitment/recruitments' title='Recruitments' hasBullet={true} />
        </AsideMenuItemWithSub>
        <AsideMenuItemWithSub to='/crafted/setup/'  title='Payroll' hasBullet={true} >
          <AsideMenuItem to='/apps/setups/payroll/approval-level/approvalLevels' title='Approval level' hasBullet={true} />
          <AsideMenuItem to='/apps/setups/payroll/benefit/benefits' title='Benefit ' hasBullet={true} />
          <AsideMenuItem to='/apps/setups/payroll/currency/currencys' title='Currency' hasBullet={true} />
          <AsideMenuItem to='/apps/setups/payroll/deduction/deductions' title='Deduction' hasBullet={true} />
          <AsideMenuItem to='/apps/setups/payroll/loan/loans' title='Loan' hasBullet={true} />
          <AsideMenuItem to='/apps/setups/payroll/parameters/parameters' title='Parameter' hasBullet={true} />
          <AsideMenuItem to='/apps/setups/payroll/overtime/overtimes' title='Overtime' hasBullet={true} />
          <AsideMenuItem to='/apps/setups/payroll/period/periods' title='Period' hasBullet={true} />
          <AsideMenuItem to='/apps/setups/payroll/saving-scheme/savingSchemes' title='Saving scheme' hasBullet={true} />
          <AsideMenuItem to='/apps/setups/payroll/tax/taxs' title='Tax' hasBullet={true} />
        </AsideMenuItemWithSub>
        
      </AsideMenuItemWithSub>
      {/* <div className='menu-item'>
        <a
          
          className='menu-link'
          href="/crafted/pages/profile/projects"
        >
          <span className='menu-icon'> */}
            {/* <KTSVG path='/media/icons/duotune/general/gen005.svg' className='svg-icon-2' /> */}
            {/* <KTSVG path="/media/icons/duotune/coding/cod002.svg" className="svg-icon-muted svg-icon-2" /> */}
            {/* <i className="bi bi-gear fs-2 "></i>
          </span>
          <span className='menu-title'>Setup</span>
        </a>
      </div> */}
    </>
  )
}
