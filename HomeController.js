
var enquete = angular.module("enquete", []);

angular
  .module('App')
  .controller('HomeController', function($http, $scope){
    enquete.titulo;
    enquete.texto;
    enquete.opcoes=[];
    $scope.enquetes=[];

    $http.get('https://munif.com.br/encatman-api/api/enquete?gumgaToken=fafiman')
    .success(function(response) {
      $scope.enquetes=response;
    })
    .error(function (data, status) {
              $scope.msg = "Não foi possível carregar as enquetes";

  })
})
