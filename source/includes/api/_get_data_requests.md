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

```ruby--Rails
require 'rest-client'

data_subject = 'PUT-YOUR-DATA-SUBJECT'
feedback_id = 'PUT-YOUR-FEEDBACK-ID'

RestClient::Request.execute method: :get,
  url: "https://api.diduenjoy.com/api/v1/data_requests/#{data_subject}/#{feedback_id}",
  user: 'PUT-YOUR-API-KEY-HERE'
```

### attributes

attribute          | description
------------- | -------------
__segments__<br>_hash { string: string&#124;array[string] }_ | data from segments of the provided data_subject
__email__<br>_string_ | optional - present if provided data_subject corresponds to the default data_subject
__phone_number__<br>_string_ | optional - present if provided data_subject corresponds to the default data_subject
