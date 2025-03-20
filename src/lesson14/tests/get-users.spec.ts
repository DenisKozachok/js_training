import { describe, expect, test } from 'vitest';
import { FetchApiService } from '../src/services/fetch-api-service';
import { UsersApi } from '../src/apis/reqres-api/users.api';

describe('Get /users api', () => {

    const fetchApi = new FetchApiService("https://reqres.in/api/");
    const usersApi = new UsersApi(fetchApi);

    describe('User can get all users', () => {
        test('Get users', async () => {
            const [response, users] = await usersApi.getUsers();
            expect(response.status).toBe(200);
            expect(users.page).toBe(1);
            expect(users.per_page).toBe(6);
            expect(users.support.text).toBe('Tired of writing endless social media content? Let Content Caddy generate it for you.');
        });
    });
});
