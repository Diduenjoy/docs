## GET `/root_causes`

Get all the root causes of the company

```ruby--Rails
require 'rest-client'

RestClient::Request.execute method: :get,
  url: 'https://api.diduenjoy.com/api/v1/root_causes',
  user: 'PUT-YOUR-API-KEY-HERE'

---------------Filter--------------------------
require 'rest-client'

RestClient::Request.execute method: :get,
  url: "https://api.diduenjoy.com/api/v1/root_causes?filter[name]=Delivery",
  user: 'PUT-YOUR-API-KEY-HERE'
```

### attributes

attribute          | description
------------- | -------------
__name__<br>_string_  | name of the root cause

### optional parameters "filter"

parameter          | description
------------- |-------------
__name__<br>_string_ | return all root causes whose name contains __name__.