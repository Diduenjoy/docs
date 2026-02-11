import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## GET `/tags`

Get all the tags of the company

<Tabs groupId="api-language">
  <TabItem value="rails" label="Rails">
    ```ruby
require 'rest-client'

RestClient::Request.execute method: :get,
  url: 'https://api.diduenjoy.com/api/v1/tags',
  user: 'PUT-YOUR-API-KEY-HERE'

---------------Filter--------------------------
require 'rest-client'

RestClient::Request.execute method: :get,
  url: "https://api.diduenjoy.com/api/v1/tags?filter[name]=Delivery",
  user: 'PUT-YOUR-API-KEY-HERE'
    ```
  </TabItem>
</Tabs>

### attributes

attribute          | description
------------- | -------------
__name__<br />_string_  | name of the tag

### optional parameters "filter"

parameter          | description
------------- |-------------
__name__<br />_string_ | return all tags whose name contains __name__.
