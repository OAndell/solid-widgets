import { mount, StartClient } from "solid-start/entry-client";
import { registerWebComponents } from "./register";
registerWebComponents();

mount(() => <StartClient />, document);
