// import { createRouter, createWebHistory } from 'vue-router'
// import { useUserStore } from '../stores/userStore'

const hrRouter = [
  {
    path: '/hr',
    name: 'hr',
    component: () =>
      import(
        /* webpackChunkName: 'obligations' */ '../components/HR/Index.vue'
      ),
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: '',
        component: () =>
          import(
            /* webpackChunkName: 'obligations' */ '../components/HR/StaffInsight/Main.vue'
          ),
      },
      {
        path: 'staff-insight',
        name: 'staff-insight',
        component: () =>
          import(
            /* webpackChunkName: 'dashboard' */ '../components/HR/StaffInsight/EmployeeRecords.vue'
          ),
      },
      {
        path: 'staff-insight/view-personal',
        name: 'staff-insight/view-personal',
        component: () =>
          import(
            /* webpackChunkName: 'dashboard' */ '../components/HR/ViewEmployeeRecords/ViewPersonalInfo.vue'
          ),
      },

      {
        path: 'employee-record-view',
        name: 'employee-record-view',
        component: () =>
          import(
            /* webpackChunkName: 'escalations' */ '../components/HR/StaffInsight/EmployeeRecordViews/EmployeeRecordViewMain.vue'
          ),
      },
      {
        path: 'talent-obligation',
        name: 'talent-obligation',
        component: () =>
          import(
            /* webpackChunkName: 'escalations' */ '../components/HR/Obligation1/Main.vue'
          ),
      },
    ],
  },
  {
    path: '/manager/appraisal',
    name: 'manager-appraisal',
    component: () => import('../pages/HR/AppraisalManager/Appraisal.vue'),
  },
  {
    path: '/manager/appraisal/:id',
    name: 'view-appraisals',
    component: () =>
      import('../pages/HR/AppraisalManager/PerformanceRating.vue'),
  },
  {
    path: '/talent-obligation/vacancy',
    name: 'talent-obligation/vacancy',
    component: () =>
      import(
        /* webpackChunkName: 'talent-obligation' */ '../components/HR/RecruitmentVacancy/Vacancy.vue'
      ),
  },
  {
    path: '/talent-obligation/vacancy/post-vacancy',
    name: 'talent-obligation/vacancy/post-vacancy',
    component: () =>
      import(
        /* webpackChunkName: 'talent-obligation' */ '../components/HR/RecruitmentVacancy/PostVacancy.vue'
      ),
  },
  {
    path: '/talent-obligation/send-invite',
    name: 'talent-obligation/send-invite',
    component: () =>
      import(
        /* webpackChunkName: 'talent-obligation' */ '../components/HR/InterviewRecords/SendInterviewInvite.vue'
      ),
  },
  {
    path: '/obligation-recruitment/interview',
    name: 'obligation-recruitment/interview',
    component: () =>
      import(
        /* webpackChunkName: 'obligation-recruitment' */ '../components/HR/ObligationsRecruitment/Interview.vue'
      ),
  },
  {
    path: '/obligation-recruitment',
    name: 'obligation-recruitment',
    component: () =>
      import(
        /* webpackChunkName: 'obligation-recruitment' */ '../components/HR/StaffInsight/EmployeeRecords.vue'
      ),
  },
  {
    path: '/staff-insight',
    name: 'staff-insight',
    component: () =>
      import(
        /* webpackChunkName: 'staff-insight' */ '../components/HR/StaffInsight/EmployeeRecords.vue'
      ),
  },
  {
    path: '/performance-management',
    name: 'performance-management',
    component: () =>
      import(
        /* webpackChunkName: 'performance-management' */ '../components/HR/PerformanceManagement/Main.vue'
      ),
  },
  {
    path: '/performance-management/staffappraisal/:id',
    name: 'staffappraisal',
    component: () =>
      import(
        /* webpackChunkName: 'performance-management' */ '../components/HR/PerformanceManagement/Appraisal/StaffAppraisal.vue'
      ),
  },
  {
    path: '/performance-management/:id',
    name: 'Department',
    component: () =>
      import(
        /* webpackChunkName: 'performance-management' */ '../components/HR/PerformanceManagement/ObligationPerformance/PerformanceDepartment.vue'
      ),
  },
  {
    path: '/performance-management/employee-performance',
    name: 'performance-management/employee-performance',
    component: () =>
      import(
        /* webpackChunkName: 'performance-management' */ '../components/HR/PerformanceManagement/ObligationPerformance/EmployeePerformance.vue'
      ),
  },
  {
    path: '/performance-management/staffappraisal/performancerating',
    name: 'performance-management/staffappraisal/performancerating',
    component: () =>
      import(
        /* webpackChunkName: 'performance-management' */ '../components/HR/PerformanceManagement/Appraisal/PerformanceRating.vue'
      ),
  },
  {
    path: '/application-record',
    name: 'application-record',
    component: () =>
      import(
        /* webpackChunkName: 'performance-management' */ '../components/HR/ApplicationRecord/ApplicationRecord.vue'
      ),
  },
  {
    path: '/obligation-reward',
    name: 'obligation-reward',
    component: () =>
      import(
        /* webpackChunkName: 'obligation-reward' */ '../components/HR/PerformanceManagement/Rewards_Welfare/Index.vue'
      ),
  },
  {
    path: '/obligation-reward/performance',
    name: 'obligation-reward/performance',
    component: () =>
      import(
        /* webpackChunkName: 'obligation-reward' */ '../components/HR/PerformanceManagement/Rewards_Welfare/Performance.vue'
      ),
  },
  {
    path: '/obligation-reward/payroll-view',
    name: 'obligation-reward/payroll-view',
    component: () =>
      import(
        /* webpackChunkName: 'obligation-reward' */ '../components/HR/PerformanceManagement/Rewards_Welfare/PayrollView.vue'
      ),
  },
  {
    path: '/obligation-reward/view-leave',
    name: 'obligation-reward/view-leave',
    component: () =>
      import(
        /* webpackChunkName: 'obligation-reward' */ '../components/HR/PerformanceManagement/Rewards_Welfare/ViewLeave.vue'
      ),
  },
  {
    path: '/obligation-reward/account-detail',
    name: 'obligation-reward/account-detail',
    component: () =>
      import(
        /* webpackChunkName: 'obligation-reward' */ '../components/HR/PerformanceManagement/Rewards_Welfare/AccountDetail.vue'
      ),
  },
  {
    path: '/obligation-reward/account-detail/viw-slip',
    name: 'obligation-reward/account-detail/view-slip',
    component: () =>
      import(
        /* webpackChunkName: 'obligation-reward' */ '../components/HR/PerformanceManagement/Rewards_Welfare/ViewSlip.vue'
      ),
  },
  {
    path: '/performance-management/query-response/:id',
    name: 'query',
    component: () =>
      import(
        /* webpackChunkName: 'performance-management' */ '../components/HR/PerformanceManagement/ManualRewards/Query.vue'
      ),
  },
  {
    path: '/performance-management/disciplinary-response/:id',
    name: 'disciplinary-response',
    component: () =>
      import(
        /* webpackChunkName: 'performance-management' */ '../components/HR/PerformanceManagement/ManualRewards/DisciplinaryResponse.vue'
      ),
  },
  {
    path: '/performance-management/disciplinary-view/:id',
    name: 'disciplinary-view',
    component: () =>
      import(
        /* webpackChunkName: 'performance-management' */ '../components/HR/PerformanceManagement/ManualRewards/DisciplnaryView.vue'
      ),
  },
  {
    path: '/performance-management/merit/:id',
    name: 'merit',
    component: () =>
      import(
        /* webpackChunkName: 'performance-management' */ '../components/HR/PerformanceManagement/ManualRewards/Merit.vue'
      ),
  },
  {
    path: '/performance-management/demerit/:id',
    name: 'demerit',
    component: () =>
      import(
        /* webpackChunkName: 'performance-management' */ '../components/HR/PerformanceManagement/ManualRewards/Demerit.vue'
      ),
  },
  {
    path: '/employee-record-view',
    name: 'employee-record-view',
    component: () =>
      import(
        /* webpackChunkName: 'obligation-reward' */ '../components/HR/StaffInsight/EmployeeRecordViews/EmployeeRecordViewMain.vue'
      ),
  },
]

export default hrRouter
