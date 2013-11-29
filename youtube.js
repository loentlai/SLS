define(['jquery', 'underscore', 'backbone', 'config', 'profile', 'cgi', 'vm'], function($, _, Backbone, config, profile, cgi, ViewManager) {'use strict';

	var YouTubeView = Backbone.AppView.extend({

		events : {	
		},

		initialize : function() {
			$.log('Youtube SLS plugin initialize');
			this.render();
		},
		
		render : function() {
			$.log('Youtube SLS plugin render');
		},

		// view clean method
		clean : function() {
			this._super();
		}
	});

	return YouTubeView;
});
