app.controller('HomeController', function($scope, $rootScope) {

    
    $scope.search = {};
    $scope.cabecalhos = [
        {
            nome : 'Placa',
            campo : 'placa'
        },
        {
            nome : 'Modelo',
            campo : 'modelo'
        },
        {
            nome : 'Marca',
            campo : 'marca',
        },
        {
            nome : 'Foto',
            campo : 'imagem',
            type: 'image'
        },
        {
            nome : 'Combustivel',
            campo : 'combustivel',
        },
        {
            nome : 'Valor',
            campo : 'valor',
            type : 'money'
        }
    ]
   
    $scope.viewby = 5;
    $scope.totalItems = $scope.veiculos.length;
    $scope.currentPage = 1;
    $scope.itemsPerPage = $scope.viewby;
    $scope.maxSize = 5;
  
    $scope.setPage = function (pageNo) {
      $scope.currentPage = pageNo;
    };
  
    $scope.pageChanged = function() {
      console.log('Page changed to: ' + $scope.currentPage);
    };
  


    $scope.checkboxes = [];

    $scope.checkAll = () => {
        angular.forEach($scope.veiculos, (value, key)  => {
           $scope.checkboxes[key] = true;
        });
    }

    $scope.pesquisa = () => {
        $scope.veiculos = angular.copy($scope.$storage.veiculos);
        let veiculos = $scope.veiculos;
        let texto = $scope.search.text;
        if (texto != ''){
            angular.forEach(veiculos, (value, key)  => {
                if(value.modelo.toLowerCase().indexOf(texto.toLowerCase()) < 0 && value.marca.toLowerCase().indexOf(texto.toLowerCase()) < 0) {
                    $scope.veiculos.splice(key, 1);
                }
            });
        } else {
            $scope.veiculos = angular.copy($scope.$storage.veiculos);
        }
        
    }

})