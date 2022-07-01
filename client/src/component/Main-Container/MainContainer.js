import React from "react";
import './_maincontainer.scss';
import Sidebar from "../Sidebar/Sidebar";
import Product from "../Product/Product";



class MainContainer extends React.Component{
    render(){
        return(
            <section className="main-container">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-2 col-md-3 col-sm-4">
                            <Sidebar/>
                        </div>
                        <div className="col-lg-10 col-md-9 col-sm-8">
                            <Product/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


export default MainContainer;