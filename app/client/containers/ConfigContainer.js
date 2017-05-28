import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import { isAuthorized } from '../auth'

import MainLayout from '../layouts/MainLayout'

import DashboardView from '../views/DashboardView/DashboardView'
import EntriesView from '../views/EntriesView/EntriesView'
import GlobalsView from '../views/GlobalsView/GlobalsView'
import CategoriesView from '../views/CategoriesView/CategoriesView'
import AssetsView from '../views/AssetsView/AssetsView'
import SettingsView from '../views/SettingsView/SettingsView'
import NoMatchView from '../views/NoMatchView/NoMatchView'

const ConfigContainer = () => {
  if (!isAuthorized()) return <Redirect to='/admin/login' />

  return (
    <MainLayout>
      <Switch>
        <Route exact path='/admin/config/dashboard' component={DashboardView} />

        <Route exact path='/admin/config/entries' component={EntriesView} />

        <Route exact path='/admin/config/categories' component={CategoriesView} />

        <Route exact path='/admin/config/globals' component={GlobalsView} />

        <Route exact path='/admin/config/assets' component={AssetsView} />

        <Route exact path='/admin/config/settings' component={SettingsView} />
        <Route exact path='/admin/config/settings/general' component={SettingsView} />
        <Route exact path='/admin/config/settings/sites' component={SettingsView} />
        <Route exact path='/admin/config/settings/routes' component={SettingsView} />
        <Route exact path='/admin/config/settings/users' component={SettingsView} />
        <Route exact path='/admin/config/settings/email' component={SettingsView} />
        <Route exact path='/admin/config/settings/plugins' component={SettingsView} />
        <Route exact path='/admin/config/settings/fields' component={SettingsView} />
        <Route exact path='/admin/config/settings/sections' component={SettingsView} />
        <Route exact path='/admin/config/settings/assets' component={SettingsView} />
        <Route exact path='/admin/config/settings/globals' component={SettingsView} />
        <Route exact path='/admin/config/settings/categories' component={SettingsView} />
        <Route exact path='/admin/config/settings/tags' component={SettingsView} />

        <Redirect exact from='/admin/config' to='/admin/config/dashboard' />
        <Route path='*' component={NoMatchView} />
      </Switch>
    </MainLayout>
  )
}

export default ConfigContainer
