import { BotList } from "../bot-list"


export const SideNav = (props) => {
    const { } = props

    return (
        <section className="side-nav-container">
            <div className="">
                <button>user button</button>
                <button>Create bot</button>
            </div>
            <div>
                <h1>Hello user</h1>
                <input type="text" placeholder="Search..." />
                <BotList />
            </div>
        </section>
    )
}