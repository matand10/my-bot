import { ChatBot } from "../cmps/dashboard/chat-bot"
import { SideNav } from "../cmps/dashboard/side-nav"


export const Dashboard = () => {

    return (
        <section className="dashboard-container">
            <SideNav />
            <ChatBot />
        </section>
    )
}