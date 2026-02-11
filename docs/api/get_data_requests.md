import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## GET `/data_requests/:data_subject/:feedback_id`

Returns the segments of the provided feedback, that describe the provided data subject

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

RestClient::Request.execute method: :get,
  url: "https://api.diduenjoy.com/api/v1/data_requests/#{data_subject}/#{feedback_id}",
  user: 'PUT-YOUR-API-KEY-HERE'
    ```
  </TabItem>
</Tabs>

### attributes

attribute          | description
------------- | -------------
__segments__<br />_hash &#123; string: string&#124;array[string] &#125;_ | data from segments of the provided data_subject
__email__<br />_string_ | optional - present if provided data_subject corresponds to the default data_subject
__phone_number__<br />_string_ | optional - present if provided data_subject corresponds to the default data_subject
