<template>
	<div id="shows">
		<section class="show-container">
			<div class="show-filter">
			<!-- <table class="show-area" align="center">
				<th v-for="column in headers">
					<div v-on:click="sortBy(column)">{{column}}</div>
				</th>
				
				<tr v-for="dataItem in myJson['Theatre']">
					<td>
						{{dataItem.name}}
					</td>
					<td>
						{{dataItem.type}}
					</td>
					<td>
						{{dataItem.role}}
					</td>
					<td>
						{{dataItem.director}}
					</td>
					<td>
						{{dataItem.company}}
					</td>
					<td>
						{{dataItem.year}}
					</td>
				</tr>
			</table> -->

			 
				<div class="show-content">
					<div class="show-headers">
						<span>SHOWS / PLAYS / PERFORMANCES </span>

						<span class="show-instruction">click title to learn more about each show</span>
					</div>
					 <v-expansion-panels accordion multiple>
					    <v-expansion-panel v-for="(entry,i) in myJson['Theatre']"
							    v-if="entry[sortKey] === showFilter || showFilter === 'All'"
							    :item="entry"
					     		:key="i"  v-bind:id="entry.id" :style="{ backgroundImage: `url(${entry.mainpic})`, backgroundRepeat:`no-repeat`, backgroundSize: `cover`, borderRadius : `10px` }">
					      <v-expansion-panel-header>
					      	<span class="show-info">
						      	<span class="show-header">
							      	<span class="show-name">{{entry.name}}</span> 
							      	<span class="show-details">
							      	<span class="show-role"> Role : {{entry.role}} </span><span class="show-location">{{entry.location}}</span>
							      	<span class="show-year">{{entry.year}} </span>	
							       </span>
							     </span>
							 <!-- <span class="show-mainImage">
						       <img class="show-mainImage-src" :src="entry.mainpic"/>
						     </span> -->
       					     </span>

					      </v-expansion-panel-header>
					      <v-expansion-panel-content>
					      	<div class="show-expanded"> 
						       <ul>
						       	<li>Type : {{entry.type}}</li>
						       	<li>Playwright : {{entry.playwright}}</li>
						       	<li>Director : {{entry.director}}</li>
						       	<li>Company : {{entry.company}}</li>
						       	<li class="show-expanded-blurb">{{entry.blurb}}</li>
						       </ul>
						       <div class="show-links"> 
						       		<span><a 
						       				 v-if="entry.bloglink !== ''"

						       			v-bind:href="entry.bloglink" target="_blank">More info</a></span>
						       		<span><a v-bind:href="entry.gallerylink" target="_blank">Show Photos</a></span> 
						       </div>
						   </div>
					      </v-expansion-panel-content>
					    </v-expansion-panel>
					  </v-expansion-panels>
		    	</div>

		    	<div class="show-side">
				<div class="word-cloud">
					<span>FILTER</span>
					<ul>
							<li
							  v-for="(entry, index) in showFilterList"
							  :item="entry"
							  :key="index"
							  @click="showFilter = entry;"
							  :class="{ showActive: entry == showFilter }"
							>
							  {{ entry }}
						</li>
					</ul>
				</div>


			<div id="skillset">
			 <div id="trainingSkills">
            <h1>TRAINING</h1>
            <ul class="trainingList">
               
                <li>Documentary Theatre &amp; Teaching Artist Training with Ping Chong & Company. New York.</li>
                <li>Indian Classical Singing (Kirana Gharana), private coaching w/ Sandip Bhattacharjee. New York &amp; India.</li>
                <li>On Camera Scene Study w/ Courtney Burr at Margie Haber Studio, Los Angeles. </li>
                <li>Film Acting Technique w/ Nancy Berwid at FirstTake Acting Studio, San Francisco. </li>
                <li>Musical Theatre Summer Conservatory w/ Marc Jacobs, Notre Dame De Namur University, Silicon Vallery.</li>
                <li>Voice/Singing for Musical Theatre, Private Coaching w/ Michael Pesce, New York City.</li>
                <li>Acting Shakespeare’s Verse, Private coaching w/ Deloss Brown, New York City. 
</li>
                <li>Classical Commedia D’ell Arte w/ Stanley Allan Sherman at Roving Classical Commedia, New York City.

