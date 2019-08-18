import amqp from 'amqplib/callback_api';
import ChannelBase from '../core/RabbitMQChannel';

export default class MainChannel extends ChannelBase {
  protected onLoad(channel: amqp.Channel): void {
    this.consume('hello1', (msg: amqp.Message): void => {
      console.log(' [x] Received ' + msg.content.toString());
    });
  }
}
