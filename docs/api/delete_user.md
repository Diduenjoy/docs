import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## DELETE `/users/:id`

Delete a users


<Tabs groupId="api-language">
  <TabItem value="rails" label="Rails">
    ```ruby
require 'rest-client'

user_id = 'PUT-USER-ID-HERE'

RestClient::Request.execute method: :delete,
  url: "https://api.diduenjoy.com/api/v1/users/#{user_id}",
  user: 'PUT-YOUR-API-KEY-HERE'
    ```
  </TabItem>
</Tabs>
