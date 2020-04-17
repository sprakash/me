<template>
	<div id="navigation">
		<nav>
			<ul>
		 	<li id="home"><router-link :to="{name: 'Landing'}">Home</router-link></li>
			<li id="theatre"><router-link :to="{name: 'Theatre'}">Theatre</router-link></li>
		    <li id="film"><router-link :to="{name: 'Film' }">Film</router-link></li>
		    <li id="digital"><router-link :to="{name: 'Digital'}">Digital / Intersect</router-link></li>
		      <li id="fontwala"><a href="http://sprakash.github.io/portfolio/fontwala.html" target="_blank">Fontwala</a></li>
		     <li id="blog"><a href="http://shubhraprakash.blogspot.com" target="_blank">Blog</a></li>
 	  	 		<li id="connect"><router-link :to="{name: 'Collaborate'}">Collaborate</router-link></li>
			</ul>
		</nav>

	    <nav class="mobile"><a href="#" v-on:click="openMenu()"><span>&#9776;</span></a>
		<ul id="mobileNav">

				<li><a href="#" v-on:click="closeMenu()">&times;</a></li>
			 	<li id="home"><router-link :to="{name: 'Landing'}">Home</router-link></li>
				<li id="theatre"><router-link :to="{name: 'Theatre'}">Theatre</router-link></li>
			    <li id="film"><router-link :to="{name: 'Film' }">Film</router-link></li>
			    <li id="digital"><router-link :to="{name: 'Digital'}">Digital / Intersect</router-link></li>
			    <li id="fontwala"><a href="http://sprakash.github.io/portfolio/fontwala.html" target="_blank">Fontwala</a></li>
  				<li id="blog"><a href="http://www.shubhraprakash.blogspot.com" target="_blank"/>Blog</a></li>    
 				<li id="connect"><router-link :to="{name: 'Collaborate'}">Collaborate</router-link></li>
			</ul>
		</nav>
	</div>
	
</template>
<script>
	export default {
		name: 'Navigation',
		data() {
			return {
				msg: 'Navigate around yo'
			};
		}, 
		mounted: function(){
			console.log('from mounted header' + this.$el.clientHeight);
			this.$emit('header', this.$el.clientHeight);
		},
		methods: {
			openMenu() {
				document.getElementById('mobileNav').style.display='block';
			},
			closeMenu() {
				document.getElementById('mobileNav').style.display='none';
			}
		}
	}
	
</script>
<style lang="scss">
	
	#navigation {
		width: 80%;
		margin: .5em 0;


		.sm & {
			flex: 2;
			padding: 3em 0;
			margin: 0;
		}

		.md & {
			flex: 2;
			padding: 3em 0;
			margin: 0;
		}
	}
	
	header {
		flex-grow: 1;
		opacity: 1;

		.sm & {
			align-items: center;
			position: static;
		}

		.md & {
			position: absolute;
		}

		h1 {
			span {
				font-size: 2em;
			}
		}
	}

	nav {
		margin: 0 2em;

		.sm & {
			margin: 0;
		}

		ul {
			display: flex;
			list-style-type: none;
			justify-content: space-around;

			 li { 

				a {
					font-weight: bolder;
					letter-spacing: .085em;
					font-size: 1.15em;

					&:hover {
						color: navajowhite !important;
					}
				}
			 }
		}

		a {
			text-decoration: none;
		}

		&:nth-child(1) {

			.sm & {
				display:none;
			}

			.md & {
				display:none;
			}
		}

		&:nth-child(2) {
			display: none;

			.sm & {
				float: right;
				cursor: pointer;
			}

			.md & {
				float: right;
				cursor: pointer;
				top: 3px;
			    position: absolute;
			    right: 3%;
			}
		}
	}

	li { 

		a {
			text-decoration : none;
			color: #39053f !important;
			font-size: .95em;
	    	font-weight: lighter;

	    	&:hover {
	    		color: yellow;
	    	}
    	}
	}
	
	h1 {
		.sm & {
			font-size: 1em;
		}

		.md & {
			font-size: 1em;
		}
	}

	.mobile {

		a {
			span {
				border: 3px solid;
    			border-image-source: linear-gradient(to left, #E91E63, #FF9800);
    			border-image-slice: 1;

    			#landing & {
    				font-size: 2.5em;
    			}

    			#collaborate-page &,
    			#digital-page &, 
    			#film-page &,
    			#theatre-page & {
    				font-size: 2em;
    			}
			}
		}

		.sm & {
			display: flex;
    		justify-content: flex-end;
		}

		.md & {
			display: block;
		}

		ul {
			top: 0;
			position: absolute;
		    z-index: 24;
		    width: 100%;
		    left: 0;
		    justify-content: space-evenly;
		    height: 100%;
		    text-align: center;
		    display: block;
		    flex-direction: column;

		     li {
		     	margin: 0.05em 0;
    			background: #000000c9;
			    padding: 0.85em 0;
			    display: block;
			    border-bottom: 1px solid black;
			    font-size: 2.5em;
			    border-image-source: linear-gradient(270deg, #ff0079, #ffc410, #df420f, #01bffa);
    			border-image-slice: 1;

				&:first-child {
					padding: 0.5em;
					margin: 0;

					a {
						display: block;
					    text-align: right;
						font-size: 1.5em;
				    	margin-right: 1em;
				    	margin-top: 0 !important;
					}
				}

				a {
					font-size: 1.85em;
				}
		     }
		}
	}

	#mobileNav {
		display: none;
		position: fixed;
	}
</style> 
