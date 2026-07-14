import { createRxNostr, createRxForwardReq } from "https://unpkg.com";
import { verifier } from "https://unpkg.com";

globalThis.createRxNostr = createRxNostr;
globalThis.createRxForwardReq = createRxForwardReq;
globalThis.verifier = verifier;
