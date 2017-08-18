app.config(function($stateProvider, $urlRouterProvider) {
  
  let homeState = {
  	name: 'home',
    url: '/inicio',
    templateUrl: 'views/home.html',
    controller : 'HomeController'	
  }

  let veiculoCadastroState = {
  	name: 'veiculoCadastro',
    url: '/veiculo/cadastro',
    templateUrl: 'views/veiculos/cadastro.html',
    controller : 'VeiculoCadastroController'	
  }

  $stateProvider.state(homeState);
  $stateProvider.state(veiculoCadastroState);

  $urlRouterProvider.otherwise('/inicio');
});