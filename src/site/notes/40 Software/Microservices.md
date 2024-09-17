---
{"dg-publish":true,"created":"2024-08-29","modified":"2024-09-13","permalink":"/40-software/microservices/","dgPassFrontmatter":true,"updated":"2024-09-13"}
---


- Monolithic Architecture: where the UI, business logic, and data layer are all deployed as a single unit.
    - Pros:
    - Cons:
- Service-oriented Architecture (SOA):
    - Pros:
    - Cons:
- Microservices Architecture:
- Domain Driven Design: categorizing your application by logical components rather than data entities.
    - Ex. A school's domains could be
        - Finance domain: treats students as entities with status and tuition attributes
        - Teacher domain: treats students as entities with grades and assignments attributes
    - Instead of trying to model a "student" entity for the entire school application.
- Synchronous communication: Service A needs something from service B, but has to wait until B responds to continue executing.
- Asynchronous communication: Service A requests from Service B, and is able to keep executing while B send back the data.
    - This requires an "event bus" that uses the pub/sub pattern.
        - Service A would subscribe to the bus and B would publish to the bus.
        - The bus is responsible for managing all the messages to all services that pub/sub to it.
