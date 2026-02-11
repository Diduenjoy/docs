import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## GET `/user_roles`

List all your user roles

<Tabs groupId="api-language">
  <TabItem value="rails" label="Rails">
    ```ruby
require 'rest-client'

RestClient::Request.execute method: :get,
  url: "https://api.diduenjoy.com/api/v1/user_roles",
  user: 'PUT-YOUR-API-KEY-HERE'
    ```
  </TabItem>
</Tabs>

### attributes

attribute                     | description
------------------------------| -------------
__name__<br />_string_          | user role name
