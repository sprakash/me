<template>
	<div id="theatre-page">
    <header>
        <a href="/"><h1><span>S</span>hubhra <span>P</span>rakash</h1></a>

            <Navigation/>
    </header>
    <section id="theatre-content">
	<span  class="slicinItup"> 
        <h1>Theatre</h1>
    Here you can have a look at my work on stage, read blogs I've written about my experience with each show, check out gallery of photos and media based on shows and get an idea of my training and skill set.             <span id="theatre-download">Click to Download Printable Version</span> </span>


<!-- 	<ul class="twoviews">
		<li><input type="radio" name="twoview" v-model="showsView" value="resume"/>Resume View</li>
		<li><input type="radio" name="twoview" v-model="showsView" value="gallery"/>Gallery View</li>
	</ul>
 -->
    
		<div id="content-theatre">
            <section v-show="showsView === 'resume'">
                <ShowList/>
            </section>

            
          <!--    <section v-show="showsView === 'gallery'">
                <ShowGallery v-bind:shows="shows"/>
            </section>   -->

		
        </div>
    </section>
	</div>


</template>
<script>
	import Navigation from './Navigation'
    import ShowList from './ShowList'
	export default {
		name: 'Theatre',
		components: {
			Navigation,
            ShowList
		},
		created() {
            // this.msg = this.$route.params.isSlideshow;
        },
        mounted() { 
            console.log(document.getElementById('theatre-page').offsetHeight);
           console.log(document.querySelector('body').clientHeight + ' is the height') ;

           var finalHeight = document.getElementById('theatre-page').offsetHeight;
           document.getElementById('content-fill').style.height = finalHeight+"px";

           if(document.getElementById('topest').class == 'md'){
             document.querySelector('body').style.height = document.getElementById('content-fill').style.maxHeight;
           }
        },
		data (){
			return {
                showsView: 'resume'
			} 
		 }

	}
</script>
<style lang="scss">
header {
    a {
        text-decoration: none;
        color: inherit;
    }
}

.sm #content {
    flex-direction: column !important;
}

.md #grouped {
    width: 100% !important;
}

#theatre {

    &-content {
        
        padding-top: 2em;

        .md & {
            align-content  : center;
        }

    }
    
    &-download {   
        color: #ff4d0b;
        text-decoration: underline;
        font-size: .85em;
        cursor: pointer;
    }
}

header {
    position: fixed;
    left: 0;
    right: 0;
    width: 100%;

    .md & {
        top: 0;
        bottom: inherit;
    }
}


header h1 {
    background: none;
}


input[type="radio"] {
    margin-right: 1em;
    vertical-align: baseline;
}

.slicinItup {
    font-size: 0.85em;
    padding: 1em;
    text-align: left;
    display: block;
    line-height: 1.95em;
    color: #3b323c;
    letter-spacing: 0.105em;
    text-transform: lowercase;
    background-color: white;
    margin-bottom: 1em;
    border-bottom: 1px solid darkslateblue;

    h1 { 
        text-transform: capitalize;
        margin: 0 0 1em 0;
        font-size: 1.5em;
        color: #19abdc;
        letter-spacing: .15em;
        font-weight: normal;
        padding-top: 1em;

    }

}

.twoviews {
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 2em auto 0;
    width: 50%;

    li {
        color: #e67a83;
        padding: 1em 2em;
        text-shadow: #c3e3fd 0 1px 1px 1px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1em;
        font-weight: bolder; 
    }

    .md & {
        font-size: 1em;
        flex-direction: row;
    }

}

#trainingSkills { 
    margin: 1.25em 2em;

    .md & {
       margin: 1.25em 0 .5em 1em;
    }
}
	
.trainingList {
    line-height: 2em;
    margin-bottom: 2em;
    display: block;
    font-size: .65em;

    .sm &,
    .md & {
        text-align: left;
        font-size: .5em;
    }

    li {
        border-bottom: 1px solid;

        .md & {
            padding: 1em 0 1em 1em;
            font-size: 1.75em;
            line-height: 1.85em;
        }

        a {
            font-weight: bold;
            color: #ff4d0b !important;
        }
    }
}

.skills {
    margin-top: 2em;
}

.skillsList {
    line-height: 2em;
    margin-bottom: 2em;
    display: block;
    font-size: .8em;

    .sm &,
    .md & {
        text-align: left;
        font-size: .85em;
    }
}  

#trainingSkills h1,
.skills h1 {
    font-size: .85em;
    margin-left: 0;
    width: 95%;
    background-color: #7ed1eb47;
    padding: .25em 1em;
    line-height: 2em;
    letter-spacing: .15em;

    .sm &,
    .md & {
        font-size: 1em;
        width: 100%;
    }
}

</style>