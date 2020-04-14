<template>
	<div>
    <header>
        <a href="/"><h1><span>S</span>hubhra <span>P</span>rakash</h1></a>
            <Navigation/>
    </header>
	<section class="slicinItup" id="connect-content"> 
<section id="connect-title">
        <h1>Connect</h1>
        <span> 
        	check out the social media channels on which you can connect with me as well as download resumes of my work.
        </span>
</section>
<hr/>
		<section id="connect-sections">
		<section>
			<!-- <img src="/assets/piano.jpg"/>
				<figure>
					<div class="contact-img">
						
					</div>

					<figcaption>Photo from Broadway style Singing Recital </br>at Musical Theatre Summer Conservatory at Notre DaNamur University, California.</figcaption>
				</figure> -->
				<div id="connect-sections-imgs">
					<div>
						<ul class="connect-lists">
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
							<li class="horiz"><span>Download resumes :  </span>
									<ul>
										<li><a href="https://docs.google.com/document/d/15wWIfWqhrHIK-SoJdlzfSozrzwNbPE6_DrH_5b7liR0/edit?usp=sharing" target="_blank">Performer (Stage and Film)</a></li>
										<li><a href="https://docs.google.com/document/d/1CheP0X2h12-bBMLgyNOi0bW3rYJEFcayY99ygmdUXhU/edit?usp=sharing" target="_blank">Front End Dev</a></li>
										<li><a href="https://drive.google.com/file/d/17VQnvQwIPGOppYrIMFwCxnx_KpBSlMoS/view?usp=sharing" target="_blank">Cumulative</a></li>
									</ul>

							</li>
						</ul>

					</div>

					<div class="connect-lower">
							<article>The site has been created by yours truly using Vue framework and The code can be checked out on : <a href="https://github.com/sprakash/sh00bz-web-home" target="_blank">GitHub</a>.</article>	


							<div>references for development<a href="https://dev.to/alexmourer/click-event-filtering-on-a-json-rendered-list-in-vuejs-3kpn" target="_blank"><sup>(1)</sup></a></div>					
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

#connect {
	&-content {
		padding-top: 4em;
		font-weight: 100;

		.sm & {
			padding-top: 0;
		}
	}
	&-sections {
		&-imgs {
			background-image: url(/assets/fake/mandolin.jpg);
			background-repeat: no-repeat;
			background-size: cover;
			color: white;
			padding: 3em 5em;
			font-size: 1.5em;
			line-height: 1.5em;

				.sm &,
	    		.md & {
	    			background-size: cover;
	    			font-size: 1em;
	    			background-position: 80% 0px;
	    		}

			a {
				color: deepskyblue !important;
				font-weight: normal;
				letter-spacing: .2em;
				text-decoration: underline;
			}
		}
	}
}

.connect { 

	&-lists {
		li {
			padding: 0.5em;
	        background-color: #ff3bcc40;
	        margin: .5em 0;
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