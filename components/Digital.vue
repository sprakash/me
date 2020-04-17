<template>
	<div id="digital-page">
    <header>
        <a href="/"><h1><span>शुभ्रा प्रकाश</span></h1></a>
            <Navigation/>
    </header>

	<section class="slicinItup" id="digital-content"> 
<section id="digital-title">        
 <span>
"a meaningful life is less about finding your ‘real’ self than expanding its boundaries." <a href="https://aeon.co/ideas/which-is-more-fundamental-processes-or-things" target="_blank">(from)</a>
</span>
<div>
 	Expanding my boundaries is central to my undertaking of any creative work, here are projects which gave me an opportunity to bring together my different skills sets. Exploring performance in the context of technology and vice versa are areas of interest for me. You can click on each project below to find more details.
</div>
</section>
	<section id="digital-groups">
		<section class="digital-groups">
			<div>
				<h3>Priya's Shakti 	<span>short film and augmented reality comic book</span> <a href="https://sprakash.github.io/portfolio/priyashakti.html" target="_blank">[watch]</a>
 </h3>
				<a href="https://sprakash.github.io/portfolio/priyashakti.html" target="_blank"><img src="/assets/fake/priyashakti.jpg"/></a>
				<p class="artby">Above art by Dan Goldman.</p>
				
			</div>
			<div>
					

				<h3>Fontwala: Stone to mobile, what remains ? <span>digital art exhibition</span>					<a href="https://sprakash.github.io/portfolio/fontwala.html" target="_blank">[watch]</a>
  </h3>
					<a href="https://sprakash.github.io/portfolio/fontwala.html" target="_blank"><img src="/assets/fake/rajeev-typoface.jpg"/></a>
					<p class="artby">Above art by Rajeev Prakash Khare.</p>
			</div>
			<div>
				
					<h3>Cast Me! <span>interactive 'choose your own adventure' short film</span> 					<a href="https://video.helloeko.com/v/AK8lqV" target="_blank">[play]</a>
 </h3>
					<a href="https://video.helloeko.com/v/AK8lqV" target="_blank"><img src="/assets/fake/castme.png"/></a>
					<div class="descript">
						a "choose your own adventure" style short film created as an entry for The Challenge of Diversity competition by Interlude (now acquired by eKo), Games for Change and Tribeca Film Festival. The viewer has the opportunity to audition 5 actresses for the same role of Kaos, sidekick to the superhero in the superhero movie “Bang &amp; Kaos”. The viewer is a casting director and decides who gets called back. The theme was diversity in casting. I picked actresses of different ethnicities and using Interlude’s (now acquired by eKo) platform created an experience where the user can make a decision to cast the role. Through this work I addressed my own challenges as an actor in the audition room as a person of color.  I developed the concept, served as director, editor and producer.
					</div>
				
			</div>
			
		</section>
	</section>
</template>
<script>
	import Navigation from './Navigation'
	export default {
		name: 'Digital',
		components: {
			Navigation,
        },
		created() {
            this.msg = this.$route.params.isSlideshow;
        },
		data() {
			return {
				msg: 'Welcome to the Digital / Intersect section'
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
		color: inherit;
		text-decoration: none;
	}
}
.slicinItup {
	padding-top: 0em;
}
	
a {

	font-size: 1em;
	font-weight: bolder;
}

hr {
	margin-bottom: 2em;
}

h2 {
	font-size: 1.25em;
	color: #500606;
	text-transform: capitalize;
}

h3 {
	color: #f36464;
    text-transform: capitalize;
    margin: 0;
    padding: .5em 0;
    font-size: 1.75em;
    background-color: black;
    font-family: "Cambria";
    line-height: 1.25em;

	span {
		color: white;
	    text-transform: lowercase;
	    font-size: .75em;
	    display: block;
	    line-height: 1.75em;
	    border-top: 1px solid white;
    	margin: 1em 0 0;
    	padding: 1em 0 0;
	}

	a {
		text-transform : lowercase;
		text-decoration: none;
		color: #72ff00c7;
		display: none;
	}

	&:hover {
		cursor: pointer; 
	}
}




.digital {

	&-groups {

		display: flex;
		width: 100%;
		padding: 0;
		justify-content: center;

		.sm &,
		.md &{
			flex-direction: column-reverse;
		}

		&:hover {
			cursor: pointer;
		}

		section {
			margin-bottom: 1em;
		}

		 div {
		 	width: 50%;
		 	text-align: center;
		 	margin: 1em;

		 	.sm & {
		 		margin: 0;
		 	}

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
	}
}

#digital {

	&-content {
		padding-top: 4em;

		.sm & {
			padding-top: 2em;
		}

		.md & {
			padding-top: 8em;
		}
	}

	&-title {
		padding: 2em 0 0;
	    display: flex;
	    flex-direction: column;
	    font-family: "Cambria";

		span {
			text-align: center;
		    font-size: 1.25em;
		    font-style: italic;
		    font-weight: bold;
		}

		div {
			padding: 1em 1em 0 1em;
		    font-size: 1.25em;
		    letter-spacing: .025em;
		    text-transform: none;
		    text-align: justify;
    		width: 85%;
    		margin: 0 auto;

    		.sm & {
    			padding-bottom: 1em;
    		}
		}
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

.artby {
	font-size: 0.5em !important;
    text-align: center !important;
    margin: 0;
    color: darkblue;
    letter-spacing: 0.05em;
    text-transform: capitalize;
    padding: 0;
    position: relative;
    top: -16px;
}


</style>