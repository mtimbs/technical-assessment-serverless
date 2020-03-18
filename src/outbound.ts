import { APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda';

export const handle: APIGatewayProxyHandler = async (event): Promise<APIGatewayProxyResult> => {
  const { accountId } = event.pathParameters;

  // TODO: Fetch this from database
  const usage = 500;

  return {
    headers: {},
    isBase64Encoded: false,
    multiValueHeaders: {},
    statusCode: 200,
    body: JSON.stringify({
      accountId,
      usage,
    }),
  };
};
