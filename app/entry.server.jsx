import { RemixServer } from "@remix-run/react";
import * as ReactDOMServer from "react-dom/server";
import * as isbotModule from "isbot";

export default async function handleRequest(
  request,
  responseStatusCode,
  responseHeaders,
  remixContext,
  loadContext
) {
  const { renderToReadableStream } = ReactDOMServer;
  const body = await renderToReadableStream(
    <RemixServer context={remixContext} url={request.url} />,
    {
      onError(error) {
        console.error(error);
        responseStatusCode = 500;
      },
    }
  );

  const userAgent = request.headers.get("user-agent");
  const isBot =
    ("isbot" in isbotModule && typeof isbotModule.isbot === "function" && isbotModule.isbot(userAgent)) ||
    ("default" in isbotModule && typeof isbotModule.default === "function" && isbotModule.default(userAgent));

  if (isBot) {
    await body.allReady;
  }

  responseHeaders.set("Content-Type", "text/html");
  return new Response(body, {
    headers: responseHeaders,
    status: responseStatusCode,
  });
}
