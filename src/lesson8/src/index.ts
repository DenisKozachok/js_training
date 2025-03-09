import { fetchUsers } from './services/api-service';
import { UserSummary } from './models/user-summary';
import { DetailedUser } from './models/abstraction';

(async () => {
    const apiResponse = await fetchUsers();
    console.log('Fetched Users:', apiResponse);

    const userSummaries = apiResponse.data.map(user => new UserSummary(user));
    console.log('User Summaries:', userSummaries);

    const detailedUsers = apiResponse.data.map(user => new DetailedUser(user));
    detailedUsers.forEach(user => console.log(user.getDetails()));
})();
