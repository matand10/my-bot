import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { CreateBotInputs } from "../cmps/create-bot/create-bot-inputs"
import { CreateBotRadios } from "../cmps/create-bot/create-bot-radios"
import { CreateBotTextareas } from "../cmps/create-bot/create-bot-textareas"
import { useDispatch } from "react-redux/es/exports"
import { loadBot } from "../store/bot/bot.action"
export const CreateBot = (props) => {
    const params = useParams()
    const dispatch = useDispatch()
    console.log(params);
    const { } = props
    let gTimeOut
    const [bot, setBot] = useState()

    useEffect(() => {
        onLoadBot()
    }, [])

    const onLoadBot = async () => {
        const { botId } = params
        console.log('bot', botId);
        if (botId) {
            const bot = await dispatch(loadBot(botId))
            setBot(bot)
        }
    }

    const onSubmit = (ev) => {
        ev.preventDefault()
        let userBot = bot

        console.log('submiting')
        //Will Save The Bot
    }

    const handleChange = (ev) => {
        const { target } = ev
        const val = target.value
        const field = target.name
        clearTimeout(gTimeOut)
        gTimeOut = setTimeout(() => {
            setBot({ ...bot, [field]: val })
            console.log('Hola');
        }, 1000)
    }
    console.log(bot);
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