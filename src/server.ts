import express from 'express';
import chalk from 'chalk'
import RabbitMQ from './rabbitMq';
import mainController from './controllers/main.controller';

chalk.enabled = true;

const app = express();
app.use('/', mainController);

app.get('/health', function (
  req: express.Request,
  res: express.Response
): void {
  res.send('healthy');
});

app.listen(process.env.PORT, (): void => {
  console.log(
    chalk.green(`Server running on PORT ${
      process.env.PORT as string
    }`)
  );
});

new RabbitMQ();

export default app;
