import Log from '@dazn/lambda-powertools-logger';

export const handle = async (event) => {
  Log('Received incoming event', {
    event,
  });

  const body = ''; // TODO: Get this from the message
  const dataBytes = Buffer.byteLength(body, 'utf8');

  // TODO: Handle persistance of log entry
};
