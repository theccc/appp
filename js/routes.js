angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('quantidadeDeComputadores', {
      url: '/page1',
      templateUrl: 'templates/quantidadeDeComputadores.html',
      controller: 'quantidadeDeComputadoresCtrl'
    })
        
      
    
      
        
    .state('quantidadeDeImpressoras', {
      url: '/page2',
      templateUrl: 'templates/quantidadeDeImpressoras.html',
      controller: 'quantidadeDeImpressorasCtrl'
    })
        
      
    
      
        
    .state('quantidadeDeDias', {
      url: '/page3',
      templateUrl: 'templates/quantidadeDeDias.html',
      controller: 'quantidadeDeDiasCtrl'
    })
        
      
    
      
        
    .state('nerdsDeslocados', {
      url: '/page4',
      templateUrl: 'templates/nerdsDeslocados.html',
      controller: 'nerdsDeslocadosCtrl'
    })
        
      
    
      
        
    .state('duracaoDoContrato', {
      url: '/page5',
      templateUrl: 'templates/duracaoDoContrato.html',
      controller: 'duracaoDoContratoCtrl'
    })
        
      
    
      
        
    .state('equipamentoFiscal', {
      url: '/page6',
      templateUrl: 'templates/equipamentoFiscal.html',
      controller: 'equipamentoFiscalCtrl'
    })
        
      
    
      
        
    .state('planoDeEmergencia', {
      url: '/page7',
      templateUrl: 'templates/planoDeEmergencia.html',
      controller: 'planoDeEmergenciaCtrl'
    })
        
      
    
      
        
    .state('valorDoContrato', {
      url: '/page8',
      templateUrl: 'templates/valorDoContrato.html',
      controller: 'valorDoContratoCtrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page1');

});