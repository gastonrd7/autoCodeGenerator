
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

export default class engagementNotSponsored extends abstractFieldHandler
{
    constructor(){
        super(globalModels.Model.campaign, globalModels.campaignFields.engagementNotSponsored, null);
    }
    async subcribeEvents(){
        
        await messagingService.subscribe(this.name, await eventFormater.formatEvent(globalModels.Model.advertisement, globalEvents.Event.CREATED), function(err, msg){
            var hand = new engagementNotSponsored();
            hand.listenerExecutor(err, msg);
        });
        
        
        await messagingService.subscribe(this.name, await eventFormater.formatEvent(globalModels.Model.advertisement, globalEvents.Event.REMOVED), function(err, msg){
            var hand = new engagementNotSponsored();
            hand.listenerExecutor(err, msg);
        });
        
        
        await messagingService.subscribe(this.name, await eventFormater.formatEvent(globalModels.Model.advertisement, globalEvents.Event.UPDATED, globalModels.advertisementFields.notSponsoredTagCount), function(err, msg){
            var hand = new engagementNotSponsored();
            hand.listenerExecutor(err, msg);
        });
        
        
        await messagingService.subscribe(this.name, await eventFormater.formatEvent(globalModels.Model.advertisement, globalEvents.Event.UPDATED, globalModels.advertisementFields.notSponsoredLikeCount ), function(err, msg){
            var hand = new engagementNotSponsored();
            hand.listenerExecutor(err, msg);
        });
        
        
        await messagingService.subscribe(this.name, await eventFormater.formatEvent(globalModels.Model.advertisement, globalEvents.Event.UPDATED, globalModels.advertisementFields.notSponsoredSharedCount ), function(err, msg){
            var hand = new engagementNotSponsored();
            hand.listenerExecutor(err, msg);
        });
        
        
        await messagingService.subscribe(this.name, await eventFormater.formatEvent(globalModels.Model.advertisement, globalEvents.Event.UPDATED, globalModels.advertisementFields.notSponsoredCommentCount ), function(err, msg){
            var hand = new engagementNotSponsored();
            hand.listenerExecutor(err, msg);
        });
        
        
        await messagingService.subscribe(this.name, await eventFormater.formatEvent(globalModels.Model.advertisement, globalEvents.Event.UPDATED, globalModels.advertisementFields.notSponsoredHashtagCount ), function(err, msg){
            var hand = new engagementNotSponsored();
            hand.listenerExecutor(err, msg);
        });
        
        
        await messagingService.subscribe(this.name, await eventFormater.formatEvent(globalModels.Model.advertisement, globalEvents.Event.UPDATED, globalModels.advertisementFields.notSponsoredMentionCount ), function(err, msg){
            var hand = new engagementNotSponsored();
            hand.listenerExecutor(err, msg);
        });
        
        
        await messagingService.subscribe(this.name, await eventFormater.formatEvent(globalModels.Model.advertisement, globalEvents.Event.UPDATED, globalModels.advertisementFields.notSponsoredPrintCount ), function(err, msg){
            var hand = new engagementNotSponsored();
            hand.listenerExecutor(err, msg);
        });
        
        
        await messagingService.subscribe(this.name, await eventFormater.formatEvent(globalModels.Model.advertisement, globalEvents.Event.UPDATED, globalModels.advertisementFields.notSponsoredLinkCount ), function(err, msg){
            var hand = new engagementNotSponsored();
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
            return Promise.reject("Error in campaign engagementNotSponsored. Error: " + JSON.stringify(err));
        }
    }    
}
