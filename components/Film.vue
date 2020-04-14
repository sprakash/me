<template>
	<div>
    <header>
        <a href="/"><h1><span>S</span>hubhra <span>P</span>rakash</h1></a>
            <Navigation/>
    </header>

<section class="slicinItup" id="film-content"> 
<section id="film-title">
        <h1>Film</h1>
        <div id="film-tag">
        <a href="http://www.randomfoxproductions.com" target="_blank"><img class="foxlogo" src="/assets/fake/randomfoxlogo.png"/></a>
        <span>
Co-Founded a production company <a href="http://www.randomfoxproductions.com" target="_blank">(Random Fox Productions)</a> of diverse filmmakers, writers and actors to create short film and interactive content. An experiment to create socially aware content and address issues such as, racism and gender discrimination. 
<hr/>

</span>
</div>
</section>
	<section id="films" class="films-group">
		<div>
			<h2>Actor &amp; Co-Producer</h2>
			<h3>Vanilla</h3>
			<img src="/assets/fake/vanilla.jpg"/>
							<a class="films-watch" href="https://www.youtube.com/watch?v=HzFG3Vi6zw8" target="_blank">[watch here]</a>

			<div class="descript">
Stella is a baker who has been running her business with a recipe for a delicious vanilla donut. Will Stella be able to accept other bakers who arrive with new recipes and flavors ? We conceptualized, shot and edited 'Vanilla' in 72 hours as part of Asian American Film Lab's 72 hr film shootout in New York. We were placed in Top Ten picks and Random Fox took home a Screenwriting excellence award. 
			</div>

		</div>
		<div>
			<h2>Director &amp; Co-Producer</h2>
			<h3>Funny Faces</h3>
			<img src="/assets/fake/funnyfaces.png"/>
							<a class="films-watch" href="https://www.youtube.com/watch?v=b5XSnrcGjqs" target="_blank">[watch here]</a>

			<div class="descript">
				Two female comedians make a team but the establishment has laid down the rules, only one of the two is allowed to face the audience and perform the jokes. The other must work behind the scenes. Together they must challenge both the establishment and their own beliefs on talent, beauty and being an artist.  Funny Faces was a result of a 72 hour film shootout competition, a worldwide contest that is conducted annually by Asian American Film Lab in New York City, where the theme was “Two Faces”. Funny Faces placed in the top ten. Invited to speak at a <a href="http://www.sawcc.org/new-films-2015/">panel organized by South Asian Women's Creative Collective (SAWCC) about filmmaking as a south asian female</a> about filmmaking as a south asian female. Funny Faces was a finalist in their film competition.
			</div>

		</div>
		<div>
			<h2>Writer, Director &amp; Producer</h2>
			<h3>Three Dates</h3>
			<img src="/assets/fake/gotchai.png"/>
											<a class="films-watch" href="https://vimeo.com/65866310" target="_blank">[watch here]</a>

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
				<img src="/assets/fake/priyasmirror.png"/>
				<a href="https://www.priyashakti.com/priyas-mirror" target="_blank" class="films-watch">[read]</a>
				<div class="descript">
					 Translated the English comic book into Hindi.  In Priya's mirror, Priya joins forces with a group of acid attack survivors as they fight against the demon-king, Ahankar, and his tyrannical hold on them. Funded by the World Bank, the next edition titled, PRIYA’S MIRROR, focuses on acid attacks and tackles the problem of gender violence around the world. The comic book was created by and features acid attack survivors from New York City, Bogota, and New Delhi. PRIYA’S MIRROR premiered at the New York Film Festival, at Film Society of Lincoln Center, NYC from September 30 to October 16, 2016 and at the Mumbai Comic Con, Oct 22-23, 2016.
				</div>
			</div>
			<div>
				<h3>Karma Killings</h3>
				<h4>netflix / amazon video / itunes</h4>
				<img src="/assets/fake/karmak.jpeg"/>
				<a href="https://www.karmakillings.com/" target="_blank" class="films-watch">[watch]</a>
				<div class="descript">
					“The Karma Killings,” is a modern-day crime thriller mixed in with Indian mythology and class warfare. The documentary delves into India’s most infamous serial killings and its impact on a nation. Told through the people directly involved, the film unravels the complexities of the case and goes beyond the sensational headlines to present a suspenseful and scary mystery.  And has a huge twist – one of the killers maybe innocent?
				</div>
			</div>
			<div>
				<h3>Theater and Sex Work</h3>
				<h4>short documentary</h4>
				<img src="/assets/fake/vamp.png"/>
				<a class="films-watch" href="https://vimeo.com/220498985" target="_blank">[watch]</a>
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
		created() {
            this.msg = this.$route.params.isSlideshow;
        },
		data() {
			return {
				msg: 'Welcome to the film section'
			}
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
		 	width: 33%;
		 	text-align: center;

		 	.sm &,
		 	.md & {
		 		width: 100%;
		 		padding-bottom: 2em;
		 	}

		 	 img {
		 	 	width: 95%;
		 	 }

		 	 .descript {
		 	 	width: 100%;
		 	 	text-align: justify;
		 	 	text-transform: none;
		 	 	padding: 0 1em;
		 	 	display: table-cell;

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

	&-watch {

		font-weight: bold;
		color: #e67a83 !important;
    	text-decoration: none;

    	.sm &,
    	.md & {
    		display: block;
    	}
	}
}

#film {

	&-content {
		padding-top: 4em;
	}

	&-tag {

		display: flex;

		a {
			width: 30%;
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


</style>