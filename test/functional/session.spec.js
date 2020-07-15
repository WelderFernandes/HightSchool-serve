const { test, trait } = use('Test/Suite')('Session');
/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User');

trait('Test/ApiClient')

test('It should return JWT token when sesision created', async ({ assert, client }) => {

  const sessionPayload = {
    email: 'welderx3@gmail.com',
    password: '123456'
  }
  const user = await Factory
   .model('App/Models/User')
   .create(sessionPayload)

  const response = await client
    .post('/session')
    .send(sessionPayload)
    .end();

    response.assertStatus(200);
    assert.exists(response.body.token);
});
