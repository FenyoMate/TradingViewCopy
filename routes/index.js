const express = require('express');
const router = express.Router();

const getLoginMW = require('../middleware/login/getLogin');
const checkPassMW = require('../middleware/login/checkPass');
const renderMW = require('../middleware/render');
const authMW = require('../middleware/auth/auth');
const getAPIInfoMW = require('../middleware/api/getAPIInfo');
const getViewsMW = require('../middleware/api/getViews');
const getProfileMW = require('../middleware/profile/getProfile');
const changePassMW = require('../middleware/profile/changePass');
const deleteProfileMW = require('../middleware/profile/deleteProfile');
const getInfo = require('../middleware/info/getInfo');
const NauthMW = require('../middleware/auth/Nauth');
const getRegisterMW = require('../middleware/register/getRegister');
const newProfileMW = require('../middleware/register/newProfile');
const newViewMW = require('../middleware/api/newView');

module.exports = function (app) {
  const objRepo = {};

  app.get('',
      getLoginMW(objRepo),
      renderMW(objRepo, 'login'));
/*
  app.get('/',
        getLoginMW(objRepo),
        renderMW(objRepo, 'login'));

  app.use('/login',
      getLoginMW(objRepo),
      checkPassMW(objRepo),
      renderMW(objRepo, 'login'));

  app.get('/views',
      authMW(objRepo),
      getAPIInfoMW(objRepo),
      getViewsMW(objRepo),
      renderMW(objRepo, 'viewlist'));

  app.use('/views',
      authMW(objRepo),
      newViewMW(objRepo),
      renderMW(objRepo, 'viewlist'));

  app.get('/profile/:userid',
      authMW(objRepo),
      getProfileMW(objRepo),
      renderMW(objRepo,'profile'));

  app.use('/profile/:userid/edit',
      authMW(objRepo),
      getProfileMW(objRepo),
      changePassMW(objRepo),
      deleteProfileMW(objRepo),
      renderMW(objRepo, 'profile'));

  app.get('/info',
      getInfo(objRepo),
      renderMW(objRepo, 'info'));

  app.use('/logout',
      NauthMW(objRepo),
      renderMW(objRepo, 'login'));


  app.get('/register',
      getRegisterMW(objRepo),
      renderMW(objRepo, 'register'));

  app.use('/register',
      newProfileMW(objRepo),
      authMW(objRepo),
      renderMW(objRepo, 'befotteditnew'));
*/
};


