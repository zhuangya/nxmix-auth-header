'use strict';

const url = require('url');

const md5 = require('spark-md5');
const moment = require('moment-timezone');

module.exports = (partnerName, partnerKey, endpoint, time=new Date) => {
  const timeInShanghai = moment.tz(time, 'Asia/Shanghai');

  const now = moment(timeInShanghai).format('YYYY-MM-DD HH:mm:ss');
  const reqPath = url.parse(endpoint).path;
  const hash = md5.hash([reqPath, partnerName, now, partnerKey].join('&'));

  return {
    authorization: `${partnerName}:${hash}`,
    date: now
  };
};

