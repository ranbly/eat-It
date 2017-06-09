angular.module('starter.controllers', [])

  .controller('DashCtrl', function ($scope, $ionicModal, FoodList, $cordovaGeolocation, $rootScope, Location) {

    $scope.changeLocationOption = function () {
      console.log('asd');
      console.log($scope.data);

      if (data.uselocation) {
        var posOptions = {timeout: 10000, enableHighAccuracy: false};
        $cordovaGeolocation
          .getCurrentPosition(posOptions)
          .then(function (position) {
            var lat = position.coords.latitude;
            var long = position.coords.longitude;

            Location.getCity(lat, long, function (city) {
              console.log(city);
            });

          }, function (err) {
            // error
          });
      } else {

      }
    };

    console.log('DashCtrl');
    $scope.data = {
      filterValues: [],
      filterValuesEat: [],
      uselocation: false
    };

    $scope.mainFoods = FoodList.allMainFoods($scope.data.filterValues);
    $scope.mainFoodsEat = FoodList.allMainFoodsEat($scope.data.filterValuesEat);


    $scope.filterValueChange = function () {
      $scope.mainFoods = FoodList.allMainFoods($scope.data.filterValues);
      console.log('1')
      console.log($scope.mainFoods)
    };

    $rootScope.filterFoodEat = [];

    $scope.EatfilterValueChange = function () {
      $rootScope.filterFoodEat = FoodList.allMainFoodsEat($scope.data.filterValuesEat);
      console.log('2')
      console.log($scope.fil$rootScope$rootScopeterFoodEat)
    };


    $scope.remove = function (dashDetail) {
      Detail.remove(dashDetail);
    };

    $scope.addItem = function (itemAmount, itemName) {
      $scope.items.push({
        amount: itemAmount,
        name: itemName
      });

      $scope.itemAmount = "";
      $scope.itemName = "";

    };
    $scope.removeItem = function (index) {
      $scope.items.splice(index, 1);
    };

    $ionicModal.fromTemplateUrl('my-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function (modal) {
      $scope.modal = modal;
    });
    $scope.openModal = function () {
      $scope.modal.show();
    };
    $scope.closeModal = function () {
      $scope.modal.hide();
    };
    // Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function () {
      $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hidden', function () {
      // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function () {
      // Execute action
    });

    $ionicModal.fromTemplateUrl('my-modal2.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function (modal) {
      $scope.modal2 = modal;
    });
    $scope.openModal2 = function () {
      $scope.modal2.show();
    };
    $scope.closeModal2 = function () {
      $scope.modal2.hide();
    };
    // Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function () {
      $scope.modal2.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hidden', function () {
      // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function () {
      // Execute action
    });

    $ionicModal.fromTemplateUrl('eat-it.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function (modal) {
      $scope.modal3 = modal;
    });
    $scope.openModal3 = function () {
      $scope.modal3.show();
    };
    $scope.closeModal3 = function () {
      $scope.modal3.hide();
    };
    // Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function () {
      $scope.modal3.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hidden', function () {
      // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function () {
      // Execute action
    });

    $scope.getCategoryGroups = function () {
      var categories = [];
      for (var i = 0; i < $scope.mainFoods.length; i++) {
        categories[$scope.mainFoods[i].category] = undefined;
      }
      return Object.keys(categories);
    };

    $scope.data1 ={newcategory:''};

    console.log($scope.data1);

    $scope.radioclick = function(index){
      console.log($scope.radioclick);

      if(index == '1'){
        $scope.data1.newcategory = '한식';
        console.log($scope.data.newcategory='한식');
      }
      else if(index == '2'){
        $scope.data1.newcategory = '중식';
        console.log($scope.data.newcategory='중식');
      }
      else if(index == '3'){
        $scope.data1.newcategory = '일식';
        console.log($scope.data.newcategory='일식');
      }
      else if(index == '4'){
        $scope.data1.newcategory = '양식';
        console.log($scope.data.newcategory='양식');
      }
      else if(index == '5'){
        $scope.data1.newcategory = '디저트';
        console.log($scope.data.newcategory='디저트');
      }
      //console.log('filter : ' +$scope.filter);
      //$scope.change.newcategory=$scope.filter;
    };



    $scope.data1 ={newcategory:''};

    $scope.data = {newFood: ''
    };

    $scope.addItem = function () {
      console.log('함수에들어왔어요 : ' + $scope.data.newFood);

      $scope.mainFoods.push({
        food: $scope.data.newFood,
        category: $scope.data1.newcategory,
        sumnailImg: '/../img/img-bap.png'
      });

      console.log($scope.mainFoods);
    };
  })

  .controller('DashCtrlDetail', function ($scope, $stateParams, FoodList, SearchNaver, $ionicPopup, Location, $cordovaGeolocation) {
    SearchNaver.clear(); //클리어

    console.log('DashCtrlDetail')

    $scope.resultItems = SearchNaver.all(); //일단저장

    $scope.dashDetail = FoodList.getMainFood($stateParams.foodNum);
    $scope.page = 0;

    var word = '';

    $scope.showPopup = function () {
      $scope.data = {};

      // An elaborate, custom popup
      var myPopup = $ionicPopup.show({
        template: '<input type="text" ng-model="data.wifi">',
        title: '위치 변경',
        subTitle: '검색하고 싶은 위치를 입력하세요. <br> ex) 홍대, 이태원, 강남대 ..',
        scope: $scope,
        buttons: [
          {text: '취소'},
          {
            text: '<b>검색</b>',
            type: 'button-positive',
            onTap: function (e) {
              if (!$scope.data.wifi) {
                //don't allow the user to close unless he enters wifi password
                e.preventDefault();
              } else {
                return $scope.data.wifi;
              }
            }
          }
        ]
      });

      myPopup.then(function (dialogWord) {
        word = dialogWord;
        console.log('Tapped!', dialogWord);
        console.log('Tapped!', word);

        resetSearchData();
        $scope.search();
      });
    };

    $scope.search = function () {
      var keyword = word + (word.length > 0 ? ' ' : '' ) + $scope.dashDetail.food;
      //console.log(keyword);
      SearchNaver.keywords(keyword, $scope.page++, function () {
        $scope.$broadcast('scroll.infiniteScrollComplete');
      });
    };

    $scope.setUseLocation = function () {
      console.log('asd');

      var posOptions = {timeout: 10000, enableHighAccuracy: false};
      $cordovaGeolocation
        .getCurrentPosition(posOptions)
        .then(function (position) {
          var lat = position.coords.latitude;
          var long = position.coords.longitude;

          Location.getCity(lat, long, function (city) {
            word = city;

            resetSearchData();
            $scope.search();
          });

        }, function (err) {
          // error
        });
    };

    var resetSearchData = function () {
      SearchNaver.clear();
      $scope.page = 0;

      $scope.resultItems = SearchNaver.all(); //일단저장
    }
  })

  .
  controller('DashCtrlDetailMore', function ($scope, $stateParams, FoodList, SearchNaver) {
    $scope.detailUrl = SearchNaver.getDetailUrl($stateParams.foodDetailIndex);
  })

  .controller('DashCtrlRandom', function ($scope, $stateParams, FoodList, SearchNaver, $ionicPopup, $rootScope, Location) {


    $scope.allRandomlist = $rootScope.filterFoodEat;


    console.log(FoodList.allMainFoodsEat())
    console.log($scope.allRandomlist)


    // 실질적인 랜덤 코드
    $scope.randomFoods = $scope.allRandomlist[Math.floor((Math.random()) * $scope.allRandomlist.length | 0)];

    // 테스트를 위한 콘솔 로그 찍기.
    console.log(Math.random())
    console.log('-----')
    console.log(Math.random() * $scope.allRandomlist.length)
    console.log('-----')
    console.log(((Math.random()) * $scope.allRandomlist.length) | 0)
    console.log('-----')
    console.log('random ' + $scope.randomFoods.food)

    SearchNaver.clear(); //클리어

    $scope.randomItems = SearchNaver.all(); //일단저장

    $scope.dashDetail = FoodList.getMainFood($stateParams.foodNum);
    $scope.page = 0;


    var word = '';

    $scope.showRandomPopup = function () {
      $scope.data = {};

      // An elaborate, custom popup
      var myPopup = $ionicPopup.show({
        template: '<input type="text" ng-model="data.wifi">',
        title: '위치 변경',
        subTitle: '검색하고 싶은 위치를 입력하세요. <br> ex) 홍대, 이태원, 강남대 ..',
        scope: $scope,
        buttons: [
          {text: '취소'},
          {
            text: '<b>검색</b>',
            type: 'button-positive',
            onTap: function (e) {
              if (!$scope.data.wifi) {
                //don't allow the user to close unless he enters wifi password
                e.preventDefault();
              } else {
                return $scope.data.wifi;
              }
            }
          }
        ]
      });

      myPopup.then(function (dialogWord) {
        word = dialogWord;
        console.log('Tapped!', dialogWord);
        console.log('Tapped!', word);

        resetSearchData();
        $scope.search();
      });
    };

    $scope.search = function () {
      var keyword = word + (word.length > 0 ? ' ' : '' ) + $scope.randomFoods.food;


      console.log('random data2 :' + keyword);
      SearchNaver.keywords(keyword, $scope.page++, function () {
        $scope.$broadcast('scroll.infiniteScrollComplete');
      });
    };

    var resetSearchData = function () {
      SearchNaver.clear();
      $scope.page = 0;

      $scope.randomItems = SearchNaver.all(); //일단저장
    }

  });


