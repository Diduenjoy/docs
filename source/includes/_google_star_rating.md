# Google star rating

During a google search, you can see some star ratings appear beside results on what you are looking for.
It's done through a system of tags and markups which google will crawl though your site automaticly or on your demand.
With diduenjoy, you are able to collect some reviews for products or group of products and this guide shows you how to link these reviews and the google star rating system.

## First look

```ruby
# check erb tab
```

```shell
# check erb tab
```

```erb
<html>
  <head>
    <title>Page of my product aswesomeProduct</title>
  </head>
  <body>
    <!-- ...  -->
    <script type="application/ld+json">
      {
        "@context": "http://schema.org/",
        "@type": "Product",
        "name": "aswesomeProduct",
        "image": "http://www.adress.of.aswesomeProduct.image.jpeg",
        "description": "My aswesomeProduct desc which appears too in google search",
        "brand": "AwseomeCompany",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "8.1",
          "bestRating" : "10",
          "reviewCount": "42"
        }
      }
    </script>
  </body>
</html>
```

Here is an example of data you need to place in a product html page in order to see related note on google search result for this product (check erb tab).

You should keep in mind that if you put more than one script per page, the behaviour is unpredictable. Indeed, if your page with many products (such as all your blues shoes) apears in a google search, the rating must contains all your blue shoes ratings, or eventualy nothing if you don't want this behaviour.

The important data we need to replace here is `aggregateRating`.<br>
Luckly diduenjoy provides an endpoint to gives you dynamicly the related rating of your product page collected through your feedbacks !<br>
Of course you need to replace other fileds like `name`, `image`, `description`, `brand` and eventualy `@type`.<br>
Check it out [this example](#google-star-concrete-example) to apply this to your own pages !

## Script structure
* The script you will put information in should be insert into your product's page `body` html tag
* This script is of `application/ld+json` type
* It contains a json block. It's a collection of key/values :

```ruby
# check erb tab
```

```erb
<html>
  <body>
    <!-- ...  -->
    <script type="application/ld+json">
      {
        "@context": "http://schema.org/",
        "@type": "Product",
        "name": "Raposce scissors 16 cm",
        "image": "https://mysite.images_api/products/raposce_ciseaux_16.jpeg",
        "description": "Precision-Sharpened Blades for Smooth Cutting Action with 16 cm blades.",
        "brand": "Raposce",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "8.1",
          "bestRating" : "10",
          "reviewCount": "42"
        }
      }
    </script>
  </body>
</html>
```

```shell
# check erb tab
```
|key&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |value|
----|-|-|
`"@context"`| **Constant String, required**<br><br>Let its value to `http://schema.org/`
`"@type"`| **String, required**<br><br> Should be from (here)[http://schema.org/docs/full.html].You will mainly use `Product` and `SomeProducts` (group of products)
`"name"`| **String, required**<br><br>The name of your product
`"image"` | **String, recommended**<br><br>The url of your product image
`"description"`| **String, recommended**<br><br>The description of your product
`"brand"`| **String, recommended**<br><br>Your Brand name
`"aggregateRating"`| **JsonObject, required**<br><br> The data which gives your product rating to Google. Provided by [this diduenjoy enpoint](#diduenjoy-aggregate-rating-endpoint)

<aside class="notice">
  JSON is a format where keys and values are always between double quotes (even a number should be a string)
</aside>

## Diduenjoy aggregate rating endpoint

This provided enpoint is used to retrieve the JsonObject to insert into your script in front of the `"aggregateRating"` key.
It takes one optionaly (but recommanded) parameter named `Filter`. If you gives none, the enpoint will gives you the ratings gathers through ALL your feedbacks (and not on one product exepct if you sell only one product).

### Filter

`Filter` param may have 2 keys, which means you can retrieve the rating of your product(s) with 2 filters that are `surveys` and `segments`
<aside class="notice">If you want a rating for one product, your filters must be as restrictive as possible. Conversely, if you want an aggregate note for an index of products (such as all your blues shoes), filter should logicaly contains less filters than the previous example.
</aside>


#### Surveys
The surveys filter is an array of the surveys you use to collect feedbacks on this particular product(s)

#### Segments
The segments filter is an object of keys/array.
* The key should be the name of the segment you want to filter by such as `Color`, `ProductName` or `ProductId`
* The array should contains a list of values to filter by such as `['red', 'green']`, `['Camambert Fermier 1 an']`, or `['123456']`

### Url

The url of this enpoint is the following : `https://api.diduenjoy.com/api/v3/aggregate-rating`

### All in

```ruby
require 'net/http'

DIDUENJOY_API_KEY = '28b22313-bb59-4f78-8bf2-911e7d7aba4b'
ENDPOINT_URL = 'https://api.diduenjoy.com/api/v3/aggregate-rating'
params = {
  "filter": {
    "surveys": [
      "ef053beb-8dbb-4cc1-88dd-4ea4fbfc236e",
      "515d627e-1dd4-41ca-ba12-41b2db5268a5"
    ],
    "segments": {
      "ProductName" : ["Sonline 10pcs 20mm"],
      "color": ["silver"]
    }
  }
}

uri = URI.parse(ENDPOINT_URL)
request = Net::HTTP::Post.new(uri)
request.basic_auth(DIDUENJOY_API_KEY, '') # empty string is important
request.set_form_data(params)

response = Net::HTTP.start(uri.hostname, uri.port) do |http|
  http.request(request)
end

@aggregate_rating = response.body if response.is_a?(Net::HTTPSuccess)
```

Now if we want to retrieve ratings of the feedbacks send through 2 surveys filtered by 2 segments with values with those given ones :
<ul>
  <li>surveys :<code>ef053beb-8dbb-4cc1-88dd-4ea4fbfc236e</code> and<code>515d627e-1dd4-41ca-ba12-41b2db5268a5</code></li>
  <li>
    segments :
    <ul>
      <li><code>ProductName</code> :<code>Sonline 10pcs 20mm</code></li>
      <li><code>color</code> :<code>silver</code></li>
    </ul>
  </li>
</ul>
<aside class="notice">
  <ul>
    <li>You need to be authenticated to retrieve data from this endpoint</li>
    <li>Do not forget to use Arrays as <code>surveys</code> and <code>named_segments</code> values</li>
  </ul>
</aside>

## Test it

Once you have dynamicly (or not) generated these scripts and retrieved related datas, you should test your scripts content to check if its content is valid.
You can perform this easily : <br>
- go to <a href="https://search.google.com/structured-data/testing-tool/u/0/" target='_blank'>this google page</a>.<br>
- choose `code block`![google_star_test](google_star/test.png)<br>
- paste all your html product(s) page and click on `test`<br>
- you should see something like that : ![google_star_test_1](google_star/test_1.png)<br>

It should't shows any error and you should see an aggregate rating corresponding to the average of your filtered feedbacks.

## Notify Google something changed !

Once in production, you should notice Google that something changed on your website and it should crawl your data to update google search results related to your product(s) pages.
update your sitemaps and :

To achieve that go to <a href="https://www.google.com/webmasters/tools/home" target="_blank">google webtool</a><br>
Then go to the `crawl` folder, in `Sitemaps` section ![webtool1](google_star/webtool_1.png)<br>
Finaly, click on `add/test` sitemaps and click on submit. ![webtool2](google_star/webtool_2.png)<br>



<!-- ## Google Star Concrete Example -->