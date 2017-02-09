angular.module('pokeApp', [])

.service('pokeService', function () {
    this.post = function (pokeList, name) {
        pokeList.push(name)
        return pokeList;
    }
    
    this.delete = function (pokeList, name) {
        var index = pokeList.indexOf(name)
        pokeList.splice(index,1)
        return pokeList;
    }

})

.controller('pokeController', function (pokeService, $scope) {
    
    $scope.pokeList = [];
    $scope.addPokemon = function (name) {
        $scope.pokeList = pokeService.post($scope.pokeList, name)
        $scope.name = "";
    }

    $scope.removePokemon = function (name) {
        $scope.pokelist = pokeService.delete($scope.pokeList, name)
        console.log("remove")
         $scope.name = "";
    }
});