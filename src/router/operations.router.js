const operationsRouter = [
  {
    path: '/help-center',
    name: 'help-center',
    component: () => import('../pages/Field_Operations/HelpCenter.vue'),
  },
  {
    path: '/confirmation/:id',
    name: 'view-confirmation',
    component: () => import('../pages/Field_Operations/ViewConfirmation.vue'),
  },
  {
    path: '/schedule/splitter-information/:activity/:id',
    name: 'splitter-information',
    component: () =>
      import('../pages/Field_Operations/SplitterInformation.vue'),
  },
  {
    path: '/schedule/survey-report/:id',
    name: 'SurveyReport',
    component: () =>
      import(
        /* webpackChunkName: 'callCenter' */ '../pages/Field_Operations/SurveyReport.vue'
      ),
  },
  {
    path: '/schedule/installation-report/:id',
    name: 'installation-report',
    component: () =>
      import(
        /* webpackChunkName: 'callCenter' */ '../pages/Field_Operations/InstallationReport.vue'
      ),
  },

  {
    path: '/schedule/splice-plan/:activity/:id',
    name: 'splice-plan',
    component: () =>
      import(
        /* webpackChunkName: 'callCenter' */ '../pages/Field_Operations/SplicePlan.vue'
      ),
  },
  {
    path: '/schedule/work-order/:activity/:id',
    name: 'work-order',
    component: () =>
      import(
        /* webpackChunkName: 'callCenter' */ '../pages/Field_Operations/WorkOrder.vue'
      ),
  },
  {
    path: '/schedule/activation/:id',
    name: 'activation-report',
    component: () =>
      import(
        /* webpackChunkName: 'callCenter' */ '../pages/Field_Operations/ActivationReport.vue'
      ),
  },
  {
    path: '/schedule/diagnosis/:activity/:id/:id2',
    name: 'resource-diagnosis',
    component: () =>
      import(
        /* webpackChunkName: 'callCenter' */ '../pages/Field_Operations/ResourceDiagnosis.vue'
      ),
  },
  {
    path: '/schedule/diagnosis-report/:id',
    name: 'diagnosis-report',
    component: () =>
      import(
        /* webpackChunkName: 'callCenter' */ '../pages/Field_Operations/DiagnosisReport.vue'
      ),
  },
  {
    path: '/schedule/provider-report/:id',
    name: 'provide-report',
    component: () =>
      import(
        /* webpackChunkName: 'callCenter' */ '../pages/Field_Operations/ProvideReport.vue'
      ),
  },
  {
    path: '/schedule',
    name: 'schedule',
    component: () =>
      import(
        /* webpackChunkName: 'callCenter' */ '../pages/Field_Operations/Schedule.vue'
      ),
  },
  {
    path: '/schedule/resource-route/:activity/:id',
    name: 'resource-route',
    component: () =>
      import('../pages/Field_Operations/ResourceRoute.vue')
  },
  {
    path: '/schedule/survey-report/:id',
    name: 'survey-report',
    component: () =>
      import(
        /* webpackChunkName: 'callCenter' */ '../pages/Field_Operations/SurveyReport.vue'
      ),
  },
  {
    path: '/schedule/installation-report/:id',
    name: 'installation-report',
    component: () =>
      import(
        /* webpackChunkName: 'callCenter' */ '../pages/Field_Operations/InstallationReport.vue'
      ),
  },

  {
    path: '/schedule/resolution-report/:id',
    name: 'resolution-report',
    component: () =>
      import(
        /* webpackChunkName: 'callCenter' */ '../pages/Field_Operations/FaultResolution.vue'
      ),
  },
  {
    path: '/schedule/splice-plan/:activity/:id',
    name: 'splice-plan',
    component: () =>
      import(
        /* webpackChunkName: 'callCenter' */ '../pages/Field_Operations/SplicePlan.vue'
      ),
  },
  {
    path: '/schedule/work-order/:activity/:id',
    name: 'work-order',
    component: () =>
      import(
        /* webpackChunkName: 'callCenter' */ '../pages/Field_Operations/WorkOrder.vue'
      ),
  },
  {
    path: '/schedule/activation-report/:id',
    name: 'activation-report',
    component: () =>
      import(
        /* webpackChunkName: 'callCenter' */ '../pages/Field_Operations/ActivationReport.vue'
      ),
  },
  {
    path: '/schedule/diagnosis/:activity/:id/:id2',
    name: 'resource-diagnosis',
    component: () =>
      import(
        /* webpackChunkName: 'callCenter' */ '../pages/Field_Operations/ResourceDiagnosis.vue'
      ),
  },
  {
    path: '/schedule/diagnosis-report/:id',
    name: 'diagnosis-report',
    component: () =>
      import(
        /* webpackChunkName: 'callCenter' */ '../pages/Field_Operations/DiagnosisReport.vue'
      ),
  },
  {
    path: '/schedule/provider-report/:id',
    name: 'provide-report',
    component: () =>
      import(
        /* webpackChunkName: 'callCenter' */ '../pages/Field_Operations/ProvideReport.vue'
      ),
  },
  {
    path: '/supervisor/dashboard',
    name: 'dash-board',
    component: () =>
      import(
        /* webpackChunkName: 'supervisor' */ '../components/FieldSupervisor/Main.vue'
      ),
  },
  {
    path: '/installation/obligations',
    name: 'installation-obligation',
    component: () =>
      import(
        /* webpackChunkName: 'supervisor' */ '../components/FieldSupervisor/Installation/InstallationObligation.vue'
      ),
  },
  {
    path: '/installation/escalations',
    name: 'installation-escalations',
    component: () =>
      import(
        /* webpackChunkName: 'supervisor' */ '../components/FieldSupervisor/Installation/InstallationEscalations.vue'
      ),
  },
  {
    path: '/installation/liabilities',
    name: 'installation-liabilities',
    component: () =>
      import(
        /* webpackChunkName: 'supervisor' */ '../components/FieldSupervisor/Installation/InstallationLiabilities.vue'
      ),
  },
  {
    path: '/diagnosis/liabilities',
    name: 'diagnosis-liabilities',
    component: () =>
      import(
        /* webpackChunkName: 'supervisor' */ '../components/FieldSupervisor/Diagnosis/Liabilities.vue'
      ),
  },
  {
    path: '/diagnosis/escalations',
    name: 'diagnosis-escalations',
    component: () =>
      import(
        /* webpackChunkName: 'supervisor' */ '../components/FieldSupervisor/Diagnosis/Escalations.vue'
      ),
  },
  {
    path: '/diagnosis/obligations',
    name: 'diagnosis-obligations',
    component: () =>
      import(
        /* webpackChunkName: 'supervisor' */ '../components/FieldSupervisor/Diagnosis/Obligations.vue'
      ),
  },
  {
    path: '/provisioning/obligations',
    name: 'provisioning-obligations',
    component: () =>
      import(
        /* webpackChunkName: 'supervisor' */ '../components/FieldSupervisor/Provisioning/ProvisioningObligations.vue'
      ),
  },
  {
    path: '/provisioning/escalations',
    name: 'provisioning-escalations',
    component: () =>
      import(
        /* webpackChunkName: 'supervisor' */ '../components/FieldSupervisor/Provisioning/ProvisioningEscalations.vue'
      ),
  },
  {
    path: '/provisioning/liabilities',
    name: 'provisioning-liabilities',
    component: () =>
      import(
        /* webpackChunkName: 'supervisor' */ '../components/FieldSupervisor/Provisioning/ProvisioningLiabilities.vue'
      ),
  },
  {
    path: '/installation/obligations/splitter',
    name: 'splitter',
    component: () =>
      import('../components/FieldSupervisor/Splitter.vue'),
  },
  {
    path: '/supervisor/technician',
    name: 'technician',
    component: () =>
      import('../components/FieldSupervisor/Technicians/Technician.vue'),
  },
  {
    path: '/supervisor/technician',
    name: 'technician-schedule',
    component: () =>
      import('../components/FieldSupervisor/Technicians/TechSchedule.vue'),
  },
  {
    path: '/supervisor/technician',
    name: 'installation-details',
    component: () =>
      import('../components/FieldSupervisor/Technicians/InstallationDetails.vue'),
  },
  {
    path: '/supervisor/obligation',
    name: 'readiness',
    component: () =>
      import('../components/FieldSupervisor/Obligation/Readiness.vue'),
  },
  {
    path: '/supervisor/obligation',
    name: 'readiness-checklist',
    component: () =>
      import('../components/FieldSupervisor/Obligation/OperationChecklist.vue'),
  },
]

export default operationsRouter
