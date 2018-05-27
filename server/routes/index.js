import express from 'express';
import moment from 'moment';

const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Hello freeCodeCamp challenge!');
});

router.get('/:time', (req, res, next) => {
  const { time } = req.params;
  let unix = null;
  let natural = null;
  if (Number(time) >= 0) {
    unix = Number(time);
    natural = moment.unix(time).format('MMMM D, YYYY');
  } else if (Number.isNaN(Number(time)) && moment(time, 'MMMM D, YYYY').isValid()) {
    natural = time;
    unix = moment(time, 'MMMM D, YYYY').unix();
  }
  res.send({ unix, natural });
});

router.get('/:time/*', (req, res, next) => {
  res.send('API is not supported');
});

export default router;
