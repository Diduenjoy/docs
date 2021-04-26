# API V1 Reference

### Optional parameters for pagination (filters)

To handle pagination, you can pass a JSON body to your request with this format :

```json
{
    "page": {
        "size": "25",
        "number": "1"
    }
}
```

parameter          | description
------------- | -------------
size | number of returned items per page <br>*default: 25*
number | page number <br>*default: 1*