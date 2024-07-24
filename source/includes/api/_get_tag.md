## GET `/tags/:id`

Get a single tag

```ruby--Rails
require 'rest-client'

tag_id = 'PUT-YOUR-TAG-ID-HERE'

RestClient::Request.execute method: :get,
  url: "https://api.diduenjoy.com/api/v1/tags/#{tag_id}",
  user: 'PUT-YOUR-API-KEY-HERE'
```

### attributes

attribute          | description
------------- | -------------
__name__<br>_string_  | name of the tag
