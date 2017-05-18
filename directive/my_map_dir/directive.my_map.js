
      var my_map = angular.module('MymapModule',[]);

      my_map.directive("mapsDirective",function(){
            function linkFun(scope,element,attr){
                var options = {
                    center: new google.maps.LatLng(40.7127837, -74.00594130000002),
                    zoom: 15,
                    disableDefaultUI: false,
                    scrollwheel: true,
                };
                scope.map = new google.maps.Map(
                    document.getElementById("googleMap"), options
                );

                var directionsDisplay = new google.maps.DirectionsRenderer({
                  map: scope.map
                });
                var directionsService = new google.maps.DirectionsService();

                var source_marker,dest_marker,my_location;

                var pickup = document.getElementById('pickup');
                var drop = document.getElementById('drop');

                aut1 = new google.maps.places.Autocomplete(pickup);
                aut2 = new google.maps.places.Autocomplete(drop);
               //  aut1.bindTo('bounds',$scope.map)

                aut1.addListener('place_changed', function(){
                    // directionsDisplay.setMap(null);
                    if(my_location) my_location.setMap(null);
                    var selected_location = {
                        'id':aut1.getPlace().id,
                        'name': aut1.getPlace().name,
                        'address':aut1.getPlace().formatted_address,
                        'location':{
                            'lat':aut1.getPlace().geometry.location.lat(),
                            'lng':aut1.getPlace().geometry.location.lng()
                        }
                    }

                    if(source_marker) source_marker.setMap(null);
                    var details = scope.createMarker(selected_location,scope.map);
                    source_marker = new google.maps.Marker(details);
                    scope.map.setCenter(selected_location.location);
                    console.log(selected_location);

                 });
                //  aut2.bindTo('bounds',$scope.map)
                aut2.addListener('place_changed', function(){
                    // if($scope.my_location) $scope.my_location.setMap(null);
                     var selected_location = {
                         'id':aut2.getPlace().id,
                         'name': aut2.getPlace().name,
                         'address':aut2.getPlace().formatted_address,
                         'location':{
                             'lat':aut2.getPlace().geometry.location.lat(),
                             'lng':aut2.getPlace().geometry.location.lng()
                         }
                     }
                     if(dest_marker) dest_marker.setMap(null);
                     var details = scope.createMarker(selected_location,scope.map);
                     dest_marker = new google.maps.Marker(details);
                     scope.map.setCenter(selected_location.location);
                     console.log(dest_marker);
                 });

                scope.create_path = function (source,destination){

                    var d = {lat:destination.position.lat(),lng: destination.position.lng()};
                    var s = {lat:source.position.lat(),lng: source.position.lng()};
                    if(source_marker) source_marker.setMap(null);
                    if(dest_marker) dest_marker.setMap(null);
                    console.log(s);
                    console.log(d);
                    // Set destination, origin and travel mode.
                    var request = {
                      destination: d,
                      origin: s,
                      travelMode: 'DRIVING',
                      avoidTolls: true,
                      avoidHighways: true
                    };

                    // Pass the directions request to the directions service.

                    directionsService.route(request, function(response, status) {
                      if (status == 'OK') {
                        // Display the route on the map.
                        console.log(response);
                        directionsDisplay.setDirections(response);
                      }
                    });
                }
                scope.createMarker = function(result,map){
                    return {
                        map:scope.map,
                        position: result.location,
                        animation: google.maps.Animation.DROP
                    }
                }
                scope.submit = function(){
                    if(!source_marker || !dest_marker) return;
                    scope.create_path(source_marker,dest_marker);
                    scope.map.setCenter(source_marker.position);
                };
                //
                scope.getLocation = function() {
                    if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition(function(position){
                            var selected_location = {
                                location:{
                                    lat: position.coords.latitude,
                                    lng: position.coords.longitude
                                }
                            }
                            var details = scope.createMarker(selected_location,scope.map);
                            if(my_location) my_location.setMap(null);
                            if(source_marker) source_marker.setMap(null);
                            my_location = new google.maps.Marker(details);
                            scope.map.setCenter(selected_location.location);
                            // console.log(my_location);
                            var geocoder  = new google.maps.Geocoder();
                            geocoder.geocode({
                                    location: selected_location.location
                                }, function(result, status) {
                                    // console.log(result[0].formatted_address);
                                    // console.log(result);
                                    pickup.value = result[0].formatted_address;
                                    source_marker = my_location;
                                }
                            );
                        });
                    } else {
                        x.innerHTML = "Geolocation is not supported by this browser.";
                    }
                }
            }


            return{
                restrict: 'E',
                templateUrl: 'directive/my_map_dir/mapsDir.html',
                scope:{},
                link: linkFun
            };
        })
