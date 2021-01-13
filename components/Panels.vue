<template>
	<div id="panels">
<!-- 		<section class="panel-container">
 -->			<div class="panel-area">
				<!-- <div v-bind:id="singlePanel.id" v-bind:style="{zIndex: currentOrder[index].zIndex , minHeight: newHeights}" v-for="(singlePanel, index) in panels" class="single-panel"> -->

					<div v-bind:id="singlePanel.id" v-for="(singlePanel, index) in panels" v-bind:style="{zIndex: currentOrder[index].zIndex , minHeight: newHeights}"  class="single-panel" >
						<p class="sectiontitle">{{singlePanel.title}}</p>
						<div class="panel-content">
							<!-- <h1 class="panel-header">{{singlePanel.title}}</h1> -->
							{{singlePanel.content}}
			
							<router-link :to="{name:singlePanel.title}"> More &raquo;</router-link>
						</div>
						<div class="button-areas">
							<div class="prev" v-on:click="previousPanel(singlePanel.title)">&#10094;</div>
							<!-- <span class="panel-number" v-for="(index, singlePageNum) in panels">{{ singlePageNum+1 }}</span> -->
							<div class="next" v-on:click="nextPanel(singlePanel.title)">&#10095;</div>
				  		</div>
					</div>

				
				<!-- </div> -->
			</div>

			

<!-- 		</section>
 -->	</div>
</template>
<script>
	export default {
		name: 'Panels',
		props: {
			panels: {
				type: Array,
				required: true
			},
			newHeights: {
				type: String, 
				required: false
			}
		},
		components: {
			
		},
		data() {
			return {
				msg: 'Panels',
				currentPanel: '',
				baseTheatreZIndex: 9,
				baseFilmZIndex: 8,
				baseDigitalZIndex: 7,
				currentPanels: [{title:'Theatre', 'zIndex':9}, {title: 'Film', 'zIndex': 8}, {title:'Digital', 'zIndex':7}]
			}
		},		
		computed: {
			currentOrder() {

				this.currentPanels[0].title = 'Theatre';
				this.currentPanels[0].zIndex = this.baseTheatreZIndex;

				this.currentPanels[1].title = 'Film';
				this.currentPanels[1].zIndex = this.baseFilmZIndex;

				this.currentPanels[2].title = 'Digital';
				this.currentPanels[2].zIndex = this.baseDigitalZIndex;
				
				console.log(this.currentPanels);

				return this.currentPanels;
			}
		},
		mounted: function(){
			var panelHeights =  window.getComputedStyle(document.getElementById('theatre-area'), null)
     .getPropertyValue('height');

			console.log('from mounted panel' +  panelHeights);
			this.$emit('panelloaded', panelHeights);
		},
		methods: { 
			previousPanel(node) {
				console.log(node);
				this.currentPanel = node;
				this.baseTheatreZIndex=9;
				this.baseFilmZIndex=8;
				this.baseDigitalZIndex=7;

				if(node === "Theatre") {
					this.baseTheatreZIndex--;
					this.baseFilmZIndex--;
					this.baseDigitalZIndex++;
					return;
				}

				if(node === "Film") {
					this.baseTheatreZIndex++;
					this.baseFilmZIndex--;
					this.baseDigitalZIndex--;
					return;
				}

				if(node === "Digital") {
					this.baseTheatreZIndex--;
					this.baseFilmZIndex++;
					this.baseInteractiveZIndex--;
					return;
				}
			},
			nextPanel(node) {
				console.log(node);
				this.currentPanel = node;
				this.baseTheatreZIndex=9;
				this.baseFilmZIndex=8;
				this.baseDigitalZIndex=7;

				if(node === "Theatre") {
					this.baseTheatreZIndex--;
					this.baseFilmZIndex++;
					this.baseDigitalZIndex--;
					return;
				}

				if(node === "Film") {
					this.baseFilmZIndex--;
					this.baseDigitalZIndex++;
					this.baseTheatreZIndex--;

					return;
				}

				if(node === "Digital") {
					this.baseTheatreZIndex++;
					this.baseDigitalZIndex--;
					this.baseFilmZIndex--;

					return;
				}
			}
		}
		
	}
	
