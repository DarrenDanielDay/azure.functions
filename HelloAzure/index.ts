import { AzureFunction, Context, HttpRequest } from "@azure/functions"
let count = 0;
const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Hello, " + name + ". This HTTP triggered function executed successfully."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    context.res = {
        headers: {
            "content-type": "text/html"
        },
        body: `
<!DOCTYPE html>
<head>
  <link rel="icon" type="image/x-icon" href="https://portal.azure.com/Content/favicon.ico">
  <title>Hello Azure</title>
</head>
<html>
  <h1>Hello, <span style="color: #0078d4">Azure</span> <span style="color: #feaf18">Functions</span>!</h1>
  <p>This function has been executed <span style="color: #773adc">${++count}</span> times since started.</p>
  <p>This count will be reset when the module has been reloaded.</p>
</html>
`
    };

};

export default httpTrigger;