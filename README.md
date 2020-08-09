# mockify

Generate simple yet flexible REST API with minimal effort.

# usage

## create resource

```npm run resource <resource name>```

## example resource model

Every resource model requires to have <b>model</b> and <b>dataAmount</b>.

```$xslt
{
  "model": {
    "exampleField": "just a string",
    "name": "Matt",
    "contacts": [{
      "id": "123",
      "name": "Josh"
    }]
  },
  "dataAmount": 2
}
```
