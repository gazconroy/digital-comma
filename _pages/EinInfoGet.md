---
title: EinInfoGet
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: assets/images/gears.jpg
excerpt: Return all the information for a given asset id.
permalink: /EinInfoGet.html
classes: wide
---

# EinInfoGet

Return all the information for a given asset id.

Method | Endpoint (example)
----- | ----------
POST | http://localhost/proCloudWS.asmx

## Request inputs


Name | Type | Required? | Description
---- | ----- | ----- | --------------------
objProviderGUId | [GUid](https://api.pro-cloud.org/http---microsoft.com-wsdl-types-_xsd~s-guid.html) | Y | *Your* provider id (obtained from [CSS]())
strPassword | String  | Y | *Your* service password (obtained from [CSS]()). The password is from 1 to 50 characters long
intProviderBranchId | Integer | Y | *Your* [provider branch](glossary.md)
strEin | String | Y | The asset id. The id string is from 1 to 50 characters long

## Response outputs

### Errors and successful responses

Name | Type | Example | Description
---- | ----- | ----- | --------------------
intErrorId | Integer | 0 | 0 if the operation completed successfully. Non-zero otherwise
strErrorMsg | String |  | Empty if the operation completed successfully. Lists the [appropriate error message](errors.md), otherwise

### Stock

Name | Type | Example | Description
---- | ----- | ----- | --------------------
Ein | String | 924-994 | A brief description (link to central description if this is not unique)
GS1StockRef | Integer  | 0 | A brief description (link to central description if this is not unique)
LegacyStockRef | String |  | String? A brief description (link to central description if this is not unique)
ProviderId | Integer | 32 | A brief description (link to central description if this is not unique)
SerialNumber | String |  | String? A brief description (link to central description if this is not unique)
Batch | String |  | String? A brief description (link to central description if this is not unique)
EinValue | Double | 0.0000 | A brief description (link to central description if this is not unique)
ProductTemplateId | Integer | 36290 | Integer? A brief description (link to central description if this is not unique)
StockUId | String | CH02 | A brief description (link to central description if this is not unique)
Stock_description | String | Meeting Room Chair | A brief description (link to central description if this is not unique)
Special | Boolean | false | A brief description (link to central description if this is not unique)

### Branch

Name | Type | Example | Description
---- | ----- | ----- | --------------------
BranchId | Integer | 41 | *Your* [provider branch](glossary.md)
BranchName | String | CSS Demonstrator | A brief description (link to central description if this is not unique)
StatusId | Integer| 56 | A brief description (link to central description if this is not unique)
StatusName | String | Meeting Room 1 | A brief description (link to central description if this is not unique)

### Moved

Name | Type | Example | Description
---- | ----- | ----- | --------------------
MovedByUserId | Integer | 4157 | A brief description (link to central description if this is not unique)
MovedByUsersName | String | Benjamin Cockroft | A brief description (link to central description if this is not unique)
DateMoved | String | 2016-02-04T12:04:42.77+00:00 | A brief description (link to central description if this is not unique) - in [ISO8601 format](https://www.w3.org/TR/NOTE-datetime)
HoursThere | Integer | 0 | A brief description (link to central description if this is not unique)

### Purchase

Name | Type | Example | Description
---- | ----- | ----- | --------------------
PoId | Integer | 0 | A brief description (link to central description if this is not unique)
DatePurchased | String | 2016-02-04T12:04:42.77+00:00 | A brief description (link to central description if this is not unique) - in [ISO8601 format](https://www.w3.org/TR/NOTE-datetime)
EinPurchaseCost | Double | 0.0000 | A brief description (link to central description if this is not unique) 

### Warranty

Name | Type | Example | Description
---- | ----- | ----- | --------------------
ManuWarrantyExpDate | String | 2016-02-04T12:04:42.77+00:00 | A brief description (link to central description if this is not unique) - in [ISO8601 format](https://www.w3.org/TR/NOTE-datetime)
ManuWarrantyDaysLeft | Integer | 0 | A brief description (link to central description if this is not unique)
LifeSpanExpiresDate | String | 2999-01-01T00:00:00+00:00 | A brief description (link to central description if this is not unique) - in [ISO8601 format](https://www.w3.org/TR/NOTE-datetime)
LifeSpanExpiresDaysLeft | Integer | 0 | A brief description (link to central description if this is not unique)
RecycleCount | Integer | 0 | A brief description (link to central description if this is not unique)

### Product
Name | Type | Example | Description
---- | ----- | ----- | --------------------
ProductImage | String |  | String? A brief description (link to central description if this is not unique)
ProductImageUpdated | String | 2016-02-04T11:59:08.79+00:00 | A brief description (link to central description if this is not unique) - in [ISO8601 format](https://www.w3.org/TR/NOTE-datetime)
StockItemTypeId | Integer | 2 | A brief description (link to central description if this is not unique)
StockItemTypeDesc | String | Inventory | A brief description (link to central description if this is not unique)

### Home provider

Name | Type | Example | Description
---- | ----- | ----- | --------------------
HomeProviderBranchId | Integer | 0 | A brief description (link to central description if this is not unique)
HomeProviderBranchName | String |  | A brief description (link to central description if this is not unique)
HomeStatusId | Integer | 0 | A brief description (link to central description if this is not unique)
HomeStatusName | String |  | A brief description (link to central description if this is not unique)

### Asset

Name | Type | Example | Description
---- | ----- | ----- | --------------------
AssetBreadcrumb | String | CSS Demonstrator > CSS Demonstrator > CSS Parkside Court > Office > Downstairs Office > Meeting Room 1 | A brief description (link to central description if this is not unique)
AssetCategoryId | Integer | -1 | A brief description (link to central description if this is not unique)
AssetCategoryName | String | N/A | A brief description (link to central description if this is not unique)
AssetCategorySubId | Integer | -1 | A brief description (link to central description if this is not unique)
AssetSubCategoryName | String | N/A | A brief description (link to central description if this is not unique)
AssetImageUpdated | String | 2999-01-01T00:00:00+00:00 | A brief description (link to central description if this is not unique) - in [ISO8601 format](https://www.w3.org/TR/NOTE-datetime)
AssetDescription | String | N/A | A brief description (link to central description if this is not unique)

### Status

Name | Type | Example | Description
---- | ----- | ----- | --------------------
CurrentlyWithCustomer | Boolean | false | A brief description (link to central description if this is not unique)
CurrentlyWithContractId | Integer | -1 | A brief description (link to central description if this is not unique)
CurrentlyWithContractName | String |  | A brief description (link to central description if this is not unique)
CurrentlyWithServiceUserId | Integer | -1 | A brief description (link to central description if this is not unique)
CurrentlyWithServiceUserForename | String |  | A brief description (link to central description if this is not unique)
CurrentlyWithServiceUserSurname | String |  | A brief description (link to central description if this is not unique)
CurrentlyWithAddressId | Integer | -1 | A brief description (link to central description if this is not unique)
CurrentlyWithSubDwelling | String |  | String? A brief description (link to central description if this is not unique)
CurrentlyWithBuildingNameNumber | String |  | String? A brief description (link to central description if this is not unique)
CurrentlyWithPostcode | String | GY4 6HE | A brief description (link to central description if this is not unique)

## Example request (SOAP 1.2)

### Request body

Replace the placeholders, between the asterisk - * - characters, with *actual* values (see *Request parameters* above for guidance).

```XML
<?xml version="1.0" encoding="utf-8"?>
<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
    <soap12:Body>
        <EinInfoGetResponse xmlns="http://pro-cloud.org/">
            <EinInfoGetResult>
                <objProviderGUId>*guid*</objProviderGUId>
                <strPassword>*string*</strPassword>
                <intProviderBranchId>*int*</intProviderBranchId>
                <strEin>*string*</strEin>
            </EinInfoGetResult>
        </EinInfoGetResponse>
    </soap12:Body>
</soap12:Envelope>
```

### Request headers

```HTTP
Content-Type: text/xml; charset=utf-8
```

## Example request (SOAP 1.1)

### Request body

Replace the placeholders, between the asterisk - * - characters, with *actual* values (see *Request parameters* above for guidance).

```XML
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
    <soap:Body>
        <EinInfoGetResponse xmlns="http://pro-cloud.org/">
            <objProviderGUId>*guid*</objProviderGUId>
            <strPassword>*string*</strPassword>
            <intProviderBranchId>*int*</intProviderBranchId>
            <strEin>*string*</strEin>
        </EinInfoGetResponse>
    </soap:Body>
</soap:Envelope>
```

### Request headers

```HTTP
Content-Type: text/xml; charset=utf-8
```

## Example response (SOAP 1.1 and 1.2)

```XML
<objEinInfoGetReturn xmlns="http://pro-cloud.org/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <intErrorId>0</intErrorId>
    <strErrorMsg/>
    <xmlDataSet>
        <NewDataSet xmlns="">
            <EinInfo>
                <Ein>924-994</Ein>
                <GS1StockRef>0</GS1StockRef>
                <LegacyStockRef/>
                <ProviderId>32</ProviderId>
                <SerialNumber/>
                <Batch/>
                <EinValue>0.0000</EinValue>
                <ProductTemplateId>36290</ProductTemplateId>
                <StockUId>CH02</StockUId>
                <Stock_description>Meeting Room Chair</Stock_description>
                <Special>false</Special>
                <BranchId>41</BranchId>
                <BranchName>CSS Demonstrator</BranchName>
                <StatusId>56</StatusId>
                <StatusName>Meeting Room 1 </StatusName>
                <MovedByUserId>4157</MovedByUserId>
                <MovedByUsersName>Benjamin Cockroft</MovedByUsersName>
                <DateMoved>2016-02-04T12:04:42.77+00:00</DateMoved>
                <HoursThere>7538</HoursThere>
                <PoId>0</PoId>
                <DatePurchased>2016-02-04T12:04:42.77+00:00</DatePurchased>
                <EinPurchaseCost>0.0000</EinPurchaseCost>
                <ManuWarrantyExpDate>2016-02-04T12:04:42.77+00:00</ManuWarrantyExpDate>
                <ManuWarrantyDaysLeft>0</ManuWarrantyDaysLeft>
                <LifeSpanExpiresDate>2999-01-01T00:00:00+00:00</LifeSpanExpiresDate>
                <LifeSpanExpiresDaysLeft>0</LifeSpanExpiresDaysLeft>
                <RecycleCount>0</RecycleCount>
                <ProductImage/>
                <ProductImageUpdated>2016-02-04T11:59:08.79+00:00</ProductImageUpdated>
                <StockItemTypeId>2</StockItemTypeId>
                <StockItemTypeDesc>Inventory</StockItemTypeDesc>
                <HomeProviderBranchId>0</HomeProviderBranchId>
                <HomeProviderBranchName/>
                <HomeStatusId>0</HomeStatusId>
                <HomeStatusName/>
                <AssetBreadcrumb>CSS Demonstrator > CSS Demonstrator > CSS Parkside Court > Office > Downstairs Office > Meeting Room 1 </AssetBreadcrumb>
                <AssetCategoryId>-1</AssetCategoryId>
                <AssetCategoryName>N/A</AssetCategoryName>
                <AssetCategorySubId>-1</AssetCategorySubId>
                <AssetSubCategoryName>N/A</AssetSubCategoryName>
                <AssetImageUpdated>2999-01-01T00:00:00+00:00</AssetImageUpdated>
                <AssetDescription>N/A</AssetDescription>
                <CurrentlyWithCustomer>false</CurrentlyWithCustomer>
                <CurrentlyWithContractId>-1</CurrentlyWithContractId>
                <CurrentlyWithContractName/>
                <CurrentlyWithServiceUserId>-1</CurrentlyWithServiceUserId>
                <CurrentlyWithServiceUserForename/>
                <CurrentlyWithServiceUserSurname/>
                <CurrentlyWithAddressId>-1</CurrentlyWithAddressId>
                <CurrentlyWithSubDwelling/>
                <CurrentlyWithBuildingNameNumber/>
                <CurrentlyWithPostcode/>
            </EinInfo>
        </NewDataSet>
    </xmlDataSet>
</objEinInfoGetReturn>

```