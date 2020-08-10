# mockify

Generate simple yet flexible REST API with minimal effort.

## installation

```npm i fake-till-make```

## usage

### create resource

```fake-till-make resource <resource name> <data amount>```

### run server

```fake-till-make start <port>```

### example resource model

Every resource model requires to have <b>model</b> and <b>dataAmount</b>.

```$xslt
{
  "model": {
    "exampleField": "string",
    "name": "string",
    "contacts": [{
      "id": "number",
      "name": "string"
    }]
  },
  "dataAmount": 2
}
```

| Field         | Description   |
| ------------- |:-------------:|
| model         | resource object structure |
| dataAmount    | the amount of data should be generated |
