import * as pages from '../../../pages'
import * as pagesMain from '../../../pages/main/subPages'
import * as pagesApp from '../../../pages/app/subPages'
import * as pagesClaim from '../../../pages/main/subPages/claim/subPages'

const routes: any = [
  {
    exact: true,
    path: '/',
    component: pages.auth,
    key: 'auth'
  },
  {
    exact: true,
    path: '/notAllowed',
    component: pages.notallowed,
    key: "notAllowed",
    secure: false
  },
  {
    path: '/main',
    component: pages.main,
    key: "main",
    secure: true,
    routes: [
      {
        path: '/main/assessments',
        component: pagesMain.assessments,
        secure: true
      },
      {
        path: '/main/providers',
        component: pagesMain.providers,
        secure: false
      },
      {
        path: '/main/collaborators',
        component: pagesMain.collaborators,
        secure: true
      },
      {
        path: '/main/create',
        component: pagesMain.create,
        secure: true
      },
      {
        path: '/main/dashboard',
        component: pagesMain.dashboard,
        secure: true
      },
      {
        path: '/main/claim/:id/:id',
        component: pagesMain.claim,
        secure: true,
        routes: [
          {
            path: '/main/claim/data/:id',
            component: pagesClaim.data,
            secure: true
          },
          {
            path: '/main/claim/answers/:id',
            component: pagesClaim.answers,
            secure: true
          },
          {
            path: '/main/claim/photos/:id',
            component: pagesClaim.photos,
            secure: true
          }
        ]
      }
    ]
  },
  {
    path: '/app',
    component: pages.app,
    key: "app",
    secure: true,
    routes: [
      {
        path: '/app/claim',
        component: pagesApp.claim,
        key: "claim",
        secure: true
      },
      {
        path: '/app/questions/',
        component: pagesApp.questions,
        key: "questions",
        secure: true
      },
      {
        path: '/app/fotos/',
        component: pagesApp.fotos,
        key: "fotos",
        secure: true
      },
      {
        path: '/app/enviar/',
        component: pagesApp.score,
        key: "enviar",
        secure: true
      },
      {
        path: '/app/confirmed',
        component: pagesApp.confirmed,
        key: "confirmed",
        secure: true
      },
      {
        exact: true,
        path: '/app/findAddress',
        component: pagesApp.findAddress,
        key: "findAddress",
        secure: true
      },
      {
        exact: true,
        path: '/app/finalized',
        component: pagesApp.finalized,
        key: "finalized",
        secure: true
      },
    ]
  }
]

export default routes
