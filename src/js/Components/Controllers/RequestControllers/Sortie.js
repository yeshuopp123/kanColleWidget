import Config from "../../Models/Config";
import {ScheduledQueues, Tiredness} from "../../Models/Queue/Queue";

import {SORTIE} from "../../../Constants";
import Achievement from "../../Models/Achievement";

export function onSortieStart(detail) {

    Achievement.increment(SORTIE);

    if (!Config.isNotificationEnabled("tiredness")) return;

    const {requestBody:{formData:{api_deck_id:[deck]}}} = detail;
    const time = Date.now() + Config.find("notification-for-tiredness").time * (1000 * 60);
    const tiredness = new Tiredness(time, parseInt(deck));

    // TODO: Controllerからchromeを参照するのはやめましょう
    chrome.notifications.getAll(notes => {
        Object.keys(notes).filter(id => { return id.match(/^tiredness/); }).map(id => {
            chrome.notifications.clear(id);
        });
    });
    ScheduledQueues.append("tiredness", tiredness);
}