</li>

            </ul>

            <h1>LABS / WORKSHOPS</h1>
            <ul class="trainingList">
            	<li>Participant @ Where Film &amp; Anthropology Intersect, Workshop on Documentary Filmmaking with Harjant Gill. New Delhi 2019</li>
            	<li>Participant @ <a href="https://www.tfiny.org/events/detail/immigration_co_lab_nyc" target="_blank">IMMIGRATION CO/LAB | NYC - Tribeca Film Institute</a>. New York City 2017</li>
            </ul>

            <h1>TALKS / PRESENTATIONS </h1>
            <ul class="trainingList">
            	<li><a href="https://www.docville.be/nl/film/webdox-40-user-engagement" target="_blank">Presenter @ WebDox Conference (User Engagement) Leuven, Belgium 2015</a></li>
            	<li><a href="http://www.sawcc.org/new-films-2015/" target="_blank">Presenter / Filmmaker @ South Asian Women's Creative New Films 2015</a></li>
            </ul>

            <h1 class="skills">SKILLS</h1>
            <ul class="trainingList">
                <li>Open Water Scuba Certification.</li>
                <li>Dialects/Accents : South East London, African American, Russian &amp; French.</li>

                <li>Fluent (Speak, read, write and sing) in Hindi. Conversational Bengali and French.</li>
            </ul>

        </div>

    </div>
	
			</div>

		</div>

		</section>
	</div>
</template>
<script>
	import json from '/assets/json/theatre.json'
	import showImages from '/assets/fake/*.jpg'

	export default {
		name: 'ShowList',
		components: {
			
		},
		data() {
			console.log(" stuff " +  showImages);

			return {
				headers: ['name','type','role','director','location','year'],
				myJson: json,
				sortKey: 'type',
				sortTag: 'tags',
			 	showFilterList: ["All","Play", "Play with Music", "Indian Theatre","Experimental Theatre", "Documentary Theatre", "Musical", "Ensemble", "Children's Theatre", "Staged Reading"],
			 	showFilter: "All",
			 	myImages: "sultanaNSD.jpg"
			 }
		},	

		computed: {
			
		},
		methods: {
             sortBy: function(sortKey) {
                this.reverse = (this.sortKey == sortKey) ? ! this.reverse : false;
            }
   
			
		}
		
	}
	
