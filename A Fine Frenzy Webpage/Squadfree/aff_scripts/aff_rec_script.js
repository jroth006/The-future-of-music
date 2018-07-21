(function() {
  var fn = function() {

    (function(root) {
      function now() {
        return new Date();
      }

      var force = false;

      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }







      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }

      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("d7b5053b-62bd-4f49-821a-a7c0b81d5626");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd7b5053b-62bd-4f49-821a-a7c0b81d5626' but no matching script tag was found. ")
        return false;
      }

      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-0.12.13.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.13.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-0.12.13.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-0.12.13.min.js"];

      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },

        function(Bokeh) {

        },

        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {

                  var docs_json = '{"39cc92a1-dff6-42ef-b58b-7f4e5cec0633":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.75},"fill_color":{"value":"#525b91"},"line_alpha":{"value":0.75},"line_color":{"value":"#525b91"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"4478725a-4a0d-4e2a-b628-52f76e274f6f","type":"Circle"},{"attributes":{"label":{"value":"PINES"},"renderers":[{"id":"a19b9acf-6620-4996-a921-ac2af18c0e2d","type":"GlyphRenderer"}]},"id":"f2e29c0e-5319-445c-8114-a3e7c29f1027","type":"LegendItem"},{"attributes":{"background_fill_alpha":{"value":0.0},"background_fill_color":{"value":"#F8F9FB"},"below":[{"id":"7aa55175-da52-4d31-9934-99d950e71a21","type":"LinearAxis"}],"border_fill_alpha":{"value":0.0},"left":[{"id":"02c010c9-9232-46b5-9d3c-51c128bcf388","type":"LinearAxis"}],"outline_line_alpha":{"value":0.0},"plot_height":800,"plot_width":1200,"renderers":[{"id":"7aa55175-da52-4d31-9934-99d950e71a21","type":"LinearAxis"},{"id":"ec265308-4e9f-4369-bc0c-02ab2912be6c","type":"Grid"},{"id":"02c010c9-9232-46b5-9d3c-51c128bcf388","type":"LinearAxis"},{"id":"9cc0c840-386c-42d9-9336-07ef43a7a14a","type":"Grid"},{"id":"69a3c1ad-5e4c-4e37-91a6-7ebd85f0c347","type":"BoxAnnotation"},{"id":"4042e5c3-665a-49ed-b920-e1be8c74794d","type":"BoxAnnotation"},{"id":"4977381d-0e49-4dd4-91eb-8b9d00fb5563","type":"PolyAnnotation"},{"id":"a19b9acf-6620-4996-a921-ac2af18c0e2d","type":"GlyphRenderer"},{"id":"0c552e55-c14e-4515-beb4-b44367e600b6","type":"GlyphRenderer"},{"id":"60a7d8be-bba3-4d97-9fef-456e0dce0eb2","type":"GlyphRenderer"},{"id":"4bf93cd6-625c-41d1-a663-1960af8f3488","type":"GlyphRenderer"},{"id":"dd0581d1-5264-406d-9c86-97b1da4c0f8b","type":"Legend"}],"right":[{"id":"dd0581d1-5264-406d-9c86-97b1da4c0f8b","type":"Legend"}],"title":{"id":"1cfa0c2d-f84b-42e6-bc92-e11df92053fe","type":"Title"},"toolbar":{"id":"50474032-833e-42ba-98e1-1c5e28cf3c64","type":"Toolbar"},"toolbar_location":"above","x_range":{"id":"411ed120-c4b4-4225-9edf-f6f524bd061a","type":"DataRange1d"},"x_scale":{"id":"c305d7eb-344f-4f51-a9de-a71258f8877a","type":"LinearScale"},"y_range":{"id":"c9ab2782-455e-4205-b2a4-5d2db5f10d8d","type":"DataRange1d"},"y_scale":{"id":"d03c0284-dc4a-46f3-bf08-0da9d4c5fb8b","type":"LinearScale"}},"id":"47d98748-088d-439f-aa5b-b665f656ee95","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"69a3c1ad-5e4c-4e37-91a6-7ebd85f0c347","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.75},"fill_color":{"value":"#bc1818"},"line_alpha":{"value":0.75},"line_color":{"value":"#bc1818"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"83dc53b1-980e-4cc0-b837-147588ee023f","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4042e5c3-665a-49ed-b920-e1be8c74794d","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["x","y","song_name","album_name","album_number","index"],"data":{"album_name":["Recommended Popular Song","Recommended Popular Song","Recommended Popular Song","Recommended Popular Song","Recommended Popular Song","Recommended Popular Song","Recommended Popular Song","Recommended Popular Song"],"album_number":["None","None","None","None","None","None","None","None"],"index":[39,40,41,42,43,44,45,46],"song_name":["How Deep Is Your Love","Hide and Seek","Iris","Gravity","The Call","I Do","In Love Again","Memory"],"x":{"__ndarray__":"MResRFHPxME0NgPC7WbTRGmAqMNkWE5EMMicRH8DfEQ=","dtype":"float32","shape":[8]},"y":{"__ndarray__":"FGQJRNiuSERx9SbEGL17RPADgsTNAJ3DX/W8RLy4a0Q=","dtype":"float32","shape":[8]}}},"id":"91d3590f-3a51-458c-bece-38c809605764","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.75},"fill_color":{"value":"#000000"},"line_alpha":{"value":0.75},"line_color":{"value":"#000000"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"0853ded5-4a40-411d-8b5d-b52f1de44df7","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"47d98748-088d-439f-aa5b-b665f656ee95","subtype":"Figure","type":"Plot"},"ticker":{"id":"6238dc0a-2837-44f0-a839-7554f895f67f","type":"BasicTicker"},"visible":false},"id":"9cc0c840-386c-42d9-9336-07ef43a7a14a","type":"Grid"},{"attributes":{"background_fill_alpha":{"value":0.0},"border_line_alpha":{"value":0.0},"click_policy":"mute","items":[{"id":"f2e29c0e-5319-445c-8114-a3e7c29f1027","type":"LegendItem"},{"id":"5c8aad24-a74c-4d13-9fc5-e45f825ea4bf","type":"LegendItem"},{"id":"bb77cdce-0fa6-4b76-ae6f-cfa635e93e08","type":"LegendItem"},{"id":"846ae162-5c1b-4e56-8574-3afb70160934","type":"LegendItem"}],"label_text_color":{"value":"black"},"location":[0,30],"plot":{"id":"47d98748-088d-439f-aa5b-b665f656ee95","subtype":"Figure","type":"Plot"}},"id":"dd0581d1-5264-406d-9c86-97b1da4c0f8b","type":"Legend"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"9b44cafc-0779-4d81-b018-9c180432e2aa","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"4977381d-0e49-4dd4-91eb-8b9d00fb5563","type":"PolyAnnotation"},{"attributes":{},"id":"e8546216-804f-4846-b8b8-292e085cfb54","type":"ResetTool"},{"attributes":{"callback":null,"overlay":{"id":"4977381d-0e49-4dd4-91eb-8b9d00fb5563","type":"PolyAnnotation"}},"id":"c179067c-bdcc-4374-a56d-77c6e7e4cfef","type":"LassoSelectTool"},{"attributes":{"callback":null,"column_names":["x","y","song_name","album_name","album_number","index"],"data":{"album_name":["One Cell In The Sea","One Cell In The Sea","One Cell In The Sea","One Cell In The Sea","One Cell In The Sea","One Cell In The Sea","One Cell In The Sea","One Cell In The Sea","One Cell In The Sea","One Cell In The Sea","One Cell In The Sea","One Cell In The Sea","One Cell In The Sea","One Cell In The Sea","One Cell In The Sea"],"album_number":[1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0],"index":[24,25,26,27,28,29,30,31,32,33,34,35,36,37,38],"song_name":["Come On, Come Out","The Minnow &amp; The Trout","Whisper","You Picked Me","Rangers","Almost Lover","Think Of You","Ashes And Wine","Liar, Liar","Last Of Days","Lifesize","Near To You","Hope For The Hopeless","Borrowed Time","Almost Lover - Remix Edit"],"x":{"__ndarray__":"AADAfwAAwH8AAMB/AADAfwAAwH8AAMB/AADAfwAAwH8AAMB/AADAfwAAwH8AAMB/AADAfwAAwH8AAMB/","dtype":"float32","shape":[15]},"y":{"__ndarray__":"AADAfwAAwH8AAMB/AADAfwAAwH8AAMB/AADAfwAAwH8AAMB/AADAfwAAwH8AAMB/AADAfwAAwH8AAMB/","dtype":"float32","shape":[15]}}},"id":"180b84b3-8c4b-4ebd-999d-db330276f7ac","type":"ColumnDataSource"},{"attributes":{},"id":"5c5af6ea-d1ac-46ba-86d3-16c9e87fa0c4","type":"BasicTickFormatter"},{"attributes":{},"id":"3cb3a22e-8593-470d-8112-9b8d3926269c","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"cd39f651-334b-43ba-b315-4f587393e599","type":"Circle"},{"attributes":{},"id":"579d1f85-e266-4cc9-976c-a95dce5efed4","type":"BasicTickFormatter"},{"attributes":{},"id":"d03c0284-dc4a-46f3-bf08-0da9d4c5fb8b","type":"LinearScale"},{"attributes":{"overlay":{"id":"4042e5c3-665a-49ed-b920-e1be8c74794d","type":"BoxAnnotation"}},"id":"d5ca6b27-78e5-4ea7-b6bb-ae0be729983c","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["x","y","song_name","album_name","album_number","index"],"data":{"album_name":["PINES","PINES","PINES","PINES","PINES","PINES","PINES","PINES","PINES","PINES","PINES"],"album_number":[4.0,4.0,4.0,4.0,4.0,4.0,4.0,4.0,4.0,4.0,4.0],"index":[0,1,2,3,4,5,6,7,8,9,10],"song_name":["Pinesong","Winds Of Wander","Avalanches (Culla&#x27;s Song)","Riversong","The Sighting","Dream In The Dark","Sailingsong","Sadseasong","They Can&#x27;t If You Don&#x27;t Let Them","Dance Of The Gray Whales","It&#x27;s Alive"],"x":{"__ndarray__":"tchQxBv8qESqIBNDPPSIRPny9kPgO97D4mi4RKXruUOw/WPEWizKRGul0EM=","dtype":"float32","shape":[11]},"y":{"__ndarray__":"yg3BQ2yd28Og7wPDNLSrQqpP60TusSBETaZzxAFV0MSkWGBE3KjpQKAQB8Q=","dtype":"float32","shape":[11]}}},"id":"396eac83-6544-4fa8-8727-a47f0d10ff84","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#525b91"},"line_alpha":{"value":0.1},"line_color":{"value":"#525b91"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"ce98065e-dcff-403c-b493-7afdc89e8007","type":"Circle"},{"attributes":{"plot":{"id":"47d98748-088d-439f-aa5b-b665f656ee95","subtype":"Figure","type":"Plot"},"ticker":{"id":"3cb3a22e-8593-470d-8112-9b8d3926269c","type":"BasicTicker"},"visible":false},"id":"ec265308-4e9f-4369-bc0c-02ab2912be6c","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#bc1818"},"line_alpha":{"value":0.1},"line_color":{"value":"#bc1818"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"dba90b0f-1707-468d-8fb2-dfe07e2cb332","type":"Circle"},{"attributes":{"data_source":{"id":"396eac83-6544-4fa8-8727-a47f0d10ff84","type":"ColumnDataSource"},"glyph":{"id":"0853ded5-4a40-411d-8b5d-b52f1de44df7","type":"Circle"},"hover_glyph":null,"muted_glyph":{"id":"671e8bff-4ebf-4b09-96f5-654c1bf617e0","type":"Circle"},"nonselection_glyph":{"id":"c864a33a-e100-40cf-b54b-ae18b95353e8","type":"Circle"},"selection_glyph":null,"view":{"id":"ae2515ea-d2f0-4695-8360-100be97f06bf","type":"CDSView"}},"id":"a19b9acf-6620-4996-a921-ac2af18c0e2d","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"411ed120-c4b4-4225-9edf-f6f524bd061a","type":"DataRange1d"},{"attributes":{},"id":"c305d7eb-344f-4f51-a9de-a71258f8877a","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"1cfa0c2d-f84b-42e6-bc92-e11df92053fe","type":"Title"},{"attributes":{"callback":null},"id":"c9ab2782-455e-4205-b2a4-5d2db5f10d8d","type":"DataRange1d"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"579d1f85-e266-4cc9-976c-a95dce5efed4","type":"BasicTickFormatter"},"major_label_text_font_size":{"value":"0pt"},"major_tick_line_color":{"value":null},"minor_tick_line_color":{"value":null},"plot":{"id":"47d98748-088d-439f-aa5b-b665f656ee95","subtype":"Figure","type":"Plot"},"ticker":{"id":"3cb3a22e-8593-470d-8112-9b8d3926269c","type":"BasicTicker"}},"id":"7aa55175-da52-4d31-9934-99d950e71a21","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#000000"},"line_alpha":{"value":0.1},"line_color":{"value":"#000000"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"671e8bff-4ebf-4b09-96f5-654c1bf617e0","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"7a8090be-4174-43df-b55b-9059fe643eb9","type":"Circle"},{"attributes":{"callback":null,"overlay":{"id":"69a3c1ad-5e4c-4e37-91a6-7ebd85f0c347","type":"BoxAnnotation"},"renderers":[{"id":"a19b9acf-6620-4996-a921-ac2af18c0e2d","type":"GlyphRenderer"},{"id":"0c552e55-c14e-4515-beb4-b44367e600b6","type":"GlyphRenderer"},{"id":"60a7d8be-bba3-4d97-9fef-456e0dce0eb2","type":"GlyphRenderer"},{"id":"4bf93cd6-625c-41d1-a663-1960af8f3488","type":"GlyphRenderer"}]},"id":"b07ca17f-3e31-4162-8229-f173dc793ee4","type":"BoxSelectTool"},{"attributes":{"source":{"id":"91d3590f-3a51-458c-bece-38c809605764","type":"ColumnDataSource"}},"id":"c8b5ebc8-e1a0-49d7-a17c-d19d8a42f306","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y","song_name","album_name","album_number","index"],"data":{"album_name":["Bomb In A Birdcage","Bomb In A Birdcage","Bomb In A Birdcage","Bomb In A Birdcage","Bomb In A Birdcage","Bomb In A Birdcage","Bomb In A Birdcage","Bomb In A Birdcage","Bomb In A Birdcage","Bomb In A Birdcage","Bomb In A Birdcage","Bomb In A Birdcage","Bomb In A Birdcage"],"album_number":[2.0,2.0,2.0,2.0,2.0,2.0,2.0,2.0,3.0,2.0,2.0,2.0,2.0],"index":[11,12,13,14,15,16,17,18,19,20,21,22,23],"song_name":["What I Wouldn&#x27;t Do","New Heights","Electric Twist","Blow Away","Happier","Swan Song","Elements","The World Without","Bird of the Summer","Stood Up","The Beacon","Bird Of The Summer","Silent War"],"x":{"__ndarray__":"J7yAwqAjjcSraa9D3+OQw+N8MkR5pLjExG2Ew+LzQMNKwFdEuuLrQ4jxm0MAAMB/AADAfw==","dtype":"float32","shape":[13]},"y":{"__ndarray__":"+mbBRCysvcM7MDzFoNqKw1EEqkQJBDFEGwoARYAKwsSk8U7ESgA+RH14hsQAAMB/AADAfw==","dtype":"float32","shape":[13]}}},"id":"b47e3506-cf1e-4cb4-b11c-84416634e369","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"425d4c28-b81b-4fc7-83da-2ddab04c0104","type":"HoverTool"},{"id":"b07ca17f-3e31-4162-8229-f173dc793ee4","type":"BoxSelectTool"},{"id":"d5ca6b27-78e5-4ea7-b6bb-ae0be729983c","type":"BoxZoomTool"},{"id":"c179067c-bdcc-4374-a56d-77c6e7e4cfef","type":"LassoSelectTool"},{"id":"e8546216-804f-4846-b8b8-292e085cfb54","type":"ResetTool"}]},"id":"50474032-833e-42ba-98e1-1c5e28cf3c64","type":"Toolbar"},{"attributes":{"label":{"value":"Bomb In A Birdcage"},"renderers":[{"id":"0c552e55-c14e-4515-beb4-b44367e600b6","type":"GlyphRenderer"}]},"id":"5c8aad24-a74c-4d13-9fc5-e45f825ea4bf","type":"LegendItem"},{"attributes":{"label":{"value":"Recommended Popular Song"},"renderers":[{"id":"4bf93cd6-625c-41d1-a663-1960af8f3488","type":"GlyphRenderer"}]},"id":"846ae162-5c1b-4e56-8574-3afb70160934","type":"LegendItem"},{"attributes":{"data_source":{"id":"180b84b3-8c4b-4ebd-999d-db330276f7ac","type":"ColumnDataSource"},"glyph":{"id":"a452bfe8-f115-4ea1-97bd-0cb46b980cca","type":"Circle"},"hover_glyph":null,"muted_glyph":{"id":"11e683a7-4eb5-441b-b7f9-49a13b353692","type":"Circle"},"nonselection_glyph":{"id":"9b44cafc-0779-4d81-b018-9c180432e2aa","type":"Circle"},"selection_glyph":null,"view":{"id":"161017d6-f2f6-40c1-90be-6776d5f98bb9","type":"CDSView"}},"id":"60a7d8be-bba3-4d97-9fef-456e0dce0eb2","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#4e6b4e"},"line_alpha":{"value":0.1},"line_color":{"value":"#4e6b4e"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"11e683a7-4eb5-441b-b7f9-49a13b353692","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"c864a33a-e100-40cf-b54b-ae18b95353e8","type":"Circle"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"5c5af6ea-d1ac-46ba-86d3-16c9e87fa0c4","type":"BasicTickFormatter"},"major_label_text_font_size":{"value":"0pt"},"major_tick_line_color":{"value":null},"minor_tick_line_color":{"value":null},"plot":{"id":"47d98748-088d-439f-aa5b-b665f656ee95","subtype":"Figure","type":"Plot"},"ticker":{"id":"6238dc0a-2837-44f0-a839-7554f895f67f","type":"BasicTicker"}},"id":"02c010c9-9232-46b5-9d3c-51c128bcf388","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.75},"fill_color":{"value":"#4e6b4e"},"line_alpha":{"value":0.75},"line_color":{"value":"#4e6b4e"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"a452bfe8-f115-4ea1-97bd-0cb46b980cca","type":"Circle"},{"attributes":{"data_source":{"id":"b47e3506-cf1e-4cb4-b11c-84416634e369","type":"ColumnDataSource"},"glyph":{"id":"4478725a-4a0d-4e2a-b628-52f76e274f6f","type":"Circle"},"hover_glyph":null,"muted_glyph":{"id":"ce98065e-dcff-403c-b493-7afdc89e8007","type":"Circle"},"nonselection_glyph":{"id":"7a8090be-4174-43df-b55b-9059fe643eb9","type":"Circle"},"selection_glyph":null,"view":{"id":"2d1420f7-8870-4cc2-8559-4123006d9b51","type":"CDSView"}},"id":"0c552e55-c14e-4515-beb4-b44367e600b6","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"91d3590f-3a51-458c-bece-38c809605764","type":"ColumnDataSource"},"glyph":{"id":"83dc53b1-980e-4cc0-b837-147588ee023f","type":"Circle"},"hover_glyph":null,"muted_glyph":{"id":"dba90b0f-1707-468d-8fb2-dfe07e2cb332","type":"Circle"},"nonselection_glyph":{"id":"cd39f651-334b-43ba-b315-4f587393e599","type":"Circle"},"selection_glyph":null,"view":{"id":"c8b5ebc8-e1a0-49d7-a17c-d19d8a42f306","type":"CDSView"}},"id":"4bf93cd6-625c-41d1-a663-1960af8f3488","type":"GlyphRenderer"},{"attributes":{"source":{"id":"180b84b3-8c4b-4ebd-999d-db330276f7ac","type":"ColumnDataSource"}},"id":"161017d6-f2f6-40c1-90be-6776d5f98bb9","type":"CDSView"},{"attributes":{"label":{"value":"One Cell In The Sea"},"renderers":[{"id":"60a7d8be-bba3-4d97-9fef-456e0dce0eb2","type":"GlyphRenderer"}]},"id":"bb77cdce-0fa6-4b76-ae6f-cfa635e93e08","type":"LegendItem"},{"attributes":{"callback":null,"tooltips":[["Album #: ","@album_number"],["Album Name: ","@album_name"],["Song Name: ","@song_name"]]},"id":"425d4c28-b81b-4fc7-83da-2ddab04c0104","type":"HoverTool"},{"attributes":{"source":{"id":"396eac83-6544-4fa8-8727-a47f0d10ff84","type":"ColumnDataSource"}},"id":"ae2515ea-d2f0-4695-8360-100be97f06bf","type":"CDSView"},{"attributes":{},"id":"6238dc0a-2837-44f0-a839-7554f895f67f","type":"BasicTicker"},{"attributes":{"source":{"id":"b47e3506-cf1e-4cb4-b11c-84416634e369","type":"ColumnDataSource"}},"id":"2d1420f7-8870-4cc2-8559-4123006d9b51","type":"CDSView"}],"root_ids":["47d98748-088d-439f-aa5b-b665f656ee95"]},"title":"Bokeh Application","version":"0.12.13"}}';
                  var render_items = [{"docid":"39cc92a1-dff6-42ef-b58b-7f4e5cec0633","elementid":"d7b5053b-62bd-4f49-821a-a7c0b81d5626","modelid":"47d98748-088d-439f-aa5b-b665f656ee95"}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);

                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-0.12.13.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-0.12.13.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.13.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.13.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-tables-0.12.13.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-tables-0.12.13.min.css");
        }
      ];

      function run_inline_js() {

        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }

      }

      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
