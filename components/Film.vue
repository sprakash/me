<template>
	<div id="film-page">
    <header>
        <a href="/"><h1><span>शुभ्रा प्रकाश</span></h1></a>
            <Navigation/>
    </header>

<section class="slicinItup" id="film-content"> 
<section id="film-title">
        <div id="film-tag">
        <a href="http://www.randomfoxproductions.com" target="_blank"><img class="foxlogo" src="/assets/fake/rflogo.png"/></a>
        <span>
Co-Founded a production company <a href="http://www.randomfoxproductions.com" target="_blank">(Random Fox Productions)</a> of diverse filmmakers, writers and actors to create short film and interactive content. An experiment to create socially aware content and address issues such as, racism and gender discrimination. 
<hr/>

</span>
</div>
</section>
	<section id="films" class="films-group">
		<div class="films-look">
			<h2>Actor &amp; Co-Producer</h2>
			<h3>Vanilla</h3>

			<a class="films-watch" href="https://www.youtube.com/watch?v=HzFG3Vi6zw8" target="_blank">
	 			<div class="overlay-parent">
						<div class="overlay-content">
							<img src="/assets/fake/vanilla.jpg"/>
						</div>
				</div>
 			</a>
 			
			<div class="descript">
Stella is a baker who has been running her business with a recipe for a delicious vanilla donut. Will Stella be able to accept other bakers who arrive with new recipes and flavors ? We conceptualized, shot and edited 'Vanilla' in 72 hours as part of Asian American Film Lab's 72 hr film shootout in New York. We were placed in Top Ten picks and Random Fox took home a Screenwriting excellence award. 
			</div>

		</div>
		<div>
			<h2>Director &amp; Co-Producer</h2>
			<h3>Funny Faces</h3>

			    <a class="films-watch" href="https://www.youtube.com/watch?v=b5XSnrcGjqs" target="_blank">
				    <div class="overlay-parent">
							<div class="overlay-content">
								<img src="/assets/fake/funnyfaces.png"/>
							</div>
					</div>
				</a>
			
			<div class="descript">
				Two female comedians make a team but the establishment has laid down the rules, only one of the two is allowed to face the audience and perform the jokes. The other must work behind the scenes. Together they must challenge both the establishment and their own beliefs on talent, beauty and being an artist.  Funny Faces was a result of a 72 hour film shootout competition, a worldwide contest that is conducted annually by Asian American Film Lab in New York City, where the theme was “Two Faces”. Funny Faces placed in the top ten. Invited to speak at a <a href="http://www.sawcc.org/new-films-2015/">panel organized by South Asian Women's Creative Collective (SAWCC) about filmmaking as a south asian female</a> about filmmaking as a south asian female. Funny Faces was a finalist in their film competition.
			</div>

		</div>
		<div>
			<h2>Writer, Director &amp; Producer</h2>
			<h3>Three Dates</h3>

			 <a class="films-watch" href="https://vimeo.com/65866310" target="_blank">
				    <div class="overlay-parent">
							<div class="overlay-content">
								<img src="/assets/fake/gotchai.png"/>
							</div>
					</div>
				</a>
		
			<div class="descript">
				My first short “Three Dates” was about an ethnically ambiguous man facing judgement from his dates when they discover his true ethnicity. I used comedy to point at possible stereotypes attached to particular ethnicities. Three Dates, was screened at the 2013 New York Indian Film Festival. This short film led to the creation of Random Fox Productions.

			</div>
		</div>
	</section>
	<hr/>
	<section id="miscell">
		<h2>Translation &amp; Transciption / Subtitles (Hindi to English)</h2>
		<div class="films-group">
			<div>
				<h3>Priya's Mirror</h3>
				<h4>augmented reality comic book</h4>
				<a href="https://www.priyashakti.com/priyas-mirror" target="_blank" class="films-watch">
					 <img src="/assets/fake/priyasmirror.png"/>
				</a>
				<div class="descript">
					 <div>[click on image to read the comic]</div>
					 Translated the English comic book into Hindi.  In Priya's mirror, Priya joins forces with a group of acid attack survivors as they fight against the demon-king, Ahankar, and his tyrannical hold on them. Funded by the World Bank, the next edition titled, PRIYA’S MIRROR, focuses on acid attacks and tackles the problem of gender violence around the world. The comic book was created by and features acid attack survivors from New York City, Bogota, and New Delhi. PRIYA’S MIRROR premiered at the New York Film Festival, at Film Society of Lincoln Center, NYC from September 30 to October 16, 2016 and at the Mumbai Comic Con, Oct 22-23, 2016.
				</div>
			</div>
			<div>
				<h3>Karma Killings</h3>
				<h4>netflix / amazon video / itunes</h4>

				<a class="films-watch" href="https://www.karmakillings.com/" target="_blank" style="width:100%;">
				    <div class="overlay-parent">
							<div class="overlay-content">
								<img src="/assets/fake/karmak.jpeg"/>
							</div>
					</div>
				</a>
				<div class="descript">
					“The Karma Killings,” is a modern-day crime thriller mixed in with Indian mythology and class warfare. The documentary delves into India’s most infamous serial killings and its impact on a nation. Told through the people directly involved, the film unravels the complexities of the case and goes beyond the sensational headlines to present a suspenseful and scary mystery.  And has a huge twist – one of the killers maybe innocent?
				</div>
			</div>
			<div>
				<h3>Theater and Sex Work</h3>
				<h4>short documentary</h4>

				<a class="films-watch" href="https://vimeo.com/220498985" target="_blank">
				    <div class="overlay-parent">
							<div class="overlay-content">
								<img src="/assets/fake/vamp.png"/>
							</div>
					</div>
				</a>
				<div class="descript">Transcribed and also translated all spoken Hindi in Theater and Sex Work, VAMP's Performance as Resistance a short documentary which was a project by <b>Barnard Center For Research On Women</b> was created by Shayoni Mitra Edited and Produced by Pulkit Datta.
				</div>
			</div>
		</div>
	</section>
