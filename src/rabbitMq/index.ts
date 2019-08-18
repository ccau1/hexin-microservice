import amqp from 'amqplib/callback_api';
import MainChannel from './mainChannel';
import RabbitMQ from '../core/RabbitMQ';
export default class MainRabbitMQ extends RabbitMQ {
  protected async onLoad(connection: amqp.Connection): Promise<void> {
    new MainChannel(connection);
  }
}
