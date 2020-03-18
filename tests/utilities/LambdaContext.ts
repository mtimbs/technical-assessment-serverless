import { v4 as uuid4 } from 'uuid';

export default {
  awsRegion: 'my-region',
  functionName: 'my-function',
  functionVersion: '$LATEST',
  functionMemorySize: '1024',
  'x-correlation-id': uuid4(),
  awsRequestId: uuid4(),
  'debug-log-enabled': 'false',
  level: 30,
  sLevel: 'INFO',
};
