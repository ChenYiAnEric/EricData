/**
 * create by Eric 2018/10/25
 */
(function () {
    'use strict';
    angular.module('myApp').controller('showModalCtrl', showModalCtrl);

    // 切換遊戲彈窗
    function showModalCtrl($scope, $uibModalInstance, key, items) {
        $scope.key = key;
        $scope.value = items;
        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    }
})();