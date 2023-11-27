function skillsMember(){
    return {
        restirct: 'E',
        templateUrl: 'modules/skills/views/members.html',
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}