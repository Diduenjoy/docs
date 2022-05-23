## GET `/clients`

List all your clients

```ruby--Rails
require 'rest-client'

RestClient::Request.execute method: :get,
  url: 'https://api.diduenjoy.com/api/v1/clients',
  user: 'PUT-YOUR-API-KEY-HERE'
```

### attributes

attribute          | description
------------- | -------------
__email__<br>_string_ | client name

### optional parameters "filters"

parameter          | description
------------- |-------------
__email__<br>_array_  | filter over clients of the indicated emails

### relationships

relationship          | description
------------------------------ | -------------
__answer_sets__ | client answer_sets