
export default {
  callbackWaitsForEmptyEventLoop: false,
  functionName: 'my-function',
  functionVersion: '',
  invokedFunctionArn: '',
  memoryLimitInMB: '',
  awsRequestId: '',
  logGroupName: '',
  logStreamName: '',
  getRemainingTimeInMillis: (): number => 1,
  done: (): void => { /* do nothing */ },
  fail: (): void => { /* do nothing */ },
  succeed: (): void => { /* do nothing */ },
};
