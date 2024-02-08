---
sidebar_position: 10
---

# Project Collaboration

:::info
The collaboration feature allows project owners to invite collaborators to
work on their projects.
:::

## Roles

Collaborators can have two roles: "collaborator" or "admin."

### Collaborator

- on production environment
  - can't do any edit/deployment
  - can only view logs
- on other environments
  - can deploy and add new classes
  - can use the test interface
  - can see the integrations, but can't add new ones
  - can't add new environments

### Admin

Full access without permission to delete the project.

### Owner

Full access to the project. The owner can't be changed to another user.

## Invite / Manage Collaborators

To manage the collaborators, you should go to the project and then click on the **Collaboration** button.

<figure style={{textAlign:"center", marginLeft:"0"}}><img src="/img/Screenshot 2023-12-13 at 13.05.38.png" alt=""/><figcaption></figcaption></figure>

After you add a new collaborator/admin, they will receive an email with the invitation.
