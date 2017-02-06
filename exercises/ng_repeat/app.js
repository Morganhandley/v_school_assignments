var app = angular.module("myApp", []);

app.controller("myController", function ($scope) {
    $scope.handle = player.kills[i].handle;
    $scope.rank = player.kills[i].rank;
    }
});


var player = {
    kills: [
        {
            handle: "jk400",
            rank: 14932,
            clan: ["hpburner200", "sputnik", "sololobo21"]
        },
        {
            handle: "dragonbobz",
            rank: 83655,
            clan: ["asdf", "sputnik", "peoplesrepublic"]
        },
        {
            handle: "joeschmoe",
            rank: 9274,
            clan: ["hpburner200", "sputnik", "sololobo21"]
        },
        {
            handle: "sarz",
            rank: 10,
            clan: ["peoplesrepublic", "asdf", "sololobo21"]
        },
        {
            handle: "zikamademethisway",
            rank: 9580,
            clan: ["hpburner200", "peoplesrepublic", "asdf"]
        }
    ]
}