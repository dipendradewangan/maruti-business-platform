# CRM Overview

> **Project:** Maruti Business Platform  
> **Module:** Customer Relationship Management (CRM)  
> **Document Type:** Business Analysis  
> **Version:** 1.0  
> **Status:** Active

---

## 1. Purpose

The CRM (Customer Relationship Management) module is responsible for managing customer leads and their interactions throughout the sales process.

The primary purpose of the CRM module is to provide a centralized system for managing:

- Customer enquiries
- Leads
- Branch-wise lead records
- Customer requirements
- Lead sources
- Lead status
- Follow-ups
- Customer communication history

The CRM will replace manual lead tracking with a structured and centralized digital workflow.

---

## 2. Business Objective

The CRM module aims to provide a clear and organized process for managing customer enquiries from the initial enquiry until the final outcome.

The system should help the business to:

- Maintain all lead information in one place.
- Track leads branch-wise.
- Track the current status of every lead.
- Record customer requirements.
- Maintain follow-up information.
- Record discussions and customer interactions.
- Schedule future follow-ups.
- Track whether a lead is progressing, won, or lost.
- Provide a foundation for future sales and customer management modules.

---

## 3. CRM High-Level Flow

The basic CRM process is:

```text
Customer Enquiry
       ↓
   Lead Created
       ↓
   Lead Contacted
       ↓
    Follow-up
       ↓
    Qualified
       ↓
    Proposal
       ↓
   Negotiation
       ↓
   ┌───────┴───────┐
   ↓               ↓
  WON             LOST
```

---

## 4. Lead Management

Lead Management is the core component of the CRM module.

It is responsible for managing the complete basic information and current status of potential customers from the time a lead is created until its final outcome.

The Lead Management module will provide functionality to:

- Create a new lead
- View all leads
- View individual lead details
- View leads branch-wise
- Update lead information
- Update lead status
- Delete a lead
- Associate a lead with a requirement type
- Store the source from which the lead was received
- Store customer address and contact information
- Maintain remarks related to the lead

Each lead belongs to one specific branch.

```text
Branch
   ↓
Lead

```

---

## 5. Lead Information

A Lead represents a potential customer or business opportunity managed through the CRM system.

Each lead stores the basic customer, requirement, source, status, and address-related information required for managing the lead throughout the CRM lifecycle.

### 5.1 Lead Data

The Lead record contains the following information:

| Field | Description |
|---|---|
| `id` | Unique identifier of the lead |
| `branch_id` | Branch associated with the lead |
| `lead_name` | Name of the customer or potential customer |
| `phone` | Customer contact number |
| `email` | Customer email address |
| `address` | Customer or site address |
| `city` | Customer/site city |
| `state` | Customer/site state |
| `pincode` | Customer/site postal code |
| `requirement_type_id` | Optional requirement type associated with the lead |
| `source` | Source through which the lead was received |
| `status` | Current stage of the lead |
| `remarks` | Additional information related to the lead |
| `created_at` | Date and time when the lead was created |
| `updated_at` | Date and time when the lead was last updated |

### 5.2 Lead Branch

Every lead must be associated with a branch.

```text
master_branches
       ↓
     leads
```

---


## 6. Lead Status

Lead Status represents the current stage of a lead in the CRM process.

The system currently supports the following statuses:

| Status | Meaning |
|---|---|
| `NEW` | Newly created lead |
| `CONTACTED` | Customer has been contacted |
| `FOLLOW_UP` | Further customer interaction is required |
| `QUALIFIED` | Lead has been identified as a valid business opportunity |
| `PROPOSAL` | Proposal/quotation stage |
| `NEGOTIATION` | Commercial or requirement discussion is in progress |
| `WON` | Lead converted into a successful business opportunity |
| `LOST` | Lead did not proceed |

### High-Level Status Flow

```text
NEW
 ↓
CONTACTED
 ↓
FOLLOW_UP
 ↓
QUALIFIED
 ↓
PROPOSAL
 ↓
NEGOTIATION
 ↓
WON
```

---

## 7. Follow-up Management

Follow-up Management is used to record and manage customer interactions related to a lead.

A lead can have multiple follow-ups during its lifecycle.

```text
Lead
  ↓
Follow-up
  ↓
Next Follow-up
  ↓
Customer Interaction
```

---


## 8. Multi-Branch CRM

The CRM is designed to support multiple business branches within the Maruti Business Platform.

Each lead is associated with one specific branch. This allows the business to manage and view leads according to their respective branches.

### Branch and Lead Relationship

```text
Company
   |
   +── Branch 1
   |     ├── Lead
   |     └── Lead
   |
   +── Branch 2
   |     ├── Lead
   |     └── Lead
   |
   +── Branch 3
         ├── Lead
         └── Lead
```

---

## 9. CRM Architecture

The CRM follows a layered application architecture to keep the frontend, API handling, business logic, and database operations properly separated.

### High-Level Architecture

```text
Frontend
   ↓
REST API
   ↓
Routes
   ↓
Controllers
   ↓
Services
   ↓
MySQL Database
```

---

## 10. CRM Data Relationship

The CRM is built around a simple relationship between branches, leads, requirement types, and follow-ups.

### Core Relationship

```text
master_branches
       |
       ↓
     leads
       |
       ↓
lead_followups
```

### Requirement Type Relationship
```text
master_requirement_types
          |
          ↓
        leads
```

---
## 11. CRM Initial Scope

The initial CRM implementation focuses on managing customer leads and their follow-up activities.

The initial scope includes:

- Lead creation and management
- Lead information management
- Branch-wise lead management
- Requirement type association
- Lead status management
- Lead follow-up management
- Follow-up status tracking
- Basic lead and follow-up operations

The initial CRM scope provides the foundation for managing customer opportunities digitally.

Advanced features such as authentication, authorization, lead assignment, notifications, reporting, analytics, and sales pipeline management will be introduced in later development phases.

---
## 12. Future Scope

The CRM will be extended in future phases as the business requirements evolve.

Potential future functionality includes:

- Lead assignment to employees.
- Lead ownership and responsibility tracking.
- Role-based and branch-based access control.
- Lead activity and interaction history.
- Customer conversion.
- Proposal and quotation management.
- Sales pipeline management.
- Follow-up reminders and notifications.
- CRM dashboard.
- Reports and analytics.
- Audit history.

---

## 13. Related Documentation

The CRM documentation is organized into separate areas so that business requirements, technical implementation, APIs, database design, testing, and deployment information can be maintained independently.

```text
docs/
│
├── 01_Business_Analysis/
│   └── CRM/
│       └── 01_crm-overview.md
│
├── 02_Project_Management/
│   └── CRM/
│
├── 03_Frontend/
│   └── CRM/
│
├── 04_Backend/
│   └── CRM/
│
├── 05_Database/
│   └── CRM/
│
├── 06_API/
│   └── CRM/
│
├── 07_DevOps/
│   └── CRM/
│
└── 08_Testing/
    └── CRM/
```
## 14. Document Change History

| Version | Date | Description |
|---|---|---|
| 1.0 | 2026-09-18 | Initial CRM overview documentation created |



