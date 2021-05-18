import React, {Component} from 'react'
import Loading from './Loading'


class Home extends Component{
    constructor(props){
        super(props)
        console.log(this.props);
    }

    render(){
        console.log(this.state);
        document.title = "Home"
        return(
            <div>
                <Loading />
            </div>
        )
    }
}

export default Home;