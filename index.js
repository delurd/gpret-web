const express = require('express');
const path = require('path');
const app = express();
const ActivityDatas = require('./utils/data/activityDatas.js');

const port = 3000;

//to use .html format instead of .ejs
app.engine('.html', require('ejs').__express);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index', {route: 'home', title: 'Home', data: {}});
});

app.get('/about', (req, res) => {
  res.render('index', {route: 'about', title: 'About', data: {}});
});

app.get('/structure', (req, res) => {
  res.render('index', {route: 'structure', title: 'Structure', data: {}});
});

app.get('/activity', (req, res) => {
  const activityDataInArray = [];

  for (const key in ActivityDatas) {
    if (Object.hasOwnProperty.call(ActivityDatas, key)) {
      const element = ActivityDatas[key];
      activityDataInArray.push(element);
    }
  }

  res.render('index', {
    route: 'activity',
    title: 'Activity',
    data: activityDataInArray,
  });
});

app.get('/activity/:activityId', (req, res) => {
  const _activityId = req.params.activityId;

  const getDataActivity = ActivityDatas[_activityId];
  if (getDataActivity) {
    res.render('index', {
      route: 'activity-detail',
      title: 'Activity',
      data: getDataActivity,
    });
  } else {
    res.render('index', {
      route: 'not-found',
      title: '404',
      data: {},
    });
  }
});

app.get('/contact', (req, res) => {
  res.render('index', {route: 'contact', title: 'Contact', data: {}});
});

app.get('*', (req, res) => {
  res.render('index', {
    route: 'not-found',
    title: '404',
    data: {},
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
