import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## GET `/root_causes`

Get all the root causes of the company

<Tabs groupId="api-language">
  <TabItem value="rails" label="Rails">
    ```ruby
require 'rest-client'

RestClient::Request.execute method: :get,
  url: 'https://api.diduenjoy.com/api/v1/root_causes',
  user: 'PUT-YOUR-API-KEY-HERE'

---------------Filter--------------------------
require 'rest-client'

RestClient::Request.execute method: :get,
  url: "https://api.diduenjoy.com/api/v1/root_causes?filter[name]=Delivery",
  user: 'PUT-YOUR-API-KEY-HERE'
    ```
  </TabItem>
</Tabs>

### attributes

attribute          | description
------------- | -------------
__name__<br />_string_  | name of the root cause

### optional parameters "filter"

parameter          | description
------------- |-------------
__name__<br />_string_ | return all root causes whose name contains __name__.