import cron from 'node-cron';

const initCron = () => {
  /* Write whatever cron logic you intend to here */

  cron.schedule(' 30 * * * * * *', async () => {}, {
    scheduled: true,
    timezone: 'Asia/Kolkata',
  });
};

export { initCron };
