import express from 'express';
import dotenv from 'dotenv';

import globalMiddleware from './middleware/globalMiddleware';

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

globalMiddleware(app);

app.get('/', (req, res) => {
    res.status(200).send({
        status: 200,
        message: 'Welcome to UB HomePage',  
      });
    })

app.use((req, res) => {
  res.status(404).send({
    status: 404,
    error: {
      message: 'Page Not found',
    }
  });
});


app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server listening on port: ${port} in ${process.env.NODE_ENV} mode`);
  });


export default app;
