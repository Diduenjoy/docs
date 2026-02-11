import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## GET `/action_taken`

Get all the action takens of the company

<Tabs groupId="api-language">
  <TabItem value="rails" label="Rails">
    ```ruby
require 'rest-client'

RestClient::Request.execute method: :get,
  url: 'https://api.diduenjoy.com/api/v1/action_taken',
  user: 'PUT-YOUR-API-KEY-HERE'

---------------Filter--------------------------
require 'rest-client'

RestClient::Request.execute method: :get,
  url: "https://api.diduenjoy.com/api/v1/action_taken?filter[name]=Delivery",
  user: 'PUT-YOUR-API-KEY-HERE'
    ```
  </TabItem>
</Tabs>

### attributes

attribute          | description
------------- | -------------
__name__<br />_string_  | name of the action taken

### optional parameters "filter"

parameter          | description
------------- |-------------
__name__<br />_string_ | return all action taken whose name contains __name__.