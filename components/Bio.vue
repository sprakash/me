<template>
	<div>
		<div class="longbio">
		<span>Welcome to my website. Here you can learn about my work on stage, film and digital medium as a performer, writer and producer.  My goal is to create and devise original work.  Next, I aspire to create my most ambitious work yet : <span style="font-size:1.15em;">FONTWALA</span> a multi-disciplinary work inspired by the story of my uncle’s life as an artist, entreprenuer and visionary of Indian letterforms. Read all about Fontwala, <a href="http://sprakash.github.io/portfolio/fontwala.html" target="_blank">here</a>.  This site has been created by yours truly using vuejs, the code can be checked out on <a href="https://github.com/sprakash/me" target="_blank">GitHub</a>.</span>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'Bio',
		components: {
		},
		data() {
			return {
				msg: 'Bio around yo'
			};
		},
		mounted: function(){
			console.log('from mounted bio' + this.$el.clientHeight);
			this.$emit('bio', this.$el.clientHeight);

		}
	}
</script>
<style lang="scss">
	#bio {
		 	margin: 0;
    		display: flex;
    		flex-direction: column;
    		background: linear-gradient(270deg, #f970b1, #ffc1077d, #ff4b1296, #00c3ff);

    		.sm & {
    			padding : .5em;
    			display: none;
    		}

    		.md & {
				display: none;    			
    		}

		&-action { 
			display: flex;
			width: 25%;
			justify-content: space-between;

			 span {
			 	text-align:left;
				font-size:.85em;
				bottom:0;
				display: block;
				margin: 1em 0 0 .15em;

				.sm & {
					text-align: center;
					width: 100%;
				}
			 }
		}
	}

	.bio .longbio {
	  text-align: justify;
	  padding:1.5em 0 0;
	}
	
	.longbio {
		 display: flex;
		 flex-direction: column;
		 flex-flow: column;

		 .sm & {
			line-height: 1.5em;
		 }
	}


	.longbio,
	.fontwala {
		font-family: monospace;
	    font-size: 1.15em;
	    font-weight: normal;
	    word-spacing: .2em;
	    line-height: 2em;
	    margin: .5em;
	    padding: 0 1em;
	    text-align: center;

	    .md & {
	    	font-size: .75em;
	    }

	}

	.quote {
		font-family: 'Cambria';
	    font-style: italic;
	    text-align: right;
	    font-size: 1em;
	    font-weight: bold;
	    display: block;
	    background-color: #fff0f580;
	    margin: .5em 1em 0 0;
	    border:1px solid;
	    padding: 0 1em;
	
	    .sm & {
			text-align: center;
			font-size: .85em;
    		margin-top: .85em;
	    }
	}

	
</style> 