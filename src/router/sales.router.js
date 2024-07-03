const salesRouter = [
  {
    path: '/sales',
    name: 'sales',
    component: () =>
      import(
        /* webpackChunkName: 'obligations' */ '../components/SalesObligation/SalesManagement/index.vue'
      ),
    meta: { requiresAuth: true },
    children: [
      {
        path: '/sales-order',
        name: 'Sales Orders',
        component: () =>
          import(
            /* webpackChunkName: 'escalations' */ '../components/SalesObligation/SalesManagement/SalesOrder.vue'
          ),
      },
      {
        path: '/registration',
        name: 'Manual Customer Registration',
        redirect: { name: 'Single Location' },

        component: () =>
          import(
            /* webpackChunkName: 'escalations' */ '../components/SalesObligation/SalesManagement/CustomerReg.vue'
          ),
      },
      {
        path: '/pending-installations',
        name: 'Pending Activations',
        component: () =>
          import(
            /* webpackChunkName: 'escalations' */ '../components/SalesObligation/SalesManagement/PendingInstallations.vue'
          ),
      },
      
      {
        path: '/order-details/:id',
        name: 'order details',
        component: () =>
          import(
            /* webpackChunkName: 'dashboard' */ '../components/SalesObligation/SalesManagement/OrderDetails.vue'
          ),
      },

      {
        path: '/registration/location',
        name: 'location',
        component: () =>
          import(
            /* webpackChunkName: 'escalations' */ '../components/SalesObligation/SalesManagement/CustomerReg.vue'
          ),

        meta: { requiresAuth: true },
        children: [
          {
            path: '/registration/single-location',
            name: 'Single Location',
            component: () =>
              import(
                /* webpackChunkName: 'escalations' */ '../components/SalesObligation/SalesManagement/SingleLocation.vue'
              ),
          },
          {
            path: '/registration/multiple-locations',
            name: 'Multiple Locations',
            component: () =>
              import(
                /* webpackChunkName: 'dashboard' */ '../components/SalesObligation/SalesManagement/MultipleLocations.vue'
              ),
          },
        ],
      },
    ],
  },

  {
    path: '/home-page',
    name: 'home-page',
    component: () => import('../pages/Sales/HomePage.vue'),
  },
  {
    path: '/report',
    name: 'report',
    component: () => import('../pages/Sales/Report.vue'),
  },
  {
    path: '/sales-dashboard',
    name: 'main dashboard',
    component: () =>
      import(
        /* webpackChunkName: 'obligations' */ '../components/SalesDashboard/Dashboard.vue'
      ),
    meta: { requiresAuth: false },
    children: [
      {
        path: 'sales',
        name: 'Sales & Marketing Performance',
        component: () =>
          import(
            /* webpackChunkName: 'dashboard' */ '../components/SalesDashboard/SalesAndMarketing.vue'
          ),
      },
      {
        path: 'service',
        name: 'Service Delivery',
        component: () =>
          import(
            /* webpackChunkName: 'escalations' */ '../components/SalesDashboard/ServiceDelivery.vue'
          ),
      },
    ],
  },
]

export default salesRouter
