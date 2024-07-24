## GET `/data_logs`

Get all the data_logs of the company

```ruby--Rails
require 'rest-client'

RestClient::Request.execute method: :get,
  url: 'https://api.diduenjoy.com/api/v1/data_logs',
  user: 'PUT-YOUR-API-KEY-HERE'

---------------Filter--------------------------
require 'rest-client'

RestClient::Request.execute method: :get,
  url: "https://api.diduenjoy.com/api/v1/data_logs?[start_date]=2023-06-05&filter[end_date]=2023-07-05",
  user: 'PUT-YOUR-API-KEY-HERE'
```

### attributes

attribute          | description
------------- | -------------
__data_id__<br>_string_  | id of the related data
__data_modified__<br>_string_  | type of the modified data
__operation_type__<br>_string_  | operation type ('delete','soft_delete','restore','update_rating','solved','add_message','change_tag','rename')
__created_at__<br>_datetime_  | data_log creation date

### optional parameters "filter"

parameter          | description
------------- |-------------
__start_date__<br>_date_ | filter over data_logs created after the specified date
__end_date__<br>_date_ | filter over data_logs created before the specified date
