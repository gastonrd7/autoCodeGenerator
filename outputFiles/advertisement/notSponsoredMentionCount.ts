
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

export default class notSponsoredMentionCount extends abstractFieldHandler
{
    constructor(){
        super(globalModels.Model.advertisement, globalModels.advertisementFields.notSponsoredMentionCount, null);
    }
    async subcribeEvents(){
        
        await messagingService.subscribe(this.name, await eventFormater.formatEvent(globalModels.Model.post, globalEvents.Event.CREATED), function(err, msg){
            var hand = new notSponsoredMentionCount();
            hand.listenerExecutor(err, msg);
        });
        
        
        await messagingService.subscribe(this.name, await eventFormater.formatEvent(globalModels.Model.post, globalEvents.Event.REMOVED), function(err, msg){
            var hand = new notSponsoredMentionCount();
            hand.listenerExecutor(err, msg);
        });
        
        
        await messagingService.subscribe(this.name, await eventFormater.formatEvent(globalModels.Model.post, globalEvents.Event.UPDATED, globalModels.postFields.notSponsoredMentionCount), function(err, msg){
            var hand = new notSponsoredMentionCount();
            hand.listenerExecutor(err, msg);
        });
        
        
        
        
        
        
        
        
    }

    async resolveScalar(msgPayload): Promise<{proceed, newValue}> {
        try
        {          
            
            var request = new requestPayload();
            await request.init(globalModels.Model.post, null, 
                {[globalModels.postFields.advertisementId]: msgPayload[globalModels.postFields.advertisementId]},
                 null, null, null, null, globalModels.postFields.notSponsoredMentionCount);
    
            var response : requestResponse = Object.assign(await messagingService.request(this.name, await formatRequest(Source.STORAGE, RequestEnum.Request.READ_SUM), request));
    
            return Promise.resolve({proceed: true, newValue: response.count});
            
        }
        catch (err)
        {
            return Promise.reject("Error in advertisement notSponsoredMentionCount. Error: " + JSON.stringify(err));
        }
    }    
}
