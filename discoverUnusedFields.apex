//transform it into node script

Map<String, Integer> result = new Map<String, Integer> ();
String objApiName='objApiNamePlaceHolder';
// get the all fields for a sObject
SObjectType sObjectType = Schema.getGlobalDescribe().get(objApiName);
Map<String,Schema.SObjectField> fields = sObjectType.getDescribe().fields.getMap();

// prepare generic query
String fieldsStatement='';
for(string fieldApi: fields.keySet()){
    fieldsStatement+= ','+fieldApi;
}
fieldsStatement=fieldsStatement.removeStart(',');
//get max 1000 records otherweise we hit the execution limit
List<sObject> sobjRecordList = Database.query('SELECT '+fieldsStatement+' FROM '+objApiName +' limit 1000');


//init the field counters with 0
for(string fieldApi: fields.keySet()){
    result.put(fieldApi,0);
}


for(sObject record :  sobjRecordList ){

    for(string fieldApi: fields.keySet()){
        if(record.get(fieldApi)!=null){
                Integer counter = result.remove(fieldApi);
                counter++;
                result.put(fieldApi,counter);
            }
    }
}

//print only custom fields
for(string fieldApi: result.keySet()){
    if(result.get(fieldApi)==0 && fieldApi.endsWith('__c'))
    //System.debug(fieldApi + ' : ' +result.get(fieldApi));
    System.debug('unused field:'+fieldApi);
}

System.debug('all fields counter:'+result.keySet().size());




