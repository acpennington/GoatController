// role can be one of the following: owner, admin, judge, member, banned
function addMemberToLeague(league, username, role) {
   const member = { username, role };

   if (!league.allowMultis) member.ips = [];
   if (league.useRatings) {
      member.wins = 0;
      member.losses = 0;
      member.rating = 0;
   }

   league.members.push(member);
}

module.exports = addMemberToLeague;
