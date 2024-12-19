# Node.js Server Unexpected Termination and Resource Leak

This repository demonstrates a subtle bug in a Node.js HTTP server where unexpected termination (e.g., via Ctrl+C) before proper event handling can cause resource leaks or incomplete operations.  The issue is particularly challenging to debug because it often only manifests in production after extended uptime.

## Problem

The provided `server.js` demonstrates a basic HTTP server.  The problem lies in the lack of robust handling for server termination. If the server is forcefully stopped before completing pending requests or cleaning up resources, it can lead to resource leaks (e.g., open sockets) or incomplete operations. 

## Solution

The `serverSolution.js` provides a corrected version that addresses the issue by implementing proper event handling.  Specifically, it uses the `'SIGINT'` and `'SIGTERM'` events to gracefully shut down the server. This ensures that pending requests are handled or canceled appropriately, and that resources are released before exiting.