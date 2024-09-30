import axios from "axios";
import { CardCharacter } from "../CardCharacter";
import { ContainerApp, HeaderApp, ContentCharacters } from "./styles";
import { useEffect, useState } from "react";

export function Application() {

    const [characters, setCharacters] = useState([]);

    const [page, setPage]= useState(1)

    const [countPages, setCountPages] = useState('')

    const [qtdCharacters, setQtdCharacters] = useState('')

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
            .then(response => {
                const array = [...characters, ...response.data.results]
                setCharacters(array);
                setCountPages(response.data.info.pages)
                setQtdCharacters(response.data.info.count)
            });
    }, [page]);

    return (
        <ContainerApp>
            <HeaderApp>
                <h1>Rick and Morty</h1>
                <span>Nº de Personagens: {qtdCharacters}</span>
            </HeaderApp>
            <ContentCharacters>
                <div>
                    {
                        characters && characters.map(({ image, name, species, gender }, index) => {
                            return (
                                <CardCharacter
                                    key={index}
                                    image={image}
                                    name={name}
                                    genre={gender}
                                    specie={species}
                                />
                            );
                        })
                    }
                </div>
                {
                    (!(page == countPages)) && <button onClick={() => setPage(page + 1)}>Carregar mais</button>
                }
            </ContentCharacters>
        </ContainerApp>
    );
}
