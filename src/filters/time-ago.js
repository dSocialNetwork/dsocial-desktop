import moment from 'moment';

require('moment-timezone');

const _tz = moment.tz.guess();

export default ($rootScope) => {

  const timeAgo = (input) => {
    moment.locale($rootScope.language);

    let d = moment.utc(input);
    return d.tz(_tz).fromNow();
  };

  timeAgo.$stateful = true;
  return timeAgo;
}
