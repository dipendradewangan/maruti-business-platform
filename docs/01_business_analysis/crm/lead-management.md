# Lead Management — Business Requirement Document

## 1. Overview

Lead Management is the first stage of the CRM module of the Maruti Business Platform.

A lead represents a potential customer who has shown interest in the company's solar products or services but has not yet been converted into a customer.

The Lead Management module will manage the complete journey of a potential customer from lead creation through follow-ups and finally lead conversion.

---

## 2. Objective

The objective of Lead Management is to:

- Capture potential customers.
- Maintain lead information.
- Track the current status of each lead.
- Maintain follow-up history.
- Track future follow-ups.
- Qualify potential customers.
- Convert qualified leads into customers.
- Preserve lead history after conversion.

---

## 3. Lead Lifecycle

The basic lead lifecycle is:

Potential Customer
        ↓
    Create Lead
        ↓
       NEW
        ↓
    CONTACTED
        ↓
    INTERESTED
        ↓
    QUALIFIED
        ↓
   Follow-up(s)
        ↓
    CONVERTED
        ↓
     CUSTOMER

A lead can also become:

NOT INTERESTED

when the potential customer is no longer interested.

A lead may also remain in:

FOLLOW-UP

when the customer requires future follow-up before making a decision.

---

# 4. Lead Creation

## 4.1 Purpose

The system must allow the company to create a new lead when a potential customer contacts the company or is identified through another source.

## 4.2 Initial Lead Information

The initial lead information will include:

- Lead Name
- Mobile Number
- Location
- Lead Source
- Solar Requirement

## 4.3 Lead Source

The lead source identifies how the potential customer reached the company.

Initial lead source options:

- Website
- Phone Call
- WhatsApp
- Referral
- Field Visit
- Advertisement
- Walk-in
- Other

The final list may be configurable in the future if required.

---

# 5. Lead Status

The system must maintain the current status of every lead.

## 5.1 Initial Statuses

The following statuses have been defined:

### NEW

The lead has been newly created and has not yet been contacted.

### CONTACTED

The company has contacted the lead.

### INTERESTED

The potential customer has shown interest in the solar requirement.

### QUALIFIED

The lead has been identified as a genuine/qualified potential customer.

### FOLLOW-UP

The customer requires further communication or a future follow-up.

### NOT INTERESTED

The customer is not interested in proceeding.

### CONVERTED

The lead has been converted into a customer.

---

# 6. Lead Follow-up

## 6.1 Purpose

The system must allow the company to maintain follow-up activities for leads.

A single lead can have multiple follow-ups.

Example:

Lead
 ├── Follow-up #1
 ├── Follow-up #2
 ├── Follow-up #3
 └── Follow-up #4

## 6.2 Follow-up Information

A follow-up may contain:

- Follow-up Date
- Follow-up Type
- Discussion / Remarks
- Next Follow-up Date
- Follow-up Status

## 6.3 Follow-up Type

Initial follow-up types:

- Call
- Visit
- WhatsApp
- Other

The final list may be configurable in the future if required.

## 6.4 Follow-up History

The system must preserve the history of previous follow-ups.

The user should be able to understand:

- When the lead was contacted.
- What type of communication occurred.
- What was discussed.
- When the next follow-up is planned.

---

# 7. Lead Qualification (To Be Finalized)

A lead can move through the CRM lifecycle until it becomes a qualified potential customer.

Basic flow:

NEW
 ↓
CONTACTED
 ↓
INTERESTED
 ↓
QUALIFIED

The exact business rules for qualification will be finalized based on future client feedback.

---

# 8. Lead Conversion

## 8.1 Purpose

When a qualified lead is ready to proceed with the company's solar project process, the lead can be converted into a customer.

Flow:

Lead
 ↓
Qualified
 ↓
Convert Lead
 ↓
Customer

## 8.2 Conversion Rules

- A qualified lead can be converted into a customer.
- Lead history must not be deleted after conversion.
- Previous follow-up history must remain available.
- Lead creation information must remain available.
- Conversion information should be associated with the resulting customer.

## 8.3 After Conversion

After conversion:

Lead
  ↓
Customer
  ↓
Solar Project

The customer's solar project will subsequently follow the defined project workflow from:

Level 1 — Document Collection & Verification

through

Level 11 — Subsidy Redemption.

---

# 9. Lead History

Lead history must be preserved throughout the lifecycle.

The system should retain the lead's:

- Original lead information
- Lead source
- Status history
- Follow-up history
- Conversion information

This ensures that the company can understand the complete journey of a lead even after conversion.

---

# 10. Lead Management Scope

The current Lead Management module contains the following functional areas:

1. Lead Creation
2. Lead Status
3. Lead Follow-up
4. Lead Qualification
5. Lead Conversion
6. Lead History

---

# 11. Current Scope Boundary

The following modules are NOT part of the current Lead Management implementation:

- Customer Management
- Solar Project Management
- Document Management
- Government Registration
- Banking Approval
- Installments
- Product Purchase
- Installation
- Completion Report
- Verification
- Meter Installation
- Subsidy Redemption
- Maintenance

These will be handled separately according to the overall Maruti Business Platform roadmap.

---

# 12. Future CRM Flow

The overall CRM direction is:

Lead
 ↓
Customer
 ↓
Solar Project
 ↓
Level 1
 ↓
Level 2
 ↓
Level 3
 ↓
Level 4
 ↓
Level 5
 ↓
Level 6
 ↓
Level 7
 ↓
Level 8
 ↓
Level 9
 ↓
Level 10
 ↓
Level 11
 ↓
Project Completed

Maintenance is intentionally outside the current implementation scope and will be planned separately later.

---

# 13. Documentation Status

**Module:** CRM — Lead Management

**Requirement Status:** Initial Requirement Finalized

**Current Stage:** Documentation → Database Design → Backend → Frontend → Testing

**Next Development Step:** Database Design for Lead Management