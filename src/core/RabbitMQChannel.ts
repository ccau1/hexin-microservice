import amqp from 'amqplib/callback_api';

export default class ChannelBase {
  protected channel: amqp.Channel;

  public constructor(connection: amqp.Connection) {
    this.createChannel(connection)
      .then((channel): void => {
        this.channel = channel;
        this.onLoad(channel);
      })
  }

  protected async createChannel(
    connection: amqp.Connection
  ): Promise<amqp.Channel> {
    return new Promise((resolve, reject): void => {
      connection.createChannel((error1, channel): void => {
        if (error1) {
          reject(error1);
        }
        resolve(channel);
      })
    });
  }

  protected onLoad(channel: amqp.Channel): void {
    throw new Error('Channel method `onLoad` must be overridden');
  }
  
  protected consume(
    queue: string,
    onMessage: (msg: amqp.Message | null) => void,
    opts?: {durable: boolean}
  ): void {
    const options = {
      durable: true,
      noAck: false,
      ...opts
    }
    this.channel.assertQueue(queue, {durable: options.durable});
    this.channel.consume(queue, (msg): void => {
      onMessage(msg);
      if (msg && !options.noAck) {
        this.channel.ack(msg);
      }
    }, {
      noAck: options.noAck
    });
  }

  protected sendMessage(queue: string, content: Buffer, opts: {}): void {
    const options = {
      durable: true,
      persistent: true,
      ...opts
    }
    this.channel.assertQueue(queue, {durable: options.durable})
    this.channel.sendToQueue(queue, content, {persistent: options.persistent});
  }
}