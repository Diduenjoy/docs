import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## DELETE `/data_requests/:data_subject/:feedback_id`

Anonymize segments for the provided feedback and the provided data subject

### Possible data_subject values
- contractor
- customer
- employee
- other
- prospect
- suppliers
- to_be_defined
- trainee
- visitor

<Tabs groupId="api-language">
  <TabItem value="rails" label="Rails">
    ```ruby
require 'rest-client'

data_subject = 'PUT-YOUR-DATA-SUBJECT'
feedback_id = 'PUT-YOUR-FEEDBACK-ID'

RestClient::Request.execute method: :delete,
  url: "https://api.diduenjoy.com/api/v1/data_requests/#{data_subject}/#{feedback_id}",
  user: 'PUT-YOUR-API-KEY-HERE'
    ```
  </TabItem>
</Tabs>