</section>
		</div>

</template>
<script>
	import Navigation from './Navigation'
	export default {
		name: 'Film',
		components: {
			Navigation,
        },
		data() {
			return {
				msg: 'Welcome to the film section'
			}
		}, 
		created: function() {
            this.msg = this.$route.params.isSlideshow;
        },
        mounted: function() {
     
        },
		methods : {

			// playButtonPlacement : function() {

			// 	//give play button .089 of width and .16 of height; 
			// 	//get top position of image.
			// 	//get left position of image.
			// 	//get width of image.
			// 	//get height of image. 

			// 	//add half of width to left  - width of icon = new left position. 
			// 	//add half of height to top - height of icon = new top position. 

			// 	var imgWidthFirst = document.getElementById('vanillaImg').clientWidth ; 
			// 	// var imgHeight = document.querySelector('.films-look').clientHeight ; 

			// 	console.log('widt HOW CAN THIS BE' + imgWidthFirst);

			// 	var iconWidth = imgWidthFirst * .089; 
			// 	var iconHeight = imgHeight * .16;

			// 	document.querySelector('.playicon').width = iconWidth;
			// 	document.querySelector('.playicon').height = iconHeight;

			// 	console.log("new width " + iconWidth +  " new height " +iconHeight);

			// 	var topPos = document.querySelector('.films-look').offsetTop;
			// 	var leftPos = document.querySelector('.films-look').offsetLeft;

			// 	var newLeft = (imgWidthFirst/2) - iconWidth;
			// 	var newTop = (imgHeight/2) - iconHeight;

			// 	document.querySelector('.playicon').style.top = newTop;
			// 	document.querySelector('.playicon').style.left = newLeft;

			// 	console.log(newTop + " top " + newLeft);

			//}
		}
	}
</script>
<style lang="scss" scoped>

#app {
	width: 100%;
}

header {
	a {
		h1 {
			text-decoration: none;
			color: #39053f;
		}
	}
}

.slicinItup {
	padding-top: 0em;
	text-transform: none;
}
	
a {
	color: orange !important; 
	font-size: 1em;
	font-weight: bolder;
}

h2 {
	font-size: 1.25em;
	color: #500606;
	text-transform: capitalize;
}

h3 {
	color: #64abf3;
	text-transform: capitalize;
	font-size: 1.85em;

	.sm &,
	.md & {
		font-size: 1.5em;
	}
}


.films {

	&-group {

		display: flex;
		justify-content: space-between;
		width: 100%;
		padding: 0 0 2em;

		.sm &,
		.md & {
			flex-direction: column;
		}

		 div {
		 	width: 30%;
		 	text-align: center;
		 	background-color: #f5d5a661;

		 	.sm &,
		 	.md & {
		 		width: 100%;
		 	}

		 	 img {
		 	 	width: 100%;
		 	 }

		 	 .descript {
		 	 	width: 100%;
		 	 	text-align: justify;
		 	 	text-transform: none;
		 	 	padding: 0 1em;
		 	 	display: table-cell;
		 	 	background: none;

		 	 	 div {
		 	 	 	width: 100% !important;
		 	 	 	cursor: pointer;
		 	 	 }

		 	 	 button {
		 	 	 	    border: none;
					    letter-spacing: .125em;
					    font-weight: bold;
					    color: #5a49b7;
					    padding: 0;
					    text-align: center;
					    text-transform: uppercase;
					    background-color: #dcdcdc63;
					    cursor: pointer;
					    width: 100%;
		 	 	 }
		 	 }
		 }
	}

	&-play {
		display: inline-block;
	}

	&-watch {

		display: inline-block;

    	.sm &,
    	.md & {
    		display: block;
    	}
	}
}

#film {

	&-content {
		padding-top: 8em;

		.sm & {
			padding-top: 8em;
		}

		.md & {
			padding-top: 8em;
		}
	}

	&-tag {

		display: flex;

		.sm & {
			flex-direction: column;
		}

		a {
			width: 20%;

			.sm & {
				width: 100%;
			}
		}

		img {
			width: 100%;
		}
		span {
			padding: .5em 2em;
		    text-align: justify;
		    font-size: 1.25em;

    		hr {
    			margin: 2em 0;
    		}
		}
	}
}

.overlay {
	
	&-content {
		width: 100% !important;
	
		&:after {
			background-image: url('/assets/icons/play.svg');
		    background-repeat: no-repeat;
		    top: 0;
		    left: 0;
		    position: absolute;
		    background-position: center center;
		    background-size: 25%;
		    width: 100%;
		    height: 100%;
		    content: "";
		    opacity: .95;
		}
	}

	&-parent {
		position:relative;
		width: 100% !important;
	}

}

.overlay-read {

	&-content {
		width: 100% !important;

		&:after {
			background-image: url('/assets/icons/read.svg');
		    background-repeat: no-repeat;
		    top: 0;
		    left: 0;
		    position: absolute;
		    background-position: center center;
		    background-size: 25%;
		    width: 100%;
		    height: 100%;
		    content: "";
		    opacity: .95;

		}
	}

	&-parent {
		position:relative;
		width: 100% !important;
	}

}


</style>