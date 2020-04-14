<template>
	<div class="announce-area">
		<span id="announce-content">
			<h1>LATEST NEWS : </h1>
			<span>Shakespeare Replayed: Tyranny released on Amazon Prime, <a href="https://www.amazon.com/Shakespeare-Replayed-Tyranny-Shubhra-Prakash/dp/B01H1IEVMG" target="_blank">click here to watch my performance</a></span>
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
		</span>
	</div>
</template>
<script>
	
	export default {
		name: 'Announcements', 
		created () {},
		data (){
			return {
				
			} 
		},
		mounted: function(){
			console.log('from mounted announcements' + this.$el.clientHeight);
			this.$emit('announcements', this.$el.clientHeight);
		}
	}
</script>
<style lang="scss">
	#announcements {
		border: 1px solid grey;    
	}

	#announce-content {
		color: #000;
	    display: flex;
	    font-size: 0.75em;
	    text-align: center;
	    align-items: center;
	    justify-content: space-between;
	    text-transform: uppercase;
	    background: #00b1ff24;
	    font-weight: bolder;
	   	padding: 0 1.5em;


		span {
			color: deeppink;
		}

		a {
			color: deepskyblue;
		}
	}


	.sm {

		.announce-area {
			z-index: 0;
		}


		#announcements {
			z-index: 23;
			line-height: 1.25em;
	    	font-size: .5em;
    	}

    	#announce-content {
			font-size: 1.15em;
    		line-height: 1.85em;
    		padding: 0 .5em;

			h1 {
           	
           	 font-size: 1em;
			
			}
		}
	}
	
	.md #announcements {
		z-index: 23;
		font-size: .75em;
	}

	.svgStylin {
		text-align: right;
		position:relative;
		right:0;
		display: flex;

		.sm & {
			display: flex;
			right: none;
			text-align: left;
			position: static;
		}

		 span {

		 	padding: 0 .5em;
			margin: 0 .25em;

			.sm & {
				margin-right: 0.5em;
				padding: 0;
			}

		 	img {
		 		width: 2em;
		 		height: 2em;
		 		background-color: #ffc10757;

		 	}

		 	 &:hover {
		 	    border: 1px solid #00BCD4;
			    border-radius: 10px;
			    background-color: #00bcd436;
		 	}
		 	
		 }

		
	}


</style>

