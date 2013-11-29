define(['jquery', 'underscore', 'backbone', 'vm', 'events', 'hbs!views/wall/postform/plugin/templates/youtube/preview'], function($, _, Backbone, ViewManager, events, previewTpl) {'use strict';

	var YouTubeView = Backbone.AppView.extend({

		el : 'body',

		events : {
			'paste .post-form .msg' : 'inputValue'
		},

		initialize : function() {
			$.log('Youtube SLS plugin initialize');
			this.render();
		},

		render : function() {
			$.log('Youtube SLS plugin render');
		},

		inputValue : function(e) {
			var self = this, urlRegex = /(\b(https?):\/\/www.youtube.com\/[\-A-Z0-9+&@#\/%?=~_|!:,.;]*[\-A-Z0-9+&@#\/%=~_|])/ig;
			if (this.$('.post-form .post-addfile').length > 0) {
				setTimeout(function() {
					var inputStr = self.$('.post-form .msg').val(), choosen;
					if (inputStr.length > 0 && !_.isNull(inputStr.match(urlRegex))) {
						choosen = inputStr.split('v=')[1];
						if (choosen.indexOf('&') != -1) {
							choosen = choosen.substring(0, choosen.indexOf('&'));
						}
						$.ajax({
							url : 'http://gdata.youtube.com/feeds/api/videos/'+choosen+'?v=2&alt=json',
							dataType : 'jsonp',
							success : function(data) {
								console.log(data);
								self.$('.post-form .post-addfile').hide();
								self.$('.post-form .post-addfile').after(previewTpl({
									videoImg : 'http://img.youtube.com/vi/'+choosen+'/default.jpg',
									videoId : choosen,
									videoUrl : inputStr
								}));
								events.trigger('update-stream', {force:false});
							}
						});
					}
				});
			}
		},

		// view clean method
		clean : function() {
			this._super();
		}
	});

	return YouTubeView;
});
