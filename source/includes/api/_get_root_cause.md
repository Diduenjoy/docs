## GET `/root_causes/:id`

Get a single root cause

```ruby--Rails
require 'rest-client'

root_cause_id = 'PUT-YOUR-ROOT_CAUSE-ID-HERE'

RestClient::Request.execute method: :get,
  url: "https://api.diduenjoy.com/api/v1/root_causes/<ROOT-CAUSE-ID>",
  user: 'PUT-YOUR-API-KEY-HERE'
```

### attributes

attribute          | description
------------- | -------------
__name__<br>_string_  | name of the root cause
