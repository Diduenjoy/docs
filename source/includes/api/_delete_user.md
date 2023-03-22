## DELETE `/users/:id`

Delete a users


```ruby--Rails
require 'rest-client'

user_id = 'PUT-USER-ID-HERE'

RestClient::Request.execute method: :delete,
  url: "https://api.diduenjoy.com/api/v1/users/#{user_id}",
  user: 'PUT-YOUR-API-KEY-HERE'
```
