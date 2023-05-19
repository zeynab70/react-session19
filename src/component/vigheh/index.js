import './style.css';
export function MostPopulFunction(props){
    function renderFarm(){
        return props.mostPopulData.map(function(movies, i){
            return (<li key={i}>
                        <a href={movies.link}> 
                            <div className="imageBox">
                                <img src={movies.image} />
                                <div className="imageHover"></div>
                            </div>
                        </a>
                    </li>)                        
        })
    }
    return(
        <div className="MostPopulHolder">
            <div className="container">
                <h3 className="title1"> {props.title} </h3>
                <ul className="MostPopulList">
                    {renderFarm()}
                </ul>
            </div>
            
        </div>
    )
}
