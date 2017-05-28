import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import { isAuthorized } from '../auth'

import MainLayout from '../layouts/MainLayout'

import DashboardView from '../views/DashboardViews/DashboardView'
import EntriesView from '../views/EntriesViews/EntriesView'
import GlobalsView from '../views/GlobalsViews/GlobalsView'
import CategoriesView from '../views/CategoriesViews/CategoriesView'
import AssetsView from '../views/AssetsViews/AssetsView'
import SettingsViews from '../views/SettingsViews'
import NoMatchView from '../views/NoMatchView'

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

        <Route exact path='/admin/config/settings' component={SettingsViews.Index} />
        <Route exact path='/admin/config/settings/general' component={SettingsViews.General} />
        <Route exact path='/admin/config/settings/sites' component={SettingsViews.Index} />
        <Route exact path='/admin/config/settings/routes' component={SettingsViews.Index} />
        <Route exact path='/admin/config/settings/users' component={SettingsViews.Index} />
        <Route exact path='/admin/config/settings/email' component={SettingsViews.Index} />
        <Route exact path='/admin/config/settings/plugins' component={SettingsViews.Index} />
        <Route exact path='/admin/config/settings/fields' component={SettingsViews.Index} />
        <Route exact path='/admin/config/settings/sections' component={SettingsViews.Index} />
        <Route exact path='/admin/config/settings/assets' component={SettingsViews.Index} />
        <Route exact path='/admin/config/settings/globals' component={SettingsViews.Index} />
        <Route exact path='/admin/config/settings/categories' component={SettingsViews.Index} />
        <Route exact path='/admin/config/settings/tags' component={SettingsViews.Index} />

        <Redirect exact from='/admin/config' to='/admin/config/dashboard' />
        <Route path='*' component={NoMatchView} />
      </Switch>
    </MainLayout>
  )
}

export default ConfigContainer
