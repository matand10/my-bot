import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { CreateBotInputs } from "../cmps/create-bot/create-bot-inputs"
import { CreateBotRadios } from "../cmps/create-bot/create-bot-radios"
import { CreateBotTextareas } from "../cmps/create-bot/create-bot-textareas"
import { useDispatch, useSelector } from "react-redux/es/exports"
import { loadBot, saveBot, loadBots } from "../store/bot/bot.action"
export const CreateBot = (props) => {
    let { bots } = useSelector((storeState) => storeState.botModule)
    const params = useParams()
    const dispatch = useDispatch()
    const { } = props
    let gTimeOut
    const [bot, setBot] = useState()

    useEffect(() => {
        onLoadBot()
        onLoadBots()
    }, [])

    const onLoadBots = async () => {
        await dispatch(loadBots())
    }

    const onLoadBot = async () => {
        const { botId } = params
        if (botId) {
            const bot = await dispatch(loadBot(botId))
            setBot(bot)
        }
    }

    const onSubmit = async (ev) => {
        ev.preventDefault()
        await dispatch(saveBot(bot))
        //Will Save The Bot
    }

    const handleChange = (ev) => {
        const { target } = ev
        const val = target.value
        const field = target.name
        clearTimeout(gTimeOut)
        // gTimeOut = setTimeout(() => {
        setBot({ ...bot, [field]: val })
        // }, 1000)
    }
    console.log('bot:', bot);
    return (
        <div className="fake-section flex">
            <section className="create-bot align-center pad-10px">
                <form onSubmit={onSubmit} className="flex column pad-10px">
                    <CreateBotInputs handleChange={handleChange} />
                    <CreateBotRadios handleChange={handleChange} />
                    <CreateBotTextareas handleChange={handleChange} />
                    <button>Save</button>
                </form>
            </section>

            <div className="will-remove">

            </div>
        </div>
    )
}