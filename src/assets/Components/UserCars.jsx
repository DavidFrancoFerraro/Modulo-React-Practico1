import colors from "./Color";


const Card = ({ name, picture, iconEmail, email, iconPhone, phone, iconLocation, location }) => {
    return (
        <div className="user" style={{color : colors}} >
            <div>
                <h1>{name}</h1>
                <img src={picture} alt={`picture ${name}`} />
            </div>
            <div className="information">
                <h2>{iconEmail}{email}</h2>
                <h2>{iconPhone}{phone}</h2>
                <h2>{iconLocation}{location}</h2>
            </div>
        </div>
    );
}

export default Card