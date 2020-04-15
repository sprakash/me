<template>
	<div>
    <header>
        <a href="/"><h1><span>S</span>hubhra <span>P</span>rakash</h1></a>
            <Navigation/>
    </header>
	<section class="slicinItup" id="connect-content"> 
<section id="connect-title">
        <h1>Collaborate</h1>
        <span> 
        	I have collaborated within the disciplines of Theatre, Filmmaking and Web development. Here are a few recent examples of the kind of work in these areas that I take pride in. 
        </span>
</section>
<hr/>
		<section id="collaborate-sections">
		<section>
				<div id="collaborate">
					<div class="collab">
						<h2>Theatre</h2>
						<div class="collab-content">
						   	<img src="/assets/fake/jfm2.jpg"/>
						   	<img src="/assets/fake/jfm.jpg"/>
						   	<img src="/assets/fake/jfm1.jpg"/>
						   I wrote, directed and staged a children's play for an organization: Just For Myself for their annual show for the organization in March 2020. Just For Myself is a not-for-profit organization that educates children of construction workes and house help, helps them get placed in schools and provides for basic nutrition and counseling.  The organization is based in Gurgaon, Haryana. The founder Mrs. Ranjana Joshi entrusted me with writing a play based on the story of how her organization came to be. The play includes music and movement. I wrote the piece and rehearsed with the children in a park of their community for several weekends to present a stage show. They were coached in performance on stage, voice work and scene improvisation.
						</div>
					</div>
					<div class="collab">
						<h2>Code</h2>
						<div class="collab-content">
								<img src="/assets/fake/halApplogo.jpg"/>
							Serving as a web developer for Rattapallax's project Hal &amp; Minter. Hal Horowitz is a poet who has had Parkinson's disease over twenty years during this time he has continued to remain a poet. I am creating a web app, HalApp, that allows for people to read Hal’s poems into HTML web voice reactive interface. We want to create this tool to encourage people with Parkinson's disease to read these people that can lead to improvement with their vocalization and speech. [ More information on the project’s website: <a href="http://www.parkinsonspoetry.org" target="_blank">www.parkinsonspoetry.org </a> ]. 
						</div>
					</div>
					<div class="collab">
						<h2>Filming / Digital</h2>
						<div class="collab-content">
							<img src="/assets/fake/digitalArtExhibition.jpg"/>
							<div>Collaborated with noted Indian language font designed Rajeev Prakash to created a digital art exhibition called "Fontwala, Stone to mobile: what remains ?". I worked on the animation, filming and editing of the assets using Adobe Premiere, After Effects and Photoshop.  I shot the content with a Canon T3i Rebel DSLR. Read more about it <a href="https://sprakash.github.io/portfolio/fontwala.html" target="_blank">here.</a></div>
						</div>
					</div>
				</div>
				<section id="reachout">
					<h2>connect</h2>
					<div>
						<ul class="collaborate-lists">
							<li>Email me : <a class="email-link" href="mailto:prakashnitza@gmail.com">prakashnitza@gmail.com</a> </li>
							<li class="horiz"><span>Social Media :</span>
									<span class="svgStylin">
										<span>
											  <a href="http://twitter.com/durkhaima" target="_blank"><img src="/assets/icons/twitter.svg"></a>
										</span>
										<span>
											  <a href="http://facebook.com/5000roses" target="_blank"><img src="/assets/icons/fb.svg"></a>
										</span>
										<span>
											  <a href="https://www.linkedin.com/in/shubhraprakash/" target="_blank"><img src="/assets/icons/linkedin.svg"></a>
										</span>
										<span>
											  <a href="http://instagram.com/sh000bz.artist" target="_blank"><img src="/assets/icons/insta.svg"></a>
										</span>
										<span>
											  <a href="https://github.com/sprakash/sh00bz-web-home" target="_blank"><img src="/assets/icons/github.svg"></a>
										</span>
									</span>
							</li>
							<li class="horiz"><span>Download :  </span>
									<ul>
										<li><a href="https://docs.google.com/document/d/15wWIfWqhrHIK-SoJdlzfSozrzwNbPE6_DrH_5b7liR0/edit?usp=sharing" target="_blank"> 1. Performer (Stage and Film) resume</a></li>
										<li><a href="https://docs.google.com/document/d/1CheP0X2h12-bBMLgyNOi0bW3rYJEFcayY99ygmdUXhU/edit?usp=sharing" target="_blank"> 2. Front End Dev resume</a></li>
										<li><a href="https://drive.google.com/file/d/17VQnvQwIPGOppYrIMFwCxnx_KpBSlMoS/view?usp=sharing" target="_blank">3. Cumulative resume</a></li>
									</ul>

							</li>
						</ul>

					</section>

					<div class="connect-lower">
							<article>This site has been created by yours truly using Vue framework and The code can be checked out on : <a href="https://github.com/sprakash/me" target="_blank">GitHub</a>.</article>	
					</div>
				</div>
			</section>
			
		</section>
	</section>
	</div>
</template>
<script>
	import Navigation from './Navigation'
	export default {
		name: 'Connect',
		components: {
			Navigation
		},
		created() {
            this.msg = this.$route.params.isSlideshow;
        },
		data() {
			return {
				msg: 'Welcome to the CONNECT section'
			}
		}
	}
</script>
<style lang="scss">
#app {
	width: 100%;
}

header {
	a {
		text-decoration: none;
		color: inherit;
	}
}

#topest {
	width: 100%;
}

#collaborate {
		text-transform: none !important;
		display: flex;
		flex-direction: column;

		.collab {
			border-bottom: 1px solid lightgrey;
			padding-top: .5em;
			padding-bottom: 2em;

			a { 
				text-decoration: underline !important;
				color: #2eaabe !important;
			}

			img {
				max-width:25%;
			}

			&-content {
				display: flex;
				flex-direction: row;
				align-items: flex-start;
				flex-wrap: wrap;
				justify-content: space-evenly
			}
		}

		
}

#connect {
	&-content {
		padding-top: 4em;
		font-weight: 100;

		.sm & {
			padding-top: 0;
		}
	}
	
}

.collaborate { 


	&-lists {
		li {
			padding: 0.5em;
	        background-color: #ff3bcc14;
	        margin: .5em 0;
	        text-align: left;
	        font-weight: bold;

			a { 
				text-decoration: underline !important;
				color: #2eaabe !important;
			}
		}
	}

	&-lower {
		padding-top: 10em;
		bottom: 0;
		
		div {
			padding: 0.5em;
    		background-color: #8f3bff63;
    		margin: .5em 0;
		}
		article {
			font-weight: normal;
			padding: 0.5em;
	    	background-color: #8f3bff63;
	    	margin: .5em 0;
		}
	}
}

#reachout {
	padding-top: 1.5em;
	font-weight: bold;
}

.horiz {
	display: flex;

	li {
		margin: 0 2em;
	    padding: 0;
	    background: none;
	    line-height: 1.5em;
	}
}

.svgStylin {
	color: white;

	span {
		&:hover {
			background: none;
			border: none;
		}
	}

	a {

		&:hover {
			background-color: none;
			border-color: none;
		}
	}

	 img {
	 	background-color: #7b897b;
	 	border-radius: 5px;
	 	cursor: pointer;

	 	&:hover {
	 		background-color: white;
	 	}
	 }
}

	
</style>