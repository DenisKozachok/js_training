import { config } from 'dotenv-safe';
import { ApiConfigDto, ConfigDto } from '../dto/config.dto';


export class ConfigService {
    public constructor() {
        config();
    }

    public getConfig(): ConfigDto {
        const apiConfig = this.getApiConfig();

        return {
            api: apiConfig
        };
    }

    private getApiConfig(): ApiConfigDto {
        return {
            reqresApi: {
                baseUrl: 'https://reqres.in/api/'
            }
        };
    }
}
