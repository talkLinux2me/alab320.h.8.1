import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

export default function GetStarShips (props){

    const url = `https://swapi.dev/api/starships`
    const [starShip,setStarship] = useState([])

    const getStarShipNames = async () => {
        try{
            const response = await fetch(url);
            const data = await response.json();
            setStarship(data.results);
            
        }catch(e){
            console.error(e)
        }
    };

    useEffect(() => {
        getStarShipNames();
    }, []);

    



    console.log(starShip)
    return (
        <>
        <div className="starShips">
            {starShip.map((Name) =>{
                const {name} = Name;

                return (
                    <h1>{name}</h1>
                )
            })}
        </div>
        </>
    );
    }
