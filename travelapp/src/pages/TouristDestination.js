export default function TouristDestination(props){
    console.log(props);
    return(
        <div>
            <div>
                <img src={props.image} class="img-fluid rounded-top" alt="" />
            </div>
            <div> 
                {props.country} <a href={props.link}>View on Google Maps</a>
                <br />
                <h2>{props.name}</h2>
                <b>{props.date}</b>
                <br />
                <p>{props.description}</p>
            </div>

        </div>
    )
}