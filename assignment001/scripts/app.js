	var movies = [
		{
			id: 'HULK',
			name: 'The Incredible Hulk',
			image: './images/img01-hulk.jpg',
			starring: 'Edward Norton',
			synopsis: 'Action/Adventure',
			wiki: 'https://en.wikipedia.org/wiki/The_Incredible_Hulk_(film)'
		},{
			id: 'IRONMAN',
			name: 'Iron Man',
			image: './images/img02-ironman.jpg',
			starring: 'Robert Downey Jr.',
			synopsis: 'Action/Adventure',
			wiki: 'https://en.wikipedia.org/wiki/Iron_Man_(2008_film)'
		},{
			id: 'DOCTORSTRANGE',
			name: 'Doctor Strange',
			image: './images/img03-doctorstrange.jpg',
			starring: 'Benedict Cumberbatch',
			synopsis: 'Action/Adventure',
			wiki: 'https://en.wikipedia.org/wiki/Doctor_Strange_(2016_film)'
		},{
			id: 'CAPTAINAMERICA',
			name: 'Captain America: The Winter Soldier',
			image: './images/img04-captainamerica.png',
			starring: 'Chris Evans',
			synopsis: 'Action/Adventure',
			wiki: 'https://en.wikipedia.org/wiki/Captain_America:_The_Winter_Soldier'
		},{
			id: 'AVENGERSENDGAME',
			name: 'Avengers: Endgame',
			image: './images/img05-avengersendgame.jpg',
			starring: 'Josh Brolin & Avengers',
			synopsis: 'Action/Sci-fi',
			wiki: 'https://en.wikipedia.org/wiki/Avengers:_Endgame'
		},{
			id: 'CAPTAINMARVEL',
			name: 'Captain Marvel',
			image: './images/img06-captainmarvel.jpg',
			starring: 'Brie Larson',
			synopsis: 'Action/Sci-fi',
			wiki: 'https://en.wikipedia.org/wiki/Captain_Marvel_(film)'
		},{
			id: 'ANTMAN',
			name: 'Ant-Man',
			image: './images/img07-antman.jpg',
			starring: 'Paul Rudd',
			synopsis: 'Action/Adventure',
			wiki: 'https://en.wikipedia.org/wiki/Ant-Man_(film)'
		},{
			id: 'SPIDERMAN',
			name: 'Spider-Man: Homecoming',
			image: './images/img08-spiderman.jpg',
			starring: 'Tom Holland',
			synopsis: 'Action/Adventure',
			wiki: 'https://en.wikipedia.org/wiki/Spider-Man:_Homecoming'
		},{
			id: 'BLACKPANTHER',
			name: 'Black Panther',
			image: './images/img09-blackpanther.jpg',
			starring: 'Chadwick Boseman',
			synopsis: 'Action/Adventure',
			wiki: 'https://en.wikipedia.org/wiki/Black_Panther_(film)'
		},{
			id: 'THOR',
			name: 'Thor: Ragnarok',
			image: './images/img10-thor.jpg',
			starring: 'Chris Hemsworth',
			synopsis: 'Action/Adventure',
			wiki: 'https://en.wikipedia.org/wiki/Thor:_Ragnarok'
		},{
			id: 'GUARDIANSOFTHEGALAXY',
			name: 'Guardians of the Galaxy',
			image: './images/img11-guardiansofthegalaxy.jpg',
			starring: 'Chris Pratt',
			synopsis: 'Action/Sci-fi',
			wiki: 'https://en.wikipedia.org/wiki/Guardians_of_the_Galaxy_(film)'
		}
	];
	
	var moviesMap = {};
	for(ix = 0 ; ix < movies.length; ix++){
		moviesMap[movies[ix].id] = movies[ix];
	}
	var userWishlist = [];
	
	var movieNameDefaultSize = '1.5vw';
	var movieNameExpandSize = '2.5vw';
	
	function createMoviesStrip(){
		for(x=0; x < movies.length; x++) {
			var divMovieStripObject = document.createElement('div');
			divMovieStripObject.setAttribute('class', "divMovieStripObject");
			divMovieStripObject.setAttribute('onclick', "expand(this)");
			divMovieStripObject.setAttribute('id', "PDIV_".concat(movies[x].id));
			divMovieStripObject.style.backgroundImage = "url('".concat(movies[x].image).concat("')");
			
			var h1MovieName = document.createElement('h1');
			h1MovieName.setAttribute('class', "h1MovieName");
			h1MovieName.setAttribute('id', "HMNAME_".concat(movies[x].id));
			h1MovieName.setAttribute('font-size', movieNameDefaultSize);
			var text1 = document.createTextNode(movies[x].name);
			h1MovieName.appendChild(text1);
			
			var imgWishlistCheck = document.createElement('img');
			imgWishlistCheck.setAttribute('src', 'images/wishlist.png');
			imgWishlistCheck.setAttribute('class', "imgWishlistCheck");
			imgWishlistCheck.setAttribute('width', "75");
			imgWishlistCheck.setAttribute('height', "75");
			imgWishlistCheck.setAttribute('id', "WISHLIST_".concat(movies[x].id));
			
			var divMovieInfo = document.createElement('div');
			divMovieInfo.setAttribute('class', "divMovieInfo");
			divMovieInfo.setAttribute('id', "CDIV_".concat(movies[x].id));
				var h2Info = document.createElement('h2');
				h2Info.setAttribute('class', "h2Info");
					var italics = document.createElement('i');
						var text2 = document.createTextNode('Info');
					italics.appendChild(text2);
				h2Info.appendChild(italics);
				var buttonWishlist = document.createElement('button');
				buttonWishlist.setAttribute('type', "button");
				buttonWishlist.setAttribute('class', "buttonWishlist");
				buttonWishlist.setAttribute('onclick', "wishlist(this)");
				buttonWishlist.setAttribute('id', "BUTTON_".concat(movies[x].id));
					var text3 = document.createTextNode('Wishlist');
				buttonWishlist.appendChild(text3);
				var br = document.createElement('br');
				var tableInfo = document.createElement('table');
				tableInfo.setAttribute('class', "tableInfo");
					var tr1 = document.createElement('tr');
						var td1tr1 = document.createElement('td');
						td1tr1.setAttribute('class', "tdLabel");
							var text4 = document.createTextNode('Starring');
						td1tr1.appendChild(text4);
						
						var td2tr1 = document.createElement('td');
						td2tr1.setAttribute('class', "tdValue");
							var text5 = document.createTextNode(movies[x].starring);
						td2tr1.appendChild(text5);
						
					tr1.appendChild(td1tr1);
					tr1.appendChild(td2tr1);
					var tr2 = document.createElement('tr');
						var td1tr2 = document.createElement('td');
						td1tr2.setAttribute('class', "tdLabel");
							var text6 = document.createTextNode('Synopsis');
						td1tr2.appendChild(text6);
						
						var td2tr2 = document.createElement('td');
						td2tr2.setAttribute('class', "tdValue");
							var text7 = document.createTextNode(movies[x].synopsis);
						td2tr2.appendChild(text7);
					tr2.appendChild(td1tr2);
					tr2.appendChild(td2tr2);
				tableInfo.appendChild(tr1);
				tableInfo.appendChild(tr2);
				var spanHyperLink = document.createElement('span');
				spanHyperLink.setAttribute('class', "spanHyperLink");
					var anchorMovieWiki = document.createElement('a');
					anchorMovieWiki.setAttribute('href', movies[x].wiki);
					anchorMovieWiki.setAttribute('target', "_blank");
					anchorMovieWiki.setAttribute('rel', "noopener noreferrer");
					anchorMovieWiki.setAttribute('class', "anchorMovieWiki");
						var text8 = document.createTextNode('Wiki');
					anchorMovieWiki.appendChild(text8);
				spanHyperLink.appendChild(anchorMovieWiki);
			divMovieInfo.appendChild(h2Info);
			divMovieInfo.appendChild(buttonWishlist);
			divMovieInfo.appendChild(br);
			divMovieInfo.appendChild(tableInfo);
			divMovieInfo.appendChild(spanHyperLink);			
			
			divMovieStripObject.appendChild(h1MovieName);
			divMovieStripObject.appendChild(imgWishlistCheck);
			divMovieStripObject.appendChild(divMovieInfo);				
			
			document.getElementById('DIV_MOVIESTRIP_CONTAINER').appendChild(divMovieStripObject);
		}
	}
	
	function getIdOfElement(typeElement,referenceId){
		var i = referenceId.lastIndexOf("_");
		//alert(referenceId);
		return typeElement.concat(referenceId.substring(i+1));
	}
	function wishlist(clickedButton){
		var elementId = getIdOfElement('WISHLIST_',clickedButton.id);
		var wishlistPng = document.getElementById(elementId);
		var movie = getIdOfElement('',clickedButton.id);
		
		if(wishlistPng.style.display == 'block'){
			var ix = userWishlist.indexOf(moviesMap[movie].name);
			if (ix > -1) {
				userWishlist.splice(ix, 1);
			}
			console.log('Removed from Wishlist: ', moviesMap[movie].name);
			console.log('Wishlist: ', userWishlist);
			wishlistPng.style.display = 'none';
		}else{
			userWishlist.push(moviesMap[movie].name);
			console.log('Wishlist: ', userWishlist);
			wishlistPng.style.display = 'block';
		}
	}
	function expand(clickeddiv){
		var elementId = getIdOfElement('CDIV_',clickeddiv.id);
		var infoDiv = document.getElementById(elementId);
		elementId = getIdOfElement('HMNAME_',clickeddiv.id);
		var hMovieName = document.getElementById(elementId);

		if(clickeddiv.style.width == '40%'){
			clickeddiv.style.width = '20%'
			infoDiv.style.display = 'none';
			hMovieName.style.top = '50%';
			hMovieName.setAttribute('font-size', movieNameDefaultSize);
		}else{
			clickeddiv.style.width = '40%'
			infoDiv.style.display = 'block';
			hMovieName.style.top = '15%';
			hMovieName.setAttribute('font-size', movieNameExpandSize);
		}
	}
	function populateInfo(callingFrom){
		alert(callingFrom.id);
		if(callingFrom.id == 1){
			callingFrom.style = "width:1000px; background-color=black";
		}
	}