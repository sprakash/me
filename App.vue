<template>
	<div id="topest" :class="$mq">
		<div id="content">
				<section id="grouped">
					<section id="content-fill">
						<router-view/>
						<Landing/>
					</section>
				</section>			
		</div>
   </div>
</template>
<script>
	import Navigation from './components/Navigation'
	import Landing from './components/Landing'
	import Bio from './components/Bio'
	import Announcements from './components/Announcements'
	export default {
		name: 'App', 
		components: {
			Announcements,
			Bio,
			Navigation,
			Landing
		},
		data (){
			return { } 
		}, 
		mounted: function () {
			document.querySelector('header').title = "hue inspired by sunrise / sunset, two beautiful moments to view in our world, for free."
		}
	}
</script>
<style lang="scss">

	* {
		box-sizing: border-box;
	}

	html, body {
		margin: 0 auto;
		padding: 0;
		box-sizing: border-box;

		.md {
			margin: 0 auto;
		}

	}
	body {
		background-color: black;
		font-family: Roboto, Helvetica, Arial, sans-serif;
		min-height: 100vh;
		display: flex;
		flex-direction: row;
		box-sizing: border-box;

		.md & {
			background-color: black;
		}
	}

	h1 {
		margin: 0.67em .5em;
		line-height: 1.5em;
	}

	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;

		.md & {
			flex-direction: column;
			justify-content: space-evenly;
			width: 100%;
			text-align: center;
			font-size: 1.25em;
		}
	}


	#content {
		background-color: lightblue;
		.sm & {
			flex-direction: column-reverse;
		}
	}

	#content-fill {
		width: 100%;
		height: 100%;
		background-color: whitesmoke;
	}

	header {
		display: flex;
		justify-content: space-between;
		color: #24020a;
		border-top: 1px solid darkgrey;
		background: linear-gradient(270deg, #f970b1, #ffc1077d, #ff4b1296, #00c3ff);
		background-size: 100% 100%;
		color: #39053f;
		align-items: center;
		flex-grow: 1;
		z-index:999;
		cursor: pointer;

		.sm & {
			z-index: 25;
			flex-direction: inherit;
    		padding: 0 2em;
		}

		ul {

			.md & {
				flex-direction: row;		
			}
		}

	}
	
	#topest {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		background-color: cornflowerblue;
		height: 100vh;
	}

	#grouped {
		display: flex;
		flex-direction: column;
		background-color: magenta; 
		align-items: stretch;
		height: 100%;

		.md & {
			width: 80%;
		}
	}

	#content {
		height: 100%;
		.md  &{
			flex-direction: row;
			flex-wrap: nowrap;
		}
	}

	.mobile {

		a {
			color: white !important;
    		font-weight: bold;
    		font-size: 1.85em;
		}
	}

	.router-link-exact-active{
			color: #f4ff42 !important;
	}


</style>

