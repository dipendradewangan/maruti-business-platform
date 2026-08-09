# Customer Requirements

## Document Purpose

This document captures the initial business requirements provided by the client for managing the solar customer project lifecycle.

The current business process is largely manual. The proposed system will help the organization manage customers, documents, approvals, financial stages, products, installation, verification, reports, and project completion in a structured manner.

This document represents the initial requirement understanding and will be updated as new requirements are identified.

---

## Business Overview

The client is a newly established solar business.

The current customer and project management process is handled manually.

The proposed application will provide a centralized system to track each customer's solar project from initial document submission through project completion.

The system should allow the business team to know:

- What stage each customer is currently in.
- What work has been completed.
- What work is pending.
- Which documents are required.
- Which documents have been verified.
- Which government or banking process is pending.
- Which installment has been received.
- Whether the product has been purchased and verified.
- Whether installation has been completed.
- Whether completion reports have been submitted.
- Whether verification is completed.
- Whether the project has been completed.

---

# Current System Scope

## Phase 1 - Workflow Management

The initial version of the application will focus on internal business process management and project status tracking.

The application will not directly integrate with government portals, banks, CSPDCL, or other external systems in the initial phase.

Employees will manually perform the required activities through the existing business process and update the activity status in the application using their own user account.

## Employee Activity Updates

Whenever an employee performs an activity for a customer/project, the employee should update the relevant activity in the system.

The system should record:

- Customer/project.
- Current level/stage.
- Activity performed.
- Status.
- Remarks.
- Updated by employee.
- Date.
- Time.

## Activity History

The system should maintain an activity history for each customer/project.

Example:

```text
Customer: Example Customer

Level: 3 - Banking Approval

Activity: Bank Approval Follow-up
Status: Completed
Updated By: Employee Name
Date: 09-Aug-2026
Time: 04:35 PM
Remarks: Bank approval completed.
```

---

# Customer Solar Project Lifecycle

The customer project currently follows the following major levels:

```text
Customer
   ↓
Level 1 - Document Collection & Verification
   ↓
Level 2 - Government Registration & OTP
   ↓
Level 3 - Banking Approval
   ↓
Level 4 - First Installment
   ↓
Level 5 - Product Purchase & Verification
   ↓
Level 6 - Installation
   ↓
Level 7 - Completion Report Submission
   ↓
Level 8 - Verification
   ↓
Level 9 - Second Installment Release
   ↓
Level 10 - Meter Installation
   ↓
Level 11 - Subsidy Redemption
   ↓
Project Completed
   ↓
Maintenance
```
