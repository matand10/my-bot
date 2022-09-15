import { Link } from 'react-router-dom'
export const AppHeader = () => {

    return (
        <section className="app-header flex" >
            <h1 className="logo">ResumyBot</h1>
            <nav className="nav flex">
                    <Link to="/"> Dashboard |</Link>
                    <Link to="/create-bot">Create bot</Link>
            </nav>
        </section>

    )
}