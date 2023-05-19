import './style.css';

export function FilimoBoxFunction(props2){
    function renderFarm(){
        return props2.filimoData.map(function(box){
            return (<li>
                        <a href={box.link2}>
                            <div className="imageBox">
                                <img src={box.image2} /> 
                                <div className="play"><i class="fa-solid fa-play"></i></div>
                                <p>{box.text2}</p>
                                <div className="imageHover"></div>
                            </div>    
                        </a> 
                                               
                    </li>)
        })
    }
    return(
        <div className="FilimoBoxHolder">
            <div className="container">
                <div className="FilimoBoxTitle">
                    <img src="assets/images/filimo-icon.png" />
                    <h2 className="title2">  فیلیمو‌باکس چیست؟ </h2>
                </div> 
                <p className="description">برای تماشای فیلیمو، تلویزیون شما باید هوشمند باشد، اگر نیست، با تهیه یک اندروید باکس، تلویزیون خود را هوشمند کنید، ما به شما فیلیمو باکس را پیشنهاد می‌کنیم که به تلویزیون وصل می‌شود و آن را هوشمند می‌کند. چطوری؟ کافیست ویدیو‌های زیر را تماشا‌کنید.</p>    
                <a className="informationLink" href="https://www.filimo.com/filimobox">
                    <span>اطلاعات بیشتر </span>
                    <i class="fa-solid fa-arrow-left"></i>
                </a>
                <ul className="FilimoBoxList">
                    {renderFarm()}
                </ul>
            </div>
        </div>
    )
}
