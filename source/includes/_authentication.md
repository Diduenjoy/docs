# Authentication

## Register/Get an api key

Diduenjoy uses API keys to allow access to the API.

To get your own :

1. go to your <a href="https://dashboard.diduenjoy.com/settings/api" target="_blank">diduenjoy dashboard</a>. ![api_key_section](authentication/api_key_section.png)
2. If you have no Api key in your list or you want a new one, click on the `+ Generate a new API key` button.
3. Now just get it by clicking on `Copy to clipboard` button. ![api_key_section_2](authentication/api_key_section_2.png)

## Auth with API key

> To authorize, use this code:

```ruby
require 'net/http'
require 'net/https'
require 'uri'

uri = URI('https://api.diduenjoy.com/api/whatever')

Net::HTTP.start(uri.host, uri.port,
  :use_ssl => uri.scheme == 'https',
  :verify_mode => OpenSSL::SSL::VERIFY_NONE) do |http|

  request = Net::HTTP::Get.new uri.request_uri
  # keep empty second params
  request.basic_auth '28b22313-bb59-4f78-8bf2-911e7d7aba4b', ''

  response = http.request request # Net::HTTPResponse object

end
```

```shell
curl 'https://api.diduenjoy.com/api/whatever' \
 -u '28b22313-bb59-4f78-8bf2-911e7d7aba4b:'
```

> Make sure to replace `28b22313-bb59-4f78-8bf2-911e7d7aba4b` with your API key.


Diduenjoy expects for the API key to be included in all API requests to the server in a header that looks like the following:
`Authorization: 28b22313-bb59-4f78-8bf2-911e7d7aba4b`

<aside class="notice">
You must replace <code>28b22313-bb59-4f78-8bf2-911e7d7aba4b</code> with your personal API key.
</aside>