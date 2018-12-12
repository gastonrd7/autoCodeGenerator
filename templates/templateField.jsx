
/**
* @method
* @desc Genera el template de un handler
* @param {string} [handlerModel] el modelo al que pertenece el handler
* @param {string} [handlerField] el modelo al que pertenece el handler
* @param {Map} [subcribeEvents] setear: EntidadObservable, evento (CREATED, REMOVED, UPDATED: (en este debemos especificar sobre que campo))
*/
function templateField(handlerModel, handlerField, subcribeEvents, templateCount) {
    var CREATED = '';
    var REMOVED = '';
    var UPDATED1 = '';
    var UPDATED2 = '';
    var UPDATED3 = '';
    var UPDATED4 = '';
    var UPDATED5 = '';
    var UPDATED6 = '';
    var UPDATED7 = '';
    var UPDATED8 = '';

    var body = 'return Promise.resolve({proceed: false, newValue: null});';

    switch (templateCount) {
        case 'readSon-sResource':
            body = `
            var request = new requestPayload();
            await request.init(globalModels.Model.${subcribeEvents.get('ENTITY')}, null, 
                {[globalModels.${subcribeEvents.get('ENTITY')}Fields.${handlerModel}Id]: msgPayload[globalModels.${subcribeEvents.get('ENTITY')}Fields.${handlerModel}Id]},
                 null, null, null, null, globalModels.${subcribeEvents.get('ENTITY')}Fields.${subcribeEvents.get('UPDATED1')});
    
            var response : requestResponse = Object.assign(await messagingService.request(this.name, await formatRequest(Source.STORAGE, RequestEnum.Request.READ_SUM), request));
    
            return Promise.resolve({proceed: true, newValue: response.count});
            `;
            break;
        case 'readInsightResource':
            body = `
            if (msgPayload[globalModels.insightFields.type] != globalModels.insightTypeEnum.${subcribeEvents.get('RESOURCE')}) return Promise.resolve({proceed: false, newValue: null});
            
            // Get zeroBudgetrequest from the parent Advertisement
            var zeroBudgetrequest = new requestPayload();
            await zeroBudgetrequest.init(globalModels.Model.advertisement, [globalModels.advertisementFields.zeroBudgetDt], {'_id': msgPayload[globalModels.postFields.advertisementId]}, null, null, null, null,  null);
            var zeroBudgetResponse : requestResponse = Object.assign(await messagingService.request(this.name, await formatRequest(Source.STORAGE, RequestEnum.Request.READ_ONE), zeroBudgetrequest));

            if (msgPayload[globalModels.insightFields.creationDt] >= zeroBudgetResponse.entity[globalModels.advertisementFields.zeroBudgetDt]) return Promise.resolve({proceed: false, newValue: null});

            // Get post candidates for the count
            var request = new requestPayload();
            await request.init(globalModels.Model.insight, [globalModels.insightFields.creationDt], 
            {
                [globalModels.insightFields.postId]: msgPayload[globalModels.insightFields.postId], 
                [globalModels.insightFields.type]: globalModels.insightTypeEnum.${subcribeEvents.get('RESOURCE')}
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
            `;
            break;
        case 'readInsightResourceAndSM':
            body = `
            if (msgPayload[globalModels.insightFields.type] != globalModels.insightTypeEnum.${subcribeEvents.get('RESOURCE')}) return Promise.resolve({proceed: false, newValue: null});
            if (msgPayload[globalModels.insightFields.platform] != globalModels.insightPlatformEnum.${subcribeEvents.get('PLATFORM')}) return Promise.resolve({proceed: false, newValue: null});
            
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
                [globalModels.insightFields.type]: globalModels.insightTypeEnum.${subcribeEvents.get('RESOURCE')},
                [globalModels.insightFields.platform]: globalModels.insightPlatformEnum.${subcribeEvents.get('PLATFORM')}
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
            `;
            break;
        default:
            //body = templateCount;
            break;
    }

    if (subcribeEvents.get('CREATED') != null) {
        CREATED = `
        await messagingService.subscribe(this.name, await eventFormater.formatEvent(globalModels.Model.${subcribeEvents.get('ENTITY')}, globalEvents.Event.CREATED), function(err, msg){
            var hand = new ${handlerField}();
            hand.listenerExecutor(err, msg);
        });
        `;
    }

    if (subcribeEvents.get('REMOVED') != null) {
        REMOVED = `
        await messagingService.subscribe(this.name, await eventFormater.formatEvent(globalModels.Model.${subcribeEvents.get('ENTITY')}, globalEvents.Event.REMOVED), function(err, msg){
            var hand = new ${handlerField}();
            hand.listenerExecutor(err, msg);
        });
        `;
    }

    if (subcribeEvents.get('UPDATED1') != null) {
        UPDATED1 = `
        await messagingService.subscribe(this.name, await eventFormater.formatEvent(globalModels.Model.${subcribeEvents.get('ENTITY')}, globalEvents.Event.UPDATED, globalModels.${subcribeEvents.get('ENTITY')}Fields.${subcribeEvents.get('UPDATED1')}), function(err, msg){
            var hand = new ${handlerField}();
            hand.listenerExecutor(err, msg);
        });
        `;
    }

    if (subcribeEvents.get('UPDATED2') != null) {
        UPDATED2 = `
        await messagingService.subscribe(this.name, await eventFormater.formatEvent(globalModels.Model.${subcribeEvents.get('ENTITY')}, globalEvents.Event.UPDATED, globalModels.${subcribeEvents.get('ENTITY')}Fields.${subcribeEvents.get('UPDATED2')} ), function(err, msg){
            var hand = new ${handlerField}();
            hand.listenerExecutor(err, msg);
        });
        `;
    }

    if (subcribeEvents.get('UPDATED3') != null) {
        UPDATED3 = `
        await messagingService.subscribe(this.name, await eventFormater.formatEvent(globalModels.Model.${subcribeEvents.get('ENTITY')}, globalEvents.Event.UPDATED, globalModels.${subcribeEvents.get('ENTITY')}Fields.${subcribeEvents.get('UPDATED3')} ), function(err, msg){
            var hand = new ${handlerField}();
            hand.listenerExecutor(err, msg);
        });
        `;
    }
    if (subcribeEvents.get('UPDATED4') != null) {
        UPDATED4 = `
        await messagingService.subscribe(this.name, await eventFormater.formatEvent(globalModels.Model.${subcribeEvents.get('ENTITY')}, globalEvents.Event.UPDATED, globalModels.${subcribeEvents.get('ENTITY')}Fields.${subcribeEvents.get('UPDATED4')} ), function(err, msg){
            var hand = new ${handlerField}();
            hand.listenerExecutor(err, msg);
        });
        `;
    }
    if (subcribeEvents.get('UPDATED5') != null) {
        UPDATED5 = `
        await messagingService.subscribe(this.name, await eventFormater.formatEvent(globalModels.Model.${subcribeEvents.get('ENTITY')}, globalEvents.Event.UPDATED, globalModels.${subcribeEvents.get('ENTITY')}Fields.${subcribeEvents.get('UPDATED5')} ), function(err, msg){
            var hand = new ${handlerField}();
            hand.listenerExecutor(err, msg);
        });
        `;
    }
    if (subcribeEvents.get('UPDATED6') != null) {
        UPDATED6 = `
        await messagingService.subscribe(this.name, await eventFormater.formatEvent(globalModels.Model.${subcribeEvents.get('ENTITY')}, globalEvents.Event.UPDATED, globalModels.${subcribeEvents.get('ENTITY')}Fields.${subcribeEvents.get('UPDATED6')} ), function(err, msg){
            var hand = new ${handlerField}();
            hand.listenerExecutor(err, msg);
        });
        `;
    }
    if (subcribeEvents.get('UPDATED7') != null) {
        UPDATED7 = `
        await messagingService.subscribe(this.name, await eventFormater.formatEvent(globalModels.Model.${subcribeEvents.get('ENTITY')}, globalEvents.Event.UPDATED, globalModels.${subcribeEvents.get('ENTITY')}Fields.${subcribeEvents.get('UPDATED7')} ), function(err, msg){
            var hand = new ${handlerField}();
            hand.listenerExecutor(err, msg);
        });
        `;
    }
    if (subcribeEvents.get('UPDATED8') != null) {
        UPDATED8 = `
        await messagingService.subscribe(this.name, await eventFormater.formatEvent(globalModels.Model.${subcribeEvents.get('ENTITY')}, globalEvents.Event.UPDATED, globalModels.${subcribeEvents.get('ENTITY')}Fields.${subcribeEvents.get('UPDATED8')} ), function(err, msg){
            var hand = new ${handlerField}();
            hand.listenerExecutor(err, msg);
        });
        `;
    }

return `
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

export default class ${handlerField} extends abstractFieldHandler
{
    constructor(){
        super(globalModels.Model.${handlerModel}, globalModels.${handlerModel}Fields.${handlerField}, null);
    }
    async subcribeEvents(){
        ${CREATED}
        ${REMOVED}
        ${UPDATED1}
        ${UPDATED2}
        ${UPDATED3}
        ${UPDATED4}
        ${UPDATED5}
        ${UPDATED6}
        ${UPDATED7}
        ${UPDATED8}
    }

    async resolveScalar(msgPayload): Promise<{proceed, newValue}> {
        try
        {          
            ${body}
        }
        catch (err)
        {
            return Promise.reject("Error in ${handlerModel} ${handlerField}. Error: " + JSON.stringify(err));
        }
    }    
}
`
}


module.exports = { 
    templateField
};