
/**
* @method
* @desc Genera el template de un handler
* @param {string} [handlerModel] el modelo al que pertenece el handler
* @param {string} [handlerField] el modelo al que pertenece el handler
* @param {Map} [subcribeEvents] setear: EntidadObservable, evento (CREATED, REMOVED, UPDATED: (en este debemos especificar sobre que campo))
*/
function templateOnCreationFill(handlerModel, handlerField, subcribeEvents) {
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

if (subcribeEvents.get('CREATED') != null) {
        CREATED = `
            await messagingService.subscribe(this.name, await eventFormater.formatEvent(globalModels.Model.${subcribeEvents.get('ENTITY')}, globalEvents.Event.CREATED), function(err, msg){
                var hand = new _onCreation_${handlerField}();
                hand.listenerExecutor(err, msg);
            });`;
    }

if (subcribeEvents.get('REMOVED') != null) {
        REMOVED = `
            await messagingService.subscribe(this.name, await eventFormater.formatEvent(globalModels.Model.${subcribeEvents.get('ENTITY')}, globalEvents.Event.REMOVED), function(err, msg){
                var hand = new _onCreation_${handlerField}();
                hand.listenerExecutor(err, msg);
            });`;
    }

if (subcribeEvents.get('UPDATED1') != null) {
        UPDATED1 = `
            await messagingService.subscribe(this.name, await eventFormater.formatEvent(globalModels.Model.${subcribeEvents.get('ENTITY')}, globalEvents.Event.UPDATED, globalModels.${subcribeEvents.get('ENTITY')}Fields.${subcribeEvents.get('UPDATED1')}), function(err, msg){
                var hand = new  _onCreation_${handlerField}();
                hand.listenerExecutor(err, msg);
            });`;
    }

if (subcribeEvents.get('UPDATED2') != null) {
        UPDATED2 = `
            await messagingService.subscribe(this.name, await eventFormater.formatEvent(globalModels.Model.${subcribeEvents.get('ENTITY')}, globalEvents.Event.UPDATED, globalModels.${subcribeEvents.get('ENTITY')}Fields.${subcribeEvents.get('UPDATED2')}), function(err, msg){
                var hand = new  _onCreation_${handlerField}();
                hand.listenerExecutor(err, msg);
            });`;
    }

if (subcribeEvents.get('UPDATED3') != null) {
        UPDATED3 = `
            await messagingService.subscribe(this.name, await eventFormater.formatEvent(globalModels.Model.${subcribeEvents.get('ENTITY')}, globalEvents.Event.UPDATED, globalModels.${subcribeEvents.get('ENTITY')}Fields.${subcribeEvents.get('UPDATED3')}), function(err, msg){
                var hand = new  _onCreation_${handlerField}();
                hand.listenerExecutor(err, msg);
            });`;
    }
if (subcribeEvents.get('UPDATED4') != null) {
        UPDATED4 = `
            await messagingService.subscribe(this.name, await eventFormater.formatEvent(globalModels.Model.${subcribeEvents.get('ENTITY')}, globalEvents.Event.UPDATED, globalModels.${subcribeEvents.get('ENTITY')}Fields.${subcribeEvents.get('UPDATED4')}), function(err, msg){
                var hand = new  _onCreation_${handlerField}();
                hand.listenerExecutor(err, msg);
            });`;
    }
if (subcribeEvents.get('UPDATED5') != null) {
        UPDATED5 = `
            await messagingService.subscribe(this.name, await eventFormater.formatEvent(globalModels.Model.${subcribeEvents.get('ENTITY')}, globalEvents.Event.UPDATED, globalModels.${subcribeEvents.get('ENTITY')}Fields.${subcribeEvents.get('UPDATED5')}), function(err, msg){
                var hand = new  _onCreation_${handlerField}();
                hand.listenerExecutor(err, msg);
            });`;
    }
if (subcribeEvents.get('UPDATED6') != null) {
        UPDATED6 = `
            await messagingService.subscribe(this.name, await eventFormater.formatEvent(globalModels.Model.${subcribeEvents.get('ENTITY')}, globalEvents.Event.UPDATED, globalModels.${subcribeEvents.get('ENTITY')}Fields.${subcribeEvents.get('UPDATED6')}), function(err, msg){
                var hand = new  _onCreation_${handlerField}();
                hand.listenerExecutor(err, msg);
            });`;
    }
if (subcribeEvents.get('UPDATED7') != null) {
        UPDATED7 = `
            await messagingService.subscribe(this.name, await eventFormater.formatEvent(globalModels.Model.${subcribeEvents.get('ENTITY')}, globalEvents.Event.UPDATED, globalModels.${subcribeEvents.get('ENTITY')}Fields.${subcribeEvents.get('UPDATED7')}), function(err, msg){
                var hand = new  _onCreation_${handlerField}();
                hand.listenerExecutor(err, msg);
            });`;
    }
if (subcribeEvents.get('UPDATED8') != null) {
        UPDATED8 = `
            await messagingService.subscribe(this.name, await eventFormater.formatEvent(globalModels.Model.${subcribeEvents.get('ENTITY')}, globalEvents.Event.UPDATED, globalModels.${subcribeEvents.get('ENTITY')}Fields.${subcribeEvents.get('UPDATED8')}), function(err, msg){
                var hand = new  _onCreation_${handlerField}();
                hand.listenerExecutor(err, msg);
            });`;
    }

return `
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
    
export default class _onCreation_${handlerField} extends abstractModelHandler
{
    constructor(){
        super("_onCreation_${handlerField}", globalModels.Model.${handlerModel});
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
    async resolvenewValue(msgPayload: any): Promise<{ proceed: boolean; newValues: any; }> {
        try
        {          
            return Promise.resolve({proceed: false, newValues: null});
        }
        catch (err)
        {
            return Promise.reject("Error in ${handlerModel} _onCreation_${handlerField}. Error: " + JSON.stringify(err));
        }
    }    
}
`
}


module.exports = { 
    templateOnCreationFill
};