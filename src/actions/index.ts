import {Interaction} from "no-gkerkin-webtest";
import {Action} from "no-gkerkin-webtest/lib/elements/actions";

const localDef=['local','проект'] as const

type localAction=typeof localDef[number]

interface LocalInteraction extends Action<localAction>{
    local:string,
}

export type ProjectInteraction=Interaction|LocalInteraction;
