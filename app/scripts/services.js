'use strict';

angular.module('confusionApp')
        .constant("baseURL","http://localhost:3000/")
        .service('menuFactory', ['$resource', 'baseURL', function($resource, baseURL) {
    
            this.getDishes = function() {

                return $resource(baseURL+"dishes/:id",null,  {'update':{method:'PUT' }});
            };

            this.getPromotion = function () {

                return $resource(baseURL+"promotions/:id",null,  {'get':{method:'GET' }});           
            }
        }])

        .factory('corporateFactory', ['$resource', 'baseURL', function($resource, baseURL) {
    
            var corpfac = {};

            corpfac.getLeaders = function() {
                
                return $resource(baseURL+"leadership/:id",null,  {'get':{method:'GET' }});
            };
            
            return corpfac;
        }])
        .service('feedbackFactory', ['$resource', 'baseURL', function($resource, baseURL) {
    
            this.saveFeedback = function() {

                return $resource(baseURL+"feedback",null,  {'post':{method:'POST' }});
            };
        }])
;
