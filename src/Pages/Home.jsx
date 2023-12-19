import "./Home.css"
import NavBar from "../Components/NavBar/NavBar";
import illustration from "../assets/ilustração.png"
import play from "../assets/Play.svg"
const Home = () => {
    return (
        <section className="home">
        <NavBar></NavBar>
        <div className="homeContainer">
            <div className="description">
            <h4>
            HAYAO MIYAZAKI
            </h4>
            <h2>
            A VIAGEM <br/>
            DE CHIHIRO
            </h2>
            <p>
            Chihiro chega a um mundo mágico dominado <br/> por uma bruxa. Aqueles que a desobedecem <br /> são transformados em animais.
            </p>
            <div className="buttons">
                <button className="Watch"> 
                <img src={play} className="play" />
                ASSISTIR AGORA
                </button>
                <button className="trailer"> ASSISTA O TRAILER</button>
            </div>
            </div>
            <div className="illustration">
                <img src={illustration} alt="" />
            </div>
        </div>


        </section>

      );
}
 
export default Home;