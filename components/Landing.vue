<template>
	<div id="landing">
		<main>
			<section id="rolePanels">
             <Panels v-bind:panels="panels"/>
            </section>
			<section id="announceArea">
                <div id="announcements">
					<Announcements/>
				</div>
			</section>
			<section id="bio">
			     <Bio/>
			</section>
            <section id="header">
		      <header>
                <h1>Shubhra Prakash</h1>
                <Navigation/>
              </header>
            </section>
		</main>			
	</div>
</template>
<script>
	import Panels from './Panels'
	import Navigation from './Navigation'
	import Bio from './Bio'
	import Announcements from './Announcements'
	export default {
		name: 'Landing', 
		components: {
			Panels,
			Announcements,
			Bio,
			Navigation
		},
		data () {
			return {
				panels : [
				  { title: "Theatre", id:"theatre-area", prev: "digital-prev", next: "film-next", content: "I am  most alive on stage, have a look at the shows I've acted in, the work I've created on stage and what lies ahead for me as a theatre maker. "},
				  { title: "Film", id:"film-area", prev: "theatre-prev", next: "digital-next", content: "Have a look at the short films I have been a part of as a creator, producer and performer."}, 
				  { title: "Digital", id:"digital-area", prev: "film-prev", next: "theatre-next", content: "an A/R comic book, a digital art exhibition or an interactive short film, here is work that lies at the intersection of performance and tech."}
				]
			} 
		},
        mounted: function () {
            console.log("landing mounted");
            document.querySelector("#content-fill").style.height="100%";
          //  this.adjustHeight();
        },
        created: function() {       
          //  window.addEventListener('resize', this.adjustHeight);
        },
        destroyed() {
          // window.removeEventListener("resize", this.adjustHeight);
        },

        methods : {
            adjustHeight: function() {

                //get Panels offsetHeight. 
                //get all componentHeights. 
                //get sum of both panels and all components.
                //subtract from window.innerHeight. 
                //give panels the min-height which is the result from previous equation. 

                console.log(!document.querySelector('#topest').classList.contains('md') + " md or not ");

                if(!document.querySelector('.md')) {
                    
                    document.getElementById('content-fill').style.height= "100%";

                    var panelsHeight = document.querySelector('main').clientHeight;
                    console.log('panels ' + panelsHeight + this.$el.clientHeight);

                    for (var i=0; i < this.$el.getElementsByTagName('section').length; i++) {
                      console.log(i + " index : " + this.$el.getElementsByTagName('section')[i].clientHeight);
                    };

                    var hAnnounce = document.querySelector('.announce-area').clientHeight;
                    var hBio = document.querySelector('section#bio').clientHeight;
                    var hHeader = document.querySelector('header').clientHeight;

                    var withoutPanels =  hAnnounce + hBio  +  hHeader;

                    console.log('announce ' + hAnnounce + 'hBio ' + hBio + 'hHeader ' + hHeader);
                    console.log('withoutPanels ' + withoutPanels);
                    var newPanelHeight = panelsHeight - withoutPanels;
                    document.querySelector(".single-panel").style.minHeight = newPanelHeight+'px';
                }

            }
        }
	}
</script>
<style lang="scss" scoped>

#topest {
    height: max-content;
}


#landing {
    height: 100%;
}

main {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;

    .sm & {
        flex-direction: column-reverse;
    }
}

header {
    display: flex;
    flex-direction: column;
    position: static;

    .sm & {
        position: absolute;
        background: none;

        h1 {
            display: none;
        }
    }

    .md & {
        position: absolute;
        background: none;
    }

    h1 {
        font-size: 2em;
        margin: .125em  0 0 0;

        .md & {
            display: none;
        }
    }
}


#rolePanels {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
}

#announceArea {
    display: flex;
    width: 100%;
    flex-direction: column;
}

.md {
    section { 
        background-color: whitesmoke;
    }

    #panels{
        z-index: 0;
    }
}


</style>

