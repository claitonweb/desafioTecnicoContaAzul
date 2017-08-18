app.controller('VeiculoCadastroController', function($scope, $rootScope, $state) {
    $scope.combustiveis = [
        {
            nome : 'Gasolina'
        },
        {
            nome : 'Álcool'
        },
        {
            nome : 'Flex'
        }
    ]    

    $scope.veiculo = {};
    $scope.cadastrar = () => {
        let isValid = $scope.validarForm($scope.cadastro);
        if (isValid) {
            let veiculos = angular.copy($scope.$storage.veiculos);
            if ($scope.$storage.veiculos != undefined ) {
                $scope.$storage.veiculos.push($scope.veiculo);
            } else {
                $scope.$storage.veiculos = [$scope.veiculo];
            } 
            
            $state.go('home');
        }
    }

})