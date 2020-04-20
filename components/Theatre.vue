<template>
	<div id="theatre-page">
    <header>
       <!--  <a href="/"><h1><span>S</span>hubhra <span>P</span>rakash</h1></a>
 -->
        <a href="/"><h1><span>शुभ्रा प्रकाश</span></h1></a>

            <Navigation/>
    </header>
    <section id="theatre-content">
        


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

h1 {
    span {
        font-weight: lighter;
    }
}
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

#content-theatre {
    margin-top: 2em;
    background-color: black;

    .sm & {
        margin-top : 0;
    }
}

#theatre {

    &-content {
        
        padding-top: 2em;

        .sm & {
            padding-top: 2em;
        }

        .md & {
            align-content  : center;
            padding-top: 4em;
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

.training-link {
    text-align: center;
    letter-spacing: .25em;
    font-family: Cambria;
    color: #5aa8bf;
    font-size: 1em;
    text-transform: uppercase;
    text-decoration: none;
    margin-bottom: 1em;
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
            color: white;
            text-align: center;
            text-transform: uppercase;
            font-size: 2em;
            line-height: 1.85em;
            border: 1px solid white;
            padding: 1em;
            font-weight: bold;

        .md & {
            padding: 1em 0 1em 1em;
            font-size: 1.75em;
            line-height: 1.85em;
        }

        a {
            font-weight: bold;
            color: #78B9E8 !important;
        }
    }
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
    font-size: 1.5em;
    margin-left: 0;
    width: 95%;
    padding: .25em 1em;
    line-height: 2em;
    letter-spacing: .15em;
    color: navajowhite;
    text-align: center;

    .sm &,
    .md & {
        font-size: 1em;
        width: 100%;
    }
}


</style>