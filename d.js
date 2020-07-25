
class App extends React.Component {


state = {


isLoding: true,


movies: [],


};



getMovie = async () => {


const movies = await Axios.get("https://yts.mx/api/v2/list_movies.json");


console.log(movies.data.data.movies);


};



componentDidMount() {


this.getMovie();


}


render() {


const isLoding = this.state.isLoding;


return <div>{isLoding ? "Loding.." : "We are Ready!"}</div>;


}

﻿