import express from 'express';
import indexRouter from './v1';

const router = express.Router();

router.use('/api/v1', indexRouter);
router.get('/', (req, res) => {
  res.status(200).send(`<h1>Welcome To The Plate Number Generator</h1>
    <h4>Please use PostMan and navigate to <code>/api/v1</code> to use the app</h4>
      <h4>Thanks  &#x1F600;</h4>`);
});

export default router;
