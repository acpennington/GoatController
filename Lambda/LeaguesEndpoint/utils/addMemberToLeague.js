// role can be one of the following: owner, admin, judge, member, pending, left, banned
function addMemberToLeague(league, username, role = false) {
   const { autoApprove, allowMultis, useRatings, useQueue } = league;

   const member = { role: role || (autoApprove ? "member" : "pending") };

   if (!allowMultis) member.ips = [];
   if (useQueue) member.lastPlayed = "";
   if (useRatings) {
      member.wins = 0;
      member.losses = 0;
      member.rating = 0;
   }

   league.members[username] = member;
}

module.exports = addMemberToLeague;
