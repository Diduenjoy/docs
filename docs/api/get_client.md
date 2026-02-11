import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## GET `/clients/:id`

Get a single responder

<Tabs groupId="api-language">
  <TabItem value="rails" label="Rails">
    ```ruby
require 'rest-client'

client_id = 'PUT-YOUR-CLIENT-ID-HERE'

RestClient::Request.execute method: :get,
  url: "https://api.diduenjoy.com/api/v1/client/#{client_id}",
  user: 'PUT-YOUR-API-KEY-HERE'
    ```
  </TabItem>
</Tabs>

### attributes

attribute          | description
------------- | -------------
__email__<br />_string_ | client email

### relationships

relationship          | description
------------------------------ | -------------
__answer_sets__  | client answer_sets