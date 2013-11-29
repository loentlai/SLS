define(['jquery', 'underscore', 'jquery.debug'], function($, _) {'use strict';
	var plugin = {
		'plugin_base' : 'views/wall/postform/plugin',
		
		'getPath' : function(path){
			return this.plugin_base + path;
		},
		
		'init' : function(){			
			console.log(require.config(_.extend(paths, {'youtube' : this.getpath('/youtube')})));
			require();
		}
	};
	
	return plugin;
});