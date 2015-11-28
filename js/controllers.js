angular.module('app.controllers', [])
  
.controller('quantidadeDeComputadoresCtrl', function($scope, $rootScope) {
        console.log($rootScope.fields);
})
   
.controller('quantidadeDeImpressorasCtrl', function($scope, $rootScope) {
        console.log($rootScope.fields);
})
   
.controller('quantidadeDeDiasCtrl', function($scope, $rootScope) {
        console.log($rootScope.fields);
})
   
.controller('nerdsDeslocadosCtrl', function($scope, $rootScope) {
        console.log($rootScope.fields);
})
   
.controller('duracaoDoContratoCtrl', function($scope, $rootScope) {
        console.log($rootScope.fields);
})
   
.controller('equipamentoFiscalCtrl', function($scope, $rootScope) {
        console.log($rootScope.fields);
})
   
.controller('planoDeEmergenciaCtrl', function($scope, $rootScope) {
        console.log($rootScope.fields);
})
   
.controller('valorDoContratoCtrl', function($scope, $rootScope) {
    $scope.valorFinal = function() {
        var amount = 0;

        for(i=0; i < Object.keys($rootScope.fields).length; i++) {
            amount += $rootScope.fields['value'+(i+1)];
        }

        return amount;
    }
})