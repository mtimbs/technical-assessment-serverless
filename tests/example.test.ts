import { handle } from '@src/outbound';
import APIGatewayProxyEvent from '@tests/utilities/APIGatewayProxyEvent';
import Crypto from 'crypto';
import APIGatewayContext from '@tests/utilities/APIGatewayContext';

describe('getting user data from API', () => {
  it('can get the dummy response', async () => {
    expect.hasAssertions();
    // Setup
    const accountId = 'account-uuid-1';
    const EXPECTED_BYTES = 500;
    const body = Crypto.randomBytes(EXPECTED_BYTES).toString('hex').slice(0, EXPECTED_BYTES);

    const apiGatewayEvent = APIGatewayProxyEvent({
      body,
      pathParameters: {
        accountId,
      },
    });
    const context = APIGatewayContext;
    const callback = (): void => { /* do nothing */ };

    // Act
    const response = await handle(apiGatewayEvent, context, callback);

    // Assert
    expect(response).toStrictEqual({
      headers: {},
      isBase64Encoded: false,
      multiValueHeaders: {},
      statusCode: 200,
      body: `{"accountId":"${accountId}","usage":${EXPECTED_BYTES}}`,
    });
  });
});
