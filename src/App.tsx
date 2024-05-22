import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Footer from './layout/footer/Footer'

import Modeler from './layout/modeler/Modeler'
import Admin from './components/blocks/Admin'
import Idm from './components/blocks/Idm'
import Test from './components/blocks/Test'
import BnaRetail from './components/blocks/BnaRetail'
import Processes from './modules/Processes/Processes'
import Login from './modules/Login/Login'
import Dmn from './components/decision_model/decision_editor/Dmn'
import { useEffect } from 'react'

import Form from './modules/Form/Form'
import CaseModels from './modules/CaseModels/CaseModels'
import Apps from './modules/Apps/Apps'
import DecisionTable from './modules/DecisionTable/DecisionTable'
import Blocks from './modules/Blocks/Blocks'
import Fm from './components/forms_model/form_builder/Form'

import Viewer from './components/diagram_viewer/Viewer'
import Bp from './components/diagram_editor/Bp'
import AppList from './components/apps/AppList'
import Ap from './components/apps/Ap'

function App() {

  useEffect(() => {
    if (
      location &&
      location?.pathname === '/front' &&
      location?.search === '?login_success'
    ) {
      window.location.href = '/blocks'
    }
  }, [location])

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/signin" element={<Login />} />
        <Route path="/blocks" element={<Blocks />} />
        <Route path="/modeler" element={<Modeler />}>
          {/*<Route path="/blocks/modeler/processes" element={<Bp/>} />*/}
          {/*<Route path="/blocks/modeler/processes" element={<Bp/>} />*/}
          <Route index element={<Processes />} />
          <Route path="processes" element={<Processes />} />
          <Route path="processes/editor/:id" element={<Bp />} />
          <Route path="processes/viewer/:id" element={<Viewer />} />
          {/*<Route path="/blocks/modeler/decisions" element={<Dmn />} />*/}
          <Route path="decisions" element={<DecisionTable />} />
          <Route path="decisions/:id" element={<Dmn />} />
          {/*<Route path="/blocks/modeler/form" element={<Form />} />*/}
          <Route path="form" element={<Form />} />
          <Route path="form/:id" element={<Fm />} />

          <Route path="Apps" element={<Apps />} />
          <Route path="Apps/:id" element={<Ap />} />
          {/*</Routes>Route path="Apps/:id" element={<Fm />} />*/}

          <Route path="caseModels" element={<CaseModels />} />
        </Route>
        <Route path="/blocks/admin" element={<Admin />} />
        <Route path="/blocks/idm" element={<Idm />} />
        <Route path="/blocks/test" element={<Test />} />
        <Route path="/blocks/bna-retail" element={<BnaRetail />} />
      </Routes>
      <Footer />
    </>
  )
}
export default App
