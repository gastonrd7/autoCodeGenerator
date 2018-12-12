
import abstractFieldHandler from './../../abstractFieldHandler'
import messagingService from '../../../../services/serviceBus/service/messagingService'
import * as eventFormater from '../../../../common/formatEvents'
import * as RequestEnum from '../../../../common/requestEnum'
import * as globalModels from '../../../../common/modelsEnum'
import * as globalEvents from '../../../../common/eventsEnum'
import requestPayload from '../../../../services/serviceBus/constants/requestPayload'
import requestResponse from '../../../../services/serviceBus/constants/requestResponse'
import formatRequest from '../../../../common/formatRequest';
import { Source } from '../../../../common/sourcesEnum';

export default class facebookFemaleInfluencedCount extends abstractFieldHandler
{
    constructor(){
        super(globalModels.Model.campaign, globalModels.campaignFields.facebookFemaleInfluencedCount, null);
    }
    async subcribeEvents(){
        
        
        await messagingService.subscribe(this.name, await eventFormater.formatEvent(globalModels.Model.insight, globalEvents.Event.REMOVED), function(err, msg){
            var hand = new facebookFemaleInfluencedCount();
            hand.listenerExecutor(err, msg);
        });
        
        
        await messagingService.subscribe(this.name, await eventFormater.formatEvent(globalModels.Model.insight, globalEvents.Event.UPDATED, globalModels.insightFields.companyId), function(err, msg){
            var hand = new facebookFemaleInfluencedCount();
            hand.listenerExecutor(err, msg);
        });
        
        
        
        
        
        
        
        
    }

    async resolveScalar(msgPayload): Promise<{proceed, newValue}> {
        try
        {          
            return Promise.resolve({proceed: false, newValue: null});
        }
        catch (err)
        {
            return Promise.reject("Error in campaign facebookFemaleInfluencedCount. Error: " + JSON.stringify(err));
        }
    }    
}
