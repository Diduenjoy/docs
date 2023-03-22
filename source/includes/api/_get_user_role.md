## GET `/user_roles/:id`

Get a single user role

```ruby
require 'rest-client'

user_role_id = 'PUT-USER-ROLE-ID-HERE'

RestClient::Request.execute method: :get,
  url: "https://api.diduenjoy.com/api/v1/user_roles/#{user_role_id}",
  user: 'PUT-YOUR-API-KEY-HERE'
```

### attributes

attribute                     | description
------------------------------| -------------
__name__<br>_string_          | user role name
