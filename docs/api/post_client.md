import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## POST `/clients`

 Create a responder profile

**POST /api/v1/clients**

<Tabs groupId="api-language">
  <TabItem value="" label="">
    ```json
    {
      "data": {
          "type": "clients",
          "attributes": {
            "email": "example@example.com"
          }
        }
    }
    ```
  </TabItem>
</Tabs>

### attributes

attribute          | description
------------- | -------------
__email__<br />_string (required)_ | client email
