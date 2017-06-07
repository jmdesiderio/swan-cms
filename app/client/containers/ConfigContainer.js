import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import { isAuthorized } from '../auth'

import MainLayout from '../layouts/MainLayout'

import DashboardView from '../views/dashboard/DashboardView'
import EntriesView from '../views/entries/EntriesView'
import GlobalsView from '../views/globals/GlobalsView'
import CategoriesView from '../views/categories/CategoriesView'
import AssetsView from '../views/assets/AssetsView'
import * as SettingsViews from '../views/settings'
import NoMatchView from '../views/NoMatchView'

const ConfigContainer = () => {
  if (!isAuthorized()) return <Redirect to='/admin/login' />

  return (
    <MainLayout>
      <Switch>
        {/* Dashboard */}
        <Route exact path='/admin/config/dashboard' component={DashboardView} />

        {/* Entries */}
        <Route exact path='/admin/config/entries' component={EntriesView} />

        {/* Categories */}
        <Route exact path='/admin/config/categories' component={CategoriesView} />

        {/* Globals */}
        <Route exact path='/admin/config/globals' component={GlobalsView} />

        {/* Assets */}
        <Route exact path='/admin/config/assets' component={AssetsView} />

        {/* Settings */}
        <Route exact path='/admin/config/settings' component={SettingsViews.Index} />
        <Route exact path='/admin/config/settings/general' component={SettingsViews.Index} />
        <Route exact path='/admin/config/settings/sites' component={SettingsViews.Index} />
        <Route exact path='/admin/config/settings/routes' component={SettingsViews.Index} />
        <Route exact path='/admin/config/settings/users' component={SettingsViews.Index} />
        <Route exact path='/admin/config/settings/email' component={SettingsViews.Index} />
        <Route exact path='/admin/config/settings/plugins' component={SettingsViews.Index} />

        <Route exact path='/admin/config/settings/fields/edit/:id' component={SettingsViews.FieldsForm} />
        <Route exact path='/admin/config/settings/fields/new' component={SettingsViews.FieldsForm} />
        <Route exact path='/admin/config/settings/fields/:id?' component={SettingsViews.Fields} />

        <Route exact path='/admin/config/settings/sections' component={SettingsViews.Index} />
        <Route exact path='/admin/config/settings/assets' component={SettingsViews.Index} />
        <Route exact path='/admin/config/settings/globals' component={SettingsViews.Index} />
        <Route exact path='/admin/config/settings/categories' component={SettingsViews.Index} />
        <Route exact path='/admin/config/settings/tags' component={SettingsViews.Index} />

        {/* Misc */}
        <Redirect exact from='/admin/config' to='/admin/config/dashboard' />
        <Route path='*' component={NoMatchView} />
      </Switch>
    </MainLayout>
  )
}

export default ConfigContainer
