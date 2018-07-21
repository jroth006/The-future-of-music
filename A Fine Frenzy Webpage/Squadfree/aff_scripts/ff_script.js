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
      };var element = document.getElementById("d3145aa2-c687-4c6d-bb25-cee955e64ca4");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd3145aa2-c687-4c6d-bb25-cee955e64ca4' but no matching script tag was found. ")
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

                  var docs_json = '{"e2d0f472-af5f-45be-bd52-9a65b4471886":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"e7e248c5-8530-4371-a7ab-9ffd87e5ac93","type":"PolyAnnotation"},{"attributes":{},"id":"f812d294-667e-40d4-bb74-c36327939243","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#000000"},"line_alpha":{"value":0.1},"line_color":{"value":"#000000"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"6183eee8-e24f-4439-8b1e-55dfd7924d65","type":"Circle"},{"attributes":{"callback":null,"column_names":["album_name","song_name","album_number","x","y","index"],"data":{"album_name":["Bomb In A Birdcage","Bomb In A Birdcage","Bomb In A Birdcage","Bomb In A Birdcage","Bomb In A Birdcage","Bomb In A Birdcage","Bomb In A Birdcage","Bomb In A Birdcage","Bomb In A Birdcage","Bomb In A Birdcage","Bomb In A Birdcage","Bomb In A Birdcage","Bomb In A Birdcage"],"album_number":{"__ndarray__":"AAAAAAAAAEAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAEAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAEAAAAAAAAAAQAAAAAAAAAhAAAAAAAAAAEAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAEA=","dtype":"float64","shape":[13]},"index":[11,12,13,14,15,16,17,18,19,20,21,22,23],"song_name":["What I Wouldn&#x27;t Do","New Heights","Electric Twist","Blow Away","Happier","Swan Song","Elements","The World Without","Bird of the Summer","Stood Up","The Beacon","Bird Of The Summer","Silent War"],"x":{"__ndarray__":"EFsBQxzaFMMC4itDVbjrwncVS8GrTmnDcE2+wmZU9cJJihBDHbVzQY8jJUMVnzfCHb+WQw==","dtype":"float32","shape":[13]},"y":{"__ndarray__":"36cYw5SoPcO/7hpDEtQuQ0uICsNsd1LDSv0DwwejR8KxoZjCZJ5zwsk5lcNx9VZDqVjNwg==","dtype":"float32","shape":[13]}}},"id":"4ee43eb5-b91e-4631-a0c3-05d5e35038e1","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#4e6b4e"},"line_alpha":{"value":0.1},"line_color":{"value":"#4e6b4e"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"2aa95919-63ec-4478-a919-772779ff1eed","type":"Circle"},{"attributes":{"callback":null,"overlay":{"id":"ae06752e-1196-4ddd-83eb-dc3adcb1ff6d","type":"BoxAnnotation"},"renderers":[{"id":"04fe2004-8564-43ec-97c6-282838906661","type":"GlyphRenderer"},{"id":"98d7cc1f-0dc1-4ab7-9ca1-68c889b989fd","type":"GlyphRenderer"},{"id":"369f617e-aa65-4dd3-b2cd-762c0ac6e127","type":"GlyphRenderer"}]},"id":"d62fd370-0294-43fb-a2b1-ffd2001df87d","type":"BoxSelectTool"},{"attributes":{"callback":null,"overlay":{"id":"e7e248c5-8530-4371-a7ab-9ffd87e5ac93","type":"PolyAnnotation"}},"id":"19f00060-faa7-40eb-b975-6568c125a1b6","type":"LassoSelectTool"},{"attributes":{"callback":null,"column_names":["album_name","song_name","album_number","x","y","index"],"data":{"album_name":["One Cell In The Sea","One Cell In The Sea","One Cell In The Sea","One Cell In The Sea","One Cell In The Sea","One Cell In The Sea","One Cell In The Sea","One Cell In The Sea","One Cell In The Sea","One Cell In The Sea","One Cell In The Sea","One Cell In The Sea","One Cell In The Sea","One Cell In The Sea","One Cell In The Sea"],"album_number":{"__ndarray__":"AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/","dtype":"float64","shape":[15]},"index":[24,25,26,27,28,29,30,31,32,33,34,35,36,37,38],"song_name":["Come On, Come Out","The Minnow &amp; The Trout","Whisper","You Picked Me","Rangers","Almost Lover","Think Of You","Ashes And Wine","Liar, Liar","Last Of Days","Lifesize","Near To You","Hope For The Hopeless","Borrowed Time","Almost Lover - Remix Edit"],"x":{"__ndarray__":"FRHZwtyzM0Mxw4HDLWhNQpJmwkLwpflBV4xlQ+7BS8N4aNdBAADAfwAAwH8AAMB/AADAfwAAwH8AAMB/","dtype":"float32","shape":[15]},"y":{"__ndarray__":"zli+QuoCfEPcQOzCqQgqw1tg70JPhCNDcevuQfNGCMK+ELJCAADAfwAAwH8AAMB/AADAfwAAwH8AAMB/","dtype":"float32","shape":[15]}}},"id":"12b6992b-5460-44ee-aafc-f0bd452de527","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"d647972c-58ac-4071-96ef-4466e1ed3d45","subtype":"Figure","type":"Plot"},"ticker":{"id":"95d775a6-cb7f-4f8b-97b2-d6093b2e5c5b","type":"BasicTicker"},"visible":false},"id":"3647e1ed-87bd-4af9-bc2c-c0dd4086f907","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ae06752e-1196-4ddd-83eb-dc3adcb1ff6d","type":"BoxAnnotation"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"7807584b-9051-4047-bff1-c0284f38105f","type":"BasicTickFormatter"},"major_label_text_font_size":{"value":"0pt"},"major_tick_line_color":{"value":null},"minor_tick_line_color":{"value":null},"plot":{"id":"d647972c-58ac-4071-96ef-4466e1ed3d45","subtype":"Figure","type":"Plot"},"ticker":{"id":"95d775a6-cb7f-4f8b-97b2-d6093b2e5c5b","type":"BasicTicker"}},"id":"50b51883-dd7a-413c-b87e-c287f6c87637","type":"LinearAxis"},{"attributes":{"label":{"value":"One Cell In The Sea"},"renderers":[{"id":"369f617e-aa65-4dd3-b2cd-762c0ac6e127","type":"GlyphRenderer"}]},"id":"0776ae1b-7256-4d41-b776-a521d22ff3ba","type":"LegendItem"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"bb7d1b29-a8e8-4ebf-b619-55feffdd947c","type":"Circle"},{"attributes":{"callback":null},"id":"baac3ff2-68e8-42de-a9f4-31c8a64c2997","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"58065063-f1a6-4041-970c-6f7c3f30fa26","type":"Circle"},{"attributes":{"data_source":{"id":"12b6992b-5460-44ee-aafc-f0bd452de527","type":"ColumnDataSource"},"glyph":{"id":"031bbc9b-099b-40e5-8475-29cc84e97016","type":"Circle"},"hover_glyph":null,"muted_glyph":{"id":"2aa95919-63ec-4478-a919-772779ff1eed","type":"Circle"},"nonselection_glyph":{"id":"947c3296-e5b3-42b5-84cd-0a402a1ad3ae","type":"Circle"},"selection_glyph":null,"view":{"id":"433f4564-f008-4881-a58d-a3cdc4f875fa","type":"CDSView"}},"id":"369f617e-aa65-4dd3-b2cd-762c0ac6e127","type":"GlyphRenderer"},{"attributes":{"background_fill_alpha":{"value":0.0},"background_fill_color":{"value":"#F8F9FB"},"below":[{"id":"50b51883-dd7a-413c-b87e-c287f6c87637","type":"LinearAxis"}],"border_fill_alpha":{"value":0.0},"left":[{"id":"12a24c00-5535-4c8b-a039-378311220010","type":"LinearAxis"}],"outline_line_alpha":{"value":0.0},"plot_height":800,"plot_width":1200,"renderers":[{"id":"50b51883-dd7a-413c-b87e-c287f6c87637","type":"LinearAxis"},{"id":"3647e1ed-87bd-4af9-bc2c-c0dd4086f907","type":"Grid"},{"id":"12a24c00-5535-4c8b-a039-378311220010","type":"LinearAxis"},{"id":"1098e956-ca6c-467d-b52e-60c10643e15c","type":"Grid"},{"id":"ae06752e-1196-4ddd-83eb-dc3adcb1ff6d","type":"BoxAnnotation"},{"id":"c19b2a54-d27c-44d5-b0f8-ced102372ad1","type":"BoxAnnotation"},{"id":"e7e248c5-8530-4371-a7ab-9ffd87e5ac93","type":"PolyAnnotation"},{"id":"04fe2004-8564-43ec-97c6-282838906661","type":"GlyphRenderer"},{"id":"98d7cc1f-0dc1-4ab7-9ca1-68c889b989fd","type":"GlyphRenderer"},{"id":"369f617e-aa65-4dd3-b2cd-762c0ac6e127","type":"GlyphRenderer"},{"id":"89f67176-0857-4c13-9618-52e0825067d0","type":"Legend"}],"right":[{"id":"89f67176-0857-4c13-9618-52e0825067d0","type":"Legend"}],"title":{"id":"c74e9c63-3368-452c-9195-800badfd2ec4","type":"Title"},"toolbar":{"id":"9005b515-28b3-4396-b39d-a4864ce6c045","type":"Toolbar"},"toolbar_location":"above","x_range":{"id":"379bcc75-5273-418d-9aef-dcb3e5480f9a","type":"DataRange1d"},"x_scale":{"id":"8b496b33-1e50-4780-aadc-c41f453f8416","type":"LinearScale"},"y_range":{"id":"baac3ff2-68e8-42de-a9f4-31c8a64c2997","type":"DataRange1d"},"y_scale":{"id":"91423ceb-1a01-4842-8909-147656c950fd","type":"LinearScale"}},"id":"d647972c-58ac-4071-96ef-4466e1ed3d45","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"379bcc75-5273-418d-9aef-dcb3e5480f9a","type":"DataRange1d"},{"attributes":{"source":{"id":"8eab5f71-99da-4e0b-8ac0-0ad85cf28090","type":"ColumnDataSource"}},"id":"d59099c7-8291-463b-9d48-87549d4c11f2","type":"CDSView"},{"attributes":{},"id":"91423ceb-1a01-4842-8909-147656c950fd","type":"LinearScale"},{"attributes":{"label":{"value":"PINES"},"renderers":[{"id":"04fe2004-8564-43ec-97c6-282838906661","type":"GlyphRenderer"}]},"id":"2530642a-0c17-4e37-a0bc-80a9bf7990a3","type":"LegendItem"},{"attributes":{"background_fill_alpha":{"value":0.0},"border_line_alpha":{"value":0.0},"click_policy":"mute","items":[{"id":"2530642a-0c17-4e37-a0bc-80a9bf7990a3","type":"LegendItem"},{"id":"172d5fc9-365d-41c7-932d-217062dac092","type":"LegendItem"},{"id":"0776ae1b-7256-4d41-b776-a521d22ff3ba","type":"LegendItem"}],"label_text_color":{"value":"black"},"location":[0,30],"plot":{"id":"d647972c-58ac-4071-96ef-4466e1ed3d45","subtype":"Figure","type":"Plot"}},"id":"89f67176-0857-4c13-9618-52e0825067d0","type":"Legend"},{"attributes":{},"id":"8b496b33-1e50-4780-aadc-c41f453f8416","type":"LinearScale"},{"attributes":{},"id":"95d775a6-cb7f-4f8b-97b2-d6093b2e5c5b","type":"BasicTicker"},{"attributes":{"callback":null,"tooltips":[["Album #: ","@album_number"],["Album Name: ","@album_name"],["Song Name: ","@song_name"]]},"id":"cbe42cd6-2394-4493-975a-711c67e214fc","type":"HoverTool"},{"attributes":{"data_source":{"id":"4ee43eb5-b91e-4631-a0c3-05d5e35038e1","type":"ColumnDataSource"},"glyph":{"id":"c3bb6401-1f4e-496c-af07-6a05090066ca","type":"Circle"},"hover_glyph":null,"muted_glyph":{"id":"7c40c0f8-f9db-43fc-9f17-06462037474e","type":"Circle"},"nonselection_glyph":{"id":"58065063-f1a6-4041-970c-6f7c3f30fa26","type":"Circle"},"selection_glyph":null,"view":{"id":"648292f1-f49e-4892-b2cd-2547c55814bf","type":"CDSView"}},"id":"98d7cc1f-0dc1-4ab7-9ca1-68c889b989fd","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.95},"fill_color":{"value":"#525b91"},"line_alpha":{"value":0.95},"line_color":{"value":"#525b91"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"c3bb6401-1f4e-496c-af07-6a05090066ca","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"d647972c-58ac-4071-96ef-4466e1ed3d45","subtype":"Figure","type":"Plot"},"ticker":{"id":"086cede2-c45e-41d1-b346-2a921dca33e0","type":"BasicTicker"},"visible":false},"id":"1098e956-ca6c-467d-b52e-60c10643e15c","type":"Grid"},{"attributes":{},"id":"7807584b-9051-4047-bff1-c0284f38105f","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.95},"fill_color":{"value":"#4e6b4e"},"line_alpha":{"value":0.95},"line_color":{"value":"#4e6b4e"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"031bbc9b-099b-40e5-8475-29cc84e97016","type":"Circle"},{"attributes":{},"id":"086cede2-c45e-41d1-b346-2a921dca33e0","type":"BasicTicker"},{"attributes":{"label":{"value":"Bomb In A Birdcage"},"renderers":[{"id":"98d7cc1f-0dc1-4ab7-9ca1-68c889b989fd","type":"GlyphRenderer"}]},"id":"172d5fc9-365d-41c7-932d-217062dac092","type":"LegendItem"},{"attributes":{"data_source":{"id":"8eab5f71-99da-4e0b-8ac0-0ad85cf28090","type":"ColumnDataSource"},"glyph":{"id":"871495e1-4786-467c-8d8f-4b3b0063ca7a","type":"Circle"},"hover_glyph":null,"muted_glyph":{"id":"6183eee8-e24f-4439-8b1e-55dfd7924d65","type":"Circle"},"nonselection_glyph":{"id":"bb7d1b29-a8e8-4ebf-b619-55feffdd947c","type":"Circle"},"selection_glyph":null,"view":{"id":"d59099c7-8291-463b-9d48-87549d4c11f2","type":"CDSView"}},"id":"04fe2004-8564-43ec-97c6-282838906661","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"c19b2a54-d27c-44d5-b0f8-ced102372ad1","type":"BoxAnnotation"}},"id":"16a4adbd-f3de-4737-a360-1b14fdced795","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#525b91"},"line_alpha":{"value":0.1},"line_color":{"value":"#525b91"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"7c40c0f8-f9db-43fc-9f17-06462037474e","type":"Circle"},{"attributes":{"source":{"id":"4ee43eb5-b91e-4631-a0c3-05d5e35038e1","type":"ColumnDataSource"}},"id":"648292f1-f49e-4892-b2cd-2547c55814bf","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"c19b2a54-d27c-44d5-b0f8-ced102372ad1","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.95},"fill_color":{"value":"#000000"},"line_alpha":{"value":0.95},"line_color":{"value":"#000000"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"871495e1-4786-467c-8d8f-4b3b0063ca7a","type":"Circle"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"f812d294-667e-40d4-bb74-c36327939243","type":"BasicTickFormatter"},"major_label_text_font_size":{"value":"0pt"},"major_tick_line_color":{"value":null},"minor_tick_line_color":{"value":null},"plot":{"id":"d647972c-58ac-4071-96ef-4466e1ed3d45","subtype":"Figure","type":"Plot"},"ticker":{"id":"086cede2-c45e-41d1-b346-2a921dca33e0","type":"BasicTicker"}},"id":"12a24c00-5535-4c8b-a039-378311220010","type":"LinearAxis"},{"attributes":{"source":{"id":"12b6992b-5460-44ee-aafc-f0bd452de527","type":"ColumnDataSource"}},"id":"433f4564-f008-4881-a58d-a3cdc4f875fa","type":"CDSView"},{"attributes":{"plot":null,"text":""},"id":"c74e9c63-3368-452c-9195-800badfd2ec4","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"947c3296-e5b3-42b5-84cd-0a402a1ad3ae","type":"Circle"},{"attributes":{},"id":"5fe49379-a742-4dc8-a3dd-cf03ce7372cb","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["album_name","song_name","album_number","x","y","index"],"data":{"album_name":["PINES","PINES","PINES","PINES","PINES","PINES","PINES","PINES","PINES","PINES","PINES"],"album_number":{"__ndarray__":"AAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQA==","dtype":"float64","shape":[11]},"index":[0,1,2,3,4,5,6,7,8,9,10],"song_name":["Pinesong","Winds Of Wander","Avalanches (Culla&#x27;s Song)","Riversong","The Sighting","Dream In The Dark","Sailingsong","Sadseasong","They Can&#x27;t If You Don&#x27;t Let Them","Dance Of The Gray Whales","It&#x27;s Alive"],"x":{"__ndarray__":"QUVXQlw+18EB24DD4Q8uwzJbVsLJhC3Di4oYQ74E0MKzDTnDqETDQh+fXUM=","dtype":"float32","shape":[11]},"y":{"__ndarray__":"bbmew2MFnENthj5CLJMZQoeLmsKVudzCbnLpvxTrnEEzzO5C//9qw6MbOsI=","dtype":"float32","shape":[11]}}},"id":"8eab5f71-99da-4e0b-8ac0-0ad85cf28090","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"cbe42cd6-2394-4493-975a-711c67e214fc","type":"HoverTool"},{"id":"d62fd370-0294-43fb-a2b1-ffd2001df87d","type":"BoxSelectTool"},{"id":"16a4adbd-f3de-4737-a360-1b14fdced795","type":"BoxZoomTool"},{"id":"19f00060-faa7-40eb-b975-6568c125a1b6","type":"LassoSelectTool"},{"id":"5fe49379-a742-4dc8-a3dd-cf03ce7372cb","type":"ResetTool"}]},"id":"9005b515-28b3-4396-b39d-a4864ce6c045","type":"Toolbar"}],"root_ids":["d647972c-58ac-4071-96ef-4466e1ed3d45"]},"title":"Bokeh Application","version":"0.12.13"}}';
                  var render_items = [{"docid":"e2d0f472-af5f-45be-bd52-9a65b4471886","elementid":"d3145aa2-c687-4c6d-bb25-cee955e64ca4","modelid":"d647972c-58ac-4071-96ef-4466e1ed3d45"}];
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
