
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
    
export default class _onCreation_fill_extra_fields extends abstractModelHandler
{
    constructor(){
        super("_onCreation_fill_extra_fields", globalModels.Model.post);
    }
    async subcribeEvents(){
        
            await messagingService.subscribe(this.name, await eventFormater.formatEvent(globalModels.Model.post, globalEvents.Event.CREATED), function(err, msg){
                var hand = new _onCreation_fill_extra_fields();
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
            return Promise.reject("Error in post _onCreation_fill_extra_fields. Error: " + JSON.stringify(err));
        }
    }    
}
