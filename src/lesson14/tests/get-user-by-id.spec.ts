import { describe, expect, test } from 'vitest';
import { FetchApiService } from '../src/services/fetch-api-service';
import { UsersApi } from '../src/apis/reqres-api/users.api';

describe('Get /users/id', () => {

    const fetchApi = new FetchApiService("https://reqres.in/api/");
    const usersApi = new UsersApi(fetchApi);

    describe('User can get user by id', () => {
        test('Get user by id', async () => {
            const [response, user] = await usersApi.getUserById(2);
            expect(response.status).toBe(200);
            expect(user.data.id).toBe(2);
            expect(user.data.email).toBe('janet.weaver@reqres.in');
            expect(user.support.text).toBe('Tired of writing endless social media content? Let Content Caddy generate it for you.');
        });

        test('Get user by id with invalid id', async () => {
            const [response] = await usersApi.getUserById(1000);
            expect(response.status).toBe(404);
        });

        test('Get user by id less than 0', async () => {
            const [response] = await usersApi.getUserById(-10);
            expect(response.status).toBe(404);
        });
    });
});
