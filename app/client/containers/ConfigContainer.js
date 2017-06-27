import React from 'react'
import PropTypes from 'prop-types'
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

const ConfigContainer = ({ match }) => {
  if (!isAuthorized()) return <Redirect to='/admin/login' />

  return (
    <MainLayout>
      <Switch>
        {/* Dashboard */}
        <Route exact path={`${match.url}/dashboard`} component={DashboardView} />

        {/* Entries */}
        <Route exact path={`${match.url}/entries`} component={EntriesView} />

        {/* Categories */}
        <Route exact path={`${match.url}/categories`} component={CategoriesView} />

        {/* Globals */}
        <Route exact path={`${match.url}/globals`} component={GlobalsView} />

        {/* Assets */}
        <Route exact path={`${match.url}/assets`} component={AssetsView} />

        {/* Settings */}
        <Route exact path={`${match.url}/settings`} component={SettingsViews.Index} />
        <Route exact path={`${match.url}/settings/general`} component={SettingsViews.Index} />
        <Route exact path={`${match.url}/settings/sites`} component={SettingsViews.Index} />
        <Route exact path={`${match.url}/settings/routes`} component={SettingsViews.Index} />
        <Route exact path={`${match.url}/settings/users`} component={SettingsViews.Index} />
        <Route exact path={`${match.url}/settings/email`} component={SettingsViews.Index} />
        <Route exact path={`${match.url}/settings/plugins`} component={SettingsViews.Index} />

        <Route exact path={`${match.url}/settings/fields/edit/:id`} component={SettingsViews.FieldsForm} />
        <Route exact path={`${match.url}/settings/fields/new`} component={SettingsViews.FieldsForm} />
        <Route exact path={`${match.url}/settings/fields/:id?`} component={SettingsViews.Fields} />

        <Route exact path={`${match.url}/settings/sections`} component={SettingsViews.Index} />
        <Route exact path={`${match.url}/settings/assets`} component={SettingsViews.Index} />
        <Route exact path={`${match.url}/settings/globals`} component={SettingsViews.Index} />
        <Route exact path={`${match.url}/settings/categories`} component={SettingsViews.Index} />
        <Route exact path={`${match.url}/settings/tags`} component={SettingsViews.Index} />

        {/* Misc */}
        <Redirect exact from={match.url} to={`${match.url}/dashboard`} />
        <Route path='*' component={NoMatchView} />
      </Switch>
    </MainLayout>
  )
}

ConfigContainer.propTypes = {
  match: PropTypes.object
}

export default ConfigContainer
