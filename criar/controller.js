
angular
  .module('App')
  .controller('controller', function($scope){


    $scope.enquetes = [];
    $scope.salvarEnquete = function(enquete) {
        var novaEnquete = angular.copy(enquete);
        if (enquete.id) {
             $scope.enquetes[enquete.id] = novaEnquete;
        } else {
             $scope.enquetes.push(novaEnquete)
        }
        $scope.enquete = {};
    }

     $scope.popularForm = function($index, enquete) {
         enquete.id = $index;
         $scope.enquete = angular.copy(enquete);
       }

       $scope.deleteEnquete = function($index, enquete){
         if (confirm("Tem certeza que deseja remover a enquete:" + Enquete.nome + "?")) {
           $scope.enquetes.splice($index, 1);
         }
       }


       $scope.opcoes = [
      
       ];
       $scope.salvarOpcao = function(opcao) {
           var novaOpcao = angular.copy(opcao);
           if (opcao.id) {
                $scope.opcoes[opcao.id] = novaOpcao;
           } else {
                $scope.opcoes.push(novaOpcao)
           }
           $scope.opcao = {};
       }

        $scope.popularOpcao = function($index, opcao) {
            opcao.id = $index;
            $scope.opcao = angular.copy(opcao);
          }

          $scope.deleteOpcao = function($index,opcao){
            if (confirm("Tem certeza que deseja remover a enquete:" + Opcao.nome + "?")) {
              $scope.opcoes.splice($index, 1);
            }
          }
  })
