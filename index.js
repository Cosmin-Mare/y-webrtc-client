import * as Y from "yjs";
import { WebrtcProvider } from "./y-webrtc.js";

const id = "6wARbQyNUGasVc3swRB2bH";
const yDoc = new Y.Doc();
const provider = new WebrtcProvider(id, yDoc, {
  signaling: ["wss://yjs-signaling-server-5fb6d64b3314.herokuapp.com"],
});
const ytext = yDoc.getText("codemirror");
const yUndoManager = new Y.UndoManager(ytext);

provider.awareness.setLocalStateField("user", {
  name: "Saving",
});
yDoc.on("update", (update) => {
  console.log("Update", update);
});
console.log("Listening on room " + id);
