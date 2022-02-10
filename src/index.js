import Keycloak from "keycloak-js";
import { observable } from "mobx";

const config = observable({ realm: "test", clientId: "test" });
Keycloak(config);
