import { MessageProps } from "./interfaces/MessageProps"

export default function Response({ from, message }: MessageProps) {
    return (
        <li key={from.id} className="clearfix">
            <div className="message-data align-right">
            <span className="message-data-name"><i className="fa fa-circle online"></i>{from.name}</span>
            <span className="message-data-time">{message.time}</span>
            </div>
            <div className="message other-message float-right">
                {message.text}
            </div>
        </li>
    )
}
