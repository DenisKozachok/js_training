import { IApiService } from '../../services/interfaces/i-api.service';
import { PostResponseUserDto } from '../../dto/post-response-user.dto';
import { GetUserDto } from '../../dto/get-user.dto';

export class UsersApi {
    public constructor(private apiService: IApiService) {}

    public async postUser(user: PostResponseUserDto): Promise<[Response, PostResponseUserDto]> {
        const body = {
            name: user.name,
            job: user.job
        };

        const response = await this.apiService.post('users', body);
        const responseJson = await response.json();

        return [response, responseJson];
    }

    public async getUserById(id: number): Promise<[Response, GetUserDto]> {
        const response = await this.apiService.get(`users/${id}`);
        const responseJson = await response.json();
        console.log("[DEBUG] Response Body:", responseJson);

        return [response, responseJson];
    }
}
