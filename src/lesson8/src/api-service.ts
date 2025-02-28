import axios from 'axios';
import { ApiResponse } from './interfaces';

export async function fetchUsers(): Promise<ApiResponse> {
    const response = await axios.get<ApiResponse>('https://reqres.in/api/users');
    return response.data;
}
