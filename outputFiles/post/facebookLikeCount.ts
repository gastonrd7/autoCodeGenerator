
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

export default class facebookLikeCount extends abstractFieldHandler
{
    constructor(){
        super(globalModels.Model.post, globalModels.postFields.facebookLikeCount, null);
    }
    async subcribeEvents(){
        
        await messagingService.subscribe(this.name, await eventFormater.formatEvent(globalModels.Model.insight, globalEvents.Event.CREATED), function(err, msg){
            var hand = new facebookLikeCount();
            hand.listenerExecutor(err, msg);
        });
        
        
        await messagingService.subscribe(this.name, await eventFormater.formatEvent(globalModels.Model.insight, globalEvents.Event.REMOVED), function(err, msg){
            var hand = new facebookLikeCount();
            hand.listenerExecutor(err, msg);
        });
        
        
        
        
        
        
        
        
        
    }

    async resolveScalar(msgPayload): Promise<{proceed, newValue}> {
        try
        {          
            
            if (msgPayload[globalModels.insightFields.type] != globalModels.insightTypeEnum.Like) return Promise.resolve({proceed: false, newValue: null});
            if (msgPayload[globalModels.insightFields.platform] != globalModels.insightPlatformEnum.Facebook) return Promise.resolve({proceed: false, newValue: null});
            
            // Get zeroBudgetrequest from the parent Advertisement
            var zeroBudgetrequest = new requestPayload();
            await zeroBudgetrequest.init( globalModels.Model.advertisement, [globalModels.advertisementFields.zeroBudgetDt], {'_id': msgPayload[globalModels.postFields.advertisementId]}, null, null, null, null,  null);
            var zeroBudgetResponse : requestResponse = Object.assign(await messagingService.request(this.name, await formatRequest(Source.STORAGE, RequestEnum.Request.READ_ONE), zeroBudgetrequest));

            if (msgPayload[globalModels.insightFields.creationDt] >= zeroBudgetResponse.entity[globalModels.advertisementFields.zeroBudgetDt]) return Promise.resolve({proceed: false, newValue: null});

            // Get post candidates for the count
            var request = new requestPayload();
            await request.init(globalModels.Model.insight, [globalModels.insightFields.creationDt], 
            {
                [globalModels.insightFields.postId]: msgPayload[globalModels.insightFields.postId], 
                [globalModels.insightFields.type]: globalModels.insightTypeEnum.Like,
                [globalModels.insightFields.platform]: globalModels.insightPlatformEnum.Facebook
            }, 
            null, null, null, null,  null);

            var response : requestResponse = Object.assign(await messagingService.request(this.name, await formatRequest(Source.STORAGE, RequestEnum.Request.READ_MANY), request));

            // Countabilize only those post before the budget was spent completely
            var count = response.entities.reduce((result, entity) => {
                if (entity[globalModels.insightFields.creationDt] < zeroBudgetResponse.entity[globalModels.advertisementFields.zeroBudgetDt]) {
                    result++; 
                }
                return result
            }, 0);
            
            return Promise.resolve({proceed: true, newValue: count});
            
        }
        catch (err)
        {
            return Promise.reject("Error in post facebookLikeCount. Error: " + JSON.stringify(err));
        }
    }    
}
