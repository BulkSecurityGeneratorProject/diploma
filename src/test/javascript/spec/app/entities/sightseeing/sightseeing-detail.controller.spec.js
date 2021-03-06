'use strict';

describe('Controller Tests', function() {

    describe('Sightseeing Management Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockSightseeing, MockCategory, MockRegion;
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockSightseeing = jasmine.createSpy('MockSightseeing');
            MockCategory = jasmine.createSpy('MockCategory');
            MockRegion = jasmine.createSpy('MockRegion');
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
                'entity': MockEntity ,
                'Sightseeing': MockSightseeing,
                'Category': MockCategory,
                'Region': MockRegion
            };
            createController = function() {
                $injector.get('$controller')("SightseeingDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'diplomaApp:sightseeingUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});
