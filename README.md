# CLI Runner

## How To Run

To run, first add a Builds.json file

The default file location is ```C:/dev/MI_Project/Deployment/Builds.json``` (altereable in the ```Runner\Loadconfig.js``` file).
The file should look like:

```
{
    "App1": {
        "text": "App1",
        "value": "off",
        "startCmd": "C:/users/default/desktop/test.bat",
        "console":""
    },
    "App2": {
        "text": "App2",
        "value": "off",
        "startCmd": "dotnet build .",
        "console":""
    },
}
```

Next either run ```npm start``` to start the app or ```npm run installer``` to install it
