import { fetchUsers } from './api-service';
import { UserSummary } from './userSummary';
import { DetailedUser } from './abstraction';

(async () => {
    const apiResponse = await fetchUsers();
    console.log('Fetched Users:', apiResponse);

    const userSummaries = apiResponse.data.map(user => new UserSummary(user));
    console.log('User Summaries:', userSummaries);

    const detailedUsers = apiResponse.data.map(user => new DetailedUser(user));
    detailedUsers.forEach(user => console.log(user.getDetails()));
})();