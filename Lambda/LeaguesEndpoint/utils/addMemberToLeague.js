// role can be one of the following: owner, admin, judge, member, pending, left, banned
function addMemberToLeague(league, username, role = false) {
   const member = role ? { role } : league.autoApprove ? { role: "member" } : { role: "pending" };

   if (!league.allowMultis) member.ips = [];
   if (league.useRatings) {
      member.wins = 0;
      member.losses = 0;
      member.rating = 0;
   }

   league.members[username] = member;
}

module.exports = addMemberToLeague;
