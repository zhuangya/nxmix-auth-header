'use strict';

const url = require('url');

const md5 = require('spark-md5');
const dateFns = require('date-fns');

module.exports = (partnerName, partnerKey, endpoint, time=new Date) => {
  const now = dateFns.format(time, 'YYYY-MM-DD HH:mm:ss');
  const reqPath = url.parse(endpoint).path;
  const hash = md5.hash([reqPath, partnerName, now, partnerKey].join('&'));

  return {
    authorization: `${partnerName}:${hash}`,
    date: now
  };
};

