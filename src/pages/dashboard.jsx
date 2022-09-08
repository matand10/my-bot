import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ChatBot } from "../cmps/dashboard/chat-bot"
import { SideNav } from "../cmps/dashboard/side-nav"
import { onLogin } from "../store/user/user.action"


export const Dashboard = () => {
    const dispatch = useDispatch()
    const { user } = useSelector((storeState) => storeState.userModule)

    useEffect(() => {
        const credentials = { username: "user1" }
        dispatch(onLogin(credentials))
    }, [])

    return (
        <section className="dashboard-container">
            <SideNav user={user} />
            <ChatBot />
        </section>
    )
}