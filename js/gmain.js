var panorama, viewer;

// Get Google Map API Key - https://developers.google.com/maps/documentation/javascript/get-api-key
panorama = new PANOLENS.GoogleStreetviewPanorama( 'JmSoPsBPhqWvaBmOqfFzgA' );
//panorama = new PANOLENS.GoogleStreetviewPanorama( 'RJd2HuqmShMAAAQfCa3ulg' );


viewer = new PANOLENS.Viewer( { initialLookAt: new THREE.Vector3( 2953.93, 1891.55, 5213.46 ) } );
viewer.add( panorama );

// Speficy target (panorama) to be updated every frame
viewer.addUpdateCallback( function () {
  panorama.rotation.y += 0.505;
} );