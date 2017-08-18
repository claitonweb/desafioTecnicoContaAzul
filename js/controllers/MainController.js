app
.run(function($rootScope, $state) {
	
	$rootScope.mensagem = {};
})
.controller('MainController',($rootScope, $scope, $state, $localStorage) => {

	$rootScope.validarForm = validarForm;

	let ListVeiculos =  [ 
		{ 
			"combustivel" : "Flex",
			"imagem" : null,
			"marca" : "Volkswagem",
			"modelo" : "Gol",
			"placa" : "FFF-5498",
			"valor" : "20000"
		},
		{ 
			"combustivel" : "Gasolina",
			"imagem" : null,
			"marca" : "Volkswagem",
			"modelo" : "Fox",
			"placa" : "FOX-4125",
			"valor" : "20000"
		},
		{ 
			"combustivel" : "Alcool",
			"imagem" : "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg",
			"marca" : "Volkswagen",
			"modelo" : "Fusca",
			"placa" : "PAI-4121",
			"valor" : "20000"		
		}
   ];

   $scope.$storage = $localStorage;

   $scope.veiculos = angular.copy($scope.$storage.veiculos);
   
   if ($scope.veiculos == undefined || $scope.veiculos.length == 0) {
		$scope.$storage.veiculos = ListVeiculos;
		$scope.veiculos = angular.copy($scope.$storage.veiculos);
   }

	
	$scope.$on('$stateChangeStart',(event, toState, toParams, fromState, fromParams) => {
        $scope.mensagem = '';
        $scope.veiculos = angular.copy($scope.$storage.veiculos);
        $scope.state = toState;
	});

	function validarForm(form) {
		
		let formValido = form.$valid;
		
		if (!formValido) {
				
			$rootScope.mensagem = {erro: 'Preencha os campos obrigatórios.'};
			
			angular.forEach(form.$error.required, function(field) {
				var id = field.$$attr.id;
				var elemento = document.getElementById(id);
				field.$setTouched();
				$scope.mensagem = {};
				$scope.mensagem.erro = "Preencha os campos obrigatórios";
			});

			return formValido;

		} else {
			$scope.mensagem = {};

			return formValido;	
		}
	}
})