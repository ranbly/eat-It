angular.module('starter.services', [])

  .factory('Chats', function () {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var chats = [{
      id: 0,
      name: 'Ben Sparrow',
      lastText: 'You on your way?',
      face: 'img/ben.png'
    }, {
      id: 1,
      name: 'Max Lynx',
      lastText: 'Hey, it\'s me',
      face: 'img/max.png'
    }, {
      id: 2,
      name: 'Adam Bradleyson',
      lastText: 'I should buy a boat',
      face: 'img/adam.jpg'
    }, {
      id: 3,
      name: 'Perry Governor',
      lastText: 'Look at my mukluks!',
      face: 'img/perry.png'
    }, {
      id: 4,
      name: 'Mike Harrington',
      lastText: 'This is wicked good ice cream.',
      face: 'img/mike.png'
    }];
    /*
     var main = [{
     id: 0,
     food: '짜장면',
     category: '중식',
     image: 'img/perry.png'
     }];

     return {
     all:function() {
     return main;
     }
     };
     */

    return {
      all: function () {
        return chats;
      },
      remove: function (chat) {
        chats.splice(chats.indexOf(chat), 1);
      },
      get: function (chatId) {
        for (var i = 0; i < chats.length; i++) {
          if (chats[i].id === parseInt(chatId)) {
            return chats[i];
          }
        }
        return null;
      }
    };
  })

  .factory('Detail', function () {

    return {
      all: function () {
        return chats;
      },
      remove: function (chat) {
        chats.splice(chats.indexOf(chat), 1);
      },
      get: function (chatId) {
        for (var i = 0; i < chats.length; i++) {
          if (chats[i].id === parseInt(chatId)) {
            return chats[i];
          }
        }
        return null;
      }
    };
  })

  .factory('FoodList', function () {
    //큰 카테고리 객체를 생성
    var mainCategorys = [
      {
        categoryNum: 0,
        categoryName: '전체'
      },
      {
        categoryNum: 1,
        categoryName: '한식'
      },
      {
        categoryNum: 2,
        categoryName: '중식'
      },
      {
        categoryNum: 3,
        categoryName: '일식'
      },
      {
        categoryNum: 4,
        categoryName: '양식'
      }
    ];

    // 메인푸드 객체를 생성
    var mainFoods = [
      {
        foodNum: 0,
        food: '짜장면',
        category: '중식',
        sumnailImg: 'img/jajang.jpg'
      },
      {
        foodNum: 1,
        food: '스시',
        category: '일식',
        sumnailImg: 'img/susi.jpg'
      },
      {
        foodNum: 2,
        food: '빙수',
        category: '디저트',
        sumnailImg: 'img/iceFlake.jpg'
      },
      {
        foodNum: 3,
        food: '짬뽕',
        category: '중식',
        sumnailImg: 'img/jjam.jpg'
      },
      {
        foodNum: 4,
        food: '빠네 스파게티',
        category: '양식',
        sumnailImg: 'img/paner.jpg'
      },
      {
        foodNum: 5,
        food: '파스타',
        category: '양식',
        sumnailImg: 'img/pasta.jpg'
      },
      {
        foodNum: 6,
        food: '족발',
        category: '한식',
        sumnailImg: 'img/pigFeet.jpg'
      },
      {
        foodNum: 7,
        food: '떡볶이',
        category: '한식',
        sumnailImg: 'img/kofood.jpg'
      },
      {
        foodNum: 8,
        food: '돈가스',
        category: '일식',
        sumnailImg: 'img/PorkCutlet.jpg'
      },
      {
        foodNum: 9,
        food: '스테이크',
        category: '양식',
        sumnailImg: 'img/steak.jpg'
      },
      {
        foodNum: 10,
        food: '아이스크림 와플',
        category: '디저트',
        sumnailImg: 'img/waffle.jpg'
      }
    ];


    return {
      allMainFoods: function (filter) {
        if (filter == undefined || filter.length == 0) {
          return mainFoods;
        }

        // 필터링된 음식 정보
        var filterFoods = [];

        // 필터에 사용되는 모든 카테고리 키
        var filterKeys = Object.keys(filter);

        // 보여질 카테고리 정보
        var activeFilter = [];

        // 활성화 된 필터만 걸러낸다
        for (var i = 0; i < filterKeys.length; i++) {
          if (filter[filterKeys[i]]) {
            activeFilter.push(filterKeys[i]);
          }
        }

        // 활성화된 필터링 카테고리 목록중에 음식 카테고리 정보가 있다면 그 음식만 보여준다
        for (var i = 0; i < mainFoods.length; i++) {
          if (activeFilter.indexOf(mainFoods[i].category) !== -1) {
            filterFoods.push(mainFoods[i]);
          }
        }

        return filterFoods;
      },
      allMainFoodsEat: function (filter) {
        if (filter == undefined || filter.length == 0) {
          return mainFoods;
        }

        // 필터링된 음식 정보
        var filterFoods = [];

        // 필터에 사용되는 모든 카테고리 키
        var filterKeys = Object.keys(filter);

        // 보여질 카테고리 정보
        var activeFilter = [];

        // 활성화 된 필터만 걸러낸다
        for (var i = 0; i < filterKeys.length; i++) {
          if (filter[filterKeys[i]]) {
            activeFilter.push(filterKeys[i]);
          }
        }

        // 활성화된 필터링 카테고리 목록중에 음식 카테고리 정보가 있다면 그 음식만 보여준다
        for (var i = 0; i < mainFoods.length; i++) {
          if (activeFilter.indexOf(mainFoods[i].category) !== -1) {
            filterFoods.push(mainFoods[i]);
          }
        }

        return filterFoods;
      },
      getMainFood: function (mainFoodNum) {
        return mainFoods[mainFoodNum];
      }
    }
  })

  .factory('SearchNaver', function ($http) {
    var searchResults = [];

    return {
      all: function () {
        return searchResults;
      },
      append: function (saveResult) {
        searchResults.push(saveResult);
      },
      more: function (mainFoodNum) {
        return mainFoodNum;
      },
      keywords: function (keyword, page, callback) {

        console.log('keywords')

        $http.get('/naver?where=m_blog&sm=mtb_jum&query=' + keyword + "&start=" + (page * 16))
          .success(function (result) {
            //console.log(result);
            var parser = new DOMParser();
            //html을 doc형식으로 바꿈
            var document = parser.parseFromString(result, 'text/html');
            var blogSearchResults = (document.querySelectorAll('.lst_total li'));

            for (var i = 0; i < blogSearchResults.length; i++) {
              var blogSearchResult = blogSearchResults[i];
              //console.log(blogSearchResult)
              var resultThumbnail = blogSearchResult.querySelector('.total_wrap .thumb_single .thumb_fix img').getAttribute('src');
              var resultTitle = blogSearchResult.querySelector('.total_wrap .total_tit').innerText;
              var resultContent = blogSearchResult.querySelector('.total_wrap .total_dsc .dsc_txt').innerText;
              var resultContentDetail = blogSearchResult.querySelector('.total_wrap').getAttribute('href');

              searchResults.push({
                index: searchResults.length,
                thumbnail: resultThumbnail,
                title: resultTitle,
                content: resultContent,
                contentDetail: resultContentDetail
              });

              //console.log(resultThumbnail)

              callback();
            }
          })
          .error(function (err) {
            callback();
          });
      },
      clear: function () {
        searchResults = [];
      },
      getDetailUrl: function (foodNum) {
        var url = searchResults[foodNum].contentDetail;

        // 임시로 CORS 를 우회 하기 위해 추가 해놓았다
        url = url.replace('http://m.blog.naver.com', '/blog');

        return url;
      }
    }
  })

  .factory('Location', function ($http) {

    return {
      getCity: function (lat, long, callback) {
        var city = undefined;

        $http.get('http://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + long + '&sensor=true')
          .success(function (results, status) {
            console.log(status);

            if (status == 200) {
              results = results.results;

              if (results[1]) {

                console.log(results[0]);

                //find country name
                for (var i = 0; i < results[0].address_components.length; i++) {
                  for (var b = 0; b < results[0].address_components[i].types.length; b++) {

                    // 둬주세용 ㅜㅜ
                    console.log(results[0].address_components[i]);

                    if (results[0].address_components[i].types[b] == "sublocality_level_2") {
                      //this is the object you are looking for
                      city = results[0].address_components[i];
                      break;
                    }
                  }
                }
              }
              callback(city.short_name);
            }
          })
          .error(function (err) {
            callback();
          });
      }
    }
  });
