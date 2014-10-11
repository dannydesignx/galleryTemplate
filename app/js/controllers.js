'use strict';

/* Controllers */

angular.module('myApp.controllers', [])

.controller('ChatCtrl', ['$scope', function($scope) {
		var myDataRef = new Firebase('https://gallerybitch.firebaseio.com/');
      $('#messageInput').keypress(function (e) {
        if (e.keyCode == 13) {
          var name = $('#nameInput').val();
          var text = $('#messageInput').val();
					myDataRef.push({name: name, text: text});
          $('#messageInput').val('');
        }
      });
		
		
myDataRef.on('child_added', function(snapshot) {
        var message = snapshot.val();
				displayChatMessage(message.name, message.text);
      });
		
		
		function displayChatMessage(name, text) {
				$('<p class="msg"></p>').text(text).prepend($('<p class="person"></p>').text(name+': ')).appendTo($('#messagesDiv'));
        $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
      };
			$.now();
}])

  .controller('ArticleListCtrl', ['$scope', function($scope) {
		
  }])


  .controller('GalleryCtrl', ['$scope', function($scope) {
$scope.images =[
			{
				"title": 'By the sea',
				"imageUrl": 'img/sea.jpg',
				"text": "hell i am an image of a sexy sea, ain't it just the sexiest see ever? I mean look at it!"
			},
			{
				"title": 'Platform 9',
				"imageUrl": 'img/platform_9.jpg',
				"text": "This is just an image i picked up with a beautiful view of a train with selective coloring"
			},
			{
				"title": 'Floating Dreams',
				"imageUrl": 'img/floating_dreams.jpg',
				"text": "this is just a cool surrealist imaged i got from the intertubes, and not my design."
			},
			{
				"title": 'Wildflowers',
				"imageUrl": 'img/wildflowers.jpg',
				"text": "don't you just love the smell of flowers? they smell like browny points. ;)"
			},
			{
				"title": 'Wildflowers',
				"imageUrl": 'img/wildflowers.jpg',
				"text": "don't you just love the smell of flowers? they smell like browny points. ;)"
			},
			{
				"title": 'Wildflowers',
				"imageUrl": 'img/wildflowers.jpg',
				"text": "don't you just love the smell of flowers? they smell like browny points. ;)"
			},
			{
				"title": 'Wildflowers',
				"imageUrl": 'img/wildflowers.jpg',
				"text": "don't you just love the smell of flowers? they smell like browny points. ;)"
			},
			{
				"title": 'Wildflowers',
				"imageUrl": 'img/wildflowers.jpg',
				"text": "don't you just love the smell of flowers? they smell like browny points. ;)"
			},
			{
				"title": 'Platform 9',
				"imageUrl": 'img/platform_9.jpg',
				"text": "This is just an image i picked up with a beautiful view of a train with selective coloring"
			},
			{
				"title": 'By the sea',
				"imageUrl": 'img/sea.jpg',
				"text": "hell i am an image of a sexy sea, ain't it just the sexiest see ever? I mean look at it!"
			},
			{
				"title": 'Platform 9',
				"imageUrl": 'img/platform_9.jpg',
				"text": "This is just an image i picked up with a beautiful view of a train with selective coloring"
			},
			{
				"title": 'Floating Dreams',
				"imageUrl": 'img/floating_dreams.jpg',
				"text": "this is just a cool surrealist imaged i got from the intertubes, and not my design."
			},
			{
				"title": 'Wildflowers',
				"imageUrl": 'img/wildflowers.jpg',
				"text": "don't you just love the smell of flowers? they smell like browny points. ;)"
			},
			{
				"title": 'Wildflowers',
				"imageUrl": 'img/wildflowers.jpg',
				"text": "don't you just love the smell of flowers? they smell like browny points. ;)"
			},
			{
				"title": 'Wildflowers',
				"imageUrl": 'img/wildflowers.jpg',
				"text": "don't you just love the smell of flowers? they smell like browny points. ;)"
			},
			{
				"title": 'Wildflowers',
				"imageUrl": 'img/wildflowers.jpg',
				"text": "don't you just love the smell of flowers? they smell like browny points. ;)"
			},
			{
				"title": 'Wildflowers',
				"imageUrl": 'img/wildflowers.jpg',
				"text": "don't you just love the smell of flowers? they smell like browny points. ;)"
			},
			{
				"title": 'Platform 9',
				"imageUrl": 'img/platform_9.jpg',
				"text": "This is just an image i picked up with a beautiful view of a train with selective coloring"
			}
		];
  }]);
