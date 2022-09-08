import { BotPreview } from "./bot-preview";


export const BotList = (props) => {
    const { bots } = props

    console.log(bots);
    return (
        <section className="botlist-container">
            {bots.map(bot => <BotPreview key={bot._id} bot={bot} />)}
        </section>
    )
}