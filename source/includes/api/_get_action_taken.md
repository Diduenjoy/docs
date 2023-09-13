## GET `/action_taken/:id`

Get a single action taken

```ruby--Rails
require 'rest-client'

action_taken_id = 'PUT-YOUR-ACTION_TAKEN-ID-HERE'

RestClient::Request.execute method: :get,
  url: "https://api.diduenjoy.com/api/v1/action_taken/<ACTION-TAKEN-ID>",
  user: 'PUT-YOUR-API-KEY-HERE'
```

### attributes

attribute          | description
------------- | -------------
__name__<br>_string_  | name of the action taken
