import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '../stores/userStore'
import Home from '../pages/Home.vue'
import HomePage from '../pages/Sales/HomePage.vue'
import hrRouter from './hr.router'
import salesRouter from './sales.router'
import operationsRouter from './operations.router'

const routes = [
  ...hrRouter,
  ...salesRouter,
  ...operationsRouter,
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { requiresAuth: false },
    beforeEnter: (to, from, next) => {
      const userStore = useUserStore()
      if (userStore.userHasRole('Installer')) {
        next({ name: 'my-workplace' })
      } else if (
        userStore.userHasRole('Sales Manager') ||
        userStore.userHasRole('Channel Salaes Officer') ||
        userStore.userHasRole('Direct Sales Officer') ||
        userStore.userHasRole('Key Account Executive/DIP- Medium Enterprise') ||
        userStore.userHasRole(
          'Key Account Executive - MDAs, IDAs, & Embassies'
        ) ||
        userStore.userHasRole(
          'Dedicated Key Account Executive/DIP- Large Enterprise(Business solutions)'
        ) ||
        userStore.userHasRole('Sales Officer') ||
        userStore.userHasRole('CRM Manager')
      ) {
        next({ name: 'home-page' })
      } else {
        next()
      }
    },
  },
  {
    path: '/obligation/installer',
    name: 'my-workplace',
    component: () => import('../pages/Field_Operations/MyWorkPlace.vue'),
  },
  {
    path: '/workplace/collaboration',
    name: 'collaboration',
    component: () =>
      import(
        /* webpackChunkName: 'collaboration' */ '../pages/CollaborationNew.vue'
      ),
    meta: { requiresAuth: false },
  },
  {
    path: '/workplace/collaboration/project/:id',
    name: 'collaboration-project',
    component: () =>
      import(
        /* webpackChunkName: 'collaboration' */ '../pages/ViewCollaborationProject.vue'
      ),
    meta: { requiresAuth: false },
  },
  {
    path: '/workplace/requests',
    name: 'requests',
    component: () =>
      import(/* webpackChunkName: 'requests' */ '../pages/Requests.vue'),
    meta: { requiresAuth: false },
  },
  {
    path: '/workplace/approvals',
    name: 'approvals',
    component: () =>
      import(
        /* webpackChunkName: 'expenditureRequest' */ '../pages/Approvals.vue'
      ),
    meta: { requiresAuth: false },
  },
  {
    path: '/workplace/closeout-report',
    name: 'closeout-report',
    component: () =>
      import(
        /* webpackChunkName: 'expenditureRequest' */ '../pages/CloseOutReport.vue'
      ),
    meta: { requiresAuth: false },
  },
  {
    path: '/workplace/requests/expenditure',
    name: 'expenditureRequest',
    component: () =>
      import(
        /* webpackChunkName: 'expenditureRequest' */ '../pages/CreateExpenditureRequest.vue'
      ),
    meta: { requiresAuth: false },
  },
  {
    path: '/workplace/requests/leave',
    name: 'requestLeave',
    component: () =>
      import(
        /* webpackChunkName: 'expenditureRequest' */ '../pages/RequestLeave.vue'
      ),
    meta: { requiresAuth: false },
  },
  {
    path: '/obligations',
    name: 'obligations',
    component: () =>
      import(/* webpackChunkName: 'obligations' */ '../pages/Obligations.vue'),
    meta: { requiresAuth: false },
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () =>
          import(
            /* webpackChunkName: 'dashboard' */ '../components/obligations/Dashboard.vue'
          ),
      },
      {
        path: 'escalations',
        name: 'escalations',
        component: () =>
          import(
            /* webpackChunkName: 'escalations' */ '../components/obligations/Escalations.vue'
          ),
      },
      {
        path: 'tickets',
        name: 'all tickets',
        component: () =>
          import(
            /* webpackChunkName: 'tickets' */ '../components/obligations/Tickets.vue'
          ),
      },
      {
        path: 'tickets',
        name: 'my tickets',
        component: () =>
          import(
            /* webpackChunkName: 'tickets' */ '../components/obligations/Tickets.vue'
          ),
      },
      {
        path: 'tickets/new',
        name: 'create ticket',
        component: () =>
          import(
            /* webpackChunkName: 'createtickets' */ '../components/obligations/CreateTicket.vue'
          ),
      },
      {
        path: 'scheduled-visits',
        name: 'scheduled visits',
        component: () =>
          import(
            /* webpackChunkName: 'scheduledvisits' */ '../components/obligations/ScheduledVisits.vue'
          ),
      },
    ],
  },
  {
    path: '/dashboard/bpad/management',
    name: 'bpad-dashboard-management',
    component: () => import('../pages/Dashboard/BPAD/Management/Main.vue'),
  },
  {
    path: '/compliance',
    name: 'obligation-compliance',

    component: () =>
      import(
        /* webpackChunkName: 'scheduledvisits' */ '@/pages/compliance/Main.vue'
      ),
    meta: { requiresAuth: false, title: 'Obligations - Compliance' },
  },
  {
    path: '/compliance/123',
    name: 'department-obligation-compliance',

    component: () =>
      import(
        /* webpackChunkName: 'scheduledvisits' */ '../pages/compliance/DepartmentUnitDetails.vue'
      ),
    meta: { requiresAuth: false, title: 'Obligations - Compliance' },
  },
  {
    path: '/compliance/view',
    name: 'department-obligation-view',
    component: () =>
      import(
        /* webpackChunkName: 'scheduledvisits' */ '../pages/compliance/DepartmentView.vue'
      ),
    meta: { requiresAuth: false, title: 'Obligations - Compliance' },
  },
  {
    path: '/performance',
    name: 'obligation-performance',

    component: () =>
      import(
        /* webpackChunkName: 'scheduledvisits' */ '@/pages/performance/Main.vue'
      ),
    meta: { requiresAuth: false, title: 'Obligations - Performance' },
  },
  {
    path: '/performance/123',
    name: 'department-obligation-performance',

    component: () =>
      import(
        /* webpackChunkName: 'scheduledvisits' */ '../pages/performance/DepartmentUnitDetails.vue'
      ),
    meta: { requiresAuth: false, title: 'Obligations - Performance' },
  },
  {
    path: '/performance/view',
    name: 'department-obligation-view',

    component: () =>
      import(
        /* webpackChunkName: 'scheduledvisits' */ '../pages/performance/DepartmentView.vue'
      ),
    meta: { requiresAuth: false, title: 'Obligations - Performance' },
  },
  {
    path: '/finance',
    name: 'finance',
    component: () =>
      import(/* webpackChunkName: 'finance' */ '../components/MPR/Main.vue'),
  },
  {
    path: '/operations',
    name: 'operations',

    component: () =>
      import(
        /* webpackChunkName: 'operations' */ '../components/MPR/Operations/ObligationsTab.vue'
      ),
  },
  {
    path: '/human-resource',
    name: 'human-resource',

    component: () =>
      import(
        /* webpackChunkName: 'human-resource' */ '../components/MPR/HR/Index.vue'
      ),
  },
  {
    path: '/manager-performance-management',
    name: 'manager-performance-management',
    component: () =>
      import(
        /* webpackChunkName: 'performance-management' */ '../pages/ManagerPerformanceManagement.vue'
      ),
  },
  {
    path: '/key-account-manager',
    name: 'key account manager',
    component: () =>
      import(
        /* webpackChunkName: 'obligations' */ '../components/KeyAccountObligation/Index.vue'
      ),
    meta: { requiresAuth: false },
    children: [
      {
        path: 'my-accounts',
        name: 'My Accounts',
        component: () =>
          import(
            /* webpackChunkName: 'dashboard' */ '../components/KeyAccountObligation/MyAccounts.vue'
          ),
      },
      {
        path: 'wallet-share',
        name: 'Wallet Share',
        component: () =>
          import(
            /* webpackChunkName: 'escalations' */ '../components/KeyAccountObligation/WalletShare.vue'
          ),
      },
    ],
  },
  {
    path: '/wallet-details/:id',
    name: 'key wallet details',
    component: () =>
      import(
        /* webpackChunkName: 'escalations' */ '../components/KeyAccountObligation/WalletDetails.vue'
      ),
  },
  {
    path: '/customer-details/:id',
    name: 'my customer details',
    component: () =>
      import(
        /* webpackChunkName: 'escalations' */ '../components/KeyAccountObligation/CustomerDetails.vue'
      ),
  },
  {
    path: '/leads-index',
    name: 'leads-index',
    component: () =>
      import(
        /* webpackChunkName: 'obligations' */ '../components/SalesObligation/LeadManagement/Index.vue'
      ),
    meta: { requiresAuth: false },
    children: [
      {
        path: '/leads',
        name: 'Leads',
        component: () =>
          import(
            /* webpackChunkName: 'escalations' */ '../components/SalesObligation/LeadManagement/Leads.vue'
          ),
      },

      {
        path: '/market-survey',
        name: 'Market Survey Reports',
        component: () =>
          import(
            /* webpackChunkName: 'dashboard' */ '../components/SalesObligation/LeadManagement/MarketSurvey.vue'
          ),
      },

      {
        path: '/conversions',
        name: 'Conversions',
        component: () =>
          import(
            /* webpackChunkName: 'escalations' */ '../components/SalesObligation/LeadManagement/Conversions.vue'
          ),
      },
    ],
  },
  {
    path: '/view/:id',
    name: 'lead detail',
    component: () =>
      import(
        /* webpackChunkName: 'escalations' */ '../components/SalesObligation/LeadManagement/LeadDetails.vue'
      ),
  },
  {
    path: '/lead/leads-order',
    name: 'leads-order',
    component: () =>
      import(
        /* webpackChunkName: 'escalations' */ '../components/SalesObligation/LeadManagement/LeadsOrder.vue'
      ),
  },
  {
    path: '/aie/approvals',
    name: 'finance-approvals',
    component: () =>
      import(
        /* webpackChunkName: 'approvals' */ '../components/approvals/AIEApprovals.vue'
      ),
  },
  {
    path: '/account',
    name: 'account',
    component: () =>
      import(
        /* webpackChunkName: 'obligations' */ '../components/SalesObligation/AccountManagement/Index.vue'
      ),
    meta: { requiresAuth: false },
    children: [
      {
        path: '/account-managers',
        name: 'Account Managers',
        component: () =>
          import(
            /* webpackChunkName: 'escalations' */ '../components/SalesObligation/AccountManagement/AccountManager.vue'
          ),
      },
      {
        path: '/',
        name: 'manager details',
        component: () =>
          import(
            /* webpackChunkName: 'escalations' */ '../components/SalesObligation/AccountManagement/AccountMangerDetails.vue'
          ),
      },
      {
        path: '/unassigned-account',
        name: 'Unassigned Accounts',
        component: () =>
          import(
            /* webpackChunkName: 'dashboard' */ '../components/SalesObligation/AccountManagement/UnassignedAccount.vue'
          ),
      },
    ],
  },
  // {
  //   path: '/customer-view/:id',
  //   name: 'customer details',
  //   component: () =>
  //     import(
  //       /* webpackChunkName: 'escalations' */ '@/components/SalesObligation/AccountManagement/CustomerDetails.vue'
  //     ),
  // },
  {
    path: '/locations',
    name: 'locations',
    component: () =>
      import(
        /* webpackChunkName: 'escalations' */ '../components/SalesObligation/AccountManagement/Locations.vue'
      ),
  },
  {
    path: '/components/sendinterviewinvite',
    name: 'SendInterviewInvite',

    component: () =>
      import(
        /* webpackChunkName: 'sendinterviewinvite' */ '../components/HR/InterviewRecords/SendInterviewInvite.vue'
      ),
    meta: { requiresAuth: false },
  },
  {
    path: '/components/post-vacancy',
    name: 'Post Vacancy',

    component: () =>
      import(
        /* webpackChunkName: 'postvacancy' */ '../components/HR/RecruitmentVacancy/PostVacancy.vue'
      ),
    meta: { requiresAuth: false },
  },
  {
    path: '/components/vacancy-record',
    name: 'Vacancy Record',

    component: () =>
      import(
        /* webpackChunkName: 'vacancyrecord' */ '../components/HR/RecruitmentVacancy/VacancyRecord.vue'
      ),
    meta: { requiresAuth: false },
  },
  {
    path: '/appraisal/:id',
    name: 'view-appraisal',

    component: () =>
      import(
        /* webpackChunkName: 'performancerating' */ '../pages/MyProfile/PerformanceRating.vue'
      ),
    meta: { requiresAuth: false },
  },
  {
    path: '/point/contest/:id',
    name: 'Disciplinary Response',

    component: () =>
      import(
        /* webpackChunkName: 'disciplinaryresponse' */ '@/pages/MyProfile/DisciplinaryResponse.vue'
      ),
    meta: { requiresAuth: false },
  },
  {
    path: '/components/view-slip',
    name: 'View Slip',

    component: () =>
      import(
        /* webpackChunkName: 'viewslip' */ '../components/HR/PerformanceManagement/Rewards_Welfare/ViewSlip.vue'
      ),
    meta: { requiresAuth: false },
  },
  {
    path: '/obligations/:id',
    name: 'obligation',
    component: () =>
      import(/* webpackChunkName: 'obligations' */ '../pages/Obligation.vue'),
    meta: { requiresAuth: false },

    children: [
      {
        path: 'actions',
        name: 'actions',
        component: () =>
          import(
            /* webpackChunkName: 'actions' */ '../components/obligations/Action.vue'
          ),
      },
      {
        path: 'escalations',
        name: 'escalationss',
        component: () =>
          import(
            /* webpackChunkName: 'escalations' */ '../components/obligations/Escalationss.vue'
          ),
      },
      {
        path: 'conversations',
        name: 'conversation',
        component: () =>
          import(
            /* webpackChunkName: 'conversations' */ '../components/obligations/Conversations.vue'
          ),
      },
      {
        path: 'event',
        name: 'event',
        component: () =>
          import(
            /* webpackChunkName: 'escalations' */ '../components/obligations/Event.vue'
          ),
      },
    ],
  },
  {
    path: '/customer-database',
    name: 'customerDatabase',
    component: () =>
      import(
        /* webpackChunkName: 'customerDatabase' */ '../pages/CustomerDatabase.vue'
      ),
    meta: { requiresAuth: false },
  },
  {
    path: '/support-page',
    name: 'supportPage',
    component: () =>
      import(/* webpackChunkName: 'supportPage' */ '../pages/SupportPage.vue'),
    meta: { requiresAuth: false },
  },
  {
    path: '/customer-database/:id',
    name: 'customerDetail',
    component: () =>
      import(
        /* webpackChunkName: 'customerDetail' */ '../pages/CustomerDetail.vue'
      ),
    meta: { requiresAuth: false },
  },
  {
    path: '/conversations/',
    name: 'conversations',
    component: () =>
      import(
        /* webpackChunkName: 'conversations' */ '../pages/Conversations.vue'
      ),
    meta: { requiresAuth: false },
  },
  {
    path: '/main-bar',
    name: 'main-bar',
    component: () =>
      import(
        /* webpackChunkName: 'booking' */ '../components/KeyAccountObligation/MainBar.vue'
      ),
    meta: { requiresAuth: false },
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: 'login' */ '../pages/Login.vue'),
    meta: { requiresGuest: false },
  },
  {
    path: '/bpd',
    name: 'BPD',
    component: () =>
      import(/* webpackChunkName: 'callCenter' */ '@/pages/BPD/index.vue'),
    meta: { requiresAuth: false, title: 'BPD' },
    children: [
      {
        path: 'analysis',
        name: 'analysis',
        component: () =>
          import(
            /* webpackChunkName: 'callCenter' */ '../pages/BPD/Analysis/index.vue'
          ),
        meta: {
          requiresAuth: false,
          title: 'Business Performance Analysis Dashboard',
        },
      },
      {
        path: '/compliance-report',
        name: 'compliance-report',

        component: () =>
          import(
            /* webpackChunkName: 'scheduledvisits' */ '../pages/compliance/Reports/index.vue'
          ),
        meta: { requiresAuth: false, title: 'Compliance - Reports' },
      },
      {
        path: 'compliance/report/root-cause-view',
        name: 'compliance-root-cause-view',

        component: () =>
          import(
            /* webpackChunkName: 'scheduledvisits' */ '../pages/compliance/Reports/rootCause/View.vue'
          ),
        meta: { requiresAuth: false, title: 'Compliance - Reports' },
      },
      {
        path: '/compliance/report/root-cause-view/form',
        name: 'compliance-root-cause-form',

        component: () =>
          import(
            /* webpackChunkName: 'scheduledvisits' */ '../pages/compliance/Reports/rootCause/ViewForm.vue'
          ),
        meta: { requiresAuth: false, title: 'Performance - Reports' },
      },
      {
        path: '/compliance/report/escalation-view',
        name: 'compliance-escalation-view',

        component: () =>
          import(
            /* webpackChunkName: 'scheduledvisits' */ '../pages/compliance/Reports/escalations/View.vue'
          ),
        meta: { requiresAuth: false, title: 'Compliance - Reports' },
      },
      {
        path: '/compliance/report/sanction-view',
        name: 'compliance-sanction-view',

        component: () =>
          import(
            /* webpackChunkName: 'scheduledvisits' */ '../pages/compliance/Reports/sanctions/View.vue'
          ),
        meta: { requiresAuth: false, title: 'Compliance - Reports' },
      },
      {
        path: '/performance-report',
        name: 'performance-report',

        component: () =>
          import(
            /* webpackChunkName: 'scheduledvisits' */ '../pages/performance/Reports/index.vue'
          ),
        meta: { requiresAuth: false, title: 'Performance - Reports' },
      },
      {
        path: '/performamce/report/root-cause-view',
        name: 'performamce-root-cause-view',

        component: () =>
          import(
            /* webpackChunkName: 'scheduledvisits' */ '../pages/performance/Reports/rootCause/View.vue'
          ),
        meta: { requiresAuth: false, title: 'Performance - Reports' },
      },
      {
        path: '/performance/report/root-cause-view/form',
        name: 'performance-root-cause-form',

        component: () =>
          import(
            /* webpackChunkName: 'scheduledvisits' */ '../pages/performance/Reports/rootCause/ViewForm.vue'
          ),
        meta: { requiresAuth: false, title: 'Performance - Reports' },
      },
      {
        path: '/performance/report/escalation-view',
        name: 'performance-escalation-view',

        component: () =>
          import(
            /* webpackChunkName: 'scheduledvisits' */ '../pages/performance/Reports/escalations/View.vue'
          ),
        meta: { requiresAuth: false, title: 'Performance - Reports' },
      },
      {
        path: '/performance/report/sanction-view',
        name: 'compliance-sanction-view',

        component: () =>
          import(
            /* webpackChunkName: 'scheduledvisits' */ '../pages/performance/Reports/sanctions/View.vue'
          ),
        meta: { requiresAuth: false, title: 'Performance - Reports' },
      },
      {
        path: 'operation/planning',
        name: 'operation-planning',
        component: () =>
          import(
            /* webpackChunkName: 'callCenter' */ '@/pages/BPD/planning/index.vue'
          ),
        meta: { requiresAuth: false, title: 'Operations Planning' },
      },
      {
        path: 'operation/tasks-monitor',
        name: 'task-monitor',
        component: () =>
          import(
            /* webpackChunkName: 'callCenter' */ '@/pages/performance/Reports/tasks.vue'
          ),
        meta: { requiresAuth: false, title: 'Obligation tASKS' },
      },
      {
        path: 'operation/planning/meeting/:id',
        name: 'meeting-details',
        component: () =>
          import(
            /* webpackChunkName: 'callCenter' */ '@/pages/BPD/planning/meeting/View.vue'
          ),
        meta: { requiresAuth: false, title: 'Operations Planning' },
      },
      {
        path: 'operation/planning/meeting/minute/:id',
        name: 'meeting-minutes',
        component: () =>
          import(
            /* webpackChunkName: 'callCenter' */ '@/pages/BPD/planning/minutes/View.vue'
          ),
        meta: { requiresAuth: false, title: 'Operations Planning' },
      },
      {
        path: 'operation/management',
        name: 'operation-management',
        component: () =>
          import(
            /* webpackChunkName: 'callCenter' */ '@/pages/BPD/management/index.vue'
          ),
        meta: { requiresAuth: false, title: 'Operations Management' },
      },
      {
        path: 'operation/management/monitor-view/:id',
        name: 'monitorView',
        component: () =>
          import(
            /* webpackChunkName: 'callCenter' */ '@/pages/BPD/management/monitorView.vue'
          ),
        meta: { requiresAuth: false, title: 'Operations Management' },
      },
      {
        path: 'view-expenditure',
        name: 'view-expenditure',
        component: () =>
          import(
            /* webpackChunkName: 'expenditure' */ '../pages/ViewExpenditureRequest.vue'
          ),
        meta: { requiresAuth: false, title: 'AIE' },
      },
      {
        path: 'view-request',
        name: 'view-request',
        component: () =>
          import(
            /* webpackChunkName: 'expenditure' */ '../pages/ViewExpenditure.vue'
          ),
        meta: { requiresAuth: false, title: 'AIE' },
      },
    ],
  },
  {
    path: '/performance-management',
    name: 'performance-management',
    component: () =>
      import(
        /* webpackChunkName: 'callCenter' */ '../components/HR/PerformanceManagement/Main.vue'
      ),
    meta: {
      requiresAuth: false,
      title: 'Obligations - Performance Management',
    },
    children: [
      {
        path: '/performance-management/overview',
        name: 'performance-overview',
        component: () =>
          import(
            /* webpackChunkName: 'callCenter' */ '../pages/BPD/Analysis/index.vue'
          ),
        meta: {
          requiresAuth: false,
        },
      },
    ],
  },
  {
    path: '/MyProfile',
    name: 'myProfile',
    component: () =>
      import(
        /* webpackChunkName: 'callCenter' */ '../pages/MyProfile/index.vue'
      ),
    meta: { requiresAuth: false, title: 'MyProfile' },
  },
  {
    path: '/components/displinaryresponse',
    name: 'disciplinaryresponse',
    component: () =>
      import(
        /* webpackChunkName: 'callCenter' */ '@/components/HR/PerformanceManagement/ManualRewards/DisciplinaryResponse.vue'
      ),
    meta: { requiresAuth: false },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  const currentUrl = window.location.href
  const url = new URL(currentUrl)
  const source = url.searchParams.get('source')
  userStore.checkRole()
  const isAuthenticated = userStore.$state.isAuthenticated
  if (source && isAuthenticated) {
    const token = userStore.$state.token
    const redirectUrl = `${source}?token=${token}`
    console.log(redirectUrl)
    window.open(redirectUrl)
    url.searchParams.delete('source')
    // Replace the current URL in the browser history
    window.history.replaceState({}, document.title, url.toString())
  } else if (to.meta.requiresGuest) {
    return router.go(-1)
  } else {
    next()
  }
})

export default router
