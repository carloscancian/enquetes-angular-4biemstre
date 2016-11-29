
angular
  .module('App')
  .controller('votarController', function($http, $scope, $state, $stateParams){

    console.log($stateParams.enqueteId)
    $scope.enquete={};
    $scope.status="Não votou";
    $scope.votou=false;

    id=$stateParams.enqueteId;
    $http.get('https://munif.com.br/encatman-api/api/enquete/')
    .success(function(response) {
      $scope.enquete=response;
    });

    $scope.responde=function(resposta){
      data={opcao:resposta};
      $http.post('https://munif.com.br/encatman-api/api/resposta',data)
      .then(function(response) {
        $scope.status="Votou "+resposta.texto;
        $scope.votou=true;
      },
      function(response) {
        $scope.status="Problemas ao votar";
      });
    }
  })
