import { MessageProps } from "./interfaces/MessageProps"

export default function Typing({ from, message }: MessageProps) {
    return (
        <li key={from.id} className="clearfix">
            <div className="message-data align-left">
                <span className="message-data-time">{message.time}</span> &nbsp; &nbsp;
                <span className="message-data-name">{from.name} </span>
                <i className="fa fa-circle me"></i>
            </div>
            <div>
                <i className="fa fa-circle typing online"></i>
                <i className="fa fa-circle typing-second online"></i>
                <i className="fa fa-circle typing-third online"></i>
            </div>
        </li>
    )
}