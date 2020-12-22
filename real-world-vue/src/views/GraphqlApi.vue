<template>
    <p>dfssdfsdf sdfsdf 
        <!-- <img :src="image.url" contain>         -->
    </p>
</template>
<script>

// import gql from 'graphql-tag'

// export default {
//   apollo: {
//     // Simple query that will update the 'hello' vue property
//     hello: gql`query {
//       hello
//     }`,
//   },
// }


import axios from "axios";

export default {
    data() {
        return {
            image: { url: ""}
        }
    },

        created(){
            alert('sfddf');
            this.loadNextImage();
        } ,
        methods:{
            async loadNextImage()
            {
                try{
                    axios.defaults.headers.common['x-api-key'] = "DEMO-API-KEY" // Replace this with your API Key
                    const payload = {
                      query: "query {   allFilms { films {   title director producers   } }}"
                    };
                    let response = await axios.post('https://swapi-graphql.netlify.app/.netlify/functions/index', payload) // Ask for 1 Image, at full resolution
                    
                    //this.image = response.data[0] // the response is an Array, so just use the first item as the Image

                    console.log("-- Image from TheCatAPI.com")
                    console.log("id:", response.data)
                    console.log("url:", this.image.url)

                }catch(err){
                    console.log(err)
                }
            }
        }
}
</script>