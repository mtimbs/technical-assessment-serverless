import { APIGatewayEventIdentity, APIGatewayEventRequestContextWithAuthorizer } from 'aws-lambda';

const eventIdentity = (identity: Partial<APIGatewayEventIdentity> = {}) => ({
  accessKey: null,
  accountId: null,
  apiKey: null,
  apiKeyId: null,
  caller: null,
  cognitoAuthenticationProvider: null,
  cognitoAuthenticationType: null,
  cognitoIdentityId: null,
  cognitoIdentityPoolId: null,
  principalOrgId: null,
  sourceIp: '127.0.0.1',
  user: null,
  userAgent: null,
  userArn: null,
  ...identity,
});

const requestContext = (context: Partial<APIGatewayEventRequestContextWithAuthorizer<any>> = {}) => ({
  accountId: '',
  apiId: '',
  authorizer: 'FOO',
  protocol: '',
  httpMethod: '',
  identity: eventIdentity(),
  path: '',
  stage: '',
  requestId: '',
  requestTimeEpoch: 1,
  resourceId: '',
  resourcePath: '',
  ...context,
});

export default (event) => ({
  body: 'Hello World!',
  headers: {},
  multiValueHeaders: {},
  httpMethod: 'GET',
  isBase64Encoded: false,
  path: '/',
  pathParameters: {},
  queryStringParameters: {},
  multiValueQueryStringParameters: {},
  stageVariables: {},
  requestContext: requestContext(),
  resource: '',
  ...event,
});
