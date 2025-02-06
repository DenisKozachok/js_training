function userRole(role) {
    switch (role) {
        case 'admin':
            console.log('You have full access as an admin');
            break;
        case 'editor':
            console.log('You can edit content as an editor');
            break;
        case 'viewer':
            console.log('You can view content as a viewer');
            break;
        default:
            console.log(`You have no access ${role}`);
    }
}

let role = 'admin';
userRole(role);

role = 'editor';
userRole(role);

role = 'viewer';
userRole(role);

role = 'guest';
userRole(role);

role = 59;
userRole(role);
