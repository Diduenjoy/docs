import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## GET `/root_causes/:id`

Get a single root cause

<Tabs groupId="api-language">
  <TabItem value="rails" label="Rails">
    ```ruby
require 'rest-client'

root_cause_id = 'PUT-YOUR-ROOT_CAUSE-ID-HERE'

RestClient::Request.execute method: :get,
  url: "https://api.diduenjoy.com/api/v1/root_causes/<ROOT-CAUSE-ID>",
  user: 'PUT-YOUR-API-KEY-HERE'
    ```
  </TabItem>
</Tabs>

### attributes

attribute          | description
------------- | -------------
__name__<br />_string_  | name of the root cause
