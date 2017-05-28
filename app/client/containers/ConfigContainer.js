import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

import { isAuthorized } from '../auth'

import MainLayout from '../layouts/MainLayout'

import DashboardView from '../views/DashboardView/DashboardView'
import EntriesView from '../views/EntriesView/EntriesView'
import GlobalsView from '../views/GlobalsView/GlobalsView'
import CategoriesView from '../views/CategoriesView/CategoriesView'
import AssetsView from '../views/AssetsView/AssetsView'
import SettingsView from '../views/SettingsView/SettingsView'

class ConfigContainer extends Component {
  render () {
    if (!isAuthorized()) return <Redirect to='/admin/login' />

    return (
      <MainLayout>
        <Redirect from='/admin/config' to='/admin/config/dashboard' />
        <Route path='/admin/config/dashboard' component={DashboardView} />
        <Route path='/admin/config/entries' component={EntriesView} />
        <Route path='/admin/config/globals' component={GlobalsView} />
        <Route path='/admin/config/categories' component={CategoriesView} />
        <Route path='/admin/config/assets' component={AssetsView} />
        <Route path='/admin/config/settings' component={SettingsView} />
      </MainLayout>
    )
  }
}

export default ConfigContainer
