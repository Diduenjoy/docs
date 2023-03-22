## GET `/user_roles`

List all your user roles

```ruby
require 'rest-client'

RestClient::Request.execute method: :get,
  url: "https://api.diduenjoy.com/api/v1/user_roles",
  user: 'PUT-YOUR-API-KEY-HERE'
```

### attributes

attribute                     | description
------------------------------| -------------
__name__<br>_string_          | user role name
