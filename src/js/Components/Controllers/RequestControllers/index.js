import * as KoushoControllers from "./Kousho";
import * as MissionControllers from "./Mission";
import * as MapControllers from "./Map";
import * as KaisouControllers from "./Kaisou";
import * as BattleControllers from "./Battle";
import * as RecoveryControllers from "./Recovery";
import * as PortControllers from "./Port";
import * as SortieControllers from "./Sortie";
import * as QuestControllers from "./Quest";

const RequestControllers = {
    ...KoushoControllers,
    ...BattleControllers,
    ...MissionControllers,
    ...MapControllers,
    ...KaisouControllers,
    ...RecoveryControllers,
    ...PortControllers,
    ...SortieControllers,
    ...QuestControllers,
};

module.exports = RequestControllers;
