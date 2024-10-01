import { Container } from "inversify";
import { capClient } from "../networking/cap/capClient";
const container = new Container();

container.bind<capClient>('capClient').toConstantValue(new capClient());
export default container;