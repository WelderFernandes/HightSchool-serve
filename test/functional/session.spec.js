const { test, trait } = use('Test/Suite')('Session');
/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');

trait('Test/ApiClient');
trait('DatabaseTransactions');

test('It should return JWT token when sesision created', async ({
  assert,
  client,
}) => {
  const sessionPayload = {
    email: 'welderx3@gmail.com',
    password: '123456',
  };
  await Factory.model('App/Models/User').create(sessionPayload);

  const response = await client.post('/session').send(sessionPayload).end();

  response.assertStatus(200);
  assert.exists(response.body.token);
});
