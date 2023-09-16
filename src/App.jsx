import { CarreraTecnicaList } from "./componentes/CarreraTecnicaList"

const initCarrerasTecnicas = [
    { codigo: '1', nombre: 'Programacion con Java' },
    { codigo: '2', nombre: 'Desarrollo de aplicaciones web' }
]

export const App = () => {

    return (
        <>
            <h1>Carreras Tecnicas</h1>
            <CarreraTecnicaList carrerasTecnicas = {initCarrerasTecnicas}/>
        </>
    )
}