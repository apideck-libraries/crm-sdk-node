# Apideck Node.js library

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Getting started](#getting-started)
- [Example](#example)
- [Support](#support)
- [License](#license)

## Installation

Install the latest SDK using npm:

```console
$ npm install apideck
```

or Yarn

```console
$ yarn add apideck
```

## Getting started

The module supports all Apideck API endpoints. For complete information about the API, head
to the [docs][2].
All endpoints require a valid apiKey so that's the only required parameter to initialize a new Apideck client:

```typescript
import Apideck from 'apideck';

const apideckClient = new Apideck({
  apiKey: <insert-api-key-here>,
  applicationId: <insert-application-id-here>,
  consumerId: <insert-consumer-id-here>,
  serviceId: <insert-service-id-here>
});
```

All top level parameters (except for apiKey) can be overriden in specific resource calls.

```typescript
const response = await apideckClient.crm.contacts.list({
  limit: '10',
  serviceId: '<insert-service-id-here>',
  consumerId: <insert-consumer-id-here>
})
```

## Methods
Once you created a new Apideck client you can use following methods:

```typescript
import Apideck from 'apideck';

const apideckClient = new Apideck({
  apiKey: <insert-api-key-here>,
  applicationId: <insert-application-id-here>,
  consumerId: <insert-consumer-id-here>,
  serviceId: <insert-service-id-here>
});
```

### CompaniesApi
```typescript
  apideckClient.companies.list(parameters);
  apideckClient.companies.retrieve(parameters);
  apideckClient.companies.create(parameters);
  apideckClient.companies.update(parameters);
  apideckClient.companies.delete(parameters);
```
### ContactsApi
```typescript
  apideckClient.contacts.list(parameters);
  apideckClient.contacts.retrieve(parameters);
  apideckClient.contacts.create(parameters);
  apideckClient.contacts.update(parameters);
  apideckClient.contacts.delete(parameters);
```
### LeadsApi
```typescript
  apideckClient.leads.list(parameters);
  apideckClient.leads.retrieve(parameters);
  apideckClient.leads.create(parameters);
  apideckClient.leads.update(parameters);
  apideckClient.leads.delete(parameters);
```
### OpportunitiesApi
```typescript
  apideckClient.opportunities.list(parameters);
  apideckClient.opportunities.retrieve(parameters);
  apideckClient.opportunities.create(parameters);
  apideckClient.opportunities.update(parameters);
  apideckClient.opportunities.delete(parameters);
```

## Example

Retrieving a list of all contacts and updating the first record with a new address.

```typescript
import { Apideck, PhoneNumberTypeEnum } from 'apideck'

const apideckClient = new Apideck({
  apiKey: <insert-api-key-here>,
  applicationId: <insert-application-id-here>,
  consumerId: <insert-consumer-id-here>,
  serviceId: <insert-service-id-here>
});

const { data } = await apideckClient.crm.contacts.list({
  limit: 10
})

const result = await apideckClient.crm.contacts.update({
  id: data[0].id!,
  contact: {
    name: "John Doe",
    firstName: "John",
    lastName: "Doe",
    addresses: [{
      city: "Hoboken",
      line1: "Streetname 19",
      state: "NY"
    }],
    phoneNumbers: [{
      number: '0486565656',
      phoneType: PhoneNumberTypeEnum.Home
    }]
  }
})

console.info(result)
```

## Support

Open an [issue][3]!

## License

[MIT][4]

[1]: https://apideck.com
[2]: https://developers.apideck.com/
[3]: https://github.com/apideck-libraries/apideck-node/issues/new
[4]: https://github.com/apideck-libraries/apideck-node/blob/master/LICENSE
