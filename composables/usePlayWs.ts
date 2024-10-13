import { compose, type Compose } from "@wsvaio/utils";

export default () => {
  const user = useUserStore();
  const handlesMap = new Map<string, Compose<any>>();
  const config = useRuntimeConfig();
  const { send: _send } = useWebSocket(`${config.app.baseURL}/_ws`.replace(/\/+/g, "/"), {
    onConnected() {
      send("in", { nickname: user.nickname });
    },
    async onMessage(_ws, event) {
      const data = JSON.parse(event.data);
      handlesMap.get(data.event)?.run(data);
    },
    onDisconnected(_ws) {
      send("out", { nickname: user.nickname });
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
