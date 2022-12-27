import { A } from "./Navigation.styled"

export const Navigation = () => {
    return (
        <>
        <nav>
            <ul>
                <li><A to='/' end>Home</A></li>
                <li><A to='/movies'>Movies</A></li>
            </ul>
        </nav>
        <hr />
        </>
    )
}