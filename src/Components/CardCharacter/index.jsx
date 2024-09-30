import { ContainerCard } from "./styles";

export function CardCharacter({image, name, genre, specie }){
    return(
        <ContainerCard>
            <div className="image">
                <img src={image} alt="" />
            </div>
            <div className="info">
                <h2>{name}</h2>
                <ul>
                    <li>Genre: {genre}</li>
                    <li>Specie: {specie}</li>
                </ul>
            </div>
        </ContainerCard>
    )
}