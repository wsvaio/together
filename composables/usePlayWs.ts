import { compose, type Compose } from "@wsvaio/utils";

export default () => {
  const handlesMap = new Map<string, Compose<any>>();
  const config = useRuntimeConfig();
  const { send: _send } = useWebSocket(`${config.app.baseURL}/_ws`.replace(/\/+/g, "/"), {
    onConnected() {
      handlesMap.get("connected")?.run({});
    },
    async onMessage(_ws, event) {
      const data = JSON.parse(event.data);
      handlesMap.get(data.event)?.run(data);
    },
    onDisconnected(_ws) {
      handlesMap.get("disconnected")?.run({});
    },
    autoReconnect: true,
  });

  function send(event: string, data: Record<any, any>) {
    _send(
      JSON.stringify({
        event,
        ...data,
      })
    );
  }

  return {
    on(event: string, handle: (ev: Record<any, any>) => void) {
      let handles = handlesMap.get(event);
      handles || handlesMap.set(event, (handles = compose()));
      handles.use(handle);
    },
    send,
  };
};
