import { CardCharacter } from "../CardCharacter";
import { ContainerApp, HeaderApp, ContentCharacters } from "./styles";

export function Application(){
    return(
        <ContainerApp>
            <HeaderApp>
                <h1>Ricky and Morty</h1>
                <span>Nº de Personagens: 826</span>
            </HeaderApp>
            <ContentCharacters>
                <div>
                    <CardCharacter 
                        image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
                        name="Rick Sanches"
                        genre="Male"
                        specie="Human"                    
                    />
                </div>
                <button>Carregar mais</button>
            </ContentCharacters>
        </ContainerApp>
    )
}