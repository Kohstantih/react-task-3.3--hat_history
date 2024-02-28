import { MessageHistoryProps } from "./interfaces/MessageHistoryProps";

import Message from "./Message";
import Response from "./Response";
import Typing from "./Typing";

export function MessageHistory({list = []}: MessageHistoryProps) {
    if (list.length === 0) return;

    return (
        <ul>
            {
                list.map((item) => {
                    if (item.type === 'message') {
                        return (<Message
                            from={
                                { name: item.from.name, id: item.id }
                            }
                            message={
                                { text: item.text, time: item.time }
                            }
                        />)
                    }
                    if (item.type === 'response') {
                        return (<Response
                            from={
                                { name: item.from.name, id: item.id }
                            }
                            message={
                                { text: item.text, time: item.time }
                            }
                        />)
                    }
                    if (item.type === 'typing') {
                        return (<Typing
                            from={
                                { name: item.from.name, id: item.id }
                            }
                            message={
                                { time: item.time }
                            }
                        />)
                    }
                })
            }
        </ul>
    )
}