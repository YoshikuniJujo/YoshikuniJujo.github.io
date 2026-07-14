import { createRxNostr, createRxForwardReq } from "https://esm.sh/";
import { verifier } from "https://esm.sh/";

globalThis.createRxNostr = createRxNostr;
globalThis.createRxForwardReq = createRxForwardReq;
globalThis.verifier = verifier;

import('./index.js');
