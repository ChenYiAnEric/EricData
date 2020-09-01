/**
 * create by Wayne 2017/04/03
 */

    'use strict';
    var app = angular.module('myApp', ['ui.bootstrap', 'ngAnimate']);

    app.controller('MainCtrl', function ($scope, $uibModal) {

        $scope.galleryArray = [
            {
                'name': '阿波羅風格',
                'number': 'A0001',
                'color': ['1998da'],
                'view': ['1998da'],
                'colorName':{
                    '1998da':'質感藍'
                }
            },
            {
                'name': '阿波羅風格',
                'number': 'A0002',
                'color': ['060606', 'c5a35c', 'ae4dff', 'dadce9', '740001', '38442d', 'c93535', '1c33b5'],
                'view': ['060606'],
                'colorName':{
                    '060606':'皮革黑',
                    'c5a35c':'咖啡褐',
                    'ae4dff':'淺紫色',
                    'dadce9':'海洋藍',
                    '740001':'玫瑰紅',
                    '38442d':'軍灰色',
                    'c93535':'簡約紅',
                    '1c33b5':'寶石藍'
                }
            },
            {
                'name': '至尊匯風格',
                'number': 'A0003',
                'color': ['118f12', 'cf271e'],
                'view': ['118f12'],
                'colorName':{
                    '118f12':'叢林綠',
                    'cf271e':'雅致紅'
                }
            },
            {
                'name': '至尊匯風格',
                'number': 'A0004',
                'color': ['740001'],
                'view': ['740001'],
                'colorName':{
                    '740001':'至尊紅'
                }
            },
            {
                'name': '至尊匯風格',
                'number': 'A0005',
                'color': ['0088fe', 'd2b979', 'cc1a26'],
                'view': ['0088fe'],
                'colorName':{
                    '0088fe':'嬉皮藍',
                    'd2b979':'雍容金',
                    'cc1a26':'雅致紅'
                }
            },
            {
                'name': '至尊匯風格',
                'number': 'A0006',
                'color': ['111111', '74242d', '3b5698'],
                'view': ['111111'],
                'colorName':{
                    '111111':'鐵灰色',
                    '74242d':'玫瑰紅',
                    '3b5698':'至尊藍'
                }
            },
            {
                'name': '至尊匯風格',
                'number': 'A0007',
                'color': ['8f19f1', '140031', '060606'],
                'view': ['8f19f1'],
                'colorName':{
                    '8f19f1':'霓虹紫',
                    '140031':'尊貴紫',
                    '060606':'質感黑'
                }
            },
            {
                'name': '至尊匯風格',
                'number': 'A0008',
                'color': ['d1261e'],
                'view': ['d1261e'],
                'colorName':{
                    'd1261e':'簡約紅'
                }
            },
            {
                'name': '至尊匯風格',
                'number': 'A0009',
                'color': ['1c33b5' ,'cf271e'],
                'view': ['1c33b5'],
                'colorName':{
                    '1c33b5':'絢麗藍',
                    'cf271e':'簡約紅'
                }
            },
            {
                'name': '至尊匯風格',
                'number': 'A0010',
                'color': ['3b548c'],
                'view': ['3b548c'],
                'colorName':{
                    '3b548c':'至尊藍'
                }
            },
            {
                'name': '至尊匯風格',
                'number': 'A0011',
                'color': ['a60704'],
                'view': ['a60704'],
                'colorName':{
                    'a60704':'富貴紅'
                }
            },
            {
                'name': '至尊匯風格',
                'number': 'A0012',
                'color': ['0e0e10'],
                'view': ['0e0e10'],
                'colorName':{
                    '0e0e10':'別緻黑'
                }
            },
            {
                'name': '至尊匯風格',
                'number': 'A0013',
                'color': ['233273'],
                'view': ['233273'],
                'colorName':{
                    '233273':'至尊藍'
                }
            },
            {
                'name': '至尊匯風格',
                'number': 'A0014',
                'color': ['265988'],
                'view': ['265988'],
                'colorName':{
                    '265988':'雅致藍'
                }
            },
            {
                'name': '新至尊匯風格',
                'number': 'A0015',
                'color': ['12025b'],
                'view': ['12025b'],
                'colorName':{
                    '12025b':'尊爵紫'
                }
            },
            {
                'name': '至尊匯風格',
                'number': 'A0016',
                'color': ['e2b72d'],
                'view': ['e2b72d'],
                'colorName':{
                    'e2b72d':'尊爵金'
                }
            },
            {
                'name': '美高梅風格',
                'number': 'A0017',
                'color': ['c19336'],
                'view': ['c19336'],
                'colorName':{
                    'c19336':'土豪金'
                }
            },
            {
                'name': '美高梅風格',
                'number': 'A0018',
                'color': ['0188fe'],
                'view': ['0188fe'],
                'colorName':{
                    '0188fe':'簡約藍'
                }
            },
            {
                'name': '阿波羅風格',
                'number': 'A0019',
                'color': ['561b2f'],
                'view': ['561b2f'],
                'colorName':{
                    '561b2f':'經典紫'
                }
            }
        ];

        $scope.showModal = function(_key, _value){
            var modalInstance = $uibModal.open({
                templateUrl: 'showModal.html',
                controller: 'showModalCtrl',
                size: 'showDialog',
                scope: $scope,
                resolve: {
                    key: function () {
                        return _key;
                    },
                    items: function () {
                        return _value;
                    }
                }
            });
            modalInstance.result.then(function (selectedItem) {
            }, function () {
            });
        };

        $scope.searchGallery = function () {
            var searchItems = $scope.search;
            if (searchItems.length>0) {
                angular.forEach($scope.galleryArray,function (key, value) {
                    if ($scope.galleryArray[value]['number'].toUpperCase().indexOf($scope.search.toUpperCase()) != -1) {
                        console.log($scope.galleryArray[value]['number']);
                    }
                });
            }
        };

        /* Preloader */
        var $preloader = $('#page-preloader'),
            $spinner   = $preloader.find('.spinner');
        $spinner.fadeOut();
        $preloader.delay(350).fadeOut('slow');


});