</script>
<style lang="scss" scoped>

	table {
		font-size: .75em;
		margin-top: 2em;

		.sm & {
			display: none;
		}
	}

	th {
		text-align: left;
		font-size: 1.25em;
		height: 2em;
		border-bottom: 1px solid grey;
		padding-left: 2em;

		&:nth-child(6) {
			padding-left: 1.5em;
		}

		div {
			text-transform: capitalize;
		}

		.md & {
			font-size: 1em;
		}
	}

	td {
		border-bottom: 1px solid grey;
		padding-left: 2em;

		.md & {
			font-size: 1em;
		}
	}

	.show {
		&-container {
			margin: 0 auto;
			padding: 0 1em;
		}

		&-info {
			display:flex;
			flex-direction: row;
			justify-content: space-between;
			width: 100%;
			background-color: #ffffffb0;
    		padding: 0 .85em;
    		border-radius: 10px;
		}

		&-mainImage {
			width: 25%;
			img {
				object-fit: contain;
				width: 100%;
				pointer-events: none;
			}

		}

		&-headers {
			font-size: 0.75em;
		    color: gray;
		    width: 100%;
		    display: flex;
		    letter-spacing: .1em;
		    font-weight: lighter;
		    margin-bottom: 0.5em;
		    padding: .5em;
		    justify-content: space-between;

		    span {
		    	width: 50%; 
		    	padding: 0 .5em;

		    	&:last-child {
			    	text-align: right;
			    }
		    }

		    
		}

		&-filter {
			display: flex;
			flex-direction : row;
			.sm & {
				flex-direction: column;
				flex-wrap: wrap;
			}
		}

		&-content {
			width: 100%;
		}

		&-expanded {
			background-color: white;
			border: 1px solid #ff430859;
			border-top: none;

			&-blurb {
			    font-size: 1.2em;
			    line-height: 1.5em;
			    padding: 1em 0 .5em;
			    color: black;
			}
		}

		&-header {
			display: flex;
			flex-direction: column;
			line-height: 2em;
    		letter-spacing: .11em;

    		.md & {
    			text-align: left;
    		}
		}

		&-name {
			font-size: 1.85em;
			font-weight: 300;
			color: #000;
			word-break: break-all;
			margin-bottom: .25em;
			line-height: 1.5em;


			.sm & {
				display: block;
				font-size: 2 em;
				text-align:left;
			}
		}
		
		&-year {
			font-size: .75em;
			margin: 0 !important;
			color: #1768c7;
			font-weight: bold;
			display: block;
			padding-bottom: .5em;

			.md & {
				margin: 0;
				padding: 0;
			}
		}

		&-role {
			color: #e91e63;
		}

		&-year, 
		&-role {
		    margin: 0 5em 0 0;
		    text-transform: uppercase;
    		font-size: 1.25em;
    		letter-spacing: .05em;

    		.sm & {
    			display: block;
    		}

    		.md & {
    			margin: 0 !important;
    			padding: 0 !important;
    		}
		}

		&-details {

			.md & {
				display: flex;
				flex-direction: column;
				flex-wrap: nowrap;
				text-align: left;
			}
		}

		&-links {
			text-transform: uppercase;
		    font-size: .5em;
		    display: flex;
		    width: 100%;
		    justify-content: flex-end;
		    flex-direction: row;

		    .md & {
		    	justify-content: center;
		    	margin: 1em 0;
		    }

		    span {

		    	margin: 0 2em 2em 0;

		    	a {
		    		padding: 1em 2em;
			    	background: #03a9f445;
				    color: #084086;
				    cursor: pointer;
				    font-weight: bolder;
				    border-radius: 7px;
				    letter-spacing: .15em;
				    border: 1px solid coral;
				    text-decoration: none;

		
		    	}
		    	
				&:nth-child(2) {
					a {
						padding: 1em 0.5em;

					}
		    	}

		    }
		}

		&-location {
			font-size: .75em;
			text-transform: uppercase;
			color: black;
    		display: block;
	

			.md & {
				text-align: left;
				margin: 0;
				padding: 0;
			}
		}

		&-side {
			  display: flex;
    		  flex-direction: column;
		}

	}

	.word-cloud {
		display: flex;
		margin-top: 2em;
		flex-direction: column;
		width: 70%;
    	margin: 0 auto;
		

		span {
			font-weight: bolder;
		    letter-spacing: .1em;
		    color: #5352a9;
		    font-size: .85em;
		    margin-left: 2em;
		    margin-top: 1em;
		    text-align: center;
		}
		ul {
		    padding: 0.5em 1em;
		    text-align: center;
		    font-size: 0.75em;
			display: flex;
		    justify-content: center;
		    flex-wrap: wrap;
		    flex-direction: row;

			li {
				background-color: #cff2f980;
    			color: #484784fa;
				font-weight: lighter;
				padding: .5em 1em;
				text-align: center;
				font-size: .85em;
    			border: 2px solid #ffeb3b4a;
				margin: .25em;
				cursor: pointer;	
				letter-spacing: .1em;
				text-transform: uppercase;	

				&:nth-child(1) {
					font-weight: bolder;
					letter-spacing: .25em;
				}		     
			}

		}
	}

	.v-expansion-panel {
		margin-bottom: .5em;
		background-position: center 10%;

		button {
			padding: 1em 1.5em;
		    background-color: #1d20235c;
		    font-size: 1em;
		    color: #084086;
		    text-align: justify;
		    width: 100%;
		    font-weight: lighter;
		    display: flex;
		    cursor: pointer;
			justify-content: space-between;
			background-position: right;
			background-size: contain;
		}

		ul {
			font-size: .75em;
		    padding: .5em 1.5em;
		    color: darkblue;
		    line-height: 1.5em;
		    background-color: white;
		    font-weight: lighter;
		    letter-spacing: .05em;
		}
	}

	.showActive {
		border: 2px solid #ff4d0b !important;
	}

	#cootieShots {
		 background-position: center 25%;
		.show-name {
			font-size: 1.5em;
		}
	}

	#nickelAndDimed,
	#beautifulThing,
	#leadingLadies,
	#hairspray,
	#onceOnThisIsland,
	#romeoNjuliet,
	#panniarchy,
	#sundays {
		background-position: center;
	}

	#theVaginaMonologues,
	#babyshka {
		background-position: center 40%;
	}

	#macbeth,
	#themusicinmyblood {
		background-position: center 33%;
	}

	#beyondSacred {
		background-position: center 70%;
	}

	#theOddCouple,
	#macbeth,
	#ramonaQuimby,
	#girlAndHerGoddess {
		background-size: contain !important;
		background-position: right;
	}
	
	#theProcedure {
		background-position: center 52%;
	}

	#sheherezadeXI {
		background-position: 0 10%;
		background-size: 128% !important;
	}

	#midsummer {
		background-position: center 25%;
	}

	#ozmaOfOz {
		background-position: center 20%;
	}

	#sultanaDakuNautanki {
		background-position: 0 30%;
		background-size: 125% !important;
	}
</style>