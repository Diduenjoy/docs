## GET `/data_logs/:id`

Get a single data_log

```ruby--Rails
require 'rest-client'

data_log_id = 'PUT-YOUR-DATA_LOG-ID-HERE'

RestClient::Request.execute method: :get,
  url: "https://api.diduenjoy.com/api/v1/data_logs/#{data_log_id}",
  user: 'PUT-YOUR-API-KEY-HERE'
```

### attributes

attribute          | description
------------- | -------------
__data_id__<br>_string_  | id of the related data
__data_modified__<br>_string_  | type of the modified data
__operation_type__<br>_string_  | operation type ('delete','soft_delete','restore','update_rating','solved','add_message','change_tag','rename')
__created_at__<br>_datetime_  | data_log creation date
