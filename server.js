const http = require("http");
const fs = require("fs");
const path = require("path");

const rootDir = process.cwd();
const host = "127.0.0.1";
const basePort = Number(process.env.PORT || 4173);
const maxPortAttempts = 20;

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".webp": "image/webp"
};

function safeResolvePath(urlPathname) {
  const decodedPath = decodeURIComponent(urlPathname.split("?")[0]);
  const normalizedPath = path.normalize(decodedPath).replace(/^(\.\.[/\\])+/, "");
  const candidatePath = path.join(rootDir, normalizedPath);
  const relativePath = path.relative(rootDir, candidatePath);

  if (relativePath.startsWith("..") || path.isAbsolute(relativePath)) {
    return null;
  }

  return candidatePath;
}

function sendFile(filePath, response) {
  fs.readFile(filePath, (error, buffer) => {
    if (error) {
      response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("Internal Server Error");
      return;
    }

    const extension = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[extension] || "application/octet-stream";
    response.writeHead(200, { "Content-Type": contentType });
    response.end(buffer);
  });
}

function createRequestHandler() {
  return (request, response) => {
    const requestPath = new URL(request.url, `http://${request.headers.host}`).pathname;
    const resolvedPath = safeResolvePath(requestPath);

    if (!resolvedPath) {
      response.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("Forbidden");
      return;
    }

    fs.stat(resolvedPath, (statError, stats) => {
      if (!statError && stats.isFile()) {
        sendFile(resolvedPath, response);
        return;
      }

      if (!statError && stats.isDirectory()) {
        const indexPath = path.join(resolvedPath, "index.html");
        fs.stat(indexPath, (indexError, indexStats) => {
          if (!indexError && indexStats.isFile()) {
            sendFile(indexPath, response);
            return;
          }

          sendFile(path.join(rootDir, "index.html"), response);
        });
        return;
      }

      sendFile(path.join(rootDir, "index.html"), response);
    });
  };
}

function startServer(portAttempt = 0) {
  const port = basePort + portAttempt;
  const server = http.createServer(createRequestHandler());

  server.on("error", (error) => {
    if (error.code === "EADDRINUSE" && portAttempt < maxPortAttempts) {
      startServer(portAttempt + 1);
      return;
    }

    console.error(error);
    process.exit(1);
  });

  server.listen(port, host, () => {
    console.log(`Local site server running at http://${host}:${port}`);
  });
}

startServer();
