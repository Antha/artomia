<?php
$bppath = "";
include("main-sidebar.php");
set_time_limit(0);
?>            

<style type="text/css">
  .page-title{
     background: white;
  }

  .page-container .page-content .page-content-wrap {
     float: left;
     width: 100%;
     background: white !important;
  }

  td.number{
     text-align: center;
  }

  table{
     table-layout: auto;
  }
                       
  td.red{
      background: #ED4337 ;
      color: white;
    }

  td.gray{
      background: #E5E5E5;
      color: white;
    }

  td.green{
      background: #C0D890;
      color: white;
    }

  td.number,table th{
      text-align: center;
    }

  .form-selection{
    position: absolute;
    z-index: 5;
    width: 500px;
  }

  .form-selection .card{
    margin-bottom: 10px;
  }

  #pac-input,#pac-input-e,#siteid-input,#longlat-input,#sitename-input,#start,#end,#longlat-dis-input,#enode-input,#msisdn_input{
    color: black !important;
    width: 100%;
  }

  #map-place{
    text-align: center;
  }

  .ui-tooltip.ui-corner-all.ui-widget-shadow.ui-widget.ui-widget-content {
    display: none !important;
  }

  .label {
     color: #000;
     background-color: white;
     border: 1px solid #000;
     font-family: "Lucida Grande", "Arial", sans-serif;
     font-size: 12px;
     text-align: center;
     white-space: nowrap;
     padding: 2px;
    }

    .form-selection .card-body.col-md-6{
      padding: 0px;
      margin-bottom: 10px;
    }

    .dot{
      width: 27rem;
    }

  </style> 
    <div class="page-content">
    <div class="form-selection">
      <div class="card text-white bg-warning" style="max-width: 27rem;">
        <div class="btn btn-success dot"><span class="fa fa-eye-slash"> Hide</span></div>
      </div>

      <div class="main-content">
      <div class="card text-white bg-warning" style="max-width: 27rem;">
        <div class="card-header">BRANCH</div>
          <div class="card-body">
            <div class="form-check">
              <input class="form-check-input position-static" type="checkbox" id="p_branch" value="DENPASAR" name="pn_branch[]" aria-label="..."> DENPASAR
            </div>
            <div class="form-check">
              <input class="form-check-input position-static" type="checkbox" id="p_branch" value="MATARAM" name="pn_branch[]" aria-label="..."> MATARAM
            </div>
            <div class="form-check">
              <input class="form-check-input position-static" type="checkbox" id="p_branch" value="KUPANG" name="pn_branch[]" aria-label="..." > KUPANG
            </div>
          </div>
        </div>

        <div class="card text-white bg-warning" style="max-width: 27rem;">
          <div class="card-header">COMPETITOR</div>
            <div class="row">
              <div class="card-body col-md-6">
                <div class="form-check">
                  XL
                </div>
                <div class="form-check">
                  <input class="form-check-input position-static" type="checkbox" id="p_branch_xl" value="DENPASAR" name="pn_branch_xl[]" aria-label="..."> DENPASAR
                </div>
                <div class="form-check">
                  <input class="form-check-input position-static" type="checkbox" id="p_branch_xl" value="MATARAM" name="pn_branch_xl[]" aria-label="..."> MATARAM
                </div>
                <div class="form-check">
                  <input class="form-check-input position-static" type="checkbox" id="p_branch_xl" value="KUPANG" name="pn_branch_xl[]" aria-label="..." > KUPANG
                </div>
              </div>

              <div class="card-body col-md-6">
                <div class="form-check">
                  INDOSAT
                </div>
                <div class="form-check">
                  <input class="form-check-input position-static" type="checkbox" id="p_branch_sat" value="DENPASAR" name="pn_branch_sat[]" aria-label="..."> DENPASAR
                </div>
                <div class="form-check">
                  <input class="form-check-input position-static" type="checkbox" id="p_branch_sat" value="MATARAM" name="pn_branch_sat[]" aria-label="..."> MATARAM
                </div>
                <div class="form-check">
                  <input class="form-check-input position-static" type="checkbox" id="p_branch_sat" value="KUPANG" name="pn_branch_sat[]" aria-label="..." > KUPANG
                </div>
              </div>

              <div class="card-body col-md-6">
                <div class="form-check">
                  THREE
                </div>
                <div class="form-check">
                  <input class="form-check-input position-static" type="checkbox" id="p_branch_3" value="DENPASAR" name="pn_branch_3[]" aria-label="..."> DENPASAR
                </div>
                <div class="form-check">
                  <input class="form-check-input position-static" type="checkbox" id="p_branch_3" value="MATARAM" name="pn_branch_3[]" aria-label="..."> MATARAM
                </div>
                <div class="form-check">
                  <input class="form-check-input position-static" type="checkbox" id="p_branch_3" value="KUPANG" name="pn_branch_3[]" aria-label="..." > KUPANG
                </div>
              </div>

               <div class="card-body col-md-6">
                <div class="form-check">
                  SMARTFREN
                </div>
                <div class="form-check">
                  <input class="form-check-input position-static" type="checkbox" id="p_branch_sf" value="DENPASAR" name="pn_branch_sf[]" aria-label="..."> DENPASAR
                </div>
                <div class="form-check">
                  <input class="form-check-input position-static" type="checkbox" id="p_branch_sf" value="MATARAM" name="pn_branch_sf[]" aria-label="..."> MATARAM
                </div>
                <div class="form-check">
                  <input class="form-check-input position-static" type="checkbox" id="p_branch_sf" value="KUPANG" name="pn_branch_sf[]" aria-label="..." > KUPANG
                </div>
              </div>
            </div>
        </div>

        <div class="card text-white bg-warning" style="max-width: 27rem;">
          <div class="card-header">GNET TRACK</div>
            <div class="card-body">
              <div class="form-check" style="display: flex;">
                <input id="pac-input-e" class="longlat-dis-input-e" type="text" placeholder="Long-lat > ex : 115.12 -8.23">
                <input id="enode-input" type="text" placeholder="Masukkan eNodebID [240001] atau LAC-CI [17000-23423]">
                <span class="fa fa-info-circle" id="cap_enode" style="zoom: 200%;"> </span>
              </div>
            </div>
          </div>    

        <div class="card text-white bg-warning" style="max-width: 27rem;">
          <div class="card-header">SEARCH</div>
            <div class="card-body">
              <div class="form-check">
                <input id="pac-input" class="longlat-dis-input" type="text" placeholder="Long-lat > ex : 115.12 -8.23 | place > ex : KFC Jimbaran">
              </div>
              <div class="form-check">
                <input id="siteid-input" type="text" placeholder="site id > ex : APR001">
              </div>
              <div class="form-check">
                <input id="sitename-input" type="text" placeholder="site name > ex : S_APR001MA1_TISTAKARANGASEMTBG">
              </div>
              <!--
              <div class="form-check">
                <input id="longlat-dis-input" type="text" placeholder="SEARCH LONGLAT. Ex : 123.771 -8.17278. PRESS ENTER !">
              </div>              <div class="form-check">
                <input id="longlat-dis-input" type="text" placeholder="SEARCH LONGLAT AND DISTANCE. Ex : 123.771 -8.17278. PRESS ENTER !">
              </div>-->
            </div>
        </div>

        <div class="card text-white bg-warning" style="max-width: 27rem;">
          <div class="card-header">MEASURE DISTANCE</div>
            <div class="card-body">
              <div class="form-check">
                <button id="start" onclick="measureTool.start()">Measure</button>
                <button id="end" onclick="measureTool.end()">Clear</button>
              </div>
            </div>
        </div>

      </div>
      </div>
      
      <div id="loading" 
        style="z-index: 900;/* margin-top: 0px; */
        position: absolute;
        left: 40%;
        top: 50%;
        opacity:0.9;"></div>
      <div id='mapdiret' style="width: 100%; height: 100%;">
      </div>               
    </div>    


    <!-- START SCRIPTS -->
    <!-- START PLUGINS -->
    <script type="text/javascript" src="<?php echo $bppath?>js/plugins/jquery/jquery.min.js"></script>
    <script type="text/javascript" src="<?php echo $bppath?>js/plugins/jquery/jquery-ui.min.js"></script>
    <script type="text/javascript" src="<?php echo $bppath?>js/plugins/bootstrap/bootstrap.min.js"></script>        
    <!-- END PLUGINS -->                

    <!-- THIS PAGE PLUGINS -->
    <script type='text/javascript' src='<?php echo $bppath?>js/plugins/icheck/icheck.min.js'></script>
    <script type="text/javascript" src="<?php echo $bppath?>js/plugins/mcustomscrollbar/jquery.mCustomScrollbar.min.js"></script>
    
    <script type="text/javascript" src="<?php echo $bppath?>js/plugins/datatables/jquery.dataTables.min.js"></script>    
    <!-- END PAGE PLUGINS -->

    <!-- START TEMPLATE -->
    <script type="text/javascript" src="<?php echo $bppath?>js/settings.js"></script>
    <script type="text/javascript" src="<?php echo $bppath?>js/plugins2.js"></script>   
    <script type="text/javascript" src="<?php echo $bppath?>js/actions.js"></script>        
    <!-- END TEMPLATE -->

    <script src="<?php echo $bppath ?>js/plugins/highchart/code/highcharts.js"></script>
    <script src="<?php echo $bppath ?>js/plugins/highchart/code/modules/exporting.js">
    </script>
    <script src="<?php echo $bppath ?>js/plugins/highchart/code/export-csv.js"></script>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    
    <script src="js/MeasureTool.js"></script>
    <!--<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=true&&key=AIzaSyAstE_T3sDV1AZGSlq2kV4X4eWTWAnoyIQ&libraries=places,geometry"></script>-->
    <script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=true&&key=AIzaSyDMmDbfCdG2T-Vx2q1ANYogL3zoysgdxd0&libraries=places,geometry"></script>
    <script type="text/javascript" src="js/gmaps.js"></script>

    

    <script>
      $("#cap_enode").hover(function(){
        alert("Masukkan eNodebID [240001] atau LAC-CI [17000-23423]");
      })

      var markers = [];
      var markers_dis = [];
      var infowindow = new google.maps.InfoWindow();
      var myLatlng = new google.maps.LatLng(-8.605320,115.715088);
      var map = new google.maps.Map(document.getElementById('mapdiret'), {
        zoom: 7,
        center: myLatlng,
        gestureHandling: 'greedy',
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.TOP_CENTER
        }
      });

      $(".dot").click(function(){
        if($(".dot").html() == '<span class="fa fa-eye-slash"> Hide</span>'){
          $(".dot").html('<span class="fa fa-eye-slash"> Show</span>');
        }else{
          $(".dot").html('<span class="fa fa-eye-slash"> Hide</span>');
        }
        $(".form-selection .main-content").slideToggle("slow", function() {
          // Animation complete.
        });
      });

      var thePanorama = map.getStreetView();
      // change view
      google.maps.event.addListener(thePanorama, 'visible_changed', function() {
        // Display your street view visible UI
        if (thePanorama.getVisible()) {
          
          var panorama = new google.maps.StreetViewPanorama(
            document.getElementById('mapdiret'), {
              addressControlOptions: {
                position: google.maps.ControlPosition.TOP_CENTER, // <- change position
              },
              linksControl: true,
              panControl: true,
              enableCloseButton: true
            });
          // rewrite default options  
          map.setStreetView(panorama);

        } else {
          console.log('show default UI');
        }
      });

      // Note: constructed panorama objects have visible: true
      // set by default.
      /*var panorama = new google.maps.StreetViewPanorama(
          document.getElementById('mapdiret'), {
            position: {lat: 42.345573, lng: -71.098326},
            addressControlOptions: {
              position: google.maps.ControlPosition.BOTTOM_CENTER
            },
            linksControl: true,
            panControl: true,
            enableCloseButton: true
      });*/

      //================================================================================================
      //====================================Make Line & Distance========================================
      //================================================================================================
      measureTool = new MeasureTool(map, {
        contextMenu: false,
        showSegmentLength: true,
        tooltip: true,
        unit: MeasureTool.UnitTypeId.METRIC // metric, imperial, or nautical
      });

      measureTool.addListener('measure_start', () => {
        console.log('started');
        //measureTool.removeListener('measure_start')
      });
      measureTool.addListener('measure_end', (e) => {
        console.log('ended', e.result);
        //measureTool.removeListener('measure_end');
      });
      measureTool.addListener('measure_change', (e) => {
        console.log('changed', e.result);
        //measureTool.removeListener('measure_change');
      });

      //================================================================================================
      //====================================Input Address===============================================
      //================================================================================================
      var input = document.getElementById('pac-input');
      //var infowindowContent = document.getElementById('infowindow-content');
      var autocomplete = new google.maps.places.Autocomplete(input);
      autocomplete.bindTo('bounds', map);
      autocomplete.setFields(['address_components', 'geometry', 'icon', 'name']);
      autocomplete.addListener('place_changed', function(){
        var marker = new google.maps.Marker({
          map: map,
          anchorPoint: new google.maps.Point(0, -29)
        });  
        infowindow.close();
        marker.setVisible(false);

        //=======================================================
        //===================Make Line And Distance==============
        //=======================================================
        var place = autocomplete.getPlace();
        var place_lat = place.geometry.location.lat();
        var place_long = place.geometry.location.lng();
        //Clearing Markers Dis
        if(Array.isArray(markers_dis) && markers_dis.length){
          for (var i = 0; i < markers_dis.length; i++) {
              markers_dis[i].setMap(null);
          }
          markers_dis = [];
        }
        //alert(res[0]);
        //marker.setPosition({lat:place_lat, lng:place_long});
        //map.setCenter({lat:place_lat, lng:place_long});
        //map.setZoom(17);
        markers_dis.push(marker);
        var address = "";
        if (place.address_components) {
          address = [
            (place.address_components[0] && place.address_components[0].short_name || ''),
            (place.address_components[1] && place.address_components[1].short_name || ''),
            (place.address_components[2] && place.address_components[2].short_name || '')
          ].join(' ');
        }

        //TO DISTANCE
        $.ajax({
          type:"POST",
          data:{ISNULLFALSE:1,LAT:place_lat,LONG:place_long},
          url:"ajax/map_site_dapot_distance.php",
          beforeSend:function(data){
            //$("#loading").html("<img src='img/loading.gif' width='100' height='100'>");
          },
          success:function(data){
            dataParsed = JSON.parse(data);
            var marker = new google.maps.Marker({
              map: map,
              anchorPoint: new google.maps.Point(0, -29)
            });
            marker.setPosition({lat:parseFloat(dataParsed.LAT), lng:parseFloat(dataParsed.LONG)});
            infowindow.setContent("<div id='map-place'>The Closest SITE ID = "+dataParsed.SITEID+"<br/><b>Distance : "+dataParsed.DISTANCE+" Meter</b> From "+address+"</div>");
            infowindow.open(map, marker);

            var flightPlanCoordinates = [
              {lat: dataParsed.LAT, lng: dataParsed.LONG},
              {lat: place_lat, lng: place_long}
            ];
            var flightPath = new google.maps.Polyline({
              path: flightPlanCoordinates,
              geodesic: true,
              strokeColor: '#FF0000',
              strokeOpacity: 1.0,
              strokeWeight: 2
            });
            flightPath.setMap(map);
            markers_dis.push(flightPath);
            markers_dis.push(marker);
          }
        });
        //======================================END OF INPUT DISTANCE========================================

        if (!place.geometry) {
          // User entered the name of a Place that was not suggested and
          // pressed the Enter key, or the Place Details request failed.
          //window.alert("No details available for input: '" + place.name + "'");
          //return;
        }

        // If the place has a geometry, then present it on a map.
        if (place.geometry.viewport) {
          map.fitBounds(place.geometry.viewport);
        } else {
          map.setCenter(place.geometry.location);
          map.setZoom(17);  // Why 17? Because it looks good.
        }

        marker.setPosition(place.geometry.location);
        marker.setVisible(true);
        var address = '';
        if (place.address_components) {
          address = [
            (place.address_components[0] && place.address_components[0].short_name || ''),
            (place.address_components[1] && place.address_components[1].short_name || ''),
            (place.address_components[2] && place.address_components[2].short_name || '')
          ].join(' ');
        }
        //alert("Place Icon = "+place.icon)
        //infowindowContent.children['place-icon'].src = place.icon;
        //infowindowContent.children['place-name'].textContent = place.name;
        //infowindowContent.children['place-address'].textContent = address;
        infowindow.setContent("<div id='map-place'><img src = '"+place.icon+"' width='100' height='100' /><br/>"+ place.name+"<br/>"+address+"</div>");
        infowindow.open(map, marker);
      });
      autocomplete.setTypes([]);
      //setupClickListener('changetype-all', []);

      //AUTOCOMPLETE SITEID/SITENAME
      $.ajax({
        type:"POST",
        data:{ISNULLFALSE:1},
        url:"ajax/map_site_dapot.php",
        beforeSend:function(data){
          //$("#loading").html("<img src='img/loading.gif' width='100' height='100'>");
        },
        success:function(data){
          dataParsed_sid = JSON.parse(data);
          $("#siteid-input").autocomplete({
            source: dataParsed_sid.SITEID,
            select: function( event, ui ) {
              //alert(ui.item.label);
              //alert("LAT :" + dataParsed.TEMP_LAT[ui.item.label]);
              var marker = new google.maps.Marker({
                map: map,
                anchorPoint: new google.maps.Point(0, -29)
              });
              marker.setPosition({lat:dataParsed_sid.TEMP_LAT[ui.item.label], lng:dataParsed_sid.TEMP_LONG[ui.item.label]});
              map.setCenter({lat:dataParsed_sid.TEMP_LAT[ui.item.label], lng:dataParsed_sid.TEMP_LONG[ui.item.label]});
              map.setZoom(17);

              //infoWindow.close();
              infowindow.setContent("<div id='map-place'>"+ui.item.label+
                  "<br/> <a href='graph.php?SITE_ID="+ui.item.label+"&BAND=ALL&submit=SUBMIT' target='_blank'>See Performance</a></div>");
              infowindow.open(map, marker);

              flightPath.setMap(map);

            }
          });

          $("#sitename-input" ).autocomplete({
            source: dataParsed_sid.SITENAME,
            select: function( event, ui ) {
              //alert(ui.item.label);
              //alert("LAT :" + dataParsed.TEMP_LAT[ui.item.label]);
              var marker = new google.maps.Marker({
                map: map,
                anchorPoint: new google.maps.Point(0, -29)
              });
              marker.setPosition({lat:dataParsed_sid.TEMP_SN_LAT[ui.item.label], lng:dataParsed_sid.TEMP_SN_LONG[ui.item.label]});
              map.setCenter({lat:dataParsed_sid.TEMP_SN_LAT[ui.item.label], lng:dataParsed_sid.TEMP_SN_LONG[ui.item.label]});
              map.setZoom(17);

              //infoWindow.close();
              infowindow.setContent("<div id='map-place'>"+ui.item.label+"</div>");
              infowindow.open(map, marker);
            }
          });
        }
      });

      //SEARCH MSISDN
      $("#msisdn_input").keyup(function(e){
          if(e.keyCode == 13) {
            if($("#msisdn_input").val() == ""){
              alert("Please Input Your Msisdn !");
              return false;
            }

            var str = $("#msisdn_input").val();
            
            $.ajax({
              type:"POST",
              data:{MSISDN:str},
              url:"ajax/map_site_dapot_msisdn.php",
              beforeSend:function(data){
                $("#loading").html("<img src='img/loading.gif' width='100' height='100'>");
              },
              success:function(data){
                $("#loading").html("");
                dataParsed = JSON.parse(data)
                var marker = new google.maps.Marker({
                  map: map,
                  anchorPoint: new google.maps.Point(0,-29),
                  icon: { url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png" }
                });
                marker.setPosition({lat:parseFloat(dataParsed.LAT), lng:parseFloat(dataParsed.LONG)});
                map.setCenter({lat:parseFloat(dataParsed.LAT), lng:parseFloat(dataParsed.LONG)});
                map.setZoom(17);

                infowindow.setContent("<div>"+dataParsed.TEXT+"</div>");
                infowindow.open(map, marker);
              }
            });
          }
      });

      //SEARCH LONGLAT
      $("#longlat-input").keyup(function(e){
          if(e.keyCode == 13) {
              var str = $("#longlat-input").val();
              var res = str.split(" ");
              //alert(res[0]);
              var marker = new google.maps.Marker({
                map: map,
                anchorPoint: new google.maps.Point(0, -29)
              });
              marker.setPosition({lat:parseFloat(res[1]), lng:parseFloat(res[0])});
              map.setCenter({lat:parseFloat(res[1]), lng:parseFloat(res[0])});
              map.setZoom(17);
          }
      });

      //SEARCH LONGLAT DISTANCE
      $(".longlat-dis-input").keyup(function(e){
          if(e.keyCode == 13) {
            getDistanceLongLat(".longlat-dis-input");
          }
      });

      //SEARCH ENODEB POSITION
      $("#enode-input").keyup(function(e){
        if(e.keyCode == 13) {
            if($(".longlat-dis-input-e").val() == ""){
              alert("Set Your Long Lat First");
            }
            $.ajax({
              type:"POST",
              data:{LAC:$("#enode-input").val()},
              url:"ajax/map_site_dapot_enodeb.php",
              beforeSend:function(data){
                //$("#loading").html("<img src='img/loading.gif' width='100' height='100'>");
              },
              success:function(data){
                dataParsed = JSON.parse(data)
                if(dataParsed.ALERT != 0){
                  alert(dataParsed.ALERT);
                  return false;
                }

                getDistanceLongLat(".longlat-dis-input-e");
                var str = $(".longlat-dis-input-e").val();
                var res = str.split(" ");
                var marker = new google.maps.Marker({
                  map: map,
                  anchorPoint: new google.maps.Point(0, -29),
                  icon: { url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png" },
                  label: { text: dataParsed.LAC,color: 'black',fontSize: '12px'}
                });
                marker.setPosition({lat:parseFloat(dataParsed.LAT), lng:parseFloat(dataParsed.LONG)});
                //infowindow.setContent("<div id='map-place'>ENODEB = "+dataParsed.LAC+"</div>");
                //infowindow.open(map, marker);
                
                var flightPlanCoordinates = [
                  {lat: dataParsed.LAT, lng: dataParsed.LONG},
                  {lat: parseFloat(res[1]), lng: parseFloat(res[0])}
                ];
                var flightPath = new google.maps.Polyline({
                  path: flightPlanCoordinates,
                  geodesic: true,
                  strokeColor: 'blue',
                  strokeOpacity: 1.0,
                  strokeWeight: 2
                });
                flightPath.setMap(map);
                markers_dis.push(flightPath);
                markers_dis.push(marker);
              }
            });
        }
      });
      
      function getDistanceLongLat(classinput){
        //Clearing Markers Dis
        if(Array.isArray(markers_dis) && markers_dis.length){
          for (var i = 0; i < markers_dis.length; i++) {
              markers_dis[i].setMap(null);
          }
          markers_dis = [];
        }

        var str = $(classinput).val();
        var res = str.split(" ");
        //alert(res[0]);
        var marker = new google.maps.Marker({
          map: map,
          anchorPoint: new google.maps.Point(0, -29),
          label: { text: 'Defined Point' }
        });
        marker.setPosition({lat:parseFloat(res[1]), lng:parseFloat(res[0])});
        map.setCenter({lat:parseFloat(res[1]), lng:parseFloat(res[0])});
        map.setZoom(17);
        markers_dis.push(marker);

        //TO DISTANCE
        $.ajax({
          type:"POST",
          data:{ISNULLFALSE:1,LAT:res[1],LONG:res[0]},
          url:"ajax/map_site_dapot_distance.php",
          beforeSend:function(data){
            //$("#loading").html("<img src='img/loading.gif' width='100' height='100'>");
          },
          success:function(data){
            dataParsed = JSON.parse(data);
            var marker = new google.maps.Marker({
              map: map,
              anchorPoint: new google.maps.Point(0, -29),
              label: { text: dataParsed.SITEID }
            });
            marker.setPosition({lat:parseFloat(dataParsed.LAT), lng:parseFloat(dataParsed.LONG)});
            infowindow.setContent("<div id='map-place'>The Closest SITE ID = "+dataParsed.SITEID+"<br/><b>Distance : "+dataParsed.DISTANCE+" Meter</b> From Defined Point</div>");
            infowindow.open(map, marker);

            var flightPlanCoordinates = [
              {lat: dataParsed.LAT, lng: dataParsed.LONG},
              {lat: parseFloat(res[1]), lng: parseFloat(res[0])}
            ];
            var flightPath = new google.maps.Polyline({
              path: flightPlanCoordinates,
              geodesic: true,
              strokeColor: '#FF0000',
              strokeOpacity: 1.0,
              strokeWeight: 2
            });
            flightPath.setMap(map);
            markers_dis.push(flightPath);
            markers_dis.push(marker);
          }
        });
      }

      //========================================================================================
      //===================================Get Ajax Map Sector==================================
      //========================================================================================
      google.maps.event.addListener(map, "rightclick", function(event) {
        //getMap_Sector();
      });
      
      function getMap_Sector(SITE_ID){
         $.ajax({
          type:"POST",
          data:{SITE_ID:SITE_ID},
          url:"ajax/map_site_dapot_sector.php",
          beforeSend:function(data){
            $("#loading").html("<img src='img/loading.gif' width='100' height='100'>");
          },
          success:function(data){
            //DeleteMarkers();
            $("#loading").html("");
            //$(".col-md-12.hr #loading").html("");
            dataParsed = JSON.parse(data);

            for(i = 0;i < dataParsed["SITEID"].length ; i++){
              var flightPlanCoordinates = [
                {lat: dataParsed["S_1_lat"][i], lng: dataParsed["S_1_long"][i]},
                {lat: dataParsed["S_2_lat"][i], lng: dataParsed["S_2_long"][i]},
                {lat: dataParsed["S_3_lat"][i], lng: dataParsed["S_3_long"][i]},
                {lat: dataParsed["S_1_lat"][i], lng: dataParsed["S_1_long"][i]}
              ];

              //============================2G======================== 
              var fillColor = '';
              var theZindex = 0;
              if(dataParsed["BAND"][i] == "DCS"){
                fillColor = 'green';
                theZindex = 10;
                //polygon.setZIndex(4);
              }

              if(dataParsed["BAND"][i] == "GSM"){
                fillColor = 'blue';
                theZindex = 11;
              }

              //==================3G================================
              if(dataParsed["BAND"][i] == "U2100"){
                fillColor = 'yellow';
                theZindex = 12;
              }

              if(dataParsed["BAND"][i] == "U900"){
                fillColor = 'orange';
                theZindex = 13;
              }

              //==================4G================================
              if(dataParsed["BAND"][i] == "NB-IoT"){
                fillColor = 'gray';
                theZindex = 14;
              }

              if(dataParsed["BAND"][i] == "L1800"){
                fillColor = 'red';
                theZindex = 15;
              }

              if(dataParsed["BAND"][i] == "L900"){
                fillColor = 'purple';
                theZindex = 16;
              }

              if(dataParsed["BAND"][i] == "L2100"){
                fillColor = 'aqua';
                theZindex = 17;
              }

              if(dataParsed["BAND"][i] == "L2300"){
                fillColor = 'aquamarine';
                theZindex = 18;
              }

              if(dataParsed["BAND"][i] == "L2300 MM"){
                fillColor = 'chartreuse';
                theZindex = 19;
              }

              if(dataParsed["BAND"][i] == "L2300 8T8R"){
                fillColor = 'darkolivegreen';
                theZindex = 20;
              }             

              var flightPath = new google.maps.Polygon({
                path: flightPlanCoordinates,
                geodesic: true,
                strokeColor: fillColor,
                fillColor: fillColor,
                strokeOpacity: 1.0,
                strokeWeight: 2,
                fillOpacity: 0.5
              });
             
              flightPath.setOptions({ zIndex: theZindex });
              flightPath.setMap(map);
            }
          }
        })
      }

      function getMap_Comp_Sector(SITE_ID,PROV){
         $.ajax({
          type:"POST",
          data:{SITE_ID:SITE_ID,PROV:PROV},
          url:"ajax/map_site_dapot_comp_sector.php",
          beforeSend:function(data){
            $("#loading").html("<img src='img/loading.gif' width='100' height='100'>");
          },
          success:function(data){
            //DeleteMarkers();
            $("#loading").html("");
            //$(".col-md-12.hr #loading").html("");
            dataParsed = JSON.parse(data);

            for(i = 0;i < dataParsed["SITEID"].length ; i++){
              var flightPlanCoordinates = [
                {lat: dataParsed["S_1_lat"][i], lng: dataParsed["S_1_long"][i]},
                {lat: dataParsed["S_2_lat"][i], lng: dataParsed["S_2_long"][i]},
                {lat: dataParsed["S_3_lat"][i], lng: dataParsed["S_3_long"][i]},
                {lat: dataParsed["S_1_lat"][i], lng: dataParsed["S_1_long"][i]}
              ];

              //==================3G================================
              if(dataParsed["BAND"][i] == "900"){
                fillColor = 'yellow';
                theZindex = 12;
              }

              if(dataParsed["BAND"][i] == "1800"){
                fillColor = 'orange';
                theZindex = 13;
              }

              if(dataParsed["BAND"][i] == "2100"){
                fillColor = 'gray';
                theZindex = 14;
              }

              if(dataParsed["BAND"][i] == "3G"){
                fillColor = 'red';
                theZindex = 15;
              }

              if(dataParsed["BAND"][i] == "3G3"){
                fillColor = 'purple';
                theZindex = 16;
              }

              if(dataParsed["BAND"][i] == "3G2"){
                fillColor = 'aqua';
                theZindex = 17;
              }

              //==================4G================================
              if(dataParsed["BAND"][i] == "LTE"){
                fillColor = 'aquamarine';
                theZindex = 18;
              }

              

              var flightPath = new google.maps.Polygon({
                path: flightPlanCoordinates,
                geodesic: true,
                strokeColor: fillColor,
                fillColor: fillColor,
                strokeOpacity: 1.0,
                strokeWeight: 2,
                fillOpacity: 0.5
              });
             
              flightPath.setOptions({ zIndex: theZindex });
              flightPath.setMap(map);
            }
          }
        })
      }

      //========================================================================================
      //===================================Get Ajax Map=========================================
      //========================================================================================
      //getMap();
      $('input#p_branch').change(function(){
        getMap();
      });
      function getMap(){
        var BRANCH = $.map($('input#p_branch:checked'), function(e,i) {
            return ""+e.value;
        });
  
        $.ajax({
          type:"POST",
          data:{BRANCH:BRANCH},
          url:"ajax/map_site_dapot.php",
          beforeSend:function(data){
            $("#loading").html("<img src='img/loading.gif' width='100' height='100'>");
          },
          success:function(data){
              DeleteMarkers();
              $("#loading").html("");
              //$(".col-md-12.hr #loading").html("");
              dataParsed = JSON.parse(data);

              //Input Address
              var input = document.getElementById('pac-input');
              var autocomplete = new google.maps.places.Autocomplete(input);
              autocomplete.bindTo('bounds', map);
              autocomplete.setFields(['address_components', 'geometry', 'icon', 'name']);
              autocomplete.addListener('place_changed', function() {
                var marker = new google.maps.Marker({
                  map: map,
                  anchorPoint: new google.maps.Point(0, -29)
                });  
                infowindow.close();
                marker.setVisible(false);

                //=======================================================
                //===================Make Line And Distance==============
                //=======================================================
                var place = autocomplete.getPlace();
                var place_lat = place.geometry.location.lat();
                var place_long = place.geometry.location.lng();
                //Clearing Markers Dis
                if(Array.isArray(markers_dis) && markers_dis.length){
                  for (var i = 0; i < markers_dis.length; i++) {
                      markers_dis[i].setMap(null);
                  }
                  markers_dis = [];
                }
                //alert(res[0]);
                //marker.setPosition({lat:place_lat, lng:place_long});
                //map.setCenter({lat:place_lat, lng:place_long});
                //map.setZoom(17);
                markers_dis.push(marker);
                var address = "";
                if (place.address_components) {
                  address = [
                    (place.address_components[0] && place.address_components[0].short_name || ''),
                    (place.address_components[1] && place.address_components[1].short_name || ''),
                    (place.address_components[2] && place.address_components[2].short_name || '')
                  ].join(' ');
                }

                //TO DISTANCE
                $.ajax({
                  type:"POST",
                  data:{ISNULLFALSE:1,LAT:place_lat,LONG:place_long},
                  url:"ajax/map_site_dapot_distance.php",
                  beforeSend:function(data){
                    //$("#loading").html("<img src='img/loading.gif' width='100' height='100'>");
                  },
                  success:function(data){
                    dataParsed = JSON.parse(data);
                    var marker = new google.maps.Marker({
                      map: map,
                      anchorPoint: new google.maps.Point(0, -29)
                    });
                    marker.setPosition({lat:parseFloat(dataParsed.LAT), lng:parseFloat(dataParsed.LONG)});
                    infowindow.setContent("<div id='map-place'>The Closest SITE ID = "+dataParsed.SITEID+"<br/><b>Distance : "+dataParsed.DISTANCE+" Meter</b> From "+address+"</div>");
                    infowindow.open(map, marker);

                    var flightPlanCoordinates = [
                      {lat: dataParsed.LAT, lng: dataParsed.LONG},
                      {lat: place_lat, lng: place_long}
                    ];
                    var flightPath = new google.maps.Polyline({
                      path: flightPlanCoordinates,
                      geodesic: true,
                      strokeColor: '#FF0000',
                      strokeOpacity: 1.0,
                      strokeWeight: 2
                    });
                    flightPath.setMap(map);
                    markers_dis.push(flightPath);
                    markers_dis.push(marker);
                  }
                });
                //===================================END OF INPUT DISTANCE========================================

                if (!place.geometry) {
                  // User entered the name of a Place that was not suggested and
                  // pressed the Enter key, or the Place Details request failed.
                  //window.alert("No details available for input: '" + place.name + "'");
                  //return;
                }
                // If the place has a geometry, then present it on a map.
                if (place.geometry.viewport) {
                  map.fitBounds(place.geometry.viewport);
                } else {
                  map.setCenter(place.geometry.location);
                  map.setZoom(17);  // Why 17? Because it looks good.
                }
                marker.setPosition(place.geometry.location);
                marker.setVisible(true);
                var address = '';
                if (place.address_components) {
                  address = [
                    (place.address_components[0] && place.address_components[0].short_name || ''),
                    (place.address_components[1] && place.address_components[1].short_name || ''),
                    (place.address_components[2] && place.address_components[2].short_name || '')
                  ].join(' ');
                }
                //alert("Place Icon = "+place.icon)
                //infowindowContent.children['place-icon'].src = place.icon;
                //infowindowContent.children['place-name'].textContent = place.name;
                //infowindowContent.children['place-address'].textContent = address;
                infowindow.setContent("<div id='map-place'><img src = '"+place.icon+"' width='100' height='100' /><br/>"+ place.name+"<br/>"+address+"</div>");
                infowindow.open(map, marker);
              });
              autocomplete.setTypes([]);

              //alert(dataParsed["SITEID"].length);

              for(i = 0;i < dataParsed["SITEID"].length ; i++){
                myLatlng = new google.maps.LatLng(dataParsed["LAT"][i],dataParsed["LONG"][i]);
                if(dataParsed["REMARK"][i] == 0){
                  imgicon = "green1.png";
                }

                if(dataParsed["REMARK"][i] >= 1 && dataParsed["REMARK"][i] <= 2){
                  imgicon = "yellow1.png";
                }

                if(dataParsed["REMARK"][i] >= 3){
                  imgicon = "red1.png";
                }

                if(dataParsed["DEGRADED_KPI"][i] == "No Meas"){
                  //alert(dataParsed["DEGRADED_KPI"]);
                  imgicon = "black1.png";
                }

                var icon = {
                    url: "img/"+imgicon, // url
                    scaledSize: new google.maps.Size(10, 10), // scaled size
                    origin: new google.maps.Point(0,0), // origin
                    anchor: new google.maps.Point(0, 0) // anchor
                };
                circle = new google.maps.Marker({
                  position: myLatlng,
                  map: map,
                  icon:  icon,
                  optimized: true
                });

                //Add marker to the array.
                markers.push(circle);

                //circle.setAnimation(google.maps.Animation.BOUNCE);
                /*setInterval(function(){ 
                  circle.setAnimation(google.maps.Animation.BOUNCE); 
                }, 750);*/

                /* circle = map.addMarker({
                lat: dataParsed["LAT"][i],
                lng: dataParsed["LONG"][i],
                icon: icon,
                radius: 300,
                strokeColor: '#432070',
                strokeOpacity: 1,
                strokeWeight: 0,
                fillColor: 'blue',
                fillOpacity: 1
                });*/

                var content = 'SITE_ID = '+dataParsed["SITEID"][i]+
                  " <br/> SITE_NAME = "+dataParsed["SITENAME"][i]+
                  " <br/><br/> KPI DEGRADED : "+dataParsed["DEGRADED_KPI"][i]+
                  " <br/><br/> See Performance <br/> <a href='graph.php?SITE_ID="+dataParsed["SITEID"][i]+"&BAND=ALL&submit=SUBMIT' target='_blank'>ALL BAND</a> | <a href='graph.php?SITE_ID="+dataParsed["SITEID"][i]+"&BAND=2G&submit=SUBMIT' target='_blank'>2G</a> | <a href='graph.php?SITE_ID="+dataParsed["SITEID"][i]+"&BAND=3G&submit=SUBMIT' target='_blank'>3G</a> | <a href='graph.php?SITE_ID="+dataParsed["SITEID"][i]+"&BAND=4G&submit=SUBMIT' target='_blank'>4G</a> | <a style='cursor:pointer' href='http://10.67.98.98/hourlykpi/new/graph_transport.php?SITE_ID="+dataParsed["SITEID"][i]+"&submit=SUBMIT' targe'_blank'>Transport</a> <br/><br/><a onclick=ctc_kpi(\'"+dataParsed["SITEID"][i]+"\')>Copy</a>";

                  var C_SITE_ID = dataParsed["SITEID"][i];

                  google.maps.event.addListener(circle,'rightclick', (function(circle,content,C_SITE_ID,infowindow){ 
                      return function() {
                          //alert(C_SITE_ID);
                          getMap_Sector(C_SITE_ID);
                      };
                  })(circle,content,C_SITE_ID,infowindow));

                  google.maps.event.addListener(circle,'mouseover', (function(circle,content,infowindow){ 
                      return function() {
                          infowindow.setContent(content);
                          infowindow.open(map,circle);
                      };
                  })(circle,content,infowindow)); 

                  google.maps.event.addListener(circle,'mouseout', (function(circle,content,infowindow){ 
                      return function() {
                          //infowindow.close();
                      };
                  })(circle,content,infowindow));     
             }
          }
        });
    }


    //=======================================================
    //======================Competitor=======================
    //=======================================================
    //getMap();

    //=======================================
    //==================XL===================
    //=======================================
    var markers_xl = [];
    $('input#p_branch_xl').change(function(){
      getMap_comp_xl();
    });
    function getMap_comp_xl(){
      var BRANCH = $.map($('input#p_branch_xl:checked'), function(e,i) {
          return ""+e.value;
      });

      $.ajax({
        type:"POST",
        data:{BRANCH:BRANCH,PROVIDER:"XL"},
        url:"ajax/map_site_dapot_comp.php",
        beforeSend:function(data){
          $("#loading").html("<img src='img/loading.gif' width='100' height='100'>");
        },
        success:function(data){
            DeleteMarkers_xl();
            $("#loading").html("");
            //$(".col-md-12.hr #loading").html("");
            dataParsed = JSON.parse(data);

            for(i = 0;i < dataParsed["SITEID"].length ; i++){
              myLatlng = new google.maps.LatLng(dataParsed["LAT"][i],dataParsed["LONG"][i]);
              imgicon = "bluw1.png";
              var icon = {
                  url: "img/"+imgicon, // url
                  scaledSize: new google.maps.Size(10, 10), // scaled size
                  origin: new google.maps.Point(0,0), // origin
                  anchor: new google.maps.Point(0, 0) // anchor
              };
              circle = new google.maps.Marker({
                position: myLatlng,
                map: map,
                icon:  icon,
                optimized: true
              });

              //Add marker to the array.
              markers_xl.push(circle);

              var content = ' SITE_ID = '+dataParsed["SITEID"][i]+
                " <br/> SITE_NAME = "+dataParsed["SITENAME"][i];
              var C_SITE_ID = dataParsed["SITEID"][i];
              google.maps.event.addListener(circle,'rightclick', (function(circle,content,C_SITE_ID,infowindow){ 
                  return function() {
                      //alert(C_SITE_ID);
                      getMap_Comp_Sector(C_SITE_ID,"XL");
                  };
              })(circle,content,C_SITE_ID,infowindow));

              google.maps.event.addListener(circle,'mouseover', (function(circle,content,infowindow){ 
                  return function() {
                      infowindow.setContent(content);
                      infowindow.open(map,circle);
                  };
              })(circle,content,infowindow)); 

              google.maps.event.addListener(circle,'mouseout', (function(circle,content,infowindow){ 
                  return function() {
                      //infowindow.close();
                  };
              })(circle,content,infowindow));     
           }
        }
      });
    }

  //=======================================
  //==================THREE================
  //=======================================
  var markers_3 = [];
    $('input#p_branch_3').change(function(){
      getMap_comp_3();
    });
    function getMap_comp_3(){
      var BRANCH = $.map($('input#p_branch_3:checked'), function(e,i) {
          return ""+e.value;
      });

      $.ajax({
        type:"POST",
        data:{BRANCH:BRANCH,PROVIDER:"THREE"},
        url:"ajax/map_site_dapot_comp.php",
        beforeSend:function(data){
          $("#loading").html("<img src='img/loading.gif' width='100' height='100'>");
        },
        success:function(data){
            DeleteMarkers_3();
            $("#loading").html("");
            //$(".col-md-12.hr #loading").html("");
            dataParsed = JSON.parse(data);

            for(i = 0;i < dataParsed["SITEID"].length ; i++){
              myLatlng = new google.maps.LatLng(dataParsed["LAT"][i],dataParsed["LONG"][i]);
              imgicon = "purple1.png";
              var icon = {
                  url: "img/"+imgicon, // url
                  scaledSize: new google.maps.Size(10, 10), // scaled size
                  origin: new google.maps.Point(0,0), // origin
                  anchor: new google.maps.Point(0, 0) // anchor
              };
              circle = new google.maps.Marker({
                position: myLatlng,
                map: map,
                icon:  icon,
                optimized: true
              });

              //Add marker to the array.
              markers_3.push(circle);

              var content = ' SITE_ID = '+dataParsed["SITEID"][i]+
                " <br/> SITE_NAME = "+dataParsed["SITENAME"][i];
              var C_SITE_ID = dataParsed["SITEID"][i];
              google.maps.event.addListener(circle,'rightclick', (function(circle,content,C_SITE_ID,infowindow){ 
                  return function() {
                      //alert(C_SITE_ID);
                      getMap_Comp_Sector(C_SITE_ID,"THREE");
                  };
              })(circle,content,C_SITE_ID,infowindow));

              var content = ' SITE_ID = '+dataParsed["SITEID"][i]+
                " <br/> SITE_NAME = "+dataParsed["SITENAME"][i];

              google.maps.event.addListener(circle,'mouseover', (function(circle,content,infowindow){ 
                  return function() {
                      infowindow.setContent(content);
                      infowindow.open(map,circle);
                  };
              })(circle,content,infowindow)); 

              google.maps.event.addListener(circle,'mouseout', (function(circle,content,infowindow){ 
                  return function() {
                      //infowindow.close();
                  };
              })(circle,content,infowindow));     
           }
        }
      });
    }

    //=======================================
    //================INDOSAT================
    //=======================================
    var markers_sat = [];
    $('input#p_branch_sat').change(function(){
      getMap_comp_sat();
    });
    function getMap_comp_sat(){
      var BRANCH = $.map($('input#p_branch_sat:checked'), function(e,i) {
          return ""+e.value;
      });

      $.ajax({
        type:"POST",
        data:{BRANCH:BRANCH,PROVIDER:"ISAT"},
        url:"ajax/map_site_dapot_comp.php",
        beforeSend:function(data){
          $("#loading").html("<img src='img/loading.gif' width='100' height='100'>");
        },
        success:function(data){
            DeleteMarkers_sat();
            $("#loading").html("");
            //$(".col-md-12.hr #loading").html("");
            dataParsed = JSON.parse(data);

            for(i = 0;i < dataParsed["SITEID"].length ; i++){
              myLatlng = new google.maps.LatLng(dataParsed["LAT"][i],dataParsed["LONG"][i]);
              imgicon = "orange1.png";
              var icon = {
                  url: "img/"+imgicon, // url
                  scaledSize: new google.maps.Size(10, 10), // scaled size
                  origin: new google.maps.Point(0,0), // origin
                  anchor: new google.maps.Point(0, 0) // anchor
              };
              circle = new google.maps.Marker({
                position: myLatlng,
                map: map,
                icon:  icon,
                optimized: true
              });

              //Add marker to the array.
              markers_sat.push(circle);

              var content = ' SITE_ID = '+dataParsed["SITEID"][i]+
                " <br/> SITE_NAME = "+dataParsed["SITENAME"][i];
              var C_SITE_ID = dataParsed["SITEID"][i];
              google.maps.event.addListener(circle,'rightclick', (function(circle,content,C_SITE_ID,infowindow){ 
                  return function() {
                      //alert(C_SITE_ID);
                      getMap_Comp_Sector(C_SITE_ID,"ISAT");
                  };
              })(circle,content,C_SITE_ID,infowindow));

              var content = ' SITE_ID = '+dataParsed["SITEID"][i]+
                " <br/> SITE_NAME = "+dataParsed["SITENAME"][i];

              google.maps.event.addListener(circle,'mouseover', (function(circle,content,infowindow){ 
                  return function() {
                      infowindow.setContent(content);
                      infowindow.open(map,circle);
                  };
              })(circle,content,infowindow)); 

              google.maps.event.addListener(circle,'mouseout', (function(circle,content,infowindow){ 
                  return function() {
                      //infowindow.close();
                  };
              })(circle,content,infowindow));     
           }
        }
      });
    }

    //=======================================
    //================SMARTFREN==============
    //=======================================
    var markers_sf = [];
    $('input#p_branch_sf').change(function(){
      getMap_comp_sf();
    });
    function getMap_comp_sf(){
      var BRANCH = $.map($('input#p_branch_sf:checked'), function(e,i) {
          return ""+e.value;
      });

      $.ajax({
        type:"POST",
        data:{BRANCH:BRANCH,PROVIDER:"SMARTFREN"},
        url:"ajax/map_site_dapot_comp.php",
        beforeSend:function(data){
          $("#loading").html("<img src='img/loading.gif' width='100' height='100'>");
        },
        success:function(data){
            DeleteMarkers_sf();
            $("#loading").html("");
            //$(".col-md-12.hr #loading").html("");
            dataParsed = JSON.parse(data);

            for(i = 0;i < dataParsed["SITEID"].length ; i++){
              myLatlng = new google.maps.LatLng(dataParsed["LAT"][i],dataParsed["LONG"][i]);
              imgicon = "black1.png";
              var icon = {
                  url: "img/"+imgicon, // url
                  scaledSize: new google.maps.Size(10, 10), // scaled size
                  origin: new google.maps.Point(0,0), // origin
                  anchor: new google.maps.Point(0, 0) // anchor
              };
              circle = new google.maps.Marker({
                position: myLatlng,
                map: map,
                icon:  icon,
                optimized: true
              });

              //Add marker to the array.
              markers_sf.push(circle);

              var content = ' SITE_ID = '+dataParsed["SITEID"][i]+
                " <br/> SITE_NAME = "+dataParsed["SITENAME"][i];
              var C_SITE_ID = dataParsed["SITEID"][i];
              google.maps.event.addListener(circle,'rightclick', (function(circle,content,C_SITE_ID,infowindow){ 
                  return function() {
                      //alert(C_SITE_ID);
                      getMap_Comp_Sector(C_SITE_ID,"SMARTFREN");
                  };
              })(circle,content,C_SITE_ID,infowindow));

              var content = ' SITE_ID = '+dataParsed["SITEID"][i]+
                " <br/> SITE_NAME = "+dataParsed["SITENAME"][i];

              google.maps.event.addListener(circle,'mouseover', (function(circle,content,infowindow){ 
                  return function() {
                      infowindow.setContent(content);
                      infowindow.open(map,circle);
                  };
              })(circle,content,infowindow)); 

              google.maps.event.addListener(circle,'mouseout', (function(circle,content,infowindow){ 
                  return function() {
                      //infowindow.close();
                  };
              })(circle,content,infowindow));     
           }
        }
      });
    }

    function ctc_kpi(SITE_ID){
      $.ajax({
        type:"POST",
        data:{SITE_ID:SITE_ID},
        url:"ajax/map_site_dapot_ctc.php",
        beforeSend:function(data){
          $("#loading").html("<img src='img/loading.gif' width='100' height='100'>");
        },
        success:function(data){
          $("#loading").html("");
          dataParsed = JSON.parse(data);
          let copyFrom = document.createElement("textarea");
          document.body.appendChild(copyFrom);
          copyFrom.textContent = dataParsed.TEXT;
          copyFrom.select();
          document.execCommand("copy");
          copyFrom.remove();
          alert("Copied Text"+dataParsed.TEXT);
        }
      });
    }

    function DeleteMarkers() {
      //Loop through all the markers and remove
      if(Array.isArray(markers) && markers.length){
        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(null);
        }
        markers = [];
      }
    };

    function DeleteMarkers_xl() {
      //Loop through all the markers and remove
      if(Array.isArray(markers_xl) && markers_xl.length){
        for (var i = 0; i < markers_xl.length; i++) {
            markers_xl[i].setMap(null);
        }
        markers_xl = [];
      }
    };

    function DeleteMarkers_3() {
      //Loop through all the markers and remove
      if(Array.isArray(markers_3) && markers_3.length){
        for (var i = 0; i < markers_3.length; i++) {
            markers_3[i].setMap(null);
        }
        markers_3 = [];
      }
    };

    function DeleteMarkers_sat() {
      //Loop through all the markers and remove
      if(Array.isArray(markers_sat) && markers_sat.length){
        for (var i = 0; i < markers_sat.length; i++) {
            markers_sat[i].setMap(null);
        }
        markers_sat = [];
      }
    };

    function DeleteMarkers_sf() {
      //Loop through all the markers and remove
      if(Array.isArray(markers_sf) && markers_sf.length){
        for (var i = 0; i < markers_sf.length; i++) {
            markers_sf[i].setMap(null);
        }
        markers_sf = [];
      }
    };
    </script>
<!-- END SCRIPTS --> 
</body>
</html>






