# Analiz generic module template
Generic template for creating a module for the application Analiz

## Documentation
### config : _Object_
The config property is an object with the following values.

#### config.name : _String_
The module name that will be display in Analiz

#### config.category : _String_
The module category. Choose one of the following :
- html
- css
- js
- medias
- accessibility
- misc

#### config.fileTypes : _Array_
List of the files the module will analize

```
fileTypes: [
  '.html',
  '.php'
]
```

#### config.options :  _Array_
Options the module allows for the user.

_TODO : See if there is another type of value than Boolean_

```
options: [
  isHtml5: true,
  lower-attribute: true
]
```

### run
The _run()_ function has to return an array of objects.

#### Example

```
[
  {
    type: 'file-list',
    data: [
      ErrorObject1,
      ErrorObject2,
      ErrorObject3
    ]
  },
  {
    type: 'one-file',
    data: ErrorObject4
  }
]
```

#### type
The data type available are
- _file-list_
- _one-file_

#### Error object
An error object with this structure :

```
{
  file: 'path/to/the/file.ext',
  type: 'notification/warning/error',
  message: 'error message for the user',
  line: (optional)
}
```
