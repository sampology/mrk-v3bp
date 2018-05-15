const Config = require('common/config.json');

const Constants = {
  APP: {
    ENV: Config.environment
  },
  DEV: {
    EMAIL: 'andrei.m@braincache.net',
    ENV: 'development',
    PORT: 3030
  },
  PRD: {
    EMAIL: 'andrei.m@braincache.net',
    ENV: 'production',
    PORT: 3120
  },
  COMPANY: {
    NAME: 'KVG Supply',
    ADDRESS: 'Address',
    PHONE: '+1 (800) 691-8577',
    EMAIL: 'info@kvgsupply.comm',
    LOGO: {
      PATH: 'static/img/logo_email.png',
      WIDTH: '99',
      HEIGHT: '99'
    }
  },
  BACKEND: {
    API: 'http://kvg.brainserver.net/api/v1',
    USER: '5Y2Wzn8DQzRtbK8jZ',
    TOKEN: '$2a$10$ZMOlJ.NBA1A1Ot5lEd5hBO3uXeYQN8Gk.q1QBje4bbz1WTGRrL5cm'
  },
  POWERSOFT: {
    TOKEN: '',
    API: 'http://api.powersoft365.com',
    STORE_CODE_365: '',
    DEFAULT_PRICE: 1
  },
  SMTP: {
    host: 'mail.srvcy.com',
    port: 465,
    secure: true,
    auth: {
      user: 'mailman@braincache.net',
      pass: '6I91EnKSbE7W'
    }
  },
  FROM: 'KVG Supply <mailman@braincache.net>',
  BCC: 'Andrei M. <andrei.m@braincache.net>',
  FTP_DATA: {
    host: '',
    user: '',
    password: '',
    destination: ''
  },
  AUTH: {
    FACEBOOK: {
      APP_ID: '1548646195214940',
      APP_SECRET: 'de1629b13ff1b5b88b9ddd5f9ee559bf'
    }
  }
};
module.exports = Constants;
