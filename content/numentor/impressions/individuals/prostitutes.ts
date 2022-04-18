import { association } from "../../../../classes/association";
import { DescriptionAsset } from "../../../../classes/idea/DescriptionAsset";
import { ImpressionIdea } from "../../../../classes/idea/ImpressionIdea";
import { Noticable } from "../../../../classes/idea/Noticable";
import { femaleProstituteActions } from "./actions/singleFemaleProstituteActions";

const a = association;
const nymphBasics:Partial<DescriptionAsset> = {worksForBrothel:true,needsOne:[a.forest,a.prostitute]}
export const femaleProstituteIndividuals: ImpressionIdea[]=[
    new ImpressionIdea({name:"A nymph with golden hair is ",...nymphBasics},femaleProstituteActions,Noticable.someCustomers),
    new ImpressionIdea({name:"A nymph with smooth-looking skin is ",...nymphBasics},femaleProstituteActions,Noticable.someCustomers),
    new ImpressionIdea({name:"A nymph with flirty eyes is ",...nymphBasics},femaleProstituteActions,Noticable.someCustomers),
    new ImpressionIdea({name:"A nymph with sinful lips is ",...nymphBasics},femaleProstituteActions,Noticable.someCustomers),
    new ImpressionIdea({name:"A nymph with a lascivious body is ",...nymphBasics},femaleProstituteActions,Noticable.someCustomers),
    new ImpressionIdea({name:"A nymph with revealing clothes is ",...nymphBasics},femaleProstituteActions,Noticable.someCustomers),
    new ImpressionIdea({name:"An exotic-looking nymph is ",...nymphBasics},femaleProstituteActions,Noticable.someCustomers),
    new ImpressionIdea({name:"A bearly clothed nymph is ",...nymphBasics},femaleProstituteActions,Noticable.someCustomers),
    new ImpressionIdea({name:"A nymph with alluring eyes is ",...nymphBasics},femaleProstituteActions,Noticable.someCustomers),
    new ImpressionIdea({name:"A nymph with a flirty voice is ",...nymphBasics},femaleProstituteActions,Noticable.someCustomers),
    new ImpressionIdea({name:"A nymph with skinny leather clothes is ",...nymphBasics},femaleProstituteActions,Noticable.someCustomers),
    new ImpressionIdea({name:"A nymph with soft, red lips is ",...nymphBasics},femaleProstituteActions,Noticable.someCustomers),
    new ImpressionIdea({name:"An very mature-looking nymph is ",...nymphBasics},femaleProstituteActions,Noticable.someCustomers),
]