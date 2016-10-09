'use strict';

angular.module('confusionApp')
    .constant("baseURL","http://localhost:3000/")
    .service('menuFactory', ['$resource', 'baseURL', function ($resource, baseURL) {

        this.getDishes = function(){
            return $resource(baseURL+"dishes/:id",null,  {'update':{method:'PUT' }});
        };

        // implement a function named getPromotion
        // that returns a selected promotion.
        this.getPromotion = function () {
            return $resource(baseURL+"promotions/:id",{id:'@id'});
        };

    }])

    .factory('corporateFactory', ['$resource', 'baseURL', function ($resource, baseURL) {
        return $resource(baseURL+"leadership/:id",{id:'@id'});
    }])

    .factory('feedbackFactory', ['$resource', 'baseURL', function ($resource, baseURL) {
        return $resource(baseURL+"feedback/:id",null ,  {'update':{method:'PUT' }});
    }])

;
