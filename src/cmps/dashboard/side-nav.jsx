import { BotList } from "../bot-list"


export const SideNav = (props) => {
    const { user } = props
    if (!user) return <div>No User Found</div>
    return (
        <section className="side-nav-container">
            <div className="">
                <button>user button</button>
                <button>Create bot</button>
            </div>
            <div>
                <h1>{user.fullname || 'Bot FullName'}</h1>
                <input type="text" placeholder="Search..." />
                <BotList bots={user.bots} />
            </div>
        </section>
    )
}