</script>
<style lang="scss">
	#panels {
		display: flex;
    	flex-direction: column;
    	flex: 1;

    	.sm & {
    		z-index: 0
    	}
	}
	.panel-container {
		font-family: 'Cambria';
	}

	.panel-area {
		display: flex;
		flex:1;
		justify-content: space-between;
		width: 100%;

		& > div {
			flex: 1;
		}

		.sm & {
			flex-flow: column;

			li {
				width: 100%;
				position: absolute;
				top: 0;
			}
		}


		.md & {
			flex-direction: column;
		}
	}
	
	.single-panel  {

		background-color: black;

		.md & {
			padding: 0;

			&:nth-child(1) {
				z-index:9;
			}

			&:nth-child(2) {
				z-index:8;
			}

			&:nth-child(3) {
				z-index:7;
			}
		}

		.sm & {
			&:nth-child(1) {
				z-index:9;
			}

			&:nth-child(2) {
				z-index:8;
			}

			&:nth-child(3) {
				z-index:7;
			}
		}
		
		.sectiontitle {
			padding-left: .25em;
			background: black;	
			margin: 0;
			font-size: 1.5em;
			font-family: monospace;
			text-transform: uppercase;
			
			.md &,
			.sm & {
				font-size: 4em;
				padding-left: .5em;
			}
		}
	}

	.panel-header {
		color: whitesmoke;
		text-align: left;
    	font-size: 1.5em;
    	letter-spacing: .5em;
    	margin: 0 0 1em;
    	font-weight: lighter;
	}
	
	.panel-content {
		padding: 2em;
	    line-height: 2em;
	    font-family: monospace;
	    font-size: 1.25em;
	    color: #ecda4c;
	    letter-spacing: .2em;
	    font-weight: lighter;
	    cursor: pointer;
	    opacity: 0;
	    box-shadow: 1px 1px #374a47;
	    width: 65%;

	    a {
		    font-size: 1em;
		    letter-spacing: .1em;
		    cursor: pointer;
		    color: #9fd7e8 !important;
		    font-style: italic;
		    text-transform: lowercase;
    		font-weight: bold;
    		text-decoration: none;
	    }

		&:hover {
			 animation: fadein ease 1s forwards;
			 -webkit-animation: fadein ease 1s forwards;
			 -moz-animation: fadein ease 1s forwards;
			 -o-animation: fadein ease 1s forwards;
			 -ms-animation: fadein ease 1s forwards;
		} 

		.md & {
	    	z-index: 13;
			padding-bottom: 5em;
			width: auto;
			font-size: 2.25em;
	    }

	    .sm & {
			margin: 0 auto;
			z-index: 13;
			width: 100%;
			font-size: 2.25em;
			padding: 1em;
		}

	}

	#theatre-area
	.panel-content {
		background-color: rgba(11, 0, 109, 0.82);
	}

	#film-area
	.panel-content {
		background-color: rgba(167, 40, 0, 0.86);
	}

	#digital-area
	.panel-content {
		background-color: rgba(206, 15, 80, 0.93);
	}

	.button-areas {
		display: none;

		.sm & {

			// display: inline-flex;
			// position: relative;
		 //    top: -3em;
		 //    height: 48px;
		 //    width: 100%;
		 //    z-index: 15;
			// margin: 0 auto;
			// align-items: center;

			// .panel-number {
			// 	margin: 0 auto;
			// }
		}

		.md & {

			.panel-number {
				margin: 0 auto;
			}
		}
	}


	/* Next & previous buttons */
	.prev, .next {
	  cursor: pointer;
	  position: absolute;
	  width: auto;
	  padding: 16px;
	  color: white;
	  font-weight: bold;
	  font-size: 18px;
	  transition: 0.6s ease;
	  border-radius: 0 3px 3px 0;
	  user-select: none;
	}

	/* Position the "next button" to the right */
	.next {
	  right: 0;
	  border-radius: 3px 0 0 3px;

		/* On hover, add a black background color with a little bit see-through */
	   // &:hover {
	   		background-color: rgba(0,0,0,0.8);
	   // }

	}

	.prev {

		/* On hover, add a black background color with a little bit see-through */
		// &:hover {
			background-color: rgba(0,0,0,0.8);	
		// }

	}


	.categories {
 		display: flex;
	    flex-direction: row;
	    justify-content: space-between;
	    padding: 1.5em;
	    margin-top: auto;
	}


	.fontwala {
		text-align: center;
	}


	#theatre-area{
		background-image: url('https://raw.githubusercontent.com/sprakash/self/master/theatregif.2aac526b.gif');
	    background-repeat: no-repeat;
	    background-position: -123px 0;
    	background-size: cover;


	    .sm & {
	    	background-size: cover;
			width: 100%;
			min-height: 33.3% !important;
			background-color: black;
			background-position: -110px 0;

	    }

	    .md & {
	    	background-size: cover;
			width: 100%;
			background-position: 0 0;
			min-height: auto !important;

			.panel-content {
				padding-bottom: 2em;
				margin-left: 0;
				text-align: left;
			}

	    }

		.sectiontitle {
			color: #00BCD4;
		}
	}

	#film-area{
		background-image: url('https://raw.githubusercontent.com/sprakash/self/master/vanilla.79896c57.gif');
	    background-repeat: no-repeat;
	    background-size: cover;
	    background-position: center;

	    .sm & {
	    	background-size: cover;
			width: 100%;
			min-height: 33.3% !important;
			background-position: 0;
			background-color: black;

	    }

	    .md & {
	    	background-size: cover;
			width: 100%;

			.panel-content {
				padding-bottom: 2em;
				margin-left: 0;
				text-align: left;
			}
	    }

		.sectiontitle {
				color: #f3407b;

				.md &,
				.sm & {
					text-align: right;
					padding-right: .5em;
				}
		}
	}

	#digital-area {
		background-image: url('https://raw.githubusercontent.com/sprakash/self/master/priyasmask.gif');
		background-repeat: no-repeat;
    	background-size: cover;

	    .sm & {
	    	background-size: contain;
		    width: 100%;
		    min-height: 33.3% !important;
		    background-position: 50%;
		    background-color: black;
	    }

	    .md & {
	    	background-size: contain;
			width: 100%;
			background-position: 50%;

			.panel-content {
				padding-bottom: 2em;
				margin-left: 0;
				text-align: left;

			}
	    }

		.sectiontitle {
			color: #39dc5b;
		}
	}


	/* Zoom in Keyframes */
	// @-webkit-keyframes zoomin {
	//  100%{  transform: scale(1.04);} 
	// }
	// @keyframes zoomin {
	//  	 100%{  transform: scale(1.04);} 

	// } 
	// @-webkit-keyframes zoominMid {
	//  100%{  transform: scale(1);} 
	// }
	// @keyframes zoominMid {
	//  	 100%{  transform: scale(1);} 

	// } 


	/*End of Zoom in Keyframes */

	/* Zoom out Keyframes */
	// @-webkit-keyframes zoomout {
	//   	 100%{  transform: scale(1.04);} 

	// }
	// @keyframes zoomout {
	//   	 100%{  transform: scale(1.04);} 

	// }/*End of Zoom out Keyframes */

	 @keyframes fadein {
	     from { opacity: 0; }
	     to   { opacity: 1; }
	 }

	/* Firefox < 16 */
	 @-moz-keyframes fadein {
	     0% { opacity: 0; }
	     100%  { opacity: 1; }
	 }

	/* Safari, Chrome and Opera > 12.1 */
	 @-webkit-keyframes fadein {
	     0% { opacity: 0; }
	     100%  { opacity: 1; }
	 }

	/* Internet Explorer */
	 @-ms-keyframes fadein {
	    0% { opacity: 0; }
	     100%  { opacity: 1; }
	 }

	/* Opera < 12.1 */
	 @-o-keyframes fadein {
	     0% { opacity: 0; }
	     100%  { opacity: 1; }
	 }
		

</style> 
