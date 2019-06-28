import React,{PureComponent} from 'react';
import Banner from './Banner';
import Recommend from './Recommend';
import Oder from './Oder';
import Footer from './Footer';
class Home extends PureComponent{

    render(){
        return ( 
            <div>
        <Banner/>
        <Recommend/>
        <Oder/>
        <Footer/>
        </div>
        )
                   
    }
}
                



export default Home;