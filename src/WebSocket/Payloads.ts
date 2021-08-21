const createPayload = (opcode: number, token: string, intents: number) => {
    const data  = {
        op: opcode,
        d: {
            token: token,
            intents: intents,
            properties: {
                $os: process.platform,
                $browser: "DisClient",
                $device: "DisClient"
            }
        }
    }
    return JSON.stringify(data);
}
export default createPayload;