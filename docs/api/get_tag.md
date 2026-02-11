import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## GET `/tags/:id`

Get a single tag

<Tabs groupId="api-language">
  <TabItem value="rails" label="Rails">
    ```ruby
require 'rest-client'

tag_id = 'PUT-YOUR-TAG-ID-HERE'

RestClient::Request.execute method: :get,
  url: "https://api.diduenjoy.com/api/v1/tags/#{tag_id}",
  user: 'PUT-YOUR-API-KEY-HERE'
    ```
  </TabItem>
</Tabs>

### attributes

attribute          | description
------------- | -------------
__name__<br />_string_  | name of the tag
