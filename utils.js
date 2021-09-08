export function findById(arr, arrId) {
    return arr.find(({ id }) => id === arrId);
}

export function renderUserStats(user) {
    const userStats = document.createElement('div');
    const avatar = document.createElement('img');
    const userName = document.createElement('div');
    const userRace = document.createElement('div');
    const userHearts = document.createElement('div');
    const userRupees = document.createElement('div');

    userName.textContent = `user name: ${user.name}`;
    userRace.textContent = `user race: ${user.race}`;
    userHearts.textContent = `user hp ${user.hp}`;
    userRupees.textContent = ` Rupees: ${user.rupees}`;
    avatar.src = `../assets/${user.race}.png`;

    userStats.append(userName, userRace, userHearts, userRupees, avatar);

    return userStats;
}
