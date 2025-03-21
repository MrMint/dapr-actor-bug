# dapr-actor-bug

To install dependencies:

```bash
bun install
```

To run:

```bash
dapr run --log-as-json -f .
```

```
Logs observed:
== APP - client == 2025-03-21T17:47:10.173Z INFO [HTTPServer, Actors] Initializing Actors
== APP - client == 2025-03-21T17:47:10.177Z INFO [HTTPServer, HTTPServer] Listening on 3000
== APP - client == 2025-03-21T17:47:10.177Z INFO [HTTPServer, HTTPServer] Registering 0 PubSub Subscriptions
== APP - client == 2025-03-21T17:47:10.187Z INFO [HTTPClient, HTTPClient] Sidecar Started
== APP - client == Starting up
== APP - client == Calling bar
== APP - client == 2025-03-21T17:47:10.189Z INFO [HTTPClient, HTTPClient] Sidecar Started
== APP - actors == Called bar
== APP - client == Calling error
== APP - actors == Called error 0
== APP - actors == Called error 1
== APP - actors == Called error 2
== APP - actors == Called error 3
== APP - actors == Called error 4
== APP - actors == Called error 5
== APP - client == Error encountered.
== APP - client == Completed
```

```
logs expected:
== APP - client == 2025-03-21T17:47:10.173Z INFO [HTTPServer, Actors] Initializing Actors
== APP - client == 2025-03-21T17:47:10.177Z INFO [HTTPServer, HTTPServer] Listening on 3000
== APP - client == 2025-03-21T17:47:10.177Z INFO [HTTPServer, HTTPServer] Registering 0 PubSub Subscriptions
== APP - client == 2025-03-21T17:47:10.187Z INFO [HTTPClient, HTTPClient] Sidecar Started
== APP - client == Starting up
== APP - client == Calling bar
== APP - client == 2025-03-21T17:47:10.189Z INFO [HTTPClient, HTTPClient] Sidecar Started
== APP - actors == Called bar
== APP - client == Calling error
== APP - actors == Called error 0
== APP - client == Error encountered.
== APP - client == Completed
```
