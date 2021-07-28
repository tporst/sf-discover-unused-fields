//const sObjects =['AMS_Agreement__c','AMS_Billing_Line_Item__c','AMS_Bypass__c','AMS_Combi_Platform__c','AMS_Contract_Account__c','AMS_Contract_Platform__c','AMS_Contract_Step__c','AMS_Contract__c','AMS_Creative_Parent__c','AMS_Creative_Type__c','AMS_Device__c','AMS_Invoice_Line_Item__c','AMS_Invoice__c','AMS_Module__c','AMS_Order_Line_Item__c','AMS_Order__c','AMS_Page__c','AMS_Product_Price__c','AMS_Product__c','AMS_Service_Line_Item__c','AMS_Settings__c','AMS_Zone__c','Account','AccountContactRole','AccountTeamMember','Activity','ActivityRecurrence2Exception','Ad_BW_Reporting_Setup__mdt','Aenderungsverlauf_an_ATF__c','Analytics_Report__mdt','Angebot_Angebotsvariante__c','Angebot_Uebersetzung__c','Angebot__c','Angebotsvariante_Position__c','Angebotsvariante__c','Angebotszusatz_Plattform__c','Angebotszusatz__c','Asset','AssetRelationship','AssignmentRules__c','Assignment__c','AssistantProgress','AssociatedLocation','AuthorizationForm','AuthorizationFormConsent','AuthorizationFormDataUse','AuthorizationFormText','BCN_Mandant__c','BGTR__Automated_Test_Run__c','BGTR__Coverage_Settings__c','BGTR__Coverage__c','BGTR__Data_Retention__c','BGTR__Test_Runner_Job__c','BGTR__Test_Suite__c','Batch_Info__c','Briefing_Einfallstor__c','Briefing_Plattform__c','Briefing_Teilnehmer__c','Briefing__c','Bypass_send_Change_History_to_ATF__c','Campaign','CampaignMember','Case','CaseContactRole','CaseEffort__c','Channel__c','ChatterActivity','CollaborationGroup','CollaborationGroupMember','CommSubscription','CommSubscriptionChannelType','CommSubscriptionConsent','CommSubscriptionTiming','Contact','ContactPointAddress','ContactPointConsent','ContactPointEmail','ContactPointPhone','ContactPointTypeConsent','ContactRequest','ContentVersion','Contract','ContractContactRole','DataUseLegalBasis','DataUsePurpose','Data_Extract__c','Discount_Line_Item__c','DuplicateRecordItem','DuplicateRecordSet','EmailMessage','EngagementChannelType','Event','ExchangeUserMapping','ExcludedPlatform__c','ExpressionFilter','ExpressionFilterCriteria','ExternalEventMapping','FactoryCommunitySetting__c','FeedItem','ForecastPlatform_Setting__c','FreeCopyIntegrationPlatform__mdt','Free_Copy__c','Global_Org_Setting__mdt','Historische_Opportunity_Plattform__c','Historische_Opportunity_Verkaufsteam__c','Historische_Opportunity__c','Idea','Image','Individual','Integration_Settings__c','Kampagnenmitgliederstatus__mdt','Kundenkontakt_Beteiligte_Accounts__c','Kundenkontakt_Mandant__c','Kundenkontakt_Plattform__c','Kundenkontakt_Teilnehmer__c','Kundenkontakt__c','Lead','Location','LocationTrustMeasure','MLModel','MLModelFactor','MLModelFactorComponent','Macro','MacroAction','MacroInstruction','MacroUsage','ManagedContentVersion','Mandanten_Info__c','MarketedClient__mdt','NMR_Agentur__c','NMR_Agenturgruppe__c','NMR_Bundesland__c','NMR_Bundeslandverteilung__c','NMR_Firma__c','NMR_Hauptwerbetraeger__c','NMR_Hersteller_Nation__c','NMR_Marke__c','NMR_Mediengruppe__c','NMR_Medienuntergruppe__c','NMR_Produkt__c','NMR_Produktfamilie__c','NMR_Produktgruppe__c','NMR_Produktmarke__c','NMR_Verlag_Vermarkter__c','NMR_Werbetraeger__c','NMR_Werbungtreibender__c','NMR_Wirtschaftsbereich__c','OPP_Forecast_Item__c','Opportunity','OpportunityCompetitor','OpportunityContactRole','OpportunityLineItem','OpportunityTeamMember','OpportunityTeamSetup__mdt','Opportunity_Plattform__c','Opportunity_Quote__c','Order','OrderItem','Order_Line_Item_Audit__c','OrgMetricScanResult','OrgMetricScanSummary','PRD_Class_Group__c','PRD_Classification__c','PRD_Creative_Type__c','PRD_Issue__c','PRD_Module__c','PRD_Page__c','PRD_Platform__c','PRD_Section__c','PRD_Zone__c','Package_Header__c','Package_Item_Platform__c','Package_Item__c','Package_Platform__c','PartnerRole','PartyConsent','Plan__c','PlatformChannel__c','Platform_Hierachie__c','Pricebook2','PricebookEntry','ProcessException','Product2','ProfileSkill','ProfileSkillEndorsement','ProfileSkillUser','PromptAction','PromptError','QuickText','QuickTextUsage','Quote','QuoteLineItem','Quotevariant_Consultation_User__c','Recommendation','RecordAction','RecordMergeHistory','Relationship__c','Sales_Team_Mitglied__c','Sales_Team__c','Scorecard','ScorecardAssociation','ScorecardMetric','Site','SocialPersona','SocialPost','Solution','StreamActivityAccess','StreamingChannel','Task','Topic','TopicAssignment','User','UserProvisioningRequest','User_Deactivation_Setting__mdt','WorkBadge','WorkBadgeDefinition','WorkOrder','WorkOrderLineItem','WorkThanks','YTD_Reporting_Settings__c','Zielgruppenselektion__c','atf_KuDo_User_Setting__c'];

# Discover Unused Fields

node script which is triggering an apex code on target salesforce org and search for unused fields 

---

## Prerequisites

-   [NodeJS](https://nodejs.org/) - Recommended is LTS version 
-   [SFDX CLI](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_cli.htm) - Install Salesforce CLI 


## Installation Instructions

### NPM packages
Change to the Project main directory and run:
```shell
npm install     #installs dev packages (linters, prettiers, editorconfig, etc.)
```

### Authorize an Org Using the Web Server Flow

Authorize org gainst which you want to run the script 

https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_web_flow.htm

#### Usage
Change to the Project main directory and run:

```shell
node discoverUnusedFields --org=[Org Alias] --sobjects="Your Objects"
// example node discoverUnusedFields --org=[Org Alias] --sobjects="Account, Opportunity"

