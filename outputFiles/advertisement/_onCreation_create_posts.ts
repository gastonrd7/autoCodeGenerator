
import abstractModelHandler from './../../abstractModelHandler'
import messagingService from '../../../../services/serviceBus/service/messagingService'
import * as eventFormater from '../../../../common/formatEvents'
import * as RequestEnum from '../../../../common/requestEnum'
import * as globalModels from '../../../../common/modelsEnum'
import * as globalEvents from '../../../../common/eventsEnum'
import requestPayload from '../../../../services/serviceBus/constants/requestPayload'
import requestResponse from '../../../../services/serviceBus/constants/requestResponse'
import formatRequest from '../../../../common/formatRequest';
import { Source } from '../../../../common/sourcesEnum';
import Logger from '../../../../utils/logger';
    
export default class _onCreation_create_posts extends abstractModelHandler
{
    constructor(){
        super("_onCreation_create_posts", globalModels.Model.advertisement);
    }
    async subcribeEvents(){
        
        
        
            await messagingService.subscribe(this.name, await eventFormater.formatEvent(globalModels.Model.advertisement, globalEvents.Event.UPDATED, globalModels.advertisementFields.companyId), function(err, msg){
                var hand = new  _onCreation_create_posts();
                hand.listenerExecutor(err, msg);
            });
        
        
        
        
        
        
        
    }
    async resolvenewValue(msgPayload: any): Promise<{ proceed: boolean; newValues: any; }> {
        try
        {          
            return Promise.resolve({proceed: false, newValues: null});
        }
        catch (err)
        {
            return Promise.reject("Error in advertisement _onCreation_create_posts. Error: " + JSON.stringify(err));
        }
    }    
}
