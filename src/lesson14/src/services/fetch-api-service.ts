import { IApiService } from './interfaces/i-api.service';
import { PostResponseUserDto } from '../dto/post-request-user.dto';

export class FetchApiService implements IApiService {
    public constructor(private baseUrl: string) {}

    public async get(uri: string, params?: Record<string, string | number | boolean>, headers?: Record<string, string>): Promise<Response> {
        const defaultHeaders = {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            ...headers
        };
        console.log('[DEBUG] GET Request:');
        console.log('Headers:', defaultHeaders);

        const queries = params
            ? `?${Object.entries(params)
                .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
                .join('&')}`
            : '';

        return await fetch(`${this.baseUrl}${uri}${queries}`, {
            method: 'GET',
            headers: defaultHeaders
        });
    }

    public async post(uri: string, body: PostResponseUserDto, headers?: Record<string, string>): Promise<Response> {
        const defaultHeaders = {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            ...headers
        };

        const url = new URL(uri, this.baseUrl).toString();

        console.log('[DEBUG] POST Request:');
        console.log('URL:', url);
        console.log('Headers:', defaultHeaders);
        console.log('Body:', JSON.stringify(body, null, 2)); // Pretty print JSON

        const response = await fetch(url, {
            method: 'POST',
            headers: defaultHeaders,
            body: JSON.stringify(body)
        });

        console.log('[DEBUG] Response Status:', response.status);
        console.log('[DEBUG] Response Headers:', Object.fromEntries(response.headers.entries()));

        const responseData = await response.json(); // Read response body
        console.log('[DEBUG] Response Body:', responseData);

        return response;
    }
}
