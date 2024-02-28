export interface MessageProps {
    from: {
        name: string,
        id: string,
    },
    message: {
        text?: string | undefined,
        time: string,
    },